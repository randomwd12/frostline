import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Breezely",
  description:
    "Breezely is a UK cooling specialist helping homes and offices stay comfortable through hotter British summers.",
};

const stats = [
  { value: "50,000+", label: "UK homes cooled" },
  { value: "4.8★", label: "Average rating" },
  { value: "2 yr", label: "Standard guarantee" },
  { value: "24h", label: "Dispatch on stock items" },
];

export default function AboutPage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-black/5 bg-gradient-to-b from-ice-50 to-white">
        <div className="container-px py-20 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Keeping Britain cool
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-ink/60">
            UK summers aren&apos;t what they used to be. Breezely exists to help
            you stay comfortable at home and at work — with cooling appliances
            that are easy to buy, easy to live with, and properly backed.
          </p>
        </div>
      </section>

      <section className="container-px grid gap-4 py-14 sm:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="card p-6 text-center">
            <div className="text-3xl font-extrabold text-ice-600">{s.value}</div>
            <div className="mt-1 text-sm text-ink/55">{s.label}</div>
          </div>
        ))}
      </section>

      <section className="container-px grid gap-10 py-10 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold text-ink">Our story</h2>
          <p className="mt-4 text-ink/70">
            After one too many sleepless, sweltering nights, we went looking for
            a portable air conditioner and found the market confusing, overpriced
            and full of jargon. So we built Breezely: a focused range of
            genuinely good cooling appliances, clearly explained, fairly priced
            and delivered free.
          </p>
          <p className="mt-4 text-ink/70">
            Every product we sell is chosen for real-world British conditions —
            quiet enough for bedrooms, efficient enough for your energy bill, and
            powerful enough for the days that actually matter.
          </p>
        </div>
        <div className="space-y-4">
          {[
            { t: "Carefully curated", d: "We stock a tight, tested range — no endless choice paralysis." },
            { t: "Honest pricing", d: "Fair prices with free UK delivery, no surprise fees at checkout." },
            { t: "Properly supported", d: "A 2-year guarantee and UK-based help, 9–5 weekdays." },
          ].map((b) => (
            <div key={b.t} className="card p-6">
              <h3 className="font-bold text-ink">{b.t}</h3>
              <p className="mt-1 text-sm text-ink/60">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-px py-16 text-center">
        <Link href="/shop" className="btn-accent">
          Browse the range
        </Link>
      </section>
    </div>
  );
}
