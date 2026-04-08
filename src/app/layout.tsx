import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: {
    default: 'JASHN by Quadri — Luxury Celebration Experiences',
    template: '%s | JASHN by Quadri',
  },
  description:
    'JASHN by Quadri crafts extraordinary celebration experiences — from weddings and galas to brand activations. Luxury event management in Pakistan.',
  keywords: ['luxury events', 'wedding planner', 'event management', 'photobooth', 'Pakistan', 'Lahore', 'Karachi'],
  authors: [{ name: 'JASHN by Quadri' }],
  openGraph: {
    type: 'website',
    locale: 'en_PK',
    url: 'https://jashnbyquadri.com',
    siteName: 'JASHN by Quadri',
    title: 'JASHN by Quadri — Luxury Celebration Experiences',
    description: 'Crafting extraordinary moments that transcend the ordinary.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JASHN by Quadri',
    description: 'Luxury celebration experiences crafted in Pakistan.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
