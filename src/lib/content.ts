import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const guidesDirectory = path.join(process.cwd(), 'src/content/guides');
const floridaDirectory = path.join(process.cwd(), 'src/content/states/florida');

export interface GuideMeta {
  slug: string;
  title: string;
  meta_description: string;
  target_keyword: string;
  reading_time: string;
  word_count: number;
  last_updated?: string;
  category: 'life' | 'medicare' | 'annuity' | 'health' | 'state';
}

export interface Guide extends GuideMeta {
  content: string;
}

function categorizeGuide(slug: string, title: string): GuideMeta['category'] {
  const text = `${slug} ${title}`.toLowerCase();
  if (text.includes('medicare') || text.includes('medigap')) return 'medicare';
  if (text.includes('annuit')) return 'annuity';
  if (text.includes('health insurance')) return 'health';
  if (text.includes('life insurance') || text.includes('iul') || text.includes('term life') || text.includes('whole life') || text.includes('universal life')) return 'life';
  return 'life';
}

function extractInlineMeta(content: string): { title: string; meta_description: string } {
  const lines = content.split('\n');
  let title = '';
  let meta_description = '';

  for (const line of lines) {
    if (!title && line.startsWith('# ')) {
      title = line.replace(/^#\s+/, '').trim();
    }
    if (!meta_description && line.startsWith('**Meta description:**')) {
      meta_description = line.replace(/^\*\*Meta description:\*\*\s*/, '').trim();
    }
    if (title && meta_description) break;
  }

  return { title, meta_description };
}

function parseGuideFile(filePath: string, slug: string, defaultCategory: GuideMeta['category'] = 'life'): Guide {
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const stats = readingTime(content);

  let title = data.title || '';
  let meta_description = data.meta_description || '';
  const target_keyword = data.target_keyword || '';

  if (!title || !meta_description) {
    const inline = extractInlineMeta(fileContents);
    if (!title) title = inline.title;
    if (!meta_description) meta_description = inline.meta_description;
  }

  const category = defaultCategory === 'state' ? 'state' : categorizeGuide(slug, title);

  return {
    slug,
    title,
    meta_description,
    target_keyword: target_keyword || slug.replace(/-/g, ' '),
    reading_time: stats.text,
    word_count: data.word_count || stats.words,
    last_updated: data.last_updated || '2026-05-06',
    category,
    content,
  };
}

function getGuidesFromDirectory(directory: string, defaultCategory: GuideMeta['category'] = 'life'): Guide[] {
  if (!fs.existsSync(directory)) return [];
  const fileNames = fs.readdirSync(directory).filter((f) => f.endsWith('.md'));
  return fileNames
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const filePath = path.join(directory, fileName);
      return parseGuideFile(filePath, slug, defaultCategory);
    })
    .sort((a, b) => a.title.localeCompare(b.title));
}

export function getAllGuides(): GuideMeta[] {
  return getGuidesFromDirectory(guidesDirectory).map(({ content, ...meta }) => meta);
}

export function getGuideBySlug(slug: string): Guide | null {
  const filePath = path.join(guidesDirectory, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  return parseGuideFile(filePath, slug);
}

export function getAllFloridaGuides(): GuideMeta[] {
  return getGuidesFromDirectory(floridaDirectory, 'state').map(({ content, ...meta }) => meta);
}

export function getFloridaGuideBySlug(slug: string): Guide | null {
  const filePath = path.join(floridaDirectory, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  return parseGuideFile(filePath, slug, 'state');
}

export function getAllGuideSlugs(): string[] {
  if (!fs.existsSync(guidesDirectory)) return [];
  return fs.readdirSync(guidesDirectory)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
}

export function getAllFloridaSlugs(): string[] {
  if (!fs.existsSync(floridaDirectory)) return [];
  return fs.readdirSync(floridaDirectory)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
}
