'use client';

import Link from 'next/link';
import Image from 'next/image';
import NewsletterForm from './NewsletterForm';

const lifeLinks = [
  { href: '/guides/term-life-insurance-complete-guide', label: 'Term Life Insurance' },
  { href: '/guides/whole-life-vs-universal-life-insurance', label: 'Whole Life vs Universal Life' },
  { href: '/guides/iul-vs-term-life-insurance', label: 'IUL vs Term Life' },
  { href: '/guides/best-life-insurance-seniors-over-65', label: 'Life Insurance for Seniors' },
];

const medicareHealthLinks = [
  { href: '/guides/medicare-explained-parts-a-b-c-d', label: 'Medicare Explained (A–D)' },
  { href: '/states/florida/florida-medicare-supplement-plans', label: 'Medicare Supplement Plans' },
  { href: '/states/florida/florida-health-insurance-options', label: 'Florida Health Insurance' },
];

const annuityResourceLinks = [
  { href: '/guides/how-annuities-work-complete-guide', label: 'How Annuities Work' },
  { href: '/guides/fixed-annuity-vs-variable-annuity', label: 'Fixed vs Variable Annuity' },
  { href: '/quiz', label: 'Insurance Quiz' },
  { href: '/guides', label: 'All Guides' },
];

const companyLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/editorial-standards', label: 'Editorial Standards' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/states/florida', label: 'Florida Guides' },
];

export default function Footer() {
  return (
    <footer className="bg-[#1E3A5F] text-gray-300">
      {/* Newsletter Strip */}
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">Stay informed — get weekly insurance insights</h3>
              <p className="text-sm text-gray-400">No spam, unsubscribe anytime. Join thousands of informed readers.</p>
            </div>
            <NewsletterForm className="w-full md:w-auto" />
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Life Insurance */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Life Insurance</h4>
            <ul className="space-y-3">
              {lifeLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-[#D4A853] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Medicare & Health */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Medicare &amp; Health</h4>
            <ul className="space-y-3">
              {medicareHealthLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-[#D4A853] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Annuities & Resources */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Annuities &amp; Resources</h4>
            <ul className="space-y-3">
              {annuityResourceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-[#D4A853] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-[#D4A853] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <Image src="/logo.png" alt="Your Policy Path" width={28} height={28} className="rounded brightness-0 invert opacity-80" />
              <span className="text-base font-bold text-white">Your Policy Path</span>
            </div>
            <p className="text-sm text-gray-400 text-center max-w-lg">
              © 2026 Your Policy Path. Independent insurance education. Not insurance advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
