"use client";

import { useState } from "react";
import { categories, products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function ShopPage() {
  const [active, setActive] = useState<string>("all");

  const filtered =
    active === "all"
      ? products
      : products.filter((p) => p.category === active);

  return (
    <div className="container-px py-14">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-extrabold tracking-tight text-ink">
          Shop all cooling
        </h1>
        <p className="mt-3 text-lg text-ink/60">
          Portable air conditioners, fans, evaporative coolers and
          dehumidifiers — built for British summers.
        </p>
      </header>

      {/* Filter bar */}
      <div className="mt-8 flex flex-wrap gap-2">
        <button
          onClick={() => setActive("all")}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
            active === "all"
              ? "bg-ink text-white"
              : "border border-black/10 bg-white text-ink/70 hover:text-ink"
          }`}
        >
          All ({products.length})
        </button>
        {categories.map((c) => {
          const n = products.filter((p) => p.category === c.slug).length;
          return (
            <button
              key={c.slug}
              onClick={() => setActive(c.slug)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                active === c.slug
                  ? "bg-ink text-white"
                  : "border border-black/10 bg-white text-ink/70 hover:text-ink"
              }`}
            >
              {c.emoji} {c.name} ({n})
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </div>
  );
}
