"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function CheckoutSuccessPage() {
  const { clear } = useCart();

  // Payment succeeded — empty the basket.
  useEffect(() => {
    clear();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container-px flex flex-col items-center gap-4 py-28 text-center">
      <span className="text-6xl">✅</span>
      <h1 className="text-3xl font-extrabold text-ink">Order confirmed!</h1>
      <p className="max-w-md text-ink/60">
        Thank you for your order. A confirmation email is on its way and your
        cooling gear will be dispatched with free UK delivery.
      </p>
      <Link href="/shop" className="btn-accent mt-2">
        Continue shopping
      </Link>
    </div>
  );
}
