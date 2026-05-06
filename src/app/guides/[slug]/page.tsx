import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { getAllGuideSlugs, getGuideBySlug, getAllGuides } from '@/lib/content';
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

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const allGuides = getAllGuides();
  const related = allGuides
    .filter((g) => g.slug !== slug && g.category === guide.category)
    .slice(0, 3);

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
      { '@type': 'ListItem', position: 2, name: 'Guides', item: 'https://yourpolicypath.com/guides' },
      { '@type': 'ListItem', position: 3, name: guide.title },
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
          <Link href="/guides" className="hover:text-indigo-600">Guides</Link>
          <span className="mx-2">›</span>
          <span className="text-gray-900 line-clamp-1">{guide.title}</span>
        </nav>

        {/* Author Box */}
        <div className="max-w-4xl mb-8">
          <div className="bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-4">
            <div className="flex items-center gap-3">
              <Image src="/logo.png" alt="Your Policy Path" width={40} height={40} className="rounded-lg" />
              <div>
                <p className="font-semibold text-gray-900 text-sm">Your Policy Path Editorial Team</p>
                <p className="text-xs text-gray-500">Licensed Insurance Professionals</p>
              </div>
            </div>
            <div className="sm:ml-auto flex flex-wrap items-center gap-3 text-xs text-gray-500">
              <span className="flex items-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Updated {guide.last_updated || 'May 6, 2026'}
              </span>
              <span className="credibility-badge">Fact-Checked</span>
            </div>
          </div>
        </div>

        {/* Header */}
        <header className="max-w-4xl mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            {guide.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span>By Your Policy Path Editorial Team</span>
            <span className="hidden sm:inline">•</span>
            <span>{guide.reading_time}</span>
            <span className="hidden sm:inline">•</span>
            <span>Updated {guide.last_updated || 'May 2026'}</span>
          </div>
        </header>

        {/* Content + ToC Layout */}
        <div className="flex gap-12">
          {/* Main Content */}
          <div className="flex-1 min-w-0 max-w-4xl">
            <TableOfContents content={guide.content} />
            <div className="prose-custom">
              <MarkdownRenderer content={guide.content} />
            </div>

            {/* Disclaimer Box */}
            <div className="mt-12 p-5 bg-amber-50 border border-amber-200 rounded-xl">
              <div className="flex gap-3">
                <svg className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-amber-800 mb-1">Disclaimer</p>
                  <p className="text-sm text-amber-700 leading-relaxed">
                    This article is for educational purposes only and does not constitute insurance advice. Consult a licensed insurance professional for personalized recommendations.
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
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((g) => (
                <GuideCard key={g.slug} guide={g} basePath="/guides" />
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
