import React from "react";
import { notFound } from "next/navigation";
import { MARITIME_PRODUCTS, slugify } from "@/lib/products";
import ProductDetailClient from "../../ProductDetailClient";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return MARITIME_PRODUCTS.map((product) => ({
    slug: slugify(product.title),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = MARITIME_PRODUCTS.find((p) => slugify(p.title) === slug);

  if (!product) {
    return {
      title: "Product Not Found | ARI Simulation",
    };
  }

  return {
    title: `${product.title} | Maritime | ARI Simulation`,
    description: product.description,
  };
}

export default async function MaritimeProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = MARITIME_PRODUCTS.find((p) => slugify(p.title) === slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}
