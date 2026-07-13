import React from "react";
import { Navbar, Footer } from "@/components";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex flex-col bg-white">
        {children}
      </main>
      <Footer />
    </div>
  );
}