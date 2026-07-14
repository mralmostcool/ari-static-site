"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

interface CounterProps {
  value: number;
  suffix?: string;
}

function Counter({ value, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    const duration = 1300; // 1.3 seconds
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * value));
      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrameId);
  }, [value]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      damping: 25,
      stiffness: 120,
    },
  },
};

const certifications = [
  {
    logo: "/landing/certificates/logo-DNV.png",
    name: "DNV",
    title: "Full-Range DNV Approval",
    text: "DNV approval for the entire range of maritime & offshore simulation products.",
    logoClass: "h-14 md:h-16 w-auto",
    scope: [
      "Maritime Simulation Systems Validation",
      "Offshore Operations Products Approval",
      "International Maritime Standards Compliance",
      "Class A, B, C & D Simulator Certification"
    ]
  },
  {
    logo: "/landing/certificates/logo-LRQA.png",
    name: "LRQA",
    title: "Certified at Every Level",
    text: "Certifications for Simulators, Training, EMS (Environmental), OH&S (Occupational Health & Safety), ISMS (Information Security).",
    logoClass: "h-10 md:h-11 w-auto",
    scope: [
      "Quality Management System (ISO 9001)",
      "Environmental Management System (ISO 14001)",
      "Occupational Health & Safety (ISO 45001)",
      "Information Security Management System (ISO 27001)"
    ]
  },
  {
    logo: "/landing/certificates/logo-Defence.png",
    name: "Defence",
    title: "Defence-Grade Track Record",
    text: "Proven supplier to Defence establishments.",
    logoClass: "h-10 md:h-11 w-auto",
    scope: [
      "Military Combat Training Environments",
      "Tactical Simulation Systems Delivery",
      "High-Security Government Verification",
      "Joint Operations Simulation Readiness"
    ]
  }
];

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero + KPI Area (100vh on desktop, 75vh on mobile) */}
      <div className="relative w-full flex flex-col justify-between min-h-[75vh] md:h-screen md:min-h-[750px] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/conor-sexton-unsplash-hero-image.jpg"
          alt="Hero Background"
          fill
          priority
          className="object-cover object-center z-0"
        />

        {/* Gradient Overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-950/60 via-sky-900/30 to-sky-950/90 z-10" />

        {/* Hero Section */}
        <section className="relative z-20 flex-grow flex items-end pt-[140px] pb-12 md:pt-[160px] md:pb-20 text-white">
          <div className="mx-auto max-w-7xl px-6 sm:px-8 w-full">
            <div className="flex flex-col items-start text-left gap-6 md:gap-8 max-w-4xl mr-auto">
              <div className="flex flex-col items-start text-left gap-2.5 md:gap-3.5">
                <h1 className="heading-display text-white tracking-tight leading-tight">
                  SOLUTIONS FOR MISSION CRITICAL OPERATIONS
                </h1>

                <p className="text-sky-100/90 text-base md:text-lg leading-relaxed max-w-3xl">
                  Global leader in sophisticated simulation and training solutions for the defence, maritime and offshore industries. Over 28 years of expertise with 1500+ installations worldwide.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row justify-start w-full sm:w-auto">
                <Link
                  href="/contact-us"
                  className="flex h-12 items-center justify-center rounded-xl bg-surface-light px-6 text-sm font-semibold text-primary-dark transition-all hover:bg-btn-neutral-sky shadow-sm"
                >
                  Request A Demo
                </Link>
                <Link
                  href="/products"
                  className="flex h-12 items-center justify-center rounded-xl border border-accent/30 bg-accent/20 px-6 text-sm font-semibold text-white transition-all hover:bg-accent/40"
                >
                  Our Products
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="relative z-20 border-t border-white/10 bg-sky-950/30 py-10 md:py-12 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-6 sm:px-8">
            <div className="grid grid-cols-2 gap-y-10 gap-x-6 md:grid-cols-4 text-center">
              <div>
                <p className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-sans">
                  <Counter value={1500} suffix="+" />
                </p>
                <p className="text-xs text-sky-200 font-semibold uppercase tracking-wider mt-2.5 leading-relaxed">
                  Installations<br />worldwide
                </p>
              </div>
              <div>
                <p className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-sans">
                  <Counter value={28} suffix="+" />
                </p>
                <p className="text-xs text-sky-200 font-semibold uppercase tracking-wider mt-2.5 leading-relaxed">
                  Years of<br />experience
                </p>
              </div>
              <div>
                <p className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-sans">
                  <Counter value={55} suffix="+" />
                </p>
                <p className="text-xs text-sky-200 font-semibold uppercase tracking-wider mt-2.5 leading-relaxed">
                  Copyrights<br />and patents
                </p>
              </div>
              <div>
                <p className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-sans">
                  <Counter value={60} suffix="+" />
                </p>
                <p className="text-xs text-sky-200 font-semibold uppercase tracking-wider mt-2.5 leading-relaxed">
                  Number of<br />countries
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Solutions Sectors Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-8 md:mb-10"
          >
            <h2 className="text-3xl sm:text-[2.6rem] font-bold text-primary-dark tracking-tight leading-[1.2] sm:leading-[1.15] text-balance mx-auto max-w-2xl">
              Advanced Solutions for Defence, Maritime & Aerospace
            </h2>
            <p className="text-primary-dark/80 text-base md:text-lg leading-relaxed mt-4 max-w-2xl mx-auto">
              ARI delivers advanced simulation and virtual training solutions for defence, maritime, and aerospace operations worldwide.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 gap-5 md:grid-cols-3"
          >
            {/* Sector Card 1: Defence */}
            <motion.div variants={cardVariants} className="group">
              <Link
                href="/products/defence"
                className="relative flex aspect-[4/3] w-full overflow-hidden rounded-2xl bg-zinc-950/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1.5 border border-sky-950/5"
              >
                <Image
                  src="/placeholder-image.png"
                  alt="Defence Sector"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-0.5"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-90" />
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 text-white">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold tracking-tight text-white transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      Defence
                    </h3>
                    <span className="text-xl font-bold text-sky-300 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      &rarr;
                    </span>
                  </div>
                  <div className="h-[2px] w-0 bg-gradient-to-r from-sky-500 to-sky-300 mt-3 transition-all duration-500 ease-out group-hover:w-full" />
                </div>
              </Link>
            </motion.div>

            {/* Sector Card 2: Maritime */}
            <motion.div variants={cardVariants} className="group">
              <Link
                href="/products/maritime"
                className="relative flex aspect-[4/3] w-full overflow-hidden rounded-2xl bg-zinc-950/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1.5 border border-sky-950/5"
              >
                <Image
                  src="/placeholder-image.png"
                  alt="Maritime Sector"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-0.5"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-90" />
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 text-white">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold tracking-tight text-white transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      Maritime
                    </h3>
                    <span className="text-xl font-bold text-sky-300 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      &rarr;
                    </span>
                  </div>
                  <div className="h-[2px] w-0 bg-gradient-to-r from-sky-500 to-sky-300 mt-3 transition-all duration-500 ease-out group-hover:w-full" />
                </div>
              </Link>
            </motion.div>

            {/* Sector Card 3: Aerospace */}
            <motion.div variants={cardVariants} className="group">
              <Link
                href="/products/aerospace"
                className="relative flex aspect-[4/3] w-full overflow-hidden rounded-2xl bg-zinc-950/20 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1.5 border border-sky-950/5"
              >
                <Image
                  src="/placeholder-image.png"
                  alt="Aerospace Sector"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 group-hover:rotate-0.5"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-90" />
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 text-white">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold tracking-tight text-white transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      Aerospace
                    </h3>
                    <span className="text-xl font-bold text-sky-300 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                      &rarr;
                    </span>
                  </div>
                  <div className="h-[2px] w-0 bg-gradient-to-r from-sky-500 to-sky-300 mt-3 transition-all duration-500 ease-out group-hover:w-full" />
                </div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Demanding Industries Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="flex flex-col gap-8 md:gap-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl sm:text-[2.6rem] font-bold text-primary-dark tracking-tight leading-[1.2] sm:leading-[1.15] text-balance mx-auto max-w-2xl">
                Built for the world's most demanding industries
              </h2>
              <p className="text-primary-dark/85 text-base md:text-lg leading-relaxed mt-4 max-w-2xl text-balance mx-auto">
                From a single simulator to a fully integrated, large-scale training platform - ARI&nbsp;delivers&nbsp;where&nbsp;it&nbsp;counts.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            >
              {/* Card 1: Global Reach */}
              <motion.div
                variants={cardVariants}
                className="relative flex flex-col rounded-2xl border border-sky-200 bg-surface-light p-8 transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1"
              >
                <div className="mb-6 flex items-center">
                  <Image
                    src="/landing/icon-globe.svg"
                    width={32}
                    height={32}
                    alt="Global Reach"
                    className="h-8 w-8 object-contain"
                  />
                </div>
                <h4 className="text-xl font-bold text-primary-dark mb-3">Global Reach</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  A worldwide leader in simulation and VR training solutions for the maritime, energy, construction, airport, and defence industries.
                </p>
              </motion.div>

              {/* Card 2: Scalable Platform */}
              <motion.div
                variants={cardVariants}
                className="relative flex flex-col rounded-2xl border border-sky-200 bg-surface-light p-8 transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1"
              >
                <div className="mb-6 flex items-center">
                  <Image
                    src="/landing/icon-layers.svg"
                    width={32}
                    height={32}
                    alt="Scalable Platform"
                    className="h-8 w-8 object-contain"
                  />
                </div>
                <h4 className="text-xl font-bold text-primary-dark mb-3">Scalable Platform</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Simulation systems that work equally well as compact standalone units or as fully integrated, large-scale, multi-operator training environments.
                </p>
              </motion.div>

              {/* Card 3: Design & Development */}
              <motion.div
                variants={cardVariants}
                className="relative flex flex-col rounded-2xl border border-sky-200 bg-surface-light p-8 transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1"
              >
                <div className="mb-6 flex items-center">
                  <Image
                    src="/landing/icon-design-development.svg"
                    width={32}
                    height={32}
                    alt="Design & Development"
                    className="h-8 w-8 object-contain"
                  />
                </div>
                <h4 className="text-xl font-bold text-primary-dark mb-3">Design & Development</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  We engineer high-specification simulation systems purpose-built for training, screening, feasibility analysis, and process development.
                </p>
              </motion.div>

              {/* Card 4: Trusted by Industry Leaders */}
              <motion.div
                variants={cardVariants}
                className="relative flex flex-col rounded-2xl border border-sky-200 bg-surface-light p-8 transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1"
              >
                <div className="mb-6 flex items-center">
                  <Image
                    src="/landing/icon-trusted-leaders.svg"
                    width={32}
                    height={32}
                    alt="Trusted by Industry Leaders"
                    className="h-8 w-8 object-contain"
                  />
                </div>
                <h4 className="text-xl font-bold text-primary-dark mb-3">Trusted by Industry Leaders</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Our customers are key decision-makers across every market we serve - a relationship built on quality, attention to detail, and long-term commitment.
                </p>
              </motion.div>

              {/* Card 5: Expert Teams */}
              <motion.div
                variants={cardVariants}
                className="relative flex flex-col rounded-2xl border border-sky-200 bg-surface-light p-8 transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1"
              >
                <div className="mb-6 flex items-center">
                  <Image
                    src="/landing/icon-expert-teams.svg"
                    width={32}
                    height={32}
                    alt="Expert Teams"
                    className="h-8 w-8 object-contain"
                  />
                </div>
                <h4 className="text-xl font-bold text-primary-dark mb-3">Expert Teams</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  A core team of qualified professionals, supported by a broad network of domain experts across multiple industry verticals, built to meet the highest expectations.
                </p>
              </motion.div>

              {/* Card 6: Global Training Centres */}
              <motion.div
                variants={cardVariants}
                className="relative flex flex-col rounded-2xl border border-sky-200 bg-surface-light p-8 transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1"
              >
                <div className="mb-6 flex items-center">
                  <Image
                    src="/landing/icon-training-centers.svg"
                    width={32}
                    height={32}
                    alt="Global Training Centres"
                    className="h-8 w-8 object-contain"
                  />
                </div>
                <h4 className="text-xl font-bold text-primary-dark mb-3">Global Training Centres</h4>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  Proudly embedded in training centres, schools, and company facilities around the world - helping workforces become safer, more efficient, and more productive.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recognised, Certified & Trusted Section */}
      <section className="py-24 sm:py-32 bg-white border-t border-sky-100/50">
        <div className="mx-auto max-w-7xl px-6 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-[2.6rem] font-bold text-primary-dark tracking-tight leading-[1.2] sm:leading-[1.15] text-balance">
                Recognised, Certified & Trusted
              </h2>
              <p className="text-zinc-500 text-base leading-relaxed mt-4 max-w-2xl mx-auto text-balance">
                Our accreditations reflect an unwavering commitment to quality, safety, and security - validated by the world's most respected industry bodies.
              </p>
            </motion.div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-sky-100/80"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className="flex flex-col items-center text-center p-8 md:px-12 md:py-6 first:pl-0 last:pr-0 transition-all duration-300"
              >
                <div className="mb-6 h-16 flex items-center justify-center">
                  <Image
                    src={cert.logo}
                    width={110}
                    height={55}
                    alt={`${cert.title} Logo`}
                    className={`${cert.logoClass || 'h-10 w-auto'} object-contain filter opacity-90 hover:opacity-100 transition-all duration-300`}
                  />
                </div>
                <h4 className="text-lg font-bold text-primary-dark mb-3">{cert.title}</h4>
                <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
                  {cert.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
