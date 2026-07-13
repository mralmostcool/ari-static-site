"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumbs() {
    const pathname = usePathname();

    // Hide on homepage
    if (pathname === "/") return null;

    const pathnames = pathname.split("/").filter((x) => x);

    const formatLabel = (str: string) => {
        return str
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    };

    return (
        <nav aria-label="Breadcrumb" className="py-3">
            <div className="mx-auto max-w-7xl">
                <ol className="flex items-center space-x-2 text-xs font-medium text-zinc-500">
                    <li>
                        <Link href="/" className="hover:text-zinc-900 transition-colors">
                            Home
                        </Link>
                    </li>
                    {pathnames.map((value, index) => {
                        const last = index === pathnames.length - 1;
                        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

                        return (
                            <li key={to} className="flex items-center space-x-2">
                                <svg
                                    className="h-3 w-3 text-zinc-300 shrink-0"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                </svg>
                                {last ? (
                                    <span className="text-zinc-950 font-semibold cursor-default">
                                        {formatLabel(value)}
                                    </span>
                                ) : (
                                    <Link href={to} className="hover:text-zinc-900 transition-colors">
                                        {formatLabel(value)}
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </div>
        </nav>
    );
}