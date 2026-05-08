'use client';

export default function NewsletterForm({ className = '' }: { className?: string }) {
  return (
    <form
      className={`newsletter-form ${className}`}
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="Enter your email"
        className="flex-1 min-w-0 px-4 py-3 rounded-lg border border-[#D4A853]/30 bg-white text-[#1E3A5F] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#D4A853]"
      />
      <button
        type="submit"
        className="px-6 py-3 bg-[#D4A853] text-[#1E3A5F] font-semibold rounded-lg hover:bg-[#c49843] transition-colors whitespace-nowrap"
      >
        Subscribe
      </button>
    </form>
  );
}
