import React from "react";
import Link from "next/link";
import { ButtonState, PageHeader } from "@/components";

export default function Newsroom() {
  const articles = [
    {
      id: "cloud-launch",
      title: "ARI Corp Launches CloudSuite 2.0 with Turbopack Integrations",
      date: "July 12, 2026",
      category: "Press Releases",
      summary: "Today we announced the public rollout of CloudSuite 2.0, adding native build acceleration hooks and direct cluster scaling algorithms."
    },
    {
      id: "zero-trust-training",
      title: "Expanding Training Offerings to Include Zero-Trust Engineering Methodologies",
      date: "June 28, 2026",
      category: "Education",
      summary: "In response to growing demand for network integrity, our training catalog now features a dedicated curriculum on Zero-Trust systems architecture."
    },
    {
      id: "client-partnership",
      title: "Case Study: Partnering with InnovateCorp to Scale Logistics Operations",
      date: "May 15, 2026",
      category: "Case Studies",
      summary: "We teamed up with InnovateCorp to rebuild their internal routing systems, resulting in a 40% reduction in dispatch overhead costs."
    }
  ];

  return (
    <div className="w-full bg-zinc-50/30">
      <PageHeader
        title="Newsroom"
        tagline="Keep up with our platform product developments, company announcements, research insights, and training updates."
        button={[
          { text: "Subscribe to Newsletter", type: ButtonState.PRIMARY },
          { text: "Media Kit", type: ButtonState.NEUTRAL }
        ]}
      />
      <div className="mx-auto max-w-7xl px-6 sm:px-8 py-16 sm:py-24">

        {/* Articles Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {articles.map((article) => (
            <article
              key={article.id}
              className="flex flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-8 transition-all hover:shadow-md hover:border-zinc-300"
            >
              <div>
                <div className="flex items-center gap-4 text-xs mb-6 text-zinc-500">
                  <span className="font-semibold text-zinc-950 uppercase tracking-wider">
                    {article.category}
                  </span>
                  <span>•</span>
                  <span>{article.date}</span>
                </div>
                <h3 className="text-zinc-900 font-bold leading-tight mb-4 hover:text-zinc-800 transition-colors">
                  {article.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                  {article.summary}
                </p>
              </div>

              <div className="pt-6 border-t border-zinc-100">
                <Link
                  href="#"
                  className="inline-flex items-center text-xs font-bold text-zinc-900 hover:text-zinc-700 gap-1 group"
                >
                  Read full article <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
