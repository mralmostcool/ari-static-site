import React from "react";
import Link from "next/link";

export default function Products() {
  const products = [
    {
      id: "cloudsuite",
      name: "ARI CloudSuite",
      tagline: "Enterprise Cloud ERP",
      description: "A centralized platform to manage cloud scaling, compute orchestration, and financial resource allocation across AWS, Azure, and GCP.",
      features: ["Multi-cloud budget control", "Real-time orchestration", "Resource usage audits"],
      badge: "Flagship"
    },
    {
      id: "analytics",
      name: "ARI Analytics",
      tagline: "Predictive Intelligence Engines",
      description: "Data processing tools integrated with custom ML models to extract business-critical operational bottlenecks and forecast market trends.",
      features: ["Custom model deployment", "Anomaly alerts", "Executive dashboards"],
      badge: "Popular"
    },
    {
      id: "securepass",
      name: "ARI SecurePass",
      tagline: "Zero-Trust Identity Management",
      description: "Ensure enterprise infrastructure is guarded with modern Zero-Trust validation, granular role assignment, and continuous compliance logs.",
      features: ["SSO & SAML integration", "Automated compliance reports", "Biometric MFA support"],
      badge: "Security"
    }
  ];

  return (
    <div className="w-full py-16 sm:py-24 bg-zinc-50/30">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        {/* Header section */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">
            Products & Solutions
          </span>
          <h1 className="text-zinc-900 font-bold mt-2">
            Engineered for Modern Enterprises
          </h1>
          <p className="text-zinc-600 text-lg leading-relaxed mt-4">
            Explore our suites designed to optimize computation efficiency, secure sensitive company data, and predict workflow bottlenecks.
          </p>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-8 transition-all hover:shadow-md hover:border-zinc-300"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="inline-flex items-center rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-800">
                    {product.badge}
                  </span>
                  <span className="text-xs font-bold text-zinc-400">#0{products.indexOf(product) + 1}</span>
                </div>
                <h3 className="text-zinc-900 font-bold mb-1">{product.name}</h3>
                <p className="text-xs font-semibold text-zinc-500 mb-6 uppercase tracking-wider">{product.tagline}</p>
                <p className="text-zinc-600 text-sm leading-relaxed mb-8">
                  {product.description}
                </p>
                
                <h6 className="text-[11px] font-bold text-zinc-800 uppercase tracking-widest mb-4">
                  Key capabilities
                </h6>
                <ul className="flex flex-col gap-2.5 mb-8">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-xs text-zinc-600 gap-2">
                      <svg className="h-4 w-4 text-zinc-800 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-zinc-100">
                <Link
                  href="/contact-us"
                  className="flex h-11 w-full items-center justify-center rounded-full border border-zinc-200 bg-white text-xs font-semibold text-zinc-900 transition-all hover:bg-zinc-50"
                >
                  Request Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
