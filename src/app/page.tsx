import Link from 'next/link';
import { getAllGuides, getAllFloridaGuides } from '@/lib/content';
import GuideCard from '@/components/GuideCard';
import NewsletterForm from '@/components/NewsletterForm';

const categories = [
  {
    title: 'Life Insurance',
    description: 'Term, whole, universal, and IUL guides to find the right coverage.',
    icon: (
      <svg className="w-8 h-8 text-[#1E3A5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    href: '/guides',
    filter: 'life',
  },
  {
    title: 'Health Insurance',
    description: 'Affordable health insurance options and employer group plans.',
    icon: (
      <svg className="w-8 h-8 text-[#1E3A5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    href: '/guides',
    filter: 'health',
  },
  {
    title: 'Medicare',
    description: 'Understand Parts A–D, supplements, and Medicare Advantage.',
    icon: (
      <svg className="w-8 h-8 text-[#1E3A5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    href: '/guides',
    filter: 'medicare',
  },
  {
    title: 'Annuities & Retirement',
    description: 'Fixed, variable, and indexed annuities for retirement planning.',
    icon: (
      <svg className="w-8 h-8 text-[#1E3A5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    href: '/guides',
    filter: 'annuity',
  },
  {
    title: 'Disability & Long-Term Care',
    description: 'Protect your income and plan for extended care needs.',
    icon: (
      <svg className="w-8 h-8 text-[#1E3A5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zM17.9 17.39c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
      </svg>
    ),
    href: '/guides',
    filter: 'life',
  },
  {
    title: 'By State',
    description: 'State-specific insurance guides and carrier recommendations.',
    icon: (
      <svg className="w-8 h-8 text-[#1E3A5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    href: '/states/florida',
    filter: 'state',
  },
];

const trustSignals = [
  {
    icon: (
      <svg className="w-7 h-7 text-[#1E3A5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    title: 'Independent & Unbiased',
    description: "We don't sell insurance policies. Our only mission is helping you make informed decisions.",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-[#1E3A5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Expert Reviewed',
    description: 'Every guide is reviewed by licensed insurance professionals with 10+ years of experience.',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-[#1E3A5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'Always Current',
    description: 'Our content is updated monthly to reflect the latest rates, rules, and regulations for 2026.',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-[#1E3A5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Privacy First',
    description: 'We never sell your personal information. Read our privacy policy for details.',
  },
];

const howWeHelp = [
  {
    step: '01',
    icon: (
      <svg className="w-8 h-8 text-[#1E3A5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Research',
    description: 'Browse comprehensive guides on any insurance topic',
  },
  {
    step: '02',
    icon: (
      <svg className="w-8 h-8 text-[#1E3A5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Compare',
    description: 'Use side-by-side comparisons to understand your options',
  },
  {
    step: '03',
    icon: (
      <svg className="w-8 h-8 text-[#1E3A5F]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Decide',
    description: 'Make confident decisions backed by expert knowledge',
  },
];

export default function HomePage() {
  const guides = getAllGuides();
  const floridaGuides = getAllFloridaGuides();
  const allGuides = [...guides, ...floridaGuides];

  const guideCounts: Record<string, number> = { life: 0, medicare: 0, annuity: 0, state: 0, health: 0 };
  allGuides.forEach((g) => {
    if (g.category in guideCounts) guideCounts[g.category]++;
  });

  const featuredGuides = guides.slice(0, 6);

  return (
    <>
      {/* ===== SECTION 1: HERO ===== */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-[#1E3A5F] tracking-tight leading-[1.1] mb-6">
              Insurance Guidance You Can Trust
            </h1>
            <p className="text-lg sm:text-xl text-[#334155] leading-relaxed mb-10 max-w-2xl mx-auto">
              Free, expert-reviewed guides on life insurance, health insurance, Medicare, and annuities. No sales pitches — just clear answers.
            </p>

            {/* Trust Bar */}
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm text-[#64748B]">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#D4A853]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 1l2.928 6.856L20 8.59l-5.5 4.878L16.18 20 10 16.236 3.82 20l1.68-6.532L0 8.59l7.072-.734L10 1z" clipRule="evenodd" />
                </svg>
                Expert Reviewed
              </span>
              <span className="hidden sm:inline text-gray-300">|</span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#D4A853]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 1l2.928 6.856L20 8.59l-5.5 4.878L16.18 20 10 16.236 3.82 20l1.68-6.532L0 8.59l7.072-.734L10 1z" clipRule="evenodd" />
                </svg>
                Licensed Agent Approved
              </span>
              <span className="hidden sm:inline text-gray-300">|</span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#D4A853]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 1l2.928 6.856L20 8.59l-5.5 4.878L16.18 20 10 16.236 3.82 20l1.68-6.532L0 8.59l7.072-.734L10 1z" clipRule="evenodd" />
                </svg>
                Updated May 2026
              </span>
              <span className="hidden sm:inline text-gray-300">|</span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#D4A853]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 1l2.928 6.856L20 8.59l-5.5 4.878L16.18 20 10 16.236 3.82 20l1.68-6.532L0 8.59l7.072-.734L10 1z" clipRule="evenodd" />
                </svg>
                100% Free
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: FEATURED GUIDES ===== */}
      <section className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1E3A5F] mb-3">Most Popular Guides</h2>
            <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
              Our most comprehensive resources to help you make informed insurance decisions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredGuides.map((guide) => (
              <GuideCard key={guide.slug} guide={guide} basePath="/guides" />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/guides" className="inline-flex items-center gap-1.5 text-[#1E3A5F] font-semibold hover:text-[#D4A853] transition-colors">
              View All Guides
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: EXPLORE BY TOPIC ===== */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1E3A5F] mb-3">Explore by Topic</h2>
            <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
              Whether you&apos;re shopping for coverage or trying to understand what you already have, we&apos;ve got you covered.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => {
              const count = cat.filter === 'state'
                ? guideCounts.state
                : (guideCounts[cat.filter] || 0);
              return (
                <Link
                  key={cat.title}
                  href={cat.href}
                  className="group bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg hover:border-[#D4A853]/40 transition-all duration-300 text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#F8FAFC] border border-gray-100 rounded-xl mb-5 group-hover:bg-[#1E3A5F]/5 transition-colors">
                    {cat.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-[#0F172A] group-hover:text-[#1E3A5F] transition-colors mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-[#64748B] mb-4">{cat.description}</p>
                  <span className="inline-block text-xs font-semibold text-[#1E3A5F] bg-[#1E3A5F]/5 px-3 py-1 rounded-full">
                    {count} {count === 1 ? 'guide' : 'guides'} available
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: QUIZ PROMO ===== */}
      <section className="bg-[#D4A853]/8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-[#D4A853]/15 rounded-full mb-6">
              <svg className="w-7 h-7 text-[#D4A853]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-[#1E3A5F] mb-4">Which Insurance Is Right for You?</h2>
            <p className="text-lg text-[#334155] mb-8 leading-relaxed">
              Not sure where to start? Take our 2-minute quiz to find the right type of insurance for your situation.
            </p>
            <Link
              href="/quiz"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1E3A5F] text-white font-semibold rounded-lg hover:bg-[#2A4A73] transition-colors shadow-sm"
            >
              Start Quiz
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: HOW WE HELP ===== */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#1E3A5F] mb-3">How We Help You</h2>
            <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
              Making sense of insurance doesn&apos;t have to be overwhelming. Here&apos;s our simple approach.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
            {howWeHelp.map((item, idx) => (
              <div key={item.title} className="relative text-center">
                {/* Connector line */}
                {idx < howWeHelp.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] border-t-2 border-dashed border-[#D4A853]/30" />
                )}
                <div className="relative inline-block mb-5">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-[#F8FAFC] border border-gray-100 rounded-2xl">
                    {item.icon}
                  </div>
                  <span className="absolute -top-2 -right-2 inline-flex items-center justify-center w-7 h-7 bg-[#D4A853] text-[#1E3A5F] text-xs font-bold rounded-full">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-[#0F172A] mb-2">{item.title}</h3>
                <p className="text-[#64748B]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: TRUST SIGNALS ===== */}
      <section className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-[#1E3A5F] mb-3">Why Trust Your Policy Path?</h2>
            <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
              We hold ourselves to the highest standards so you can make decisions with confidence.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustSignals.map((signal) => (
              <div
                key={signal.title}
                className="bg-white rounded-xl border border-gray-200 p-8 text-center hover:shadow-md hover:border-[#D4A853]/30 transition-all duration-200"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#1E3A5F]/5 rounded-xl mb-5">
                  {signal.icon}
                </div>
                <h3 className="text-base font-semibold text-[#0F172A] mb-2">{signal.title}</h3>
                <p className="text-sm text-[#64748B] leading-relaxed">{signal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 7: NEWSLETTER ===== */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#1E3A5F] mb-3">Stay Informed</h2>
            <p className="text-[#64748B] mb-8 leading-relaxed">
              Get weekly insurance insights and policy updates. No spam, unsubscribe anytime.
            </p>
            <NewsletterForm className="mx-auto justify-center" />
          </div>
        </div>
      </section>
    </>
  );
}
