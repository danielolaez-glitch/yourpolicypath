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

  const filtered = active === 'all' ? guides : guides.filter((g) => g.category === active);

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key)}
            className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
              active === tab.key
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((guide) => (
            <GuideCard key={guide.slug} guide={guide} basePath={basePath} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center py-12">No guides in this category yet.</p>
      )}
    </>
  );
}
