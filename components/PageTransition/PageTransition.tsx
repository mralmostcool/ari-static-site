"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div
      key={pathname}
      style={{ flex: 1, display: "flex", flexDirection: "column", position: "relative" }}
    >
      {children}

      {/* Overlay scoped to the content area only — does not cover Navbar or Footer */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
        style={{
          position: "absolute",
          inset: 0,
          background: "#ffffff",
          pointerEvents: "none",
          zIndex: 50,
        }}
      />
    </div>
  );
}
