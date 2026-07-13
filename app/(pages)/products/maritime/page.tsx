import React from "react";
import Link from "next/link";
import { ButtonState, PageHeader } from "@/components";

export default function Maritime() {
  const capabilities = [
    {
      title: "Bridge Simulation Solutions",
      description: "Full-mission navigation setups mimicking real-world naval environments and vessel physics for helm crew onboarding."
    },
    {
      title: "Marine Traffic & Dispatch Models",
      description: "Simulate and predict harbor congestion, weather routing impacts, and port operations under stress conditions."
    },
    {
      title: "Vessel Propulsion Modeling",
      description: "Test propulsion algorithms and power management systems in simulated rough-seas scenarios."
    }
  ];

  return (
    <div className="w-full bg-zinc-50/30">
      <PageHeader
        title="Maritime Simulation"
        tagline="Next-generation simulation platforms and control software for naval vessels and maritime navigation."
        button={[
          { text: "Request Maritime Demo", type: ButtonState.PRIMARY },
          { text: "Contact Maritime Expert", type: ButtonState.NEUTRAL }
        ]}
      />
      
      <div className="mx-auto max-w-7xl px-6 sm:px-8 py-16 sm:py-24">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-zinc-900 font-bold mb-4">Naval & Cargo Simulation Platforms</h2>
          <p className="text-zinc-600 text-sm leading-relaxed">
            Our Maritime suite provides comprehensive physical modeling of ship dynamics, environmental wave interactions, and port logistics grids. Trusted by port authorities and shipping lines globally.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {capabilities.map((cap, idx) => (
            <div key={idx} className="rounded-3xl border border-zinc-200 bg-white p-8">
              <h4 className="text-zinc-900 font-semibold mb-3">{cap.title}</h4>
              <p className="text-zinc-500 text-sm leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
