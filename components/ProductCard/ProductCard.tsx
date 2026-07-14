import React from "react";

interface ProductCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  productsIncluded?: string[];
}

export default function ProductCard({
  title,
  description,
  imageSrc,
  imageAlt,
  productsIncluded,
}: ProductCardProps) {
  return (
    <div className="group flex flex-col bg-transparent p-4 -mx-4 rounded-2xl border-b border-zinc-200 hover:bg-zinc-50/80 hover:border-sky-500/40 transition-all duration-300 cursor-pointer">
      {/* Product Image - spans full width with sheen & hover effect */}
      <div className="relative w-full aspect-[16/10] overflow-hidden rounded-xl bg-zinc-100 shadow-sm transition-all duration-500 group-hover:shadow-md group-hover:shadow-sky-500/10">
        <img
          src={imageSrc}
          alt={imageAlt || title}
          className="w-full h-full object-cover object-center transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-[1.02]"
        />
        {/* Creative Sheen Animation Overlay */}
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-out group-hover:translate-x-full -skew-x-12" />
      </div>

      {/* Product Details */}
      <div className="flex flex-col pt-6">
        <h3 className="text-zinc-900 font-bold text-xl md:text-2xl mb-2.5 transition-colors duration-300 group-hover:text-sky-700">
          {title}
        </h3>
        <p className="text-zinc-600 text-[15px] md:text-base leading-relaxed mb-5 font-normal">
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
