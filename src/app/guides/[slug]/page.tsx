import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { getAllGuideSlugs, getGuideBySlug, getAllGuides } from '@/lib/content';
import NewsletterForm from '@/components/NewsletterForm';
import TableOfContents from '@/components/TableOfContents';
import GuideCard from '@/components/GuideCard';
import MarkdownRenderer from '@/components/MarkdownRenderer';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllGuideSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};

  return {
    title: guide.title,
    description: guide.meta_description,
    keywords: guide.target_keyword,
    openGraph: {
      title: guide.title,
      description: guide.meta_description,
      type: 'article',
      url: `https://yourpolicypath.com/guides/${slug}`,
    },
  };
}

const categoryLabels: Record<string, string> = {
  life: 'Life Insurance',
  medicare: 'Medicare',
  health: 'Health Insurance',
  annuity: 'Annuities',
  state: 'State Guides',
};

function extractKeyTakeaways(content: string): string[] {
  const lines = content.split('\n');
  const takeaways: string[] = [];
  let inFirstSection = false;

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('## ') && !inFirstSection) {
      inFirstSection = true;
      continue;
    }
    if (trimmed.startsWith('## ') && inFirstSection) {
      break;
    }
    if (inFirstSection && (trimmed.startsWith('- ') || trimmed.startsWith('* '))) {
      const text = trimmed.replace(/^[-*]\s+/, '').replace(/\*\*/g, '');
      if (text.length > 15 && text.length < 200) {
        takeaways.push(text);
      }
    }
    if (takeaways.length >= 5) break;
  }

  if (takeaways.length < 3) {
    const paragraphs = content.split('\n\n')
      .map(p => p.trim())
      .filter(p => p.length > 40 && !p.startsWith('#') && !p.startsWith('|') && !p.startsWith('-') && !p.startsWith('*') && !p.startsWith('>'));
    
    for (const para of paragraphs.slice(0, 5)) {
      const clean = para.replace(/\*\*/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
      if (clean.length > 30 && clean.length < 160) {
        takeaways.push(clean.slice(0, 150) + (clean.length > 150 ? '...' : ''));
        if (takeaways.length >= 4) break;
      }
    }
  }

  return takeaways.slice(0, 5);
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const allGuides = getAllGuides();
  const related = allGuides
    .filter((g) => g.slug !== slug && g.category === guide.category)
    .slice(0, 3);

  const keyTakeaways = extractKeyTakeaways(guide.content);
  const categoryLabel = categoryLabels[guide.category] || 'Guides';

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.meta_description,
    author: { '@type': 'Organization', name: 'Your Policy Path' },
    publisher: { '@type': 'Organization', name: 'Your Policy Path' },
    datePublished: guide.last_updated || '2026-05-06',
    dateModified: guide.last_updated || '2026-05-06',
    mainEntityOfPage: `https://yourpolicypath.com/guides/${slug}`,
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://yourpolicypath.com' },
      { '@type': 'ListItem', position: 2, name: categoryLabel, item: 'https://yourpolicypath.com/guides' },
      { '@type': 'ListItem', position: 3, name: guide.title },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <article className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Breadcrumb */}
        <nav className="breadcrumb mb-8">
          <Link href="/">Home</Link>
          <span className="separator">›</span>
          <Link href="/guides">{categoryLabel}</Link>
          <span className="separator">›</span>
          <span className="current line-clamp-1">{guide.title}</span>
        </nav>

        {/* Author Box */}
        <div className="max-w-4xl mb-8">
          <div className="bg-[#F8FAFC] border border-gray-200 rounded-xl px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="Your Policy Path" width={44} height={44} className="rounded-lg" />
              <div>
                <p className="font-semibold text-[#0F172A] text-sm">Your Policy Path Editorial Team</p>
                <p className="text-xs text-[#64748B]">Licensed Insurance Professionals</p>
              </div>
            </div>
            <div className="sm:ml-auto flex flex-wrap items-center gap-3 text-xs text-[#64748B]">
              <span className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Updated {guide.last_updated || 'May 2026'}
              </span>
              <span className="credibility-badge">Fact-Checked</span>
            </div>
          </div>
        </div>

        {/* Header */}
        <header className="max-w-4xl mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-[#1E3A5F] leading-tight mb-4">
            {guide.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-[#64748B]">
            <span>By Your Policy Path Editorial Team</span>
            <span className="hidden sm:inline text-gray-300">•</span>
            <span>{guide.reading_time}</span>
            <span className="hidden sm:inline text-gray-300">•</span>
            <span>Updated {guide.last_updated || 'May 2026'}</span>
          </div>
        </header>

        {/* Key Takeaways Box */}
        {keyTakeaways.length > 0 && (
          <div className="max-w-4xl mb-10">
            <div className="key-takeaways">
              <h3>
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-[#1E3A5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Key Takeaways
                </span>
              </h3>
              <ul>
                {keyTakeaways.map((takeaway, idx) => (
                  <li key={idx}>{takeaway}</li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Content + ToC Layout */}
        <div className="flex gap-12">
          {/* Main Content */}
          <div className="flex-1 min-w-0 max-w-4xl">
            <TableOfContents content={guide.content} />
            <div className="prose-custom">
              <MarkdownRenderer content={guide.content} />
            </div>

            {/* Expert Insight Box */}
            <div className="expert-insight mt-8">
              <h4>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Expert Insight
              </h4>
              <p>
                When comparing insurance options, focus on your specific needs rather than just the premium cost. The cheapest policy isn&apos;t always the best value — consider coverage limits, exclusions, and the insurer&apos;s financial strength rating.
              </p>
            </div>

            {/* Disclaimer Box */}
            <div className="mt-10 p-5 bg-[#D4A853]/5 border border-[#D4A853]/20 rounded-xl">
              <div className="flex gap-3">
                <svg className="w-5 h-5 text-[#D4A853] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-[#1E3A5F] mb-1">Disclaimer</p>
                  <p className="text-sm text-[#334155] leading-relaxed">
                    This article is for educational purposes only and does not constitute insurance advice. Individual circumstances vary — consult a licensed insurance professional for personalized recommendations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop ToC Sidebar */}
          <aside className="hidden xl:block w-64 shrink-0">
            <TableOfContents content={guide.content} />
          </aside>
        </div>

        {/* Related Guides */}
        {related.length > 0 && (
          <section className="mt-16 pt-12 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-[#1E3A5F] mb-2">Dive Deeper</h2>
            <p className="text-[#64748B] mb-8">Continue exploring related insurance topics.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((g) => (
                <GuideCard key={g.slug} guide={g} basePath="/guides" />
              ))}
            </div>
          </section>
        )}

        {/* Newsletter CTA */}
        <section className="mt-16 pt-10 border-t border-gray-200">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Found this helpful?</h3>
            <p className="text-[#64748B] mb-6">Get weekly insurance insights delivered to your inbox.</p>
            <NewsletterForm className="mx-auto justify-center" />
          </div>
        </section>
      </article>
    </>
  );
}
