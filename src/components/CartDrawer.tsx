"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { getProduct } from "@/lib/products";
import { gbp } from "@/lib/format";
import ProductArt from "./ProductArt";

export default function CartDrawer() {
  const { items, open, setOpen, setQty, remove, subtotal, count } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[60] bg-ink/40 backdrop-blur-sm transition-opacity ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Panel */}
      <aside
        className={`fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-white shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <div className="flex items-center justify-between border-b border-black/5 px-6 py-5">
          <h2 className="text-lg font-bold text-ink">
            Your basket {count > 0 && <span className="text-ink/40">({count})</span>}
          </h2>
          <button
            onClick={() => setOpen(false)}
            className="rounded-full p-2 text-ink/60 transition hover:bg-black/5 hover:text-ink"
            aria-label="Close cart"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <span className="text-5xl">🛒</span>
            <p className="text-ink/60">Your basket is empty.</p>
            <Link href="/shop" onClick={() => setOpen(false)} className="btn-accent">
              Start shopping
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 space-y-4 overflow-y-auto px-6 py-5">
              {items.map((item) => {
                const product = getProduct(item.slug);
                if (!product) return null;
                return (
                  <div key={item.slug} className="flex gap-4">
                    <div
                      className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${product.accent}`}
                    >
                      <ProductArt type={product.art} className="h-3/5 w-3/5" />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <Link
                        href={`/shop/${product.slug}`}
                        onClick={() => setOpen(false)}
                        className="line-clamp-2 text-sm font-semibold text-ink hover:text-ice-600"
                      >
                        {product.name}
                      </Link>
                      <span className="mt-0.5 text-sm font-bold text-ink">
                        {gbp(product.price)}
                      </span>
                      <div className="mt-auto flex items-center justify-between">
                        <div className="flex items-center rounded-full border border-black/10">
                          <button
                            onClick={() => setQty(item.slug, item.qty - 1)}
                            className="px-3 py-1 text-ink/60 hover:text-ink"
                            aria-label="Decrease quantity"
                          >
                            −
                          </button>
                          <span className="w-7 text-center text-sm font-semibold">
                            {item.qty}
                          </span>
                          <button
                            onClick={() => setQty(item.slug, item.qty + 1)}
                            className="px-3 py-1 text-ink/60 hover:text-ink"
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => remove(item.slug)}
                          className="text-xs font-medium text-ink/40 hover:text-rose-500"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="border-t border-black/5 px-6 py-5">
              <div className="flex items-center justify-between text-sm">
                <span className="text-ink/60">Subtotal</span>
                <span className="text-lg font-extrabold text-ink">
                  {gbp(subtotal)}
                </span>
              </div>
              <p className="mt-1 text-xs text-ink/45">
                Free UK delivery · taxes included
              </p>
              <Link
                href="/checkout"
                onClick={() => setOpen(false)}
                className="btn-primary mt-4 w-full"
              >
                Checkout
              </Link>
              <Link
                href="/cart"
                onClick={() => setOpen(false)}
                className="btn-ghost mt-2 w-full"
              >
                View basket
              </Link>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
