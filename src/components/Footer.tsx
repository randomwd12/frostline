import Link from "next/link";
import { categories } from "@/lib/products";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-black/5 bg-ink text-white/70">
      <div className="container-px grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-extrabold text-white"
          >
            <span className="text-2xl">❄️</span>
            Frost<span className="text-accent-glow">line</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm text-white/55">
            Portable cooling for the British summer. Fast, free UK delivery and
            a 2-year guarantee on every appliance.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Shop</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link
                  href={`/shop/category/${c.slug}`}
                  className="transition hover:text-white"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Company</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/about" className="transition hover:text-white">
                About us
              </Link>
            </li>
            <li>
              <Link href="/help" className="transition hover:text-white">
                Help &amp; FAQs
              </Link>
            </li>
            <li>
              <Link href="/delivery" className="transition hover:text-white">
                Delivery &amp; returns
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Need a hand?</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>Mon–Fri, 9am–5pm</li>
            <li>
              <a
                href="mailto:hello@frostline.co.uk"
                className="transition hover:text-white"
              >
                hello@frostline.co.uk
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Frostline. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/privacy" className="hover:text-white/70">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-white/70">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
