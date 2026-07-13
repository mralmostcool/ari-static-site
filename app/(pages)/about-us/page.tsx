import React from "react";
import { ButtonState, PageHeader } from "@/components";

export default function AboutUs() {
  const values = [
    {
      title: "Technical Excellence",
      description: "We write clean code, audit thoroughly, and reject half-baked solutions. Quality is core to our systems."
    },
    {
      title: "Zero-Trust Philosophy",
      description: "Security is never an afterthought. We advocate zero-trust protocols across all software and operations layers."
    },
    {
      title: "Practical Education",
      description: "We don't teach just theories. Our training courses deliver actionable knowledge engineering teams apply instantly."
    }
  ];

  return (
    <div className="w-full bg-zinc-50/30">
      <PageHeader
        title="About Us"
        tagline="Founded by a collaborative group of platform developers and systems architects, ARI Corp was established to help enterprise organizations scale safely."
        button={[
          { text: "View Careers", type: ButtonState.PRIMARY },
          { text: "Read Our Story", type: ButtonState.NEUTRAL }
        ]}
      />
      <div className="mx-auto max-w-7xl px-6 sm:px-8 py-16 sm:py-24">

        {/* Values grid */}
        <div className="mb-20">
          <h2 className="text-zinc-900 font-bold mb-12">Core Principles</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {values.map((val, idx) => (
              <div key={idx} className="rounded-3xl border border-zinc-200 bg-white p-8">
                <h4 className="text-zinc-900 font-semibold mb-3">{val.title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Brief Team description */}
        <div className="rounded-3xl border border-zinc-200 bg-white p-8 sm:p-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-zinc-900 font-bold mb-4">Our Leadership</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Our team consists of industry veterans who have managed systems architectures at major tech companies, cloud providers, and global scale enterprises.
              </p>
            </div>
            <div className="flex flex-col justify-center border-t border-zinc-100 pt-6 md:border-t-0 md:border-l md:border-zinc-200 md:pt-0 md:pl-8">
              <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">Global Presence</p>
              <p className="text-sm font-semibold text-zinc-800">
                Operating remotely across San Francisco, London, Munich, and Bangalore to service clients worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
