import React from "react";
import { Navbar, Footer, PageTransition } from "@/components";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 flex flex-col bg-white">
        <PageTransition>
          {children}
        </PageTransition>
      </main>
      <Footer />
    </div>
  );
}