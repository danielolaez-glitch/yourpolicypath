'use client';

import { useState } from 'react';
import GuideCard from '@/components/GuideCard';
import type { GuideMeta } from '@/lib/content';

const tabs = [
  { key: 'all', label: 'All Guides' },
  { key: 'life', label: 'Life Insurance' },
  { key: 'medicare', label: 'Medicare' },
  { key: 'health', label: 'Health' },
  { key: 'annuity', label: 'Annuities' },
];

interface GuidesListProps {
  guides: GuideMeta[];
  basePath?: string;
}

export default function GuidesList({ guides, basePath = '/guides' }: GuidesListProps) {
  const [active, setActive] = useState('all');
  const [search, setSearch] = useState('');

  const filtered = guides.filter((g) => {
    const matchesTab = active === 'all' || g.category === active;
    const matchesSearch = !search || 
      g.title.toLowerCase().includes(search.toLowerCase()) ||
      g.meta_description.toLowerCase().includes(search.toLowerCase());
    return matchesTab && matchesSearch;
  });

  return (
    <>
      {/* Search + Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-10">
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                active === tab.key
                  ? 'bg-[#1E3A5F] text-white'
                  : 'bg-gray-100 text-[#64748B] hover:bg-gray-200 hover:text-[#334155]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="sm:ml-auto relative">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            placeholder="Search guides..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10 pr-4 py-2 text-sm border border-gray-200 rounded-lg bg-white text-[#334155] placeholder:text-[#94a3b8] focus:outline-none focus:border-[#D4A853] focus:ring-2 focus:ring-[#D4A853]/15 w-full sm:w-64 transition-colors"
          />
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((guide) => (
            <GuideCard key={guide.slug} guide={guide} basePath={basePath} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <svg className="w-12 h-12 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <p className="text-[#64748B]">No guides found. Try a different search or category.</p>
        </div>
      )}
    </>
  );
}
