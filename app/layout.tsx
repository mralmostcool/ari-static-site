import type { Metadata } from 'next';
import { Figtree, Inter } from 'next/font/google';
import './globals.css';

const figtree = Figtree({
  variable: '--font-figtree',
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

import { Navbar, Footer } from '@/components';

export const metadata: Metadata = {
  title: 'ARI Corp — B2B Solutions',
  description:
    'High-performance enterprise services, professional development, and bespoke client training.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${figtree.variable} ${inter.variable} h-full antialiased`}
    >
      <body className='min-h-full flex flex-col bg-zinc-50/50 text-zinc-950 font-sans'>
        <Navbar />
        <main className='flex flex-1 flex-col bg-white'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
