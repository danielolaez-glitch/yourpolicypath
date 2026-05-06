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
    icon: '⚖️',
    title: 'Independent & Unbiased',
    description: 'We don\'t sell insurance. Our guides are 100% educational and free from sales pressure.',
  },
  {
    icon: '✅',
    title: 'Expert Reviewed',
    description: 'Every guide is researched and reviewed by licensed insurance professionals.',
  },
  {
    icon: '🔄',
    title: 'Always Updated',
    description: 'Content is updated regularly to reflect the latest rates, rules, and regulations.',
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
      <section className="relative bg-gradient-to-br from-indigo-600 via-indigo-700 to-indigo-800 text-white">
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
                className="group bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-indigo-300 transition-all duration-200 text-center"
              >
                <span className="text-4xl mb-4 block">{cat.icon}</span>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors mb-2">
                  {cat.title}
                </h3>
                <p className="text-sm text-gray-500 mb-3">{cat.description}</p>
                <span className="inline-block text-xs font-medium text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                  {count} {count === 1 ? 'guide' : 'guides'}
                </span>
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

      {/* Trust Signals */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Trust Your Policy Path?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustSignals.map((signal) => (
            <div key={signal.title} className="text-center p-6">
              <span className="text-4xl mb-4 block">{signal.icon}</span>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{signal.title}</h3>
              <p className="text-gray-600">{signal.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
