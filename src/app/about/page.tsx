import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Your Policy Path',
  description: 'Your Policy Path is an independent insurance education resource helping Americans make informed decisions about life insurance, health insurance, Medicare, and annuities.',
};

const values = [
  {
    title: 'Independence',
    description: 'We maintain strict editorial independence and never accept payment to recommend specific insurance products or companies.',
    icon: (
      <svg className="w-7 h-7 text-[#1E3A5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    title: 'Accuracy',
    description: 'Every guide is fact-checked by licensed insurance professionals and updated monthly to reflect current rates and regulations.',
    icon: (
      <svg className="w-7 h-7 text-[#1E3A5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Accessibility',
    description: 'We write in plain language so anyone can understand complex insurance concepts, regardless of their background.',
    icon: (
      <svg className="w-7 h-7 text-[#1E3A5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    title: 'Privacy',
    description: 'We never sell your personal information. Your trust is more important than any advertising revenue.',
    icon: (
      <svg className="w-7 h-7 text-[#1E3A5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Research',
    description: 'Our team researches each topic using industry sources, regulatory filings, carrier documentation, and expert interviews.',
  },
  {
    step: '02',
    title: 'Write',
    description: 'Licensed insurance professionals draft comprehensive guides in clear, accessible language anyone can understand.',
  },
  {
    step: '03',
    title: 'Review',
    description: 'Every guide undergoes a rigorous fact-checking process by independent licensed agents before publication.',
  },
  {
    step: '04',
    title: 'Update',
    description: 'We review and update all content monthly to ensure accuracy with current rates, rules, and regulations.',
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <nav className="breadcrumb mb-8">
            <Link href="/">Home</Link>
            <span className="separator">›</span>
            <span className="current">About</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1E3A5F] tracking-tight mb-6">
              About Your Policy Path
            </h1>
            <p className="text-xl text-[#334155] leading-relaxed">
              Your Policy Path is an independent insurance education resource dedicated to helping Americans make informed decisions about life insurance, health insurance, Medicare, and annuities.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#1E3A5F] mb-6">Our Mission</h2>
            <p className="text-lg text-[#334155] leading-relaxed mb-6">
              Insurance is one of the most important financial decisions you&apos;ll make, yet it&apos;s also one of the most confusing. We believe everyone deserves access to clear, honest information — free from sales pressure and hidden agendas.
            </p>
            <p className="text-lg text-[#334155] leading-relaxed">
              Our mission is simple: provide the most comprehensive, unbiased insurance education available online so you can make decisions with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Standards */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1E3A5F] mb-8 text-center">Our Editorial Standards</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 bg-[#059669]/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#059669]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#0F172A] mb-1">Expert Reviewed</h3>
                  <p className="text-[#64748B]">Every guide is reviewed by licensed insurance professionals with 10+ years of industry experience.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 bg-[#059669]/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#059669]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#0F172A] mb-1">Monthly Updates</h3>
                  <p className="text-[#64748B]">We update content monthly to reflect current rates, regulations, and best practices.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 bg-[#059669]/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#059669]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#0F172A] mb-1">Strict Independence</h3>
                  <p className="text-[#64748B]">We maintain strict editorial independence — we never accept payment to recommend specific products.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0 w-10 h-10 bg-[#059669]/10 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#059669]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#0F172A] mb-1">Deep Experience</h3>
                  <p className="text-[#64748B]">Our team has over 50 years of combined insurance industry experience across all major product lines.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Create Our Guides */}
      <section className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <h2 className="text-3xl font-bold text-[#1E3A5F] mb-12 text-center">How We Create Our Guides</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((item, idx) => (
              <div key={item.title} className="relative text-center">
                {idx < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-[60%] w-[80%] border-t-2 border-dashed border-[#D4A853]/30" />
                )}
                <div className="relative inline-block mb-4">
                  <span className="inline-flex items-center justify-center w-12 h-12 bg-[#1E3A5F] text-white text-sm font-bold rounded-full">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-[#0F172A] mb-2">{item.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <h2 className="text-3xl font-bold text-[#1E3A5F] mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-[#F8FAFC] border border-gray-100 rounded-xl p-6 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-white border border-gray-100 rounded-xl mb-4">
                  {value.icon}
                </div>
                <h3 className="text-base font-semibold text-[#0F172A] mb-2">{value.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1E3A5F]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to learn more?</h2>
          <p className="text-gray-300 mb-8 max-w-lg mx-auto">
            Browse our library of expert-reviewed insurance guides and make informed decisions with confidence.
          </p>
          <Link
            href="/guides"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4A853] text-[#1E3A5F] font-semibold rounded-lg hover:bg-[#E4C47A] transition-colors"
          >
            Browse All Guides
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
