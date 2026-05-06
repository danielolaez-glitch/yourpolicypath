import Link from 'next/link';

const lifeLinks = [
  { href: '/guides/term-life-insurance-complete-guide', label: 'Term Life Insurance' },
  { href: '/guides/whole-life-vs-universal-life-insurance', label: 'Whole Life vs Universal Life' },
  { href: '/guides/iul-vs-term-life-insurance', label: 'IUL vs Term Life' },
  { href: '/guides/best-life-insurance-seniors-over-65', label: 'Life Insurance for Seniors' },
];

const medicareLinks = [
  { href: '/guides/medicare-explained-parts-a-b-c-d', label: 'Medicare Explained (A–D)' },
  { href: '/states/florida/florida-medicare-supplement-plans', label: 'FL Medicare Supplement' },
  { href: '/states/florida/florida-health-insurance-options', label: 'FL Health Insurance' },
];

const annuityLinks = [
  { href: '/guides/how-annuities-work-complete-guide', label: 'How Annuities Work' },
  { href: '/guides/fixed-annuity-vs-variable-annuity', label: 'Fixed vs Variable Annuity' },
];

const companyLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/guides', label: 'All Guides' },
  { href: '/states/florida', label: 'Florida Guides' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Life Insurance */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Life Insurance</h3>
            <ul className="space-y-3">
              {lifeLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Medicare & Health */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Medicare &amp; Health</h3>
            <ul className="space-y-3">
              {medicareLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Annuities */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Annuities</h3>
            <ul className="space-y-3">
              {annuityLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-lg font-bold text-white">
              <span>🛡️</span>
              <span>Your Policy Path</span>
            </div>
            <p className="text-sm text-gray-500 text-center">
              © 2026 Your Policy Path. All rights reserved. Educational content only — not insurance advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
