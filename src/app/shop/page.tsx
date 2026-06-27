import type { Metadata } from "next";
import { products } from "@/lib/products";
import ProductBrowser from "@/components/ProductBrowser";

export const metadata: Metadata = {
  title: "Shop all cooling — Breezely",
  description:
    "Portable air conditioners, fans, evaporative coolers and dehumidifiers — filter by price, cooling power, room size and more.",
};

export default function ShopPage() {
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

      <div className="mt-10">
        <ProductBrowser products={products} showCategoryFilter />
      </div>
    </div>
  );
}
