import React from "react";
import { ButtonState, PageHeader, ProductCard } from "@/components";

export default function Maritime() {
  const products = [
    {
      title: "Bridge Simulation Solutions",
      description: "Full-mission navigation setups mimicking real-world naval environments and vessel physics for helm crew onboarding.",
      imageSrc: "/placeholder-image.png",
      productsIncluded: [
        "ECDIS Simulator",
        "GMDSS & Communication Simulator",
        "RADAR / ARPA Simulator"
      ]
    },
    {
      title: "Marine Traffic & Dispatch Models",
      description: "Simulate and predict harbor congestion, weather routing impacts, and port operations under stress conditions.",
      imageSrc: "/placeholder-image.png",
      productsIncluded: [
        "Vessel Traffic Service (VTS)",
        "Harbor Traffic Optimizer",
        "Weather Route Planner"
      ]
    },
    {
      title: "Vessel Propulsion Modeling",
      description: "Test propulsion algorithms and power management systems in simulated rough-seas scenarios.",
      imageSrc: "/placeholder-image.png",
      productsIncluded: [
        "Engine Room Simulator",
        "Propulsion Control System",
        "Electrical Power Grid Simulator"
      ]
    }
  ];

  return (
    <div className="w-full bg-white">
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
