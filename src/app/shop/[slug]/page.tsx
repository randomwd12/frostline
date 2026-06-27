import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  getCategory,
  getProduct,
  products,
  productsByCategory,
} from "@/lib/products";
import { gbp } from "@/lib/format";
import ProductImage from "@/components/ProductImage";
import ProductCard from "@/components/ProductCard";
import Stars from "@/components/Stars";
import AddToCartButton from "@/components/AddToCartButton";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product not found — Breezely" };
  return {
    title: `${product.name} — Breezely`,
    description: product.short,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = getCategory(product.category);
  const related = productsByCategory(product.category)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 4);

  return (
    <div className="container-px py-10">
      <nav className="text-sm text-ink/50">
        <Link href="/shop" className="hover:text-ink">
          Shop
        </Link>{" "}
        /{" "}
        {category && (
          <>
            <Link
              href={`/shop/category/${category.slug}`}
              className="hover:text-ink"
            >
              {category.name}
            </Link>{" "}
            /{" "}
          </>
        )}
        <span className="text-ink/70">{product.name}</span>
      </nav>

      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        <div className="lg:sticky lg:top-24 lg:self-start">
          <ProductImage
            product={product}
            className="aspect-square w-full rounded-3xl"
            artSize="h-4/5 w-4/5"
          />
        </div>

        <div>
          {product.soldOut ? (
            <span className="inline-block rounded-full bg-ink/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink/60">
              Sold out
            </span>
          ) : (
            product.badge && (
              <span className="inline-block rounded-full bg-ice-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-ice-700">
                {product.badge}
              </span>
            )
          )}
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            {product.name}
          </h1>
          <div className="mt-3">
            <Stars rating={product.rating} reviews={product.reviews} />
          </div>

          <div className="mt-5 flex items-end gap-3">
            <span className="text-3xl font-extrabold text-ink">
              {gbp(product.price)}
            </span>
            {product.oldPrice && (
              <>
                <span className="mb-1 text-lg text-ink/40 line-through">
                  {gbp(product.oldPrice)}
                </span>
                <span className="mb-1 rounded-full bg-rose-100 px-2.5 py-0.5 text-sm font-bold text-rose-600">
                  Save {gbp(product.oldPrice - product.price)}
                </span>
              </>
            )}
          </div>

          <p className="mt-5 text-ink/70">{product.description}</p>

          <div className="mt-7">
            {product.soldOut ? (
              <div>
                <button
                  disabled
                  className="btn-primary w-full cursor-not-allowed opacity-50"
                >
                  Sold out
                </button>
                <p className="mt-2 text-sm text-ink/55">
                  This model is currently out of stock.{" "}
                  <Link href="/shop" className="font-semibold text-ice-600 hover:underline">
                    Browse in-stock cooling →
                  </Link>
                </p>
              </div>
            ) : (
              <AddToCartButton slug={product.slug} />
            )}
          </div>

          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink/55">
            <span>🚚 Free UK delivery</span>
            <span>🛡️ 2-year guarantee</span>
            <span>↩️ 30-day returns</span>
          </div>

          {/* Features */}
          <div className="mt-8 card p-6">
            <h2 className="font-bold text-ink">What you get</h2>
            <ul className="mt-3 space-y-2">
              {product.features.map((f) => (
                <li key={f} className="flex gap-2 text-sm text-ink/70">
                  <span className="text-accent">✓</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Specs */}
          <div className="mt-5 card overflow-hidden">
            <h2 className="border-b border-black/5 px-6 py-4 font-bold text-ink">
              Specifications
            </h2>
            <dl className="divide-y divide-black/5">
              {product.specs.map((s) => (
                <div key={s.label} className="flex justify-between px-6 py-3 text-sm">
                  <dt className="text-ink/55">{s.label}</dt>
                  <dd className="font-semibold text-ink">{s.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="text-2xl font-bold tracking-tight text-ink">
            You might also like
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
