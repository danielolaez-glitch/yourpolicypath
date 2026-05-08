import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: {
    default: 'Your Policy Path — Free Insurance Education Guides',
    template: '%s | Your Policy Path',
  },
  description:
    'Free, unbiased insurance education guides covering life insurance, Medicare, health insurance, and annuities. Make smarter insurance decisions with expert resources.',
  metadataBase: new URL('https://yourpolicypath.com'),
  icons: {
    icon: [
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Your Policy Path',
    title: 'Your Policy Path — Free Insurance Education Guides',
    description:
      'Free, unbiased insurance education guides covering life insurance, Medicare, health insurance, and annuities. Make smarter insurance decisions with expert resources.',
  },
  other: {
    'theme-color': '#1E3A5F',
    'msapplication-TileColor': '#1E3A5F',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA-XXXXXXXXXX" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA-XXXXXXXXXX');
            `,
          }}
        />
        {/* PIXEL GOES HERE */}
      </head>
      <body className="font-sans bg-white text-[#0F172A] antialiased">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
