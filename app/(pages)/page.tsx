import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-zinc-50 to-white py-20 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="flex flex-col items-center text-center gap-8 max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-800">
              Introducing Enterprise Solutions 2.0
            </span>
            
            <h1 className="heading-display text-zinc-900 tracking-tight">
              Empower Your Enterprise with High-Performance B2B Solutions
            </h1>

            <p className="text-zinc-600 text-lg leading-relaxed max-w-2xl">
              ARI Corp provides customized software systems, executive level training, and technical advisory to modern corporate teams worldwide.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row justify-center w-full sm:w-auto">
              <Link
                href="/products"
                className="flex h-12 items-center justify-center rounded-full bg-zinc-900 px-6 text-sm font-semibold text-white transition-all hover:bg-zinc-800"
              >
                Explore Products
              </Link>
              <Link
                href="/training"
                className="flex h-12 items-center justify-center rounded-full border border-zinc-200 bg-white px-6 text-sm font-semibold text-zinc-900 transition-all hover:bg-zinc-50"
              >
                Browse Training
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="border-y border-zinc-200 bg-zinc-50 py-12">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
            <div>
              <p className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 font-sans">99.9%</p>
              <p className="text-xs text-zinc-500 font-semibold uppercase mt-1">Platform Uptime</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 font-sans">150+</p>
              <p className="text-xs text-zinc-500 font-semibold uppercase mt-1">Enterprise Clients</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 font-sans">10k+</p>
              <p className="text-xs text-zinc-500 font-semibold uppercase mt-1">Professionals Trained</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-950 font-sans">24/7</p>
              <p className="text-xs text-zinc-500 font-semibold uppercase mt-1">Dedicated Support</p>
            </div>
          </div>
        </div>
      </section>

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
                <div className="h-10 w-10 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-900 mb-6">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <div className="h-10 w-10 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-900 mb-6">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                <div className="h-10 w-10 rounded-lg bg-zinc-100 flex items-center justify-center text-zinc-900 mb-6">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
