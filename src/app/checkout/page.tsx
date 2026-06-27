"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { getProduct } from "@/lib/products";
import { gbp } from "@/lib/format";
import ProductArt from "@/components/ProductArt";

export default function CheckoutPage() {
  const { items, subtotal } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function payWithCard() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Unable to start checkout.");
      window.location.href = data.url;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
      setLoading(false);
    }
  }

  if (items.length === 0) {
    return (
      <div className="container-px flex flex-col items-center gap-4 py-28 text-center">
        <span className="text-6xl">🛒</span>
        <h1 className="text-2xl font-bold text-ink">Nothing to check out</h1>
        <Link href="/shop" className="btn-accent mt-2">
          Start shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container-px py-14">
      <h1 className="text-3xl font-extrabold tracking-tight text-ink">Checkout</h1>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_380px]">
        {/* Payment intro */}
        <div className="space-y-6">
          <section className="card p-6">
            <h2 className="font-bold text-ink">Secure payment</h2>
            <p className="mt-2 text-sm text-ink/60">
              Pay securely by card. You&apos;ll be taken to our payment partner
              Stripe to enter your delivery address and card details — your
              information never touches our servers.
            </p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink/55">
              <span>🔒 256-bit encryption</span>
              <span>💳 Visa, Mastercard, Amex</span>
              <span>🚚 Free UK delivery</span>
            </div>

            {error && (
              <p className="mt-4 rounded-xl bg-rose-50 px-4 py-3 text-sm text-rose-700">
                {error}
              </p>
            )}

            <button
              onClick={payWithCard}
              disabled={loading}
              className="btn-accent mt-5 w-full"
            >
              {loading ? "Starting secure checkout…" : `Pay ${gbp(subtotal)} securely →`}
            </button>
          </section>

          <p className="text-xs text-ink/45">
            By paying you agree to our{" "}
            <Link href="/terms" className="text-ice-600 hover:underline">
              terms
            </Link>{" "}
            and{" "}
            <Link href="/privacy" className="text-ice-600 hover:underline">
              privacy policy
            </Link>
            .
          </p>
        </div>

        {/* Summary */}
        <aside className="h-fit card p-6 lg:sticky lg:top-24">
          <h2 className="font-bold text-ink">Your order</h2>
          <div className="mt-4 space-y-3">
            {items.map((item) => {
              const product = getProduct(item.slug);
              if (!product) return null;
              return (
                <div key={item.slug} className="flex items-center gap-3 text-sm">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${product.accent}`}
                  >
                    <ProductArt type={product.art} className="h-3/5 w-3/5" />
                  </div>
                  <span className="flex-1 text-ink/70">
                    {product.name}{" "}
                    <span className="text-ink/40">× {item.qty}</span>
                  </span>
                  <span className="font-semibold text-ink">
                    {gbp(product.price * item.qty)}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-5 space-y-2 border-t border-black/5 pt-4 text-sm">
            <div className="flex justify-between">
              <span className="text-ink/60">Subtotal</span>
              <span className="font-semibold text-ink">{gbp(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-ink/60">Delivery</span>
              <span className="font-semibold text-emerald-600">Free</span>
            </div>
            <div className="flex justify-between border-t border-black/5 pt-2">
              <span className="font-bold text-ink">Total</span>
              <span className="text-xl font-extrabold text-ink">{gbp(subtotal)}</span>
            </div>
          </div>

          <Link href="/cart" className="btn-ghost mt-5 w-full">
            Back to basket
          </Link>
        </aside>
      </div>
    </div>
  );
}
