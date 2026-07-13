'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Newsroom', href: '/newsroom' },
    { name: 'Clients', href: '/clients' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Training', href: '/training' },
    { name: 'Contact Us', href: '/contact-us' },
  ];

  return (
    <header className='sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/80 backdrop-blur-md'>
      <div className='mx-auto flex max-w-7xl h-16 items-center justify-between px-6 sm:px-8'>
        {/* Logo */}
        <Link href='/' className='flex items-center gap-2'>
          <span className='text-xl font-bold tracking-tight text-zinc-900 font-sans'>
            ARI <span className='text-zinc-500 font-normal'>Corp</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className='hidden md:flex items-center gap-8'>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-zinc-950 ${
                  isActive ? 'text-zinc-950 font-semibold' : 'text-zinc-500'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className='hidden md:flex items-center'>
          <Link
            href='/contact-us'
            className='flex h-9 items-center justify-center rounded-full bg-zinc-900 px-4 text-xs font-semibold text-white transition-all hover:bg-zinc-800'
          >
            Get in touch
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className='flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 hover:bg-zinc-50 md:hidden'
          aria-label='Toggle Menu'
        >
          {isMobileMenuOpen ? (
            <svg
              className='h-5 w-5'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          ) : (
            <svg
              className='h-5 w-5'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isMobileMenuOpen && (
        <div className='border-b border-zinc-200 bg-white px-6 py-4 md:hidden'>
          <nav className='flex flex-col gap-4'>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-medium transition-colors ${
                    isActive ? 'text-zinc-950 font-bold' : 'text-zinc-500'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              href='/contact-us'
              onClick={() => setIsMobileMenuOpen(false)}
              className='mt-2 flex h-10 w-full items-center justify-center rounded-full bg-zinc-900 text-sm font-semibold text-white'
            >
              Get in touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
