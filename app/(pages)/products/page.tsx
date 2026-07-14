import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ButtonState, PageHeader } from "@/components";

export default function Products() {
  const sectors = [
    {
      title: "Defence",
      label: "Defence Systems",
      tagline: "Secure combat & tactical networks",
      description: "Zero-trust combat system simulators, tactical encryption network validation, and supply chain logistics audits.",
      href: "/products/defence",
      image: "/placeholder-image.png",
      alt: "Defence Sector",
    },
    {
      title: "Maritime",
      label: "Maritime Solutions",
      tagline: "Naval navigation & ship traffic",
      description: "Full-mission navigation simulation, ship propulsion algorithm testing, and port congestion optimization frameworks.",
      href: "/products/maritime",
      image: "/placeholder-image.png",
      alt: "Maritime Sector",
    },
    {
      title: "Aerospace",
      label: "Aerospace Engineering",
      tagline: "Flight dynamic & avionics modeling",
      description: "Avionics cockpit simulations, high-altitude autopilot training systems, and collision-avoidance drone routing.",
      href: "/products/aerospace",
      image: "/placeholder-image.png",
      alt: "Aerospace Sector",
    },
  ];

  return (
    <div className="w-full bg-white/30">
      <PageHeader
        title="Products"
        tagline="Ari Simulation empowers engineers and innovators to model, test, and perfect real-world systems virtually — reducing risk, cutting costs, and accelerating breakthroughs before they ever leave the lab."
        button={[
          { text: "Download Brochure", type: ButtonState.PRIMARY },
          { text: "Request Demo", type: ButtonState.NEUTRAL, link: "/contact-us" }
        ]}
      />

      {/* Sector Jump Cards — directly below the header for quick navigation */}
      <section className="bg-white border-b border-zinc-100">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 py-10 sm:py-14">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {sectors.map((sector) => (
              <div key={sector.href} className="group">
                <Link
                  href={sector.href}
                  className="relative flex aspect-[4/3] w-full overflow-hidden rounded-2xl bg-zinc-950/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1.5 border border-sky-950/5"
                >
                  <Image
                    src={sector.image}
                    alt={sector.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-90" />
                  <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 text-white">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold tracking-tight text-white transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        {sector.title}
                      </h3>
                      <span className="text-xl font-bold text-sky-300 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                        &rarr;
                      </span>
                    </div>
                    <div className="h-[2px] w-0 bg-gradient-to-r from-sky-500 to-sky-300 mt-3 transition-all duration-500 ease-out group-hover:w-full" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
