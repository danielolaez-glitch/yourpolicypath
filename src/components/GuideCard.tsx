import Link from 'next/link';
import type { GuideMeta } from '@/lib/content';

const categoryConfig: Record<string, { label: string; color: string; bg: string }> = {
  life: { label: 'Life Insurance', color: 'text-indigo-700', bg: 'bg-indigo-50' },
  medicare: { label: 'Medicare', color: 'text-blue-700', bg: 'bg-blue-50' },
  annuity: { label: 'Annuities', color: 'text-purple-700', bg: 'bg-purple-50' },
  health: { label: 'Health', color: 'text-emerald-700', bg: 'bg-emerald-50' },
  state: { label: 'State Guide', color: 'text-amber-700', bg: 'bg-amber-50' },
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
      className="group block bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg hover:border-indigo-300 transition-all duration-200"
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
      <p className="text-sm text-gray-500 line-clamp-3">
        {guide.meta_description}
      </p>
      <div className="mt-4 flex items-center text-sm font-medium text-indigo-600 group-hover:text-indigo-700">
        Read guide
        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}
