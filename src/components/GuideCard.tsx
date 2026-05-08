import Link from 'next/link';
import type { GuideMeta } from '@/lib/content';

const categoryConfig: Record<string, { label: string; pillBg: string; pillText: string; border: string }> = {
  life: { label: 'Life Insurance', pillBg: 'bg-[#1E3A5F]', pillText: 'text-white', border: 'border-l-[#1E3A5F]' },
  medicare: { label: 'Medicare', pillBg: 'bg-[#0369A1]', pillText: 'text-white', border: 'border-l-[#0369A1]' },
  annuity: { label: 'Annuities', pillBg: 'bg-[#D4A853]', pillText: 'text-[#1E3A5F]', border: 'border-l-[#D4A853]' },
  health: { label: 'Health', pillBg: 'bg-[#0D9488]', pillText: 'text-white', border: 'border-l-[#0D9488]' },
  state: { label: 'State Guide', pillBg: 'bg-[#64748B]', pillText: 'text-white', border: 'border-l-[#64748B]' },
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
      className={`group block bg-white border border-gray-200 border-l-4 ${cat.border} rounded-xl p-6 hover:shadow-lg hover:border-l-[#D4A853] transition-all duration-200 hover:-translate-y-0.5`}
    >
      {/* Category pill + reading time */}
      <div className="flex items-center gap-2.5 mb-3">
        <span className={`inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full ${cat.pillBg} ${cat.pillText}`}>
          {cat.label}
        </span>
        <span className="text-xs text-[#64748B]">{guide.reading_time}</span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-[#1E3A5F] group-hover:text-[#D4A853] transition-colors mb-2 line-clamp-2 leading-snug">
        {guide.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-[#64748B] line-clamp-2 mb-4 leading-relaxed">
        {guide.meta_description}
      </p>

      {/* Meta row */}
      <div className="flex items-center gap-3 text-xs text-[#94a3b8] mb-4">
        <span>By Editorial Team</span>
        <span className="text-[#cbd5e1]">·</span>
        <span>Updated May 2026</span>
        <span className="text-[#cbd5e1]">·</span>
        <span>{guide.reading_time}</span>
      </div>

      {/* Read link */}
      <div className="flex items-center text-sm font-semibold text-[#1E3A5F] group-hover:text-[#D4A853] transition-colors">
        Read guide
        <svg className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  );
}
