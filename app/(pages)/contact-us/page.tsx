"use client";

import React, { useState } from "react";
import { ButtonState, PageHeader } from "@/components";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    inquiryType: "products",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <div className="w-full bg-zinc-50/30">
      <PageHeader
        title="Contact Us"
        tagline="Ready to learn more about our software products, schedule a tailored engineering workshop, or discuss cloud performance consultancies? Reach out below."
        button={[
          { text: "Email Support", type: ButtonState.NEUTRAL }
        ]}
      />
      <div className="mx-auto max-w-7xl px-6 sm:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left panel: Info */}
          <div>
            <h3 className="text-zinc-900 font-bold mb-6">Offices & Support</h3>
            <div className="flex flex-col gap-8">
              <div className="rounded-2xl border border-zinc-200 bg-white p-6">
                <h6 className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2">
                  Direct Email
                </h6>
                <p className="text-sm font-semibold text-zinc-700">
                  <a href="mailto:support@aricorp.com" className="hover:underline">
                    support@aricorp.com
                  </a>
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-200 bg-white p-6">
                <h6 className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-2">
                  Silicon Valley Headquarters
                </h6>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  100 Enterprise Way, Suite 400<br />
                  CA 94025, United States
                </p>
              </div>
            </div>
          </div>

          {/* Right panel: Contact Form */}
          <div className="rounded-3xl border border-zinc-200 bg-white p-8 sm:p-10">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center py-16 gap-4">
                <div className="h-12 w-12 rounded-full bg-emerald-50 text-emerald-800 flex items-center justify-center">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-zinc-900 font-bold">Inquiry Submitted</h3>
                <p className="text-zinc-500 text-sm max-w-xs leading-relaxed">
                  Thank you for reaching out. A representative from our enterprise accounts team will contact you within 24 business hours.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: "", email: "", company: "", inquiryType: "products", message: "" });
                  }}
                  className="mt-6 text-xs font-bold text-zinc-900 hover:underline"
                >
                  Submit another response
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full h-11 px-4 rounded-xl border border-zinc-200 text-sm placeholder-zinc-400 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900"
                    placeholder="Jane Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-2">
                    Work Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-11 px-4 rounded-xl border border-zinc-200 text-sm placeholder-zinc-400 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900"
                    placeholder="jane@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full h-11 px-4 rounded-xl border border-zinc-200 text-sm placeholder-zinc-400 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900"
                    placeholder="Enterprise Corp"
                  />
                </div>

                <div>
                  <label htmlFor="inquiryType" className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-2">
                    Inquiry Topic
                  </label>
                  <select
                    id="inquiryType"
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full h-11 px-3 rounded-xl border border-zinc-200 bg-white text-sm focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900"
                  >
                    <option value="products">Bespoke Software Suite</option>
                    <option value="training">Engineering Team Training</option>
                    <option value="advisory">Technical Advisory & Consultancies</option>
                    <option value="other">General Inquiries</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-2">
                    How can we help you?
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 text-sm placeholder-zinc-400 focus:outline-none focus:border-zinc-900 focus:ring-1 focus:ring-zinc-900 resize-none"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="flex h-12 w-full items-center justify-center rounded-full bg-zinc-900 text-sm font-semibold text-white transition-all hover:bg-zinc-800"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
