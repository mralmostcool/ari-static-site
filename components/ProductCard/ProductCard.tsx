import React from "react";

interface ProductCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  productsIncluded: string[];
}

export default function ProductCard({
  title,
  description,
  imageSrc,
  imageAlt,
  productsIncluded,
}: ProductCardProps) {
  return (
    <div className="flex flex-col bg-transparent pb-8 border-b border-zinc-200 transition-all duration-300 hover:opacity-95">
      {/* Product Image - spans full width */}
      <div className="relative w-full aspect-[16/10] overflow-hidden rounded-[1.5rem]">
        <img
          src={imageSrc}
          alt={imageAlt || title}
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-col pt-6">
        <h3 className="text-zinc-900 font-bold text-xl md:text-2xl mb-2.5">
          {title}
        </h3>
        <p className="text-zinc-600 text-sm leading-relaxed mb-5 font-normal">
          {description}
        </p>

        {/* Included Products Section */}
        {productsIncluded && productsIncluded.length > 0 && (
          <div className="mt-auto">
            <h5 className="text-sky-700 font-semibold text-xs tracking-wider uppercase mb-2.5">
              Products Included
            </h5>
            <ul className="space-y-1.5">
              {productsIncluded.map((product, idx) => (
                <li
                  key={idx}
                  className="text-zinc-800 text-sm font-medium flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-600/80 shrink-0" />
                  {product}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
