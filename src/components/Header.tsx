'use client';

import { useState } from 'react';
import Link from 'next/link';

const lifeInsuranceLinks = [
  { href: '/guides/term-life-insurance-complete-guide', label: 'Term Life Insurance Guide' },
  { href: '/guides/whole-life-vs-universal-life-insurance', label: 'Whole Life vs Universal Life' },
  { href: '/guides/iul-vs-term-life-insurance', label: 'IUL vs Term Life' },
  { href: '/guides/best-life-insurance-seniors-over-65', label: 'Best Life Insurance for Seniors' },
];

const medicareHealthLinks = [
  { href: '/guides/medicare-explained-parts-a-b-c-d', label: 'Medicare Explained (A, B, C, D)' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lifeOpen, setLifeOpen] = useState(false);
  const [medicareOpen, setMedicareOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-indigo-600 hover:text-indigo-700 transition-colors">
            <span className="text-2xl">🛡️</span>
            <span>Your Policy Path</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            <Link href="/" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 rounded-md hover:bg-gray-50 transition-colors">
              Home
            </Link>

            {/* Life Insurance Dropdown */}
            <div className="relative group">
              <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 rounded-md hover:bg-gray-50 transition-colors flex items-center gap-1">
                Life Insurance
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className="absolute left-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="w-72 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                  {lifeInsuranceLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Medicare & Health Dropdown */}
            <div className="relative group">
              <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 rounded-md hover:bg-gray-50 transition-colors flex items-center gap-1">
                Medicare &amp; Health
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className="absolute left-0 top-full pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="w-72 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                  {medicareHealthLinks.map((link) => (
                    <Link key={link.href} href={link.href} className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/guides/how-annuities-work-complete-guide" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 rounded-md hover:bg-gray-50 transition-colors">
              Annuities
            </Link>

            <Link href="/states/florida" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 rounded-md hover:bg-gray-50 transition-colors">
              By State
            </Link>

            <Link href="/guides" className="ml-2 px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors">
              All Guides
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-gray-900 rounded-md hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4 space-y-1">
            <Link href="/" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md">
              Home
            </Link>

            {/* Life Insurance Accordion */}
            <div>
              <button
                onClick={() => setLifeOpen(!lifeOpen)}
                className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
              >
                Life Insurance
                <svg className={`w-4 h-4 transition-transform ${lifeOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {lifeOpen && (
                <div className="pl-4 space-y-1">
                  {lifeInsuranceLinks.map((link) => (
                    <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-gray-600 hover:text-indigo-600 hover:bg-gray-50 rounded-md">
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Medicare Accordion */}
            <div>
              <button
                onClick={() => setMedicareOpen(!medicareOpen)}
                className="w-full flex items-center justify-between px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md"
              >
                Medicare &amp; Health
                <svg className={`w-4 h-4 transition-transform ${medicareOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              {medicareOpen && (
                <div className="pl-4 space-y-1">
                  {medicareHealthLinks.map((link) => (
                    <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm text-gray-600 hover:text-indigo-600 hover:bg-gray-50 rounded-md">
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/guides/how-annuities-work-complete-guide" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md">
              Annuities
            </Link>

            <Link href="/states/florida" onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-md">
              By State
            </Link>

            <Link href="/guides" onClick={() => setMobileOpen(false)} className="block mx-3 mt-3 px-4 py-2 text-center text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg">
              All Guides
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
