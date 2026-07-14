"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface CounterProps {
  value: number;
  suffix?: string;
}

function Counter({ value, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 1300; // 1.3 seconds
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrameId);
  }, [value]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero + KPI Area (100vh on desktop, 75vh on mobile) */}
      <div className="relative w-full flex flex-col justify-between min-h-[75vh] md:h-screen md:min-h-[750px] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/conor-sexton-unsplash-hero-image.jpg"
          alt="Hero Background"
          fill
          priority
          className="object-cover object-center z-0"
        />
        
        {/* Gradient Overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-950/60 via-sky-900/30 to-sky-950/90 z-10" />

        {/* Hero Section */}
        <section className="relative z-20 flex-grow flex items-end pt-[140px] pb-12 md:pt-[160px] md:pb-20 text-white">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 w-full">
            <div className="flex flex-col items-start text-left gap-6 md:gap-8 max-w-4xl mr-auto">
              <div className="flex flex-col items-start text-left gap-2.5 md:gap-3.5">
                <h1 className="heading-display text-white tracking-tight leading-tight">
                  SOLUTIONS FOR MISSION CRITICAL OPERATIONS
                </h1>

                <p className="text-sky-100/90 text-base md:text-lg leading-relaxed max-w-3xl">
                  Global leader in sophisticated simulation and training solutions for the defence, maritime and offshore industries. Over 28 years of expertise with 1500+ installations worldwide.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row justify-start w-full sm:w-auto">
                <Link
                  href="/contact-us"
                  className="flex h-12 items-center justify-center rounded-xl bg-white px-6 text-sm font-semibold text-sky-900 transition-all hover:bg-sky-50 shadow-sm"
                >
                  Request A Demo
                </Link>
                <Link
                  href="/products"
                  className="flex h-12 items-center justify-center rounded-xl border border-sky-600/30 bg-sky-700/30 px-6 text-sm font-semibold text-white transition-all hover:bg-sky-700/50"
                >
                  Our Products
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="relative z-20 border-t border-white/10 bg-sky-950/30 py-10 md:py-12 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <div className="grid grid-cols-2 gap-y-10 gap-x-6 md:grid-cols-4 text-center">
              <div>
                <p className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-sans">
                  <Counter value={1500} suffix="+" />
                </p>
                <p className="text-xs text-sky-200 font-semibold uppercase tracking-wider mt-2.5 leading-relaxed">
                  Installations<br/>worldwide
                </p>
              </div>
              <div>
                <p className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-sans">
                  <Counter value={28} suffix="+" />
                </p>
                <p className="text-xs text-sky-200 font-semibold uppercase tracking-wider mt-2.5 leading-relaxed">
                  Years of<br/>experience
                </p>
              </div>
              <div>
                <p className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-sans">
                  <Counter value={55} suffix="+" />
                </p>
                <p className="text-xs text-sky-200 font-semibold uppercase tracking-wider mt-2.5 leading-relaxed">
                  Copyrights<br/>and patents
                </p>
              </div>
              <div>
                <p className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-sans">
                  <Counter value={60} suffix="+" />
                </p>
                <p className="text-xs text-sky-200 font-semibold uppercase tracking-wider mt-2.5 leading-relaxed">
                  Number of<br/>countries
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Core Services/Offerings Grid */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="flex flex-col gap-12 sm:gap-16">
            <div className="max-w-2xl">
              <h2 className="text-zinc-900 font-bold">What We Deliver</h2>
              <p className="text-zinc-600 text-base leading-relaxed mt-2">
                We combine industry-leading software products with tailored technical workshops to drive corporate efficiency.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Card 1 */}
              <div className="rounded-2xl border border-zinc-200 bg-white p-8 transition-all hover:shadow-md hover:border-zinc-300">
                 <div className="text-zinc-900 mb-6 flex items-center">
                   <svg className="h-7 w-7 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                   </svg>
                 </div>
                <h4 className="text-zinc-900 font-semibold mb-2">Bespoke Software</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Enterprise-grade platforms and integrations tailored specifically to optimize corporate workflows and system performance.
                </p>
                <Link href="/products" className="inline-flex items-center text-xs font-semibold text-zinc-900 hover:text-zinc-700 mt-6 gap-1 group">
                  Learn more <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </Link>
              </div>

              {/* Card 2 */}
              <div className="rounded-2xl border border-zinc-200 bg-white p-8 transition-all hover:shadow-md hover:border-zinc-300">
                 <div className="text-zinc-900 mb-6 flex items-center">
                   <svg className="h-7 w-7 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.832.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                   </svg>
                 </div>
                <h4 className="text-zinc-900 font-semibold mb-2">Professional Training</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Tailored development courses and workshops designed to upskill engineering and management teams with the latest methodologies.
                </p>
                <Link href="/training" className="inline-flex items-center text-xs font-semibold text-zinc-900 hover:text-zinc-700 mt-6 gap-1 group">
                  Learn more <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </Link>
              </div>

              {/* Card 3 */}
              <div className="rounded-2xl border border-zinc-200 bg-white p-8 transition-all hover:shadow-md hover:border-zinc-300">
                 <div className="text-zinc-900 mb-6 flex items-center">
                   <svg className="h-7 w-7 text-sky-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                   </svg>
                 </div>
                <h4 className="text-zinc-900 font-semibold mb-2">Technical Advisory</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Strategic guidance on engineering scale, cloud architecture audit, and transition frameworks for complex environments.
                </p>
                <Link href="/about-us" className="inline-flex items-center text-xs font-semibold text-zinc-900 hover:text-zinc-700 mt-6 gap-1 group">
                  Learn more <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
