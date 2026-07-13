import React from "react";
import Link from "next/link";
import { ButtonState, PageHeader } from "@/components";

export default function Defence() {
  const capabilities = [
    {
      title: "Tactical Network Simulation",
      description: "Model and test radio frequency interfaces, jamming patterns, and encrypted satellite link networks."
    },
    {
      title: "Armored Vehicle Simulation",
      description: "Physically-accurate simulators designed to train crew members in navigation, tactical maneuvers, and operations."
    },
    {
      title: "Logistics Optimization",
      description: "Predict operational supply chain requirements, route planning safety, and warehouse dispatch algorithms."
    }
  ];

  return (
    <div className="w-full bg-zinc-50/30">
      <PageHeader
        title="Defence Systems"
        tagline="Zero-trust combat simulation platforms, tactical network optimization, and vehicle engineering training models."
        button={[
          { text: "Request Secure Briefing", type: ButtonState.PRIMARY },
          { text: "Download Capabilities Brochure", type: ButtonState.NEUTRAL }
        ]}
      />
      
      <div className="mx-auto max-w-7xl px-6 sm:px-8 py-16 sm:py-24">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-zinc-900 font-bold mb-4">Secure Mission & Systems Simulation</h2>
          <p className="text-zinc-600 text-sm leading-relaxed">
            Engineered with strict zero-trust standards, our Defence platforms support armed forces and defence contractors in configuring vehicle layouts, verifying tactical satellite routing, and auditing operations.
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
