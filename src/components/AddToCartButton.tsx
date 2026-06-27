"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";

export default function AddToCartButton({ slug }: { slug: string }) {
  const { add } = useCart();
  const [qty, setQty] = useState(1);

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
      <div className="flex items-center rounded-full border border-black/10">
        <button
          onClick={() => setQty((q) => Math.max(1, q - 1))}
          className="px-4 py-3 text-ink/60 hover:text-ink"
          aria-label="Decrease quantity"
        >
          −
        </button>
        <span className="w-8 text-center font-semibold">{qty}</span>
        <button
          onClick={() => setQty((q) => q + 1)}
          className="px-4 py-3 text-ink/60 hover:text-ink"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
      <button onClick={() => add(slug, qty)} className="btn-accent flex-1">
        Add to basket
      </button>
    </div>
  );
}
