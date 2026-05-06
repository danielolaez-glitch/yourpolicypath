'use client';

import { useState, useEffect } from 'react';

interface TocItem {
  id: string;
  text: string;
}

function extractHeadings(content: string): TocItem[] {
  const headingRegex = /^## (.+)$/gm;
  const headings: TocItem[] = [];
  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const text = match[1].trim();
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
    headings.push({ id, text });
  }
  return headings;
}

interface TableOfContentsProps {
  content: string;
}

export default function TableOfContents({ content }: TableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeId, setActiveId] = useState('');
  const headings = extractHeadings(content);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: '-80px 0px -80% 0px' }
    );

    headings.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <>
      {/* Desktop Sticky Sidebar */}
      <nav className="hidden xl:block sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
        <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">On This Page</h4>
        <ul className="space-y-2 border-l-2 border-gray-200">
          {headings.map((heading) => (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                className={`block pl-4 py-1 text-sm transition-colors border-l-2 -ml-[2px] ${
                  activeId === heading.id
                    ? 'border-indigo-600 text-indigo-600 font-medium'
                    : 'border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-400'
                }`}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Collapsible */}
      <div className="xl:hidden mb-8 bg-gray-50 rounded-lg border border-gray-200">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-4 text-sm font-semibold text-gray-900"
        >
          <span>📑 Table of Contents</span>
          <svg
            className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {isOpen && (
          <ul className="px-4 pb-4 space-y-2">
            {headings.map((heading) => (
              <li key={heading.id}>
                <a
                  href={`#${heading.id}`}
                  onClick={() => setIsOpen(false)}
                  className="block text-sm text-indigo-600 hover:text-indigo-800 py-1"
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
