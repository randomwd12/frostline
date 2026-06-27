"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { getProduct } from "@/lib/products";
import { gbp } from "@/lib/format";
import ProductArt from "@/components/ProductArt";

export default function CheckoutPage() {
  const { items, subtotal, clear } = useCart();
  const [placed, setPlaced] = useState(false);

  function placeOrder(e: React.FormEvent) {
    e.preventDefault();
    // Placeholder: real payment (Stripe) drops in here later.
    setPlaced(true);
    clear();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (placed) {
    return (
      <div className="container-px flex flex-col items-center gap-4 py-28 text-center">
        <span className="text-6xl">✅</span>
        <h1 className="text-3xl font-extrabold text-ink">Order confirmed!</h1>
        <p className="max-w-md text-ink/60">
          Thanks for your order. A confirmation email is on its way and your
          cooling gear will be dispatched with free UK delivery.
        </p>
        <Link href="/shop" className="btn-accent mt-2">
          Continue shopping
        </Link>
      </div>
    );
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

  const inputClass =
    "w-full rounded-xl border border-black/10 px-4 py-3 text-sm outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30";

  return (
    <div className="container-px py-14">
      <h1 className="text-3xl font-extrabold tracking-tight text-ink">Checkout</h1>

      <form
        onSubmit={placeOrder}
        className="mt-10 grid gap-10 lg:grid-cols-[1fr_360px]"
      >
        <div className="space-y-8">
          {/* Contact */}
          <section>
            <h2 className="font-bold text-ink">Contact</h2>
            <div className="mt-4 grid gap-4">
              <input required type="email" placeholder="Email address" className={inputClass} />
              <input required type="tel" placeholder="Phone number" className={inputClass} />
            </div>
          </section>

          {/* Delivery */}
          <section>
            <h2 className="font-bold text-ink">Delivery address</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <input required placeholder="First name" className={inputClass} />
              <input required placeholder="Last name" className={inputClass} />
              <input required placeholder="Address line 1" className={`${inputClass} sm:col-span-2`} />
              <input placeholder="Address line 2 (optional)" className={`${inputClass} sm:col-span-2`} />
              <input required placeholder="Town / City" className={inputClass} />
              <input required placeholder="Postcode" className={inputClass} />
            </div>
          </section>

          {/* Payment (placeholder) */}
          <section>
            <h2 className="font-bold text-ink">Payment</h2>
            <p className="mt-1 text-sm text-ink/55">
              Card payments are coming soon. For now your order is placed as a
              reservation and we&apos;ll confirm by email.
            </p>
            <div className="mt-4 grid gap-4">
              <input placeholder="Card number" className={inputClass} disabled />
              <div className="grid grid-cols-2 gap-4">
                <input placeholder="MM / YY" className={inputClass} disabled />
                <input placeholder="CVC" className={inputClass} disabled />
              </div>
            </div>
          </section>
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

          <button type="submit" className="btn-primary mt-6 w-full">
            Place order
          </button>
          <p className="mt-3 text-center text-xs text-ink/40">
            🔒 Your details are kept secure
          </p>
        </aside>
      </form>
    </div>
  );
}
