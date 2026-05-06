import { getAllGuides } from '@/lib/content';
import GuidesList from '@/components/GuidesList';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insurance Guides & Resources',
  description: 'Comprehensive, unbiased guides covering life insurance, Medicare, health insurance, and annuities.',
};

export default function GuidesPage() {
  const guides = getAllGuides();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-6">
        <a href="/" className="hover:text-indigo-600">Home</a>
        <span className="mx-2">›</span>
        <span className="text-gray-900">Guides</span>
      </nav>

      <div className="mb-10">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Insurance Guides &amp; Resources</h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Comprehensive, unbiased guides covering life insurance, Medicare, health insurance, and annuities. Everything you need to make informed decisions.
        </p>
      </div>

      <GuidesList guides={guides} />
    </div>
  );
}
