import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Your Policy Path is an independent insurance education resource helping consumers understand life insurance, health insurance, Medicare, and annuities.',
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-indigo-600">Home</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-900">About</span>
      </nav>

      <h1 className="text-4xl font-bold text-gray-900 mb-8">About Your Policy Path</h1>

      <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
        <p>
          Your Policy Path is an independent insurance education resource. We help consumers understand life insurance, health insurance, Medicare, and annuities through comprehensive, unbiased guides.
        </p>

        <p>
          Insurance can be confusing. Between the jargon, the fine print, and the pressure from salespeople, it&apos;s hard to know if you&apos;re making the right choice. That&apos;s why we created Your Policy Path — to give you the information you need, without the sales pitch.
        </p>

        <p>
          Every guide on our site is researched, fact-checked, and written to be as clear and helpful as possible. We don&apos;t sell insurance policies. We don&apos;t accept compensation from insurance companies for favorable reviews. Our only goal is to help you make smarter insurance decisions.
        </p>
      </div>

      {/* Values */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-indigo-50 rounded-xl p-6">
          <span className="text-3xl mb-3 block">⚖️</span>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Unbiased</h3>
          <p className="text-gray-600">
            We&apos;re not affiliated with any insurance company. Our recommendations are based purely on research and consumer benefit.
          </p>
        </div>

        <div className="bg-emerald-50 rounded-xl p-6">
          <span className="text-3xl mb-3 block">📚</span>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Educational</h3>
          <p className="text-gray-600">
            We break down complex insurance topics into clear, actionable guides that anyone can understand.
          </p>
        </div>

        <div className="bg-purple-50 rounded-xl p-6">
          <span className="text-3xl mb-3 block">🔄</span>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Up to Date</h3>
          <p className="text-gray-600">
            Insurance rules and rates change. We regularly update our guides to reflect the latest information.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-16 text-center p-10 bg-gray-50 rounded-2xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Learn More?</h2>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          Browse our library of free insurance guides and take the first step toward making smarter coverage decisions.
        </p>
        <Link
          href="/guides"
          className="inline-block px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Browse All Guides
        </Link>
      </div>
    </div>
  );
}
