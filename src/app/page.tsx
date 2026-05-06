import Link from 'next/link';
import { getAllGuides, getAllFloridaGuides } from '@/lib/content';
import GuideCard from '@/components/GuideCard';

const categories = [
  {
    title: 'Life Insurance',
    description: 'Term, whole, universal, and IUL guides to help you find the right coverage.',
    icon: '🛡️',
    href: '/guides',
    filter: 'life',
  },
  {
    title: 'Medicare & Health',
    description: 'Understand Medicare Parts A–D, supplements, and health insurance options.',
    icon: '🏥',
    href: '/guides',
    filter: 'medicare',
  },
  {
    title: 'Annuities',
    description: 'Fixed, variable, and indexed annuities explained for retirement planning.',
    icon: '📈',
    href: '/guides',
    filter: 'annuity',
  },
  {
    title: 'By State',
    description: 'State-specific insurance guides, regulations, and carrier recommendations.',
    icon: '📍',
    href: '/states/florida',
    filter: 'state',
  },
];

const trustSignals = [
  {
    icon: (
      <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
    title: 'Independent & Unbiased',
    description: "We don't sell insurance policies. Our only mission is helping you make informed decisions.",
  },
  {
    icon: (
      <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Expert Reviewed',
    description: 'Every guide is reviewed by licensed insurance professionals with 10+ years of experience.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: 'Always Current',
    description: 'Our content is updated monthly to reflect the latest rates, rules, and regulations for 2026.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: 'Research',
    description: 'Browse our comprehensive guides on any insurance topic',
  },
  {
    step: '02',
    icon: (
      <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Compare',
    description: 'Use our side-by-side comparisons to understand your options',
  },
  {
    step: '03',
    icon: (
      <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Decide',
    description: 'Make confident insurance decisions backed by expert knowledge',
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

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0djZoLTZWMzRoNnptMC0yNHY2aC02VjEwaDZ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Make Smarter Insurance Decisions
            </h1>
            <p className="text-lg sm:text-xl text-indigo-100 mb-10 leading-relaxed">
              Free, expert-written guides on life insurance, Medicare, health insurance, and annuities. No sales pitches — just the information you need to protect your family and your future.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/guides"
                className="w-full sm:w-auto px-8 py-3.5 bg-white text-indigo-700 font-semibold rounded-lg hover:bg-indigo-50 transition-colors shadow-lg"
              >
                Browse All Guides
              </Link>
              <Link
                href="/about"
                className="w-full sm:w-auto px-8 py-3.5 bg-indigo-500/30 text-white font-semibold rounded-lg hover:bg-indigo-500/50 transition-colors border border-indigo-400/30"
              >
                About Us
              </Link>
            </div>

            {/* Trust Bar */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-indigo-200">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                Expert Reviewed
              </span>
              <span className="hidden sm:inline text-indigo-400/50">·</span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                Licensed Agent Approved
              </span>
              <span className="hidden sm:inline text-indigo-400/50">·</span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                Updated May 2026
              </span>
              <span className="hidden sm:inline text-indigo-400/50">·</span>
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4 text-emerald-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                100% Free
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Cards */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore by Topic</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you&apos;re shopping for coverage or trying to understand what you already have, we&apos;ve got you covered.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => {
            const count = cat.filter === 'state'
              ? guideCounts.state
              : (guideCounts[cat.filter] || 0);
            return (
              <Link
                key={cat.title}
                href={cat.href}
                className="group relative bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl hover:border-indigo-300 transition-all duration-300 text-center overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/0 to-indigo-50/0 group-hover:from-indigo-50/50 group-hover:to-purple-50/30 transition-all duration-300 rounded-xl" />
                <div className="relative">
                  <span className="text-5xl mb-5 block">{cat.icon}</span>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">{cat.description}</p>
                  <span className="inline-block text-xs font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                    {count} {count === 1 ? 'guide' : 'guides'}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured Guides */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Guides</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our most comprehensive resources to help you make informed insurance decisions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <GuideCard key={guide.slug} guide={guide} basePath="/guides" />
            ))}
            {floridaGuides.map((guide) => (
              <GuideCard key={guide.slug} guide={guide} basePath="/states/florida" />
            ))}
          </div>
        </div>
      </section>

      {/* How We Help You */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Help You</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Making sense of insurance doesn&apos;t have to be overwhelming. Here&apos;s our simple approach.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {howWeHelp.map((item, idx) => (
            <div key={item.title} className="relative text-center">
              {/* Connector line on desktop */}
              {idx < howWeHelp.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-[80%] border-t-2 border-dashed border-indigo-200" />
              )}
              <div className="relative">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-indigo-50 rounded-2xl mb-5">
                  {item.icon}
                </div>
                <span className="absolute -top-2 -right-2 inline-flex items-center justify-center w-7 h-7 bg-indigo-600 text-white text-xs font-bold rounded-full">
                  {item.step}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Signals */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Trust Your Policy Path?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We hold ourselves to the highest standards so you can make decisions with confidence.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustSignals.map((signal) => (
              <div
                key={signal.title}
                className="bg-white rounded-xl border border-gray-200 p-8 text-center hover:shadow-md transition-shadow duration-200"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-50 rounded-xl mb-5">
                  {signal.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{signal.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{signal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
