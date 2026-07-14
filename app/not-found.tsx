"use client";

import React from "react";
import { Button, ButtonState } from "@/components";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-6 py-12 text-center select-none font-sans">
      <div className="max-w-md w-full flex flex-col items-center">
        {/* Visual Giant 404 */}
        <span className="text-[120px] font-black leading-none tracking-tighter text-zinc-300 font-sans">
          404
        </span>

        {/* Error Title */}
        <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-900 mt-4 mb-2">
          Page Not Found
        </h1>

        {/* Error Description */}
        <p className="text-sm md:text-base text-zinc-500 leading-relaxed max-w-sm mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        {/* CTA Button */}
        <Button text="Back to Homepage" type={ButtonState.PRIMARY} link="/" />
      </div>
    </div>
  );
}
