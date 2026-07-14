"use client";

import React, { useState } from "react";
import { ButtonState, PageHeader, ProductCard, ContactModal } from "@/components";

export default function Aerospace() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const products = [
    {
      title: "Avionics System Modeling Suite",
      description: "Test software flight displays, autopilot controls, and landing gear sequencing in real-time simulators.",
      imageSrc: "/placeholder-image.png",
      productsIncluded: [
        "Primary Flight Display (PFD) Modeler",
        "Navigation Display Emulator",
        "Autopilot Logic Verifier"
      ]
    },
    {
      title: "Atmospheric & Flight Physics Core",
      description: "Accurate physical modeling of air flow, lift, drag, crosswind forces, and high-altitude turbulences.",
      imageSrc: "/placeholder-image.png",
      productsIncluded: [
        "Aerodynamic Wind Tunnel Modeler",
        "Turbulence Profile Engine",
        "Atmospheric Condition Builder"
      ]
    },
    {
      title: "Drone Swarm & UAV Operations",
      description: "Simulate and verify swarm flight paths, collision-avoidance logic, and communication bandwidth configurations.",
      imageSrc: "/placeholder-image.png",
      productsIncluded: [
        "Multi-UAV Path Planner",
        "Collision Avoidance Simulator",
        "Swarm Communication Mesh Modeler"
      ]
    }
  ];

  return (
    <div className="w-full bg-white">
      <PageHeader
        title="Aerospace Engineering"
        tagline="Aviation simulation software, high-altitude autopilot training, and navigation algorithm modeling."
        button={[
          { text: "Download Brochure", type: ButtonState.NEUTRAL },
          { text: "Contact Us", type: ButtonState.PRIMARY, onClick: () => setIsModalOpen(true) }
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

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName="Aerospace Engineering"
      />
    </div>
  );
}
