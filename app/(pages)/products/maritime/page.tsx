"use client";

import React, { useState } from "react";
import { MARITIME_PRODUCTS } from "@/lib/products";
import type { ProductType } from "@/lib/products/productType";
import { ButtonState, PageHeader, ProductCard, ContactModal } from "@/components";

export default function Maritime() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full bg-white">
      <PageHeader
        title="Maritime Simulation"
        tagline="Next-generation simulation platforms and control software for naval vessels and maritime navigation."
        button={[
          { text: "Download Brochure", type: ButtonState.PRIMARY },
          { text: "Contact Us", type: ButtonState.NEUTRAL, onClick: () => setIsModalOpen(true) }
        ]}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-4 py-16 sm:py-24 pt-4 sm:pt-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {MARITIME_PRODUCTS.map((product, idx) => (
            <ProductCard
              key={idx}
              title={product.title}
              description={product.description}
              imageSrc={product.imageSrc}
              productsIncluded={product.productsIncluded}
              sector="maritime"
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
