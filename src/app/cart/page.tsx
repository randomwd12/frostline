"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { getProduct } from "@/lib/products";
import { gbp } from "@/lib/format";
import ProductArt from "@/components/ProductArt";

export default function CartPage() {
  const { items, setQty, remove, subtotal, count } = useCart();

  if (items.length === 0) {
    return (
      <div className="container-px flex flex-col items-center gap-4 py-28 text-center">
        <span className="text-6xl">🛒</span>
        <h1 className="text-2xl font-bold text-ink">Your basket is empty</h1>
        <p className="text-ink/60">Let&apos;s find you something to keep cool.</p>
        <Link href="/shop" className="btn-accent mt-2">
          Start shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container-px py-14">
      <h1 className="text-3xl font-extrabold tracking-tight text-ink">
        Your basket{" "}
        <span className="text-ink/40">
          ({count} item{count === 1 ? "" : "s"})
        </span>
      </h1>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_360px]">
        <div className="divide-y divide-black/5">
          {items.map((item) => {
            const product = getProduct(item.slug);
            if (!product) return null;
            return (
              <div key={item.slug} className="flex gap-5 py-6">
                <Link
                  href={`/shop/${product.slug}`}
                  className={`flex h-28 w-28 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${product.accent}`}
                >
                  <ProductArt type={product.art} className="h-3/5 w-3/5" />
                </Link>
                <div className="flex flex-1 flex-col">
                  <Link
                    href={`/shop/${product.slug}`}
                    className="font-semibold text-ink hover:text-ice-600"
                  >
                    {product.name}
                  </Link>
                  <span className="mt-1 text-sm text-ink/55">
                    {gbp(product.price)} each
                  </span>
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center rounded-full border border-black/10">
                      <button
                        onClick={() => setQty(item.slug, item.qty - 1)}
                        className="px-3 py-1.5 text-ink/60 hover:text-ink"
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="w-8 text-center text-sm font-semibold">
                        {item.qty}
                      </span>
                      <button
                        onClick={() => setQty(item.slug, item.qty + 1)}
                        className="px-3 py-1.5 text-ink/60 hover:text-ink"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>
                    <span className="font-bold text-ink">
                      {gbp(product.price * item.qty)}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => remove(item.slug)}
                  className="self-start text-ink/30 transition hover:text-rose-500"
                  aria-label="Remove item"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            );
          })}
        </div>

        <aside className="h-fit card p-6 lg:sticky lg:top-24">
          <h2 className="font-bold text-ink">Order summary</h2>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-ink/60">Subtotal</span>
              <span className="font-semibold text-ink">{gbp(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-ink/60">Delivery</span>
              <span className="font-semibold text-emerald-600">Free</span>
            </div>
          </div>
          <div className="mt-4 flex justify-between border-t border-black/5 pt-4">
            <span className="font-bold text-ink">Total</span>
            <span className="text-xl font-extrabold text-ink">{gbp(subtotal)}</span>
          </div>
          <Link href="/checkout" className="btn-primary mt-6 w-full">
            Checkout
          </Link>
          <Link href="/shop" className="btn-ghost mt-2 w-full">
            Continue shopping
          </Link>
        </aside>
      </div>
    </div>
  );
}
