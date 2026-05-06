import { getAllFloridaGuides } from '@/lib/content';
import GuideCard from '@/components/GuideCard';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Florida Insurance Guides',
  description: 'State-specific insurance guides for Florida covering life insurance, health insurance, and Medicare supplement plans.',
};

export default function FloridaPage() {
  const guides = getAllFloridaGuides();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-indigo-600">Home</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-900">Florida</span>
      </nav>

      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-4xl">🌴</span>
          <h1 className="text-4xl font-bold text-gray-900">Florida Insurance Guides</h1>
        </div>
        <p className="text-lg text-gray-600 max-w-3xl">
          Insurance guides specific to Florida — covering state regulations, top carriers, costs, and coverage options for Sunshine State residents.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {guides.map((guide) => (
          <GuideCard key={guide.slug} guide={guide} basePath="/states/florida" />
        ))}
      </div>
    </div>
  );
}
