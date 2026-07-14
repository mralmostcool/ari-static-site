"use client";

import React, { useState } from "react";
import { AEROSPACE_PRODUCTS } from "@/lib/products";
import type { ProductType } from "@/lib/products/productType";
import { ButtonState, PageHeader, ProductCard, ContactModal } from "@/components";

export default function Aerospace() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full bg-white">
      <PageHeader
        title="Aerospace Engineering"
        tagline="Aviation simulation software, high-altitude autopilot training, and navigation algorithm modeling."
        button={[
          { text: "Download Brochure", type: ButtonState.PRIMARY },
          { text: "Contact Us", type: ButtonState.NEUTRAL, onClick: () => setIsModalOpen(true) }
        ]}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-4 py-16 sm:py-24 pt-4 sm:pt-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {AEROSPACE_PRODUCTS.map((product, idx) => (
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
