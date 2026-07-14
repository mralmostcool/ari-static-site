'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    organization: '',
    country: '',
    productName: '',
    message: '',
  });
  const [isFormSubmitting, setIsFormSubmitting] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleClose = () => {
    setIsModalOpen(false);
    setIsFormSubmitted(false);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsFormSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsFormSubmitting(false);
    setIsFormSubmitted(true);
    setFormData({
      fullName: '',
      email: '',
      organization: '',
      country: '',
      productName: '',
      message: '',
    });
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
              ? 'bg-white text-zinc-900 hover:bg-zinc-100'
              : 'bg-zinc-900 text-white hover:bg-zinc-800'
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
              className='mt-2 flex h-12 w-full items-center justify-center rounded-xl bg-zinc-900 text-sm font-semibold text-white'
            >
              Get in touch
            </button>
          </nav>
        </div>
      )}

      {/* Contact Form Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-zinc-950/45 backdrop-blur-sm"
              onClick={handleClose}
            />

            {/* Modal Card */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="relative w-full max-w-lg bg-white rounded-2xl p-6 sm:p-8 shadow-2xl z-10 border border-zinc-150 overflow-y-auto max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-600 transition-colors"
                aria-label="Close form"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Success Message or Form */}
              {isFormSubmitted ? (
                <div className="text-center py-8">
                  <div className="h-12 w-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-zinc-950 mb-2">Request Received</h3>
                  <p className="text-sm text-zinc-500 max-w-sm mx-auto">
                    Thank you for reaching out! We have received your request and our team will get in touch with you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <h2 className="text-xl font-bold text-zinc-900">Get in Touch</h2>
                    <p className="text-xs text-zinc-500 mt-1">Please fill in your details below to request more information.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 text-sm placeholder-zinc-400 focus:outline-none focus:border-zinc-950 focus:ring-1 focus:ring-zinc-950 text-zinc-900 bg-white"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1">Email Address</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 text-sm placeholder-zinc-400 focus:outline-none focus:border-zinc-950 focus:ring-1 focus:ring-zinc-950 text-zinc-900 bg-white"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1">Organization</label>
                      <input
                        type="text"
                        required
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 text-sm placeholder-zinc-400 focus:outline-none focus:border-zinc-950 focus:ring-1 focus:ring-zinc-950 text-zinc-900 bg-white"
                        placeholder="ARI Corp"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1">Country</label>
                      <input
                        type="text"
                        required
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 text-sm placeholder-zinc-400 focus:outline-none focus:border-zinc-950 focus:ring-1 focus:ring-zinc-950 text-zinc-900 bg-white"
                        placeholder="United States"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1">Product Name</label>
                    <input
                      type="text"
                      required
                      value={formData.productName}
                      onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 text-sm placeholder-zinc-400 focus:outline-none focus:border-zinc-950 focus:ring-1 focus:ring-zinc-950 text-zinc-900 bg-white"
                      placeholder="e.g. Maritime Engine Room Simulator"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-1">Message</label>
                    <textarea
                      required
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 text-sm placeholder-zinc-400 focus:outline-none focus:border-zinc-950 focus:ring-1 focus:ring-zinc-950 resize-none text-zinc-900 bg-white"
                      placeholder="Describe your simulation or training requirements..."
                    />
                  </div>

                  <button
                     type="submit"
                     disabled={isFormSubmitting}
                     className="flex h-12 w-full items-center justify-center rounded-xl bg-zinc-900 text-sm font-semibold text-white transition-all hover:bg-zinc-800 disabled:opacity-50"
                  >
                    {isFormSubmitting ? 'Sending Request...' : 'Send Request'}
                  </button>

                  <p className="text-xs text-zinc-400 text-center mt-3 font-medium">
                    we read every message and will get back to you promptly
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}
