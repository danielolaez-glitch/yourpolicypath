import { getAllGuides } from '@/lib/content';
import GuidesList from '@/components/GuidesList';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Insurance Guides & Resources',
  description: 'Comprehensive, unbiased guides covering life insurance, Medicare, health insurance, and annuities.',
};

const categoryDescriptions: Record<string, string> = {
  life: 'Explore our comprehensive guides on term life, whole life, universal life, and IUL insurance to find the right coverage for your family.',
  medicare: 'Understand Medicare Parts A through D, supplement plans, Medigap options, and Medicare Advantage plans.',
  health: 'Compare health insurance options including individual plans, employer coverage, and state-specific options.',
  annuity: 'Learn how annuities work for retirement planning — fixed, variable, and indexed annuity guides.',
};

export default function GuidesPage() {
  const guides = getAllGuides();

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {/* Breadcrumb */}
      <nav className="breadcrumb mb-6">
        <Link href="/">Home</Link>
        <span className="separator">›</span>
        <span className="current">Guides</span>
      </nav>

      <div className="mb-10">
        <h1 className="text-4xl font-bold text-[#1E3A5F] mb-4">Insurance Guides &amp; Resources</h1>
        <p className="text-lg text-[#64748B] max-w-3xl">
          Comprehensive, unbiased guides covering life insurance, Medicare, health insurance, and annuities. Everything you need to make informed decisions.
        </p>
      </div>

      {/* Category descriptions */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {Object.entries(categoryDescriptions).map(([key, desc]) => (
          <div key={key} className="bg-[#F8FAFC] border border-gray-100 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-[#1E3A5F] mb-1 capitalize">
              {key === 'life' ? 'Life Insurance' : key === 'medicare' ? 'Medicare' : key === 'health' ? 'Health Insurance' : 'Annuities'}
            </h3>
            <p className="text-xs text-[#64748B] leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      <GuidesList guides={guides} />
    </div>
  );
}
