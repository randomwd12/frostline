"use client";

import Link from "next/link";
import { useState } from "react";
import { categories } from "@/lib/products";
import { useCart } from "@/context/CartContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const { count, setOpen: setCartOpen } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur-md">
      <nav className="container-px flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-ink"
        >
          <span className="text-2xl">❄️</span>
          Breeze<span className="text-accent">ly</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <div
            className="relative"
            onMouseEnter={() => setShopOpen(true)}
            onMouseLeave={() => setShopOpen(false)}
          >
            <Link
              href="/shop"
              className="text-sm font-medium text-ink/80 transition hover:text-ink"
            >
              Shop
            </Link>
            {shopOpen && (
              <div className="absolute left-1/2 top-full w-64 -translate-x-1/2 pt-3">
                <div className="rounded-2xl border border-black/5 bg-white p-2 shadow-xl">
                  {categories.map((c) => (
                    <Link
                      key={c.slug}
                      href={`/shop/category/${c.slug}`}
                      className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm text-ink/80 transition hover:bg-black/[0.04] hover:text-ink"
                    >
                      <span>{c.emoji}</span>
                      {c.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          <Link
            href="/shop"
            className="text-sm font-medium text-ink/80 transition hover:text-ink"
          >
            Deals
          </Link>
          <Link
            href="/about"
            className="text-sm font-medium text-ink/80 transition hover:text-ink"
          >
            About
          </Link>
          <Link
            href="/help"
            className="text-sm font-medium text-ink/80 transition hover:text-ink"
          >
            Help
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setCartOpen(true)}
            className="relative rounded-full border border-black/10 bg-white p-2.5 transition hover:bg-black/[0.03]"
            aria-label="Open cart"
          >
            <svg
              className="h-5 w-5 text-ink"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            {count > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-accent px-1 text-[11px] font-bold text-white">
                {count}
              </span>
            )}
          </button>

          <button
            className="md:hidden"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <div className="space-y-1.5">
              <span className="block h-0.5 w-6 bg-ink" />
              <span className="block h-0.5 w-6 bg-ink" />
              <span className="block h-0.5 w-6 bg-ink" />
            </div>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-black/5 bg-white px-5 py-4 md:hidden">
          <Link
            href="/shop"
            className="block py-2 text-sm font-semibold text-ink"
            onClick={() => setOpen(false)}
          >
            Shop all
          </Link>
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/shop/category/${c.slug}`}
              className="block py-2 pl-4 text-sm text-ink/70"
              onClick={() => setOpen(false)}
            >
              {c.emoji} {c.name}
            </Link>
          ))}
          <Link
            href="/about"
            className="block py-2 text-sm font-medium text-ink/80"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            href="/help"
            className="block py-2 text-sm font-medium text-ink/80"
            onClick={() => setOpen(false)}
          >
            Help
          </Link>
        </div>
      )}
    </header>
  );
}
