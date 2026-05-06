import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllFloridaSlugs, getFloridaGuideBySlug, getAllFloridaGuides } from '@/lib/content';
import TableOfContents from '@/components/TableOfContents';
import GuideCard from '@/components/GuideCard';
import MarkdownRenderer from '@/components/MarkdownRenderer';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllFloridaSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getFloridaGuideBySlug(slug);
  if (!guide) return {};

  return {
    title: guide.title,
    description: guide.meta_description,
    keywords: guide.target_keyword,
    openGraph: {
      title: guide.title,
      description: guide.meta_description,
      type: 'article',
      url: `https://yourpolicypath.com/states/florida/${slug}`,
    },
  };
}

export default async function FloridaGuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getFloridaGuideBySlug(slug);
  if (!guide) notFound();

  const allGuides = getAllFloridaGuides();
  const related = allGuides.filter((g) => g.slug !== slug).slice(0, 3);

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.meta_description,
    author: { '@type': 'Organization', name: 'Your Policy Path' },
    publisher: { '@type': 'Organization', name: 'Your Policy Path' },
    datePublished: guide.last_updated || '2026-05-06',
    dateModified: guide.last_updated || '2026-05-06',
    mainEntityOfPage: `https://yourpolicypath.com/states/florida/${slug}`,
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://yourpolicypath.com' },
      { '@type': 'ListItem', position: 2, name: 'States', item: 'https://yourpolicypath.com/states/florida' },
      { '@type': 'ListItem', position: 3, name: 'Florida', item: 'https://yourpolicypath.com/states/florida' },
      { '@type': 'ListItem', position: 4, name: guide.title },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <article className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-indigo-600">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/states/florida" className="hover:text-indigo-600">Florida</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900 line-clamp-1">{guide.title}</span>
        </nav>

        {/* Header */}
        <header className="max-w-4xl mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            {guide.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span>By Your Policy Path Team</span>
            <span className="hidden sm:inline">•</span>
            <span>{guide.reading_time}</span>
            <span className="hidden sm:inline">•</span>
            <span>Updated {guide.last_updated || 'May 2026'}</span>
          </div>
        </header>

        {/* Content + ToC Layout */}
        <div className="flex gap-12">
          <div className="flex-1 min-w-0 max-w-4xl">
            <TableOfContents content={guide.content} />
            <div className="prose-custom">
              <MarkdownRenderer content={guide.content} />
            </div>
          </div>

          <aside className="hidden xl:block w-64 shrink-0">
            <TableOfContents content={guide.content} />
          </aside>
        </div>

        {/* Related Guides */}
        {related.length > 0 && (
          <section className="mt-16 pt-12 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">More Florida Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((g) => (
                <GuideCard key={g.slug} guide={g} basePath="/states/florida" />
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
