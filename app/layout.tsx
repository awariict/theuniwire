import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  title: 'TheUniWire - Nigerian Universities News Platform',
  description: 'Your source for news, events, and announcements from Nigerian universities',
  viewport: 'width=device-width, initial-scale=1',
  keywords: 'universities, news, events, Nigeria, campus',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
        <meta name="theme-color" content="#1d4588" />
      </head>
      <body className="bg-neutral-50 text-neutral-900">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
