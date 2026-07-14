import React from "react";
import Link from "next/link";
import { ButtonState, PageHeader } from "@/components";

export default function Products() {
  const sectors = [
    {
      title: "Maritime Solutions",
      tagline: "Naval navigation & ship traffic",
      description: "Full-mission navigation simulation, ship propulsion algorithm testing, and port congestion optimization frameworks.",
      href: "/products/maritime"
    },
    {
      title: "Defence Systems",
      tagline: "Secure combat & tactical networks",
      description: "Zero-trust combat system simulators, tactical encryption network validation, and supply chain logistics audits.",
      href: "/products/defence"
    },
    {
      title: "Aerospace Engineering",
      tagline: "Flight dynamic & avionics modeling",
      description: "Avionics cockpit simulations, high-altitude autopilot training systems, and collision-avoidance drone routing.",
      href: "/products/aerospace"
    }
  ];

  return (
    <div className="w-full bg-zinc-50/30">
      <PageHeader
        title="Products"
        tagline="Ari Simulation empowers engineers and innovators to model, test, and perfect real-world systems virtually — reducing risk, cutting costs, and accelerating breakthroughs before they ever leave the lab."
        button={[
          { text: "Download Brochure", type: ButtonState.PRIMARY },
          { text: "Request Demo", type: ButtonState.NEUTRAL }
        ]}
      />

      <div className="mx-auto max-w-7xl px-6 sm:px-8 py-16 sm:py-24">
        <div className="mb-16 max-w-3xl">
          <h2 className="text-zinc-900 font-bold mb-4">Sectors & Solutions</h2>
          <p className="text-zinc-600 text-sm leading-relaxed">
            Select an industry sector below to explore our bespoke simulation modules, testing suites, and dedicated software configurations.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {sectors.map((sector, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-8 transition-all hover:shadow-md hover:border-zinc-300"
            >
              <div>
                <h3 className="text-zinc-900 font-bold mb-1">{sector.title}</h3>
                <p className="text-xs font-semibold text-zinc-500 mb-6 uppercase tracking-wider">{sector.tagline}</p>
                <p className="text-zinc-600 text-sm leading-relaxed mb-8">
                  {sector.description}
                </p>
              </div>

              <div className="pt-6 border-t border-zinc-100">
                <Link
                  href={sector.href}
                  className="flex h-11 w-full items-center justify-center rounded-xl bg-zinc-900 text-xs font-semibold text-white transition-all hover:bg-zinc-800"
                >
                  Explore {sector.title.split(" ")[0]}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
