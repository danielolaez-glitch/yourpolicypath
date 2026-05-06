import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Your Policy Path privacy policy — how we collect, use, and protect your information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-10">Last updated: May 6, 2026</p>

      <div className="space-y-8 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Introduction</h2>
          <p>
            Your Policy Path (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at yourpolicypath.com.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information We Collect</h2>
          <h3 className="text-lg font-medium text-gray-800 mb-2">Automatically Collected Information</h3>
          <p className="mb-4">
            When you visit our website, we may automatically collect certain information about your device and usage patterns, including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>IP address and approximate geographic location</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Referring URLs and pages visited</li>
            <li>Time and date of visits</li>
            <li>Device identifiers</li>
          </ul>

          <h3 className="text-lg font-medium text-gray-800 mt-6 mb-2">Visitor Identification</h3>
          <p>
            We may use third-party visitor identification services to identify companies and organizations that visit our website using publicly available business IP data. This information is used solely for analytics and improving our content. We do not identify individual visitors or collect personally identifiable information through these services without your consent.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
          <p className="mb-4">
            We use cookies, web beacons, and similar tracking technologies to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Analyze website traffic and usage patterns</li>
            <li>Remember your preferences</li>
            <li>Improve our content and user experience</li>
            <li>Measure the effectiveness of our educational content</li>
          </ul>
          <p className="mt-4">
            You can control cookies through your browser settings. Disabling cookies may affect some features of our website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Use Your Information</h2>
          <p className="mb-4">We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Operate and maintain our website</li>
            <li>Improve and personalize your experience</li>
            <li>Analyze usage trends and optimize our content</li>
            <li>Develop new educational guides and resources</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Third-Party Services</h2>
          <p>
            We may use third-party analytics services (such as Google Analytics) that collect, monitor, and analyze usage data. These services have their own privacy policies governing the use of your information. We encourage you to review their policies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Security</h2>
          <p>
            We implement appropriate technical and organizational security measures to protect your information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
          <p className="mb-4">Depending on your location, you may have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt out of certain data collection practices</li>
            <li>Withdraw consent where applicable</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Children&apos;s Privacy</h2>
          <p>
            Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &ldquo;Last updated&rdquo; date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or our data practices, please contact us at:
          </p>
          <div className="mt-4 p-6 bg-gray-50 rounded-lg">
            <p className="font-medium text-gray-900">Your Policy Path</p>
            <p>Email: [EMAIL]</p>
            <p>Address: [ADDRESS]</p>
          </div>
        </section>
      </div>
    </div>
  );
}
