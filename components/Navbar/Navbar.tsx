'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import ContactModal from '../ContactModal/ContactModal';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const isHomepage = pathname === '/';
  const isLightTheme = isHomepage && !isScrolled && !isMobileMenuOpen;

  useEffect(() => {
    if (!isHomepage) {
      setIsScrolled(false);
      return;
    }
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomepage]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Newsroom', href: '/newsroom' },
    { name: 'Clients', href: '/clients' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Training', href: '/training' },
  ];

  const headerClass = isHomepage
    ? (isScrolled || isMobileMenuOpen)
      ? 'fixed top-0 left-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-zinc-200/80 transition-all duration-300 shadow-sm'
      : 'absolute top-0 left-0 z-50 w-full bg-transparent border-transparent transition-all duration-300'
    : 'sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-zinc-200/80';

  return (
    <>
      <header className={headerClass}>
        <div className='mx-auto flex max-w-7xl py-5 px-5 md:px-8 items-center justify-between'>
          {/* Logo */}
          <Link href='/' className='flex items-center'>
            <Image
              src='/ari-logo.svg'
              alt='ARI Corp Logo'
              width={118}
              height={74}
              className={`h-[53px] sm:h-[64px] md:h-[74px] w-auto object-contain transition-all duration-300 ${isLightTheme ? 'brightness-0 invert' : ''
                }`}
              priority
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className='hidden md:flex items-center gap-6'>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors ${isLightTheme
                    ? isActive
                      ? 'text-white font-semibold'
                      : 'text-zinc-200 hover:text-white'
                    : isActive
                      ? 'text-zinc-950 font-semibold'
                      : 'text-zinc-500 hover:text-zinc-950'
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className='hidden md:flex items-center'>
            <button
              onClick={() => setIsModalOpen(true)}
              className={`flex h-12 items-center justify-center rounded-xl px-6 text-sm font-semibold transition-all ${isLightTheme
                ? 'bg-surface-light text-primary-dark hover:bg-btn-neutral-sky'
                : 'bg-primary-dark text-white hover:bg-primary'
                }`}
            >
              Get in touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`flex items-center justify-center transition-all focus:outline-none md:hidden ${isLightTheme
              ? 'text-zinc-200 hover:text-white'
              : 'text-zinc-600 hover:text-zinc-950'
              }`}
            aria-label='Toggle Menu'
          >
            {isMobileMenuOpen ? (
              <svg
                className='h-8 w-8'
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
                className='h-8 w-8'
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
                    className={`text-sm font-medium transition-colors ${isActive ? 'text-zinc-950 font-bold' : 'text-zinc-500'
                      }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsModalOpen(true);
                }}
                className='mt-2 flex h-12 w-full items-center justify-center rounded-xl bg-primary-dark text-sm font-semibold text-white hover:bg-primary transition-all'
              >
                Get in touch
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Contact Form Modal */}
      <ContactModal isOpen={isModalOpen} onClose={handleClose} />
    </>
  );
}
