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
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center md:p-4">
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
              className="relative w-full md:max-w-4xl bg-white md:rounded-3xl shadow-2xl z-10 md:border border-zinc-100 flex flex-col md:flex-row overflow-hidden h-full md:h-auto md:max-h-[95vh]"
            >
              {/* Left Sidebar Panel (styled dark B2B info column) */}
              <div className="hidden md:flex md:w-[42%] bg-sky-950 p-8 text-white flex-col justify-between relative overflow-hidden">
                {/* Background structural overlay elements */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.15),transparent_60%)] pointer-events-none" />
                
                <div className="relative z-10">
                  {/* Monogram logo symbol */}
                  <div className="h-10 w-auto mb-8 flex items-center">
                    <Image
                      src="/ari-logo.svg"
                      alt="ARI Logo"
                      width={85}
                      height={53}
                      className="brightness-0 invert object-contain h-[45px] w-auto"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight leading-snug">
                    Global Simulation Partners
                  </h3>
                  <p className="text-xs text-sky-200/80 leading-relaxed mt-2.5">
                    Over 28 years delivering custom-tailored simulation solutions for maritime, defence, and aviation sectors worldwide.
                  </p>
                  
                  <div className="flex flex-col gap-4 mt-8">
                    <div className="flex items-start gap-3">
                      <svg className="h-4.5 w-4.5 text-sky-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-xs text-zinc-100 font-medium leading-relaxed">
                        Certified Class A Systems (DNV & LRQA approved)
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="h-4.5 w-4.5 text-sky-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-xs text-zinc-100 font-medium leading-relaxed">
                        Military-grade simulation fidelity
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <svg className="h-4.5 w-4.5 text-sky-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-xs text-zinc-100 font-medium leading-relaxed">
                        Global maintenance & support
                      </span>
                    </div>
                  </div>
                </div>

                <div className="relative z-10 border-t border-sky-900/50 pt-6">
                  <Link
                    href="/contact-us"
                    onClick={handleClose}
                    className="flex h-12 items-center justify-between px-5 rounded-xl border border-sky-500/20 bg-sky-500/10 text-xs font-semibold text-white transition-all hover:bg-sky-500/20"
                  >
                    <span>View Addresses & Locations</span>
                    <span className="text-sky-300 font-bold text-sm">&rarr;</span>
                  </Link>
                </div>
              </div>

              {/* Right Form Panel */}
              <div className="flex-1 flex flex-col p-8 bg-white overflow-y-auto relative">
                {/* Close Button */}
                <button
                  onClick={handleClose}
                  className="absolute top-6 right-6 text-zinc-400 hover:text-zinc-600 transition-colors z-10"
                  aria-label="Close form"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* Success Message or Form */}
                {isFormSubmitted ? (
                  <div className="text-center py-12 flex flex-col justify-center h-full max-w-sm mx-auto">
                    <div className="h-14 w-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-6 border border-emerald-100 shadow-xs">
                      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-zinc-950 mb-2.5">Request Submitted</h3>
                    <p className="text-sm text-zinc-500 leading-relaxed">
                      Thank you for reaching out. We have received your inquiry. A simulation solutions specialist will contact you within one business day.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="flex flex-col flex-1 h-full">
                    <div className="flex-1 flex flex-col">
                      <h2 className="text-2xl font-bold text-zinc-900 tracking-tight">Talk to our team</h2>
                      <p className="text-xs text-zinc-500 mt-1.5 mb-6">
                        Get expert guidance for the right solution.
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                        <div>
                          <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1.5">Full Name</label>
                          <input
                            type="text"
                            required
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 text-sm placeholder-zinc-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-zinc-900 bg-zinc-50/20"
                            placeholder="John Doe"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1.5">Email Address</label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 text-sm placeholder-zinc-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-zinc-900 bg-zinc-50/20"
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                        <div>
                          <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1.5">Organization</label>
                          <input
                            type="text"
                            required
                            value={formData.organization}
                            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 text-sm placeholder-zinc-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-zinc-900 bg-zinc-50/20"
                            placeholder="Company / Agency"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1.5">Country</label>
                          <input
                            type="text"
                            required
                            value={formData.country}
                            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 text-sm placeholder-zinc-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-zinc-900 bg-zinc-50/20"
                            placeholder="United States"
                          />
                        </div>
                      </div>

                      <div className="mb-5">
                        <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1.5">Product Name</label>
                        <input
                          type="text"
                          required
                          value={formData.productName}
                          onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 text-sm placeholder-zinc-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-zinc-900 bg-zinc-50/20"
                          placeholder="e.g. Maritime Engine Room Simulator"
                        />
                      </div>

                      <div className="flex-1 mb-0">
                        <label className="block text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-1.5">Message / Requirements</label>
                        <textarea
                          required
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full h-full min-h-[100px] px-4 py-2.5 rounded-xl border border-zinc-200 text-sm placeholder-zinc-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none text-zinc-900 bg-zinc-50/20"
                          placeholder="Describe your simulation or training requirements..."
                        />
                      </div>
                    </div>

                    <div className="mt-6 flex-shrink-0">
                      <p className="text-[10px] text-zinc-400 text-center mb-3 font-semibold uppercase tracking-wider">
                        Our team reviews all incoming inquiries promptly.
                      </p>
                      <button
                        type="submit"
                        disabled={isFormSubmitting}
                        className="flex h-12 w-full items-center justify-center rounded-xl bg-primary text-sm font-semibold text-white transition-all hover:bg-primary-dark disabled:opacity-50 shadow-sm"
                      >
                        {isFormSubmitting ? 'Sending Request...' : 'Send Request'}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
