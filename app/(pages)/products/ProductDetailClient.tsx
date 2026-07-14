"use client";

import React, { useState } from "react";
import { ProductType } from "@/lib/products/productType";
import { ButtonState, PageHeader, ContactModal } from "@/components";

interface ProductDetailClientProps {
  product: ProductType;
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Fallback to placeholder-image if no custom images array is provided
  const imagesList = product.images && product.images.length > 0
    ? product.images
    : ["/placeholder-image.png"];

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev === 0 ? imagesList.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev === imagesList.length - 1 ? 0 : prev + 1));
  };

  // Extract content parts safely
  const heading = product.content?.[0] || product.title;
  const shortDescription = product.content?.[1] || product.description;
  const longDescription = product.content?.[2];
  const keyFeatures = product.content?.[3];

  return (
    <div className="w-full bg-white pb-20">
      <PageHeader
        title={product.title}
        tagline={shortDescription}
        button={[
          { text: "Download Brochure", type: ButtonState.PRIMARY },
          {
            text: "Contact Us",
            type: ButtonState.NEUTRAL,
            onClick: () => setIsModalOpen(true),
          },
        ]}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Carousel & Detailed Description */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Image Carousel */}
            <div className="relative w-full aspect-[16/10] bg-zinc-100 rounded-2xl overflow-hidden border border-zinc-200 shadow-sm group">
              <img
                src={imagesList[activeImageIndex]}
                alt={`${product.title} view ${activeImageIndex + 1}`}
                className="w-full h-full object-cover transition-all duration-500"
              />

              {/* Prev / Next controls (only show if multiple images exist) */}
              {imagesList.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-zinc-800 shadow-md backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                    aria-label="Previous image"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white text-zinc-800 shadow-md backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                    aria-label="Next image"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

              {/* Carousel Dot Indicators */}
              {imagesList.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {imagesList.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        activeImageIndex === idx ? "bg-sky-600 scale-110" : "bg-white/60 hover:bg-white/80"
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Detailed Content */}
            {longDescription && (
              <div className="prose prose-zinc max-w-none">
                <h3 className="text-xl font-bold text-zinc-950 mb-4">{heading} Overview</h3>
                <p className="text-zinc-600 text-sm leading-relaxed whitespace-pre-line">
                  {longDescription}
                </p>
              </div>
            )}

            {/* Simulators Included (if any) */}
            {product.includedSimulators && product.includedSimulators.length > 0 && (
              <div className="border-t border-zinc-200 pt-8 mt-4">
                <h4 className="text-lg font-bold text-zinc-950 mb-4">Simulators Included</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {product.includedSimulators.map((simName, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl border border-zinc-200 bg-zinc-50 hover:bg-zinc-100/50 transition-colors flex items-center gap-3"
                    >
                      <span className="w-2 h-2 rounded-full bg-sky-500 shrink-0" />
                      <span className="text-zinc-800 text-sm font-medium">{simName}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Key Features */}
          {keyFeatures && keyFeatures.length > 0 && (
            <div className="lg:col-span-5">
              <div className="sticky top-24 p-6 rounded-2xl border border-zinc-200 bg-zinc-50/50 backdrop-blur-sm shadow-sm">
                <h3 className="text-lg font-bold text-zinc-950 mb-6 flex items-center gap-2">
                  <svg className="w-5 h-5 text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Key Features
                </h3>
                <ul className="flex flex-col gap-6">
                  {keyFeatures.map((feature, idx) => (
                    <li key={idx} className="flex gap-4 items-start">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-sky-600 font-semibold text-xs">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="text-zinc-900 font-semibold text-sm mb-1">{feature.title}</h4>
                        <p className="text-zinc-500 text-xs leading-relaxed">{feature.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>

      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={product.title}
      />
    </div>
  );
}
