import type { Metadata } from 'next';
import { Figtree, Inter } from 'next/font/google';
import './globals.css';
import { LenisProvider } from '@/components';

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
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
