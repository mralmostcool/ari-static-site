import React from "react";
import Link from "next/link";
import { ButtonState, PageHeader } from "@/components";

export default function Clients() {
  const caseStudies = [
    {
      company: "Apex Supply Chain",
      headline: "Optimizing global route dispatch algorithms",
      stat: "35% Faster Transit",
      details: "By integrating ARI CloudSuite orchestration pipelines, Apex resolved scheduling bottlenecks across its 40+ logistics hubs."
    },
    {
      company: "Nexus Finance Group",
      headline: "Zero-Trust security platform migration",
      stat: "100% Identity Audit Compliance",
      details: "Nexus deployed ARI SecurePass to enforce zero-trust policies, ensuring seamless compliance logging for enterprise transactions."
    }
  ];

  return (
    <div className="w-full bg-zinc-50/30">
      <PageHeader
        title="Clients"
        tagline="We partner with innovative organizations across finance, logistics, and tech to secure infrastructure, scale tools, and upskill teams."
        button={[
          { text: "Read Case Studies", type: ButtonState.PRIMARY },
          { text: "Partner Ecosystem", type: ButtonState.NEUTRAL }
        ]}
      />
      <div className="mx-auto max-w-7xl px-6 sm:px-8 py-16 sm:py-24">

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 mb-20">
          {caseStudies.map((cs, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-8 transition-all hover:shadow-md hover:border-zinc-300"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-bold text-zinc-800 uppercase tracking-widest">
                    {cs.company}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-medium text-emerald-800">
                    Case Study
                  </span>
                </div>
                <h3 className="text-zinc-900 font-bold mb-4">{cs.headline}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed mb-8">
                  {cs.details}
                </p>
              </div>
              <div className="pt-6 border-t border-zinc-100 flex items-center justify-between">
                <span className="text-sm font-bold text-zinc-900">{cs.stat}</span>
                <Link
                  href="/contact-us"
                  className="text-xs font-bold text-zinc-900 hover:text-zinc-700"
                >
                  Read details
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Quote */}
        <div className="rounded-3xl bg-zinc-900 p-8 sm:p-12 text-white">
          <blockquote className="max-w-3xl">
            <p className="text-lg sm:text-xl font-medium leading-relaxed font-sans">
              &ldquo;ARI Corp has been pivotal in upskilling our engineering divisions. Their zero-trust training curriculum shifted our development practices toward robust security safeguards from day one.&rdquo;
            </p>
            <footer className="mt-6 flex flex-col sm:flex-row sm:items-center gap-2">
              <span className="text-sm font-bold text-white">Sarah Jenkins</span>
              <span className="hidden sm:inline text-zinc-400">•</span>
              <span className="text-xs text-zinc-400 font-semibold uppercase tracking-wider">VP of Platform Engineering, Nexus Finance</span>
            </footer>
          </blockquote>
        </div>
      </div>
    </div>
  );
}
