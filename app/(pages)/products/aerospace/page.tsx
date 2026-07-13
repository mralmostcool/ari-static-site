import React from "react";
import Link from "next/link";
import { ButtonState, PageHeader } from "@/components";

export default function Aerospace() {
  const capabilities = [
    {
      title: "Avionics System Modeling",
      description: "Test software flight displays, autopilot controls, and landing gear sequencing in real-time simulators."
    },
    {
      title: "Atmospheric & Flight Physics",
      description: "Accurate physical modeling of air flow, lift, crosswind forces, and high-altitude turbulences."
    },
    {
      title: "Drone Swarm Operations",
      description: "Simulate and verify swarm flight paths, collision-avoidance logic, and communication bandwidth configurations."
    }
  ];

  return (
    <div className="w-full bg-zinc-50/30">
      <PageHeader
        title="Aerospace Engineering"
        tagline="Aviation simulation software, high-altitude autopilot training, and navigation algorithm modeling."
        button={[
          { text: "Request Aerospace Demo", type: ButtonState.PRIMARY },
          { text: "View Specs", type: ButtonState.NEUTRAL }
        ]}
      />
      
      <div className="mx-auto max-w-7xl px-6 sm:px-8 py-16 sm:py-24">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-zinc-900 font-bold mb-4">Flight Dynamics & Avionics Optimization</h2>
          <p className="text-zinc-600 text-sm leading-relaxed">
            Our Aerospace suite provides aeronautical engineers and research groups with robust tools to verify autopilot responses, model aerodynamic crosswinds, and build high-fidelity cockpit training software.
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
