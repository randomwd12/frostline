import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  categories,
  getCategory,
  productsByCategory,
} from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return { title: "Category not found — Frostline" };
  return {
    title: `${category.name} — Frostline`,
    description: category.blurb,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const items = productsByCategory(slug);

  return (
    <div className="container-px py-14">
      <nav className="text-sm text-ink/50">
        <Link href="/shop" className="hover:text-ink">
          Shop
        </Link>{" "}
        / <span className="text-ink/70">{category.name}</span>
      </nav>

      <header className="mt-4 max-w-2xl">
        <h1 className="flex items-center gap-3 text-4xl font-extrabold tracking-tight text-ink">
          <span>{category.emoji}</span>
          {category.name}
        </h1>
        <p className="mt-3 text-lg text-ink/60">{category.blurb}</p>
      </header>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </div>
  );
}
