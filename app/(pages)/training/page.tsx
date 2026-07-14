import React from "react";
import Link from "next/link";
import { ButtonState, PageHeader } from "@/components";

export default function Training() {
  const courses = [
    {
      title: "Zero-Trust Infrastructure & Security Audits",
      audience: "Security Engineers & DevOps",
      duration: "4 Weeks (Cohort-based)",
      description: "Learn to build secure VPC configurations, establish role access tokens, set threat logging trackers, and conduct compliance preparation audits."
    },
    {
      title: "Advanced Next.js Architecture & Performance",
      audience: "Frontend Engineers & Architects",
      duration: "2 Weeks (Self-paced + Live Q&A)",
      description: "Optimize layout rendering, implement Turbopack optimization hooks, structure custom middleware configurations, and master caching strategies."
    },
    {
      title: "Cloud Resource Budgeting & Scaling",
      audience: "Infrastructure Managers & FinOps",
      duration: "3 Days (Intensive Workshop)",
      description: "Master multi-cloud cost monitoring tools, establish budget alarms, optimize cluster node scaling, and prevent computational overhead leakage."
    }
  ];

  return (
    <div className="w-full bg-zinc-50/30">
      <PageHeader
        title="Training"
        tagline="Accelerate team capability through custom workshops and self-paced programs designed and instructed by certified platform architects."
        button={[
          { text: "Browse Cohorts", type: ButtonState.PRIMARY },
          { text: "Custom Enterprise Syllabus", type: ButtonState.NEUTRAL }
        ]}
      />
      <div className="mx-auto max-w-7xl px-6 sm:px-8 py-16 sm:py-24">

        {/* Training options grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 mb-20">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-3xl border border-zinc-200 bg-white p-8 transition-all hover:shadow-md hover:border-zinc-300"
            >
              <div>
                <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest block mb-4">
                  {course.audience}
                </span>
                <h3 className="text-zinc-900 font-semibold mb-2 leading-tight">
                  {course.title}
                </h3>
                <p className="text-xs text-zinc-500 font-medium mb-6">
                  Duration: {course.duration}
                </p>
                <p className="text-zinc-600 text-sm leading-relaxed mb-8">
                  {course.description}
                </p>
              </div>

              <div className="pt-6 border-t border-zinc-100">
                <Link
                  href="/contact-us"
                  className="flex h-11 w-full items-center justify-center rounded-xl bg-zinc-900 text-xs font-semibold text-white transition-all hover:bg-zinc-800"
                >
                  Request Syllabus
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Consultation Callout */}
        <div className="rounded-3xl border border-zinc-200 bg-white p-8 sm:p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-zinc-900 font-bold mb-4">Need a Custom Syllabus?</h2>
          <p className="text-zinc-600 text-sm leading-relaxed max-w-2xl mx-auto mb-8">
            We partner directly with technical leads to customize programs matching your stack, internal security configurations, and onboarding checklists.
          </p>
          <Link
            href="/contact-us"
            className="inline-flex h-11 items-center justify-center rounded-xl bg-zinc-900 px-6 text-xs font-semibold text-white transition-all hover:bg-zinc-800"
          >
            Schedule Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
