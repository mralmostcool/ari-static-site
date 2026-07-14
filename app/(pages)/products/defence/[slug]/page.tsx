import React from "react";
import { notFound } from "next/navigation";
import { DEFENCE_PRODUCTS, slugify } from "@/lib/products";
import ProductDetailClient from "../../ProductDetailClient";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return DEFENCE_PRODUCTS.map((product) => ({
    slug: slugify(product.title),
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = DEFENCE_PRODUCTS.find((p) => slugify(p.title) === slug);

  if (!product) {
    return {
      title: "Product Not Found | ARI Simulation",
    };
  }

  return {
    title: `${product.title} | Defence | ARI Simulation`,
    description: product.description,
  };
}

export default async function DefenceProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = DEFENCE_PRODUCTS.find((p) => slugify(p.title) === slug);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}
