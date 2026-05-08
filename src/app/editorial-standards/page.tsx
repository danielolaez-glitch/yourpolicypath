import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Editorial Standards',
  description: 'Learn about our editorial standards, fact-checking process, and commitment to providing accurate, unbiased insurance education.',
};

export default function EditorialStandardsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <nav className="breadcrumb mb-8">
            <Link href="/">Home</Link>
            <span className="separator">›</span>
            <span className="current">Editorial Standards</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#1E3A5F] tracking-tight mb-6">
              Our Editorial Standards
            </h1>
            <p className="text-xl text-[#334155] leading-relaxed">
              Transparency and accuracy are the foundation of everything we publish. Here&apos;s how we ensure every guide meets the highest standards of quality and integrity.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#F8FAFC]">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="space-y-12">
            {/* How Content is Created */}
            <div>
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">How Our Content Is Created</h2>
              <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
                <p className="text-[#334155] leading-relaxed">
                  Every guide on Your Policy Path begins with thorough research from primary sources including state insurance department filings, carrier documentation, CMS publications, and industry data from organizations like NAIC and LIMRA.
                </p>
                <p className="text-[#334155] leading-relaxed">
                  Our writers are licensed insurance professionals or supervised by licensed professionals who have direct experience with the products and topics they cover. We prioritize clarity and accuracy over word count — our goal is to give you exactly the information you need to make an informed decision.
                </p>
              </div>
            </div>

            {/* Fact-Checking Process */}
            <div>
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">Our Fact-Checking Process</h2>
              <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
                <p className="text-[#334155] leading-relaxed">
                  Before any guide is published, it goes through a multi-step review process:
                </p>
                <ol className="space-y-3 text-[#334155]">
                  <li className="flex gap-3">
                    <span className="shrink-0 w-6 h-6 bg-[#1E3A5F] text-white text-xs font-bold rounded-full flex items-center justify-center">1</span>
                    <span><strong className="text-[#0F172A]">Author review:</strong> The primary author verifies all facts, figures, and regulatory references against current sources.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="shrink-0 w-6 h-6 bg-[#1E3A5F] text-white text-xs font-bold rounded-full flex items-center justify-center">2</span>
                    <span><strong className="text-[#0F172A]">Peer review:</strong> A second licensed professional reviews the content for accuracy, completeness, and balanced perspective.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="shrink-0 w-6 h-6 bg-[#1E3A5F] text-white text-xs font-bold rounded-full flex items-center justify-center">3</span>
                    <span><strong className="text-[#0F172A]">Editorial review:</strong> Our editorial team reviews for clarity, readability, and adherence to our style guide.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="shrink-0 w-6 h-6 bg-[#1E3A5F] text-white text-xs font-bold rounded-full flex items-center justify-center">4</span>
                    <span><strong className="text-[#0F172A]">Final check:</strong> Before publication, all data points, rates, and regulations are verified against the most current sources available.</span>
                  </li>
                </ol>
              </div>
            </div>

            {/* Update Policy */}
            <div>
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">Our Update Policy</h2>
              <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
                <p className="text-[#334155] leading-relaxed">
                  Insurance rates, regulations, and products change frequently. To ensure our readers always have access to current information:
                </p>
                <ul className="space-y-2 text-[#334155]">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#D4A853] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Every guide is reviewed and updated at least once per month
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#D4A853] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Major regulatory changes trigger immediate updates
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#D4A853] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Each article displays its last-updated date prominently
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-[#D4A853] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Annual enrollment period guides are fully refreshed each year
                  </li>
                </ul>
              </div>
            </div>

            {/* Independence Statement */}
            <div>
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">Our Independence</h2>
              <div className="bg-white rounded-xl border border-gray-200 border-l-4 border-l-[#D4A853] p-6 space-y-4">
                <p className="text-[#334155] leading-relaxed">
                  Your Policy Path is editorially independent. We do not accept compensation from insurance companies to recommend their products. Our guides are written to serve our readers — not advertisers.
                </p>
                <p className="text-[#334155] leading-relaxed">
                  If we ever include affiliate links or advertising in the future, they will be clearly labeled and will never influence our editorial recommendations. Our readers&apos; trust is our most valuable asset.
                </p>
              </div>
            </div>

            {/* Contact for Corrections */}
            <div>
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">Report an Error or Suggest a Correction</h2>
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <p className="text-[#334155] leading-relaxed mb-4">
                  We take accuracy seriously. If you believe any information in our guides is incorrect, outdated, or misleading, we want to know about it.
                </p>
                <p className="text-[#334155] leading-relaxed">
                  Please contact our editorial team at <strong className="text-[#1E3A5F]">corrections@yourpolicypath.com</strong> with the specific article, the information you believe is inaccurate, and any supporting sources. We review all submissions and will update our content as needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 text-center">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-[#1E3A5F] font-semibold hover:text-[#D4A853] transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to About Us
          </Link>
        </div>
      </section>
    </div>
  );
}
