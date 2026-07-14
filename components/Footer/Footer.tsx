import React from "react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-zinc-200 bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 border">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {/* Brand/About info */}
          <div className="flex flex-col gap-4">
            <span className="text-lg font-bold tracking-tight text-zinc-900 font-sans">
              ARI <span className="text-zinc-500 font-normal">Corp</span>
            </span>
            <p className="max-w-xs text-xs leading-relaxed text-zinc-500">
              Delivering high-performance, enterprise-grade B2B solutions and corporate training to empower global teams.
            </p>
          </div>

          {/* Site Navigation links */}
          <div className="flex flex-col gap-3">
            <h6 className="text-xs font-semibold uppercase tracking-wider text-zinc-800">
              Corporate
            </h6>
            <nav className="flex flex-col gap-2">
              <Link href="/about-us" className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors">
                About Us
              </Link>
              <Link href="/clients" className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors">
                Clients
              </Link>
              <Link href="/newsroom" className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors">
                Newsroom
              </Link>
            </nav>
          </div>

          {/* Solutions links */}
          <div className="flex flex-col gap-3">
            <h6 className="text-xs font-semibold uppercase tracking-wider text-zinc-800">
              Solutions
            </h6>
            <nav className="flex flex-col gap-2">
              <Link href="/products" className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors">
                Products & Services
              </Link>
              <Link href="/training" className="text-xs text-zinc-500 hover:text-zinc-900 transition-colors">
                Training Programs
              </Link>
            </nav>
          </div>

          {/* Contacts info */}
          <div className="flex flex-col gap-3">
            <h6 className="text-xs font-semibold uppercase tracking-wider text-zinc-800">
              Office
            </h6>
            <p className="text-xs leading-relaxed text-zinc-500">
              100 Enterprise Way, Suite 400<br />
              Silicon Valley, CA 94025
            </p>
            <p className="text-xs text-zinc-500">
              Email:{" "}
              <a href="mailto:info@aricorp.com" className="hover:text-zinc-900 transition-colors font-medium">
                info@aricorp.com
              </a>
            </p>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t border-zinc-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] text-zinc-500">
            &copy; {currentYear} ARI Corp. All rights reserved. Only light theme enabled.
          </p>
          <div className="flex gap-4">
            <a href="/privacy-policy" className="text-[11px] text-zinc-400 hover:text-zinc-600 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="text-[11px] text-zinc-400 hover:text-zinc-600 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
