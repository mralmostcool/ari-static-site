import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PageHeader } from "@/components";
import { DEFENCE_CLIENTS, MARITIME_CLIENTS, OEM_CLIENTS } from "@/lib";
import type { ClientType } from "@/lib/clients/clientType";

/* ── Reusable section for a category of client logos ── */
function ClientSection({
  title,
  clients,
}: {
  title: string;
  clients: ClientType[];
}) {
  return (
    <section className="mb-16 last:mb-0">
      {/* Section heading */}
      <div className="text-center mb-10">
        <h2 className="text-lg sm:text-xl font-bold text-zinc-900 tracking-tight">
          {title}
        </h2>
      </div>

      {/* Logo grid with shared border lines */}
      {/* grid-flow-dense lets the browser auto-fill any gaps left by col-span-2
          (wide) cells with the next available normal-size logo, so a stray
          empty cell at the end of a row gets backfilled automatically. */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 grid-flow-dense border-t border-l border-zinc-200">
        {clients.map((client, idx) => {
          const isWide =
            client.width && client.height && client.width > 2 * client.height;
          return (
            <div
              key={idx}
              className={`flex items-center justify-center border-b border-r border-zinc-200 py-6 px-4${isWide ? " col-span-2" : ""
                }`}
            >
              {client.logoLocation && (
                <Image
                  src={client.logoLocation}
                  alt={client.name ?? title}
                  width={isWide ? 280 : 140}
                  height={140}
                  className={`h-[140px] object-contain${isWide ? " w-[280px]" : " w-[140px]"
                    }`}
                />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default function Clients() {
  const caseStudies = [
    {
      company: "Apex Supply Chain",
      headline: "Optimizing global route dispatch algorithms",
      stat: "35% Faster Transit",
      details:
        "By integrating ARI CloudSuite orchestration pipelines, Apex resolved scheduling bottlenecks across its 40+ logistics hubs.",
    },
    {
      company: "Nexus Finance Group",
      headline: "Zero-Trust security platform migration",
      stat: "100% Identity Audit Compliance",
      details:
        "Nexus deployed ARI SecurePass to enforce zero-trust policies, ensuring seamless compliance logging for enterprise transactions.",
    },
  ];

  return (
    <div className="w-full bg-white">
      <PageHeader
        title="Clients"
        tagline="We partner with innovative organizations across finance, logistics, and tech to secure infrastructure, scale tools, and upskill teams."
      />

      {/* ── Client Logo Sections ── */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 py-16 sm:py-24">
        <ClientSection
          title="Defence Establishments & Government Bodies"
          clients={DEFENCE_CLIENTS}
        />
        <ClientSection
          title="Maritime Organisations"
          clients={MARITIME_CLIENTS}
        />
        <ClientSection
          title="OEM Partners"
          clients={OEM_CLIENTS}
        />
      </div>
    </div>
  );
}