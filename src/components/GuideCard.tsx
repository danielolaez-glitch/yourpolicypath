import Link from 'next/link';
import type { GuideMeta } from '@/lib/content';

const categoryConfig: Record<string, { label: string; color: string; bg: string; border: string }> = {
  life: { label: 'Life Insurance', color: 'text-indigo-700', bg: 'bg-indigo-50', border: 'border-l-indigo-500' },
  medicare: { label: 'Medicare', color: 'text-blue-700', bg: 'bg-blue-50', border: 'border-l-blue-500' },
  annuity: { label: 'Annuities', color: 'text-amber-700', bg: 'bg-amber-50', border: 'border-l-amber-500' },
  health: { label: 'Health', color: 'text-emerald-700', bg: 'bg-emerald-50', border: 'border-l-green-500' },
  state: { label: 'State Guide', color: 'text-amber-700', bg: 'bg-amber-50', border: 'border-l-amber-500' },
};

interface GuideCardProps {
  guide: GuideMeta;
  basePath?: string;
}

export default function GuideCard({ guide, basePath = '/guides' }: GuideCardProps) {
  const cat = categoryConfig[guide.category] || categoryConfig.life;

  return (
    <Link
      href={`${basePath}/${guide.slug}`}
      className={`group block bg-white border border-gray-200 border-l-4 ${cat.border} rounded-xl p-7 hover:shadow-lg hover:border-gray-300 hover:border-l-4 transition-all duration-200`}
    >
      <div className="flex items-center gap-2 mb-3">
        <span className={`inline-block px-2.5 py-0.5 text-xs font-medium rounded-full ${cat.bg} ${cat.color}`}>
          {cat.label}
        </span>
        <span className="text-xs text-gray-400">{guide.reading_time}</span>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors mb-2 line-clamp-2">
        {guide.title}
      </h3>
      <p className="text-sm text-gray-500 line-clamp-3 mb-4">
        {guide.meta_description}
      </p>
      <div className="flex items-center gap-3 text-xs text-gray-400 mb-4">
        <span className="flex items-center gap-1">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          Your Policy Path Editorial Team
        </span>
        <span className="flex items-center gap-1">
          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Updated May 2026
        </span>
      </div>
      <div className="flex items-center text-sm font-medium text-indigo-600 group-hover:text-indigo-700">
        Read guide
        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}
