"use client";

import React, { useState } from "react";
import { ButtonState, PageHeader, ProductCard, ContactModal } from "@/components";

export default function Maritime() {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
      imageSrc: "/placeholder-image.png"
    },
    {
      title: "Vessel Propulsion Modeling",
      description: "Test propulsion algorithms and power management systems in simulated rough-seas scenarios.",
      imageSrc: "/placeholder-image.png",
    }
  ];

  return (
    <div className="w-full bg-white">
      <PageHeader
        title="Maritime Simulation"
        tagline="Next-generation simulation platforms and control software for naval vessels and maritime navigation."
        button={[
          { text: "Download Brochure", type: ButtonState.NEUTRAL },
          { text: "Contact Us", type: ButtonState.PRIMARY, onClick: () => setIsModalOpen(true) }
        ]}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-4 py-16 sm:py-24 pt-4 sm:pt-4">
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
        productName="Maritime Simulation"
      />
    </div>
  );
}
