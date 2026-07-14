import React from "react";
import { ButtonState, PageHeader, ProductCard } from "@/components";

export default function Defence() {
  const products = [
    {
      title: "Tactical Network Simulation Suite",
      description: "Model and test high-frequency radio interfaces, jamming patterns, and encrypted satellite links in real-time tactical environments.",
      imageSrc: "/placeholder-image.png",
      productsIncluded: [
        "RF Propagation Modeler",
        "Encrypted Satellite Terminal Simulator",
        "Jamming & Interference Emulator"
      ]
    },
    {
      title: "Armored Vehicle Simulators",
      description: "Physically-accurate simulator platforms designed to train crew members in navigation, tactical maneuvers, and armored combat operations.",
      imageSrc: "/placeholder-image.png",
      productsIncluded: [
        "Driver Trainer Simulator",
        "Gunner Command Console",
        "Tactical Operations Dispatch"
      ]
    },
    {
      title: "Logistics & Tactical Supply Planner",
      description: "Operational supply chain models to optimize routing, route planning safety, and warehouse dispatch algorithms under extreme conditions.",
      imageSrc: "/placeholder-image.png",
      productsIncluded: [
        "Dynamic Route Optimizer",
        "Fuel Supply Line Modeler",
        "Dispatch Scheduling Core"
      ]
    }
  ];

  return (
    <div className="w-full bg-white">
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
          {products.map((product, idx) => (
            <ProductCard
              key={idx}
              title={product.title}
              description={product.description}
              imageSrc={product.imageSrc}
              productsIncluded={product.productsIncluded}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
