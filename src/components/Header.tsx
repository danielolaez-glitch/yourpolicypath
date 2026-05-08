'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  {
    label: 'Life Insurance',
    links: [
      { href: '/guides/term-life-insurance-complete-guide', label: 'Term Life Insurance Guide' },
      { href: '/guides/whole-life-vs-universal-life-insurance', label: 'Whole Life vs Universal Life' },
      { href: '/guides/iul-vs-term-life-insurance', label: 'IUL vs Term Life' },
      { href: '/guides/best-life-insurance-seniors-over-65', label: 'Best Life Insurance for Seniors' },
    ],
  },
  {
    label: 'Health Insurance',
    links: [
      { href: '/states/florida/florida-health-insurance-options', label: 'Florida Health Options' },
    ],
  },
  {
    label: 'Medicare',
    links: [
      { href: '/guides/medicare-explained-parts-a-b-c-d', label: 'Medicare Explained (A, B, C, D)' },
      { href: '/states/florida/florida-medicare-supplement-plans', label: 'Medicare Supplement Plans' },
    ],
  },
  {
    label: 'Annuities & Retirement',
    links: [
      { href: '/guides/how-annuities-work-complete-guide', label: 'How Annuities Work' },
      { href: '/guides/fixed-annuity-vs-variable-annuity', label: 'Fixed vs Variable Annuity' },
      { href: '/guides/iul-vs-term-life-insurance', label: 'IUL Explained' },
    ],
  },
  {
    label: 'By State',
    links: [
      { href: '/states/florida', label: 'Florida Insurance Guides' },
      { href: '/states/florida/best-life-insurance-florida', label: 'Best Life Insurance in Florida' },
      { href: '/states/florida/florida-health-insurance-options', label: 'Florida Health Insurance' },
      { href: '/states/florida/florida-medicare-supplement-plans', label: 'Florida Medicare Supplements' },
    ],
  },
  {
    label: 'Tools',
    links: [
      { href: '/quiz', label: 'Insurance Quiz' },
    ],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (idx: number) => {
    setOpenAccordion(openAccordion === idx ? null : idx);
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Top Trust Bar */}
      <div className="bg-[#1E3A5F] text-white/80 text-xs text-center py-2 px-4">
        <span className="inline-flex items-center gap-1.5">
          <svg className="w-3.5 h-3.5 text-[#D4A853]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 1l2.928 6.856L20 8.59l-5.5 4.878L16.18 20 10 16.236 3.82 20l1.68-6.532L0 8.59l7.072-.734L10 1z" clipRule="evenodd" />
          </svg>
          Independent &amp; unbiased insurance education — trusted by thousands of readers
        </span>
      </div>

      {/* Main Nav */}
      <nav className="bg-white border-b border-gray-200 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <Image src="/logo.png" alt="Your Policy Path" width={36} height={36} className="rounded" />
              <span className="text-lg font-bold text-[#1E3A5F] tracking-tight">Your Policy Path</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-0.5">
              <Link href="/" className="px-3 py-2 text-sm font-medium text-[#334155] hover:text-[#1E3A5F] rounded-md hover:bg-gray-50 transition-colors">
                Home
              </Link>

              {navItems.map((item, idx) => (
                <div key={idx} className="relative group">
                  <button className="px-3 py-2 text-sm font-medium text-[#334155] hover:text-[#1E3A5F] rounded-md hover:bg-gray-50 transition-colors flex items-center gap-1">
                    {item.label}
                    <svg className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="w-72 bg-white rounded-xl shadow-xl border border-gray-100 py-2 ring-1 ring-black/5">
                      {item.links.map((link) => (
                        <Link
                          key={link.href + link.label}
                          href={link.href}
                          className="block px-4 py-2.5 text-sm text-[#334155] hover:bg-[#F8FAFC] hover:text-[#1E3A5F] transition-colors group/link"
                        >
                          <span className="flex items-center justify-between">
                            {link.label}
                            <svg className="w-3.5 h-3.5 opacity-0 group-hover/link:opacity-50 -translate-x-1 group-hover/link:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              <Link href="/guides" className="ml-2 px-4 py-2 text-sm font-semibold text-[#1E3A5F] bg-[#D4A853]/10 hover:bg-[#D4A853]/20 border border-[#D4A853]/30 rounded-lg transition-colors">
                All Guides
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-[#334155] hover:text-[#1E3A5F] rounded-md hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileOpen && (
            <div className="lg:hidden border-t border-gray-200 py-4 space-y-1 animate-fade-in">
              <Link href="/" onClick={() => setMobileOpen(false)} className="block px-3 py-2.5 text-base font-medium text-[#334155] hover:bg-gray-50 rounded-md">
                Home
              </Link>

              {navItems.map((item, idx) => (
                <div key={idx}>
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full flex items-center justify-between px-3 py-2.5 text-base font-medium text-[#334155] hover:bg-gray-50 rounded-md"
                  >
                    {item.label}
                    <svg
                      className={`w-4 h-4 text-[#64748B] transition-transform duration-200 ${openAccordion === idx ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {openAccordion === idx && (
                    <div className="pl-4 space-y-0.5 animate-fade-in">
                      {item.links.map((link) => (
                        <Link
                          key={link.href + link.label}
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-3 py-2 text-sm text-[#64748B] hover:text-[#1E3A5F] hover:bg-gray-50 rounded-md"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-3 px-3">
                <Link
                  href="/guides"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center px-4 py-2.5 text-sm font-semibold text-[#1E3A5F] bg-[#D4A853]/15 hover:bg-[#D4A853]/25 border border-[#D4A853]/30 rounded-lg transition-colors"
                >
                  All Guides
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}
