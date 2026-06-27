import Link from "next/link";
import { categories, products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import ProductArt from "@/components/ProductArt";
import WaitlistForm from "@/components/WaitlistForm";

const valueProps = [
  { icon: "🚚", title: "Free UK delivery", desc: "On every order, with next-day available." },
  { icon: "🛡️", title: "2-year guarantee", desc: "Every appliance, covered as standard." },
  { icon: "↩️", title: "30-day returns", desc: "Changed your mind? Send it back, free." },
  { icon: "⭐", title: "Rated Excellent", desc: "Thousands of happy, cool customers." },
];

export default function Home() {
  const featured = products.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ice-50 to-white" />
        <div className="absolute -top-24 left-1/3 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-accent-glow/25 blur-3xl" />
        <div className="absolute -top-10 right-0 -z-10 h-80 w-80 rounded-full bg-ice-300/30 blur-3xl" />
        <div className="container-px grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5 text-xs font-semibold text-accent">
              ☀️ Ready for the 2027 UK summer
            </span>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-6xl">
              Beat the British{" "}
              <span className="bg-gradient-to-r from-ice-500 to-accent bg-clip-text text-transparent">
                heatwave
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-ink/60">
              Portable air conditioners, fans, evaporative coolers and
              dehumidifiers — delivered free across the UK, guaranteed for 2
              years. Stay cool when it actually matters.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link href="/shop" className="btn-accent">
                Shop cooling
              </Link>
              <Link href="/shop/category/portable-air-conditioners" className="btn-ghost">
                Portable air con →
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-ink/50">
              <span>🚚 Free UK delivery</span>
              <span>🛡️ 2-year guarantee</span>
              <span>↩️ 30-day returns</span>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {featured.slice(0, 4).map((p, i) => (
                <Link
                  key={p.slug}
                  href={`/shop/${p.slug}`}
                  className={`relative flex aspect-square items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br ${p.accent} shadow-lg transition hover:-translate-y-1 hover:shadow-2xl ${
                    i % 2 === 1 ? "translate-y-6" : ""
                  }`}
                >
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-white/20 blur-2xl" />
                  <ProductArt type={p.art} className="relative h-3/5 w-3/5 drop-shadow-sm" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value props */}
      <section className="border-y border-black/5 bg-white">
        <div className="container-px grid gap-6 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {valueProps.map((v) => (
            <div key={v.title} className="flex items-start gap-3">
              <span className="text-2xl">{v.icon}</span>
              <div>
                <h3 className="text-sm font-bold text-ink">{v.title}</h3>
                <p className="text-sm text-ink/55">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="container-px py-20">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Shop by category
            </h2>
            <p className="mt-3 max-w-lg text-ink/60">
              Whatever the forecast throws at you, there&apos;s a Breezely for that.
            </p>
          </div>
          <Link href="/shop" className="hidden text-sm font-semibold text-ice-600 hover:text-ice-700 sm:block">
            View all →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/shop/category/${c.slug}`}
              className="group card overflow-hidden p-7 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="text-4xl">{c.emoji}</span>
              <h3 className="mt-4 font-bold text-ink group-hover:text-ice-600">
                {c.name}
              </h3>
              <p className="mt-2 text-sm text-ink/55">{c.blurb}</p>
              <span className="mt-5 inline-block text-sm font-semibold text-ice-600">
                Shop now →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured products */}
      <section className="bg-ice-50/60 py-20">
        <div className="container-px">
          <div className="flex items-end justify-between">
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Summer bestsellers
            </h2>
            <Link href="/shop" className="hidden text-sm font-semibold text-ice-600 hover:text-ice-700 sm:block">
              View all →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section className="container-px py-20">
        <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-16 text-center sm:px-16">
          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-accent-glow/30 blur-3xl" />
          <h2 className="relative text-3xl font-bold tracking-tight text-white sm:text-4xl">
            First dibs on summer deals
          </h2>
          <p className="relative mx-auto mt-4 max-w-lg text-white/60">
            Join the waitlist for early access to launch offers, restock alerts
            and heatwave-ready discounts before everyone else.
          </p>
          <div className="relative mt-8 flex justify-center">
            <WaitlistForm dark />
          </div>
        </div>
      </section>
    </>
  );
}
