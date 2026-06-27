import Link from "next/link";
import { Product } from "@/lib/products";
import { gbp } from "@/lib/format";
import ProductImage from "./ProductImage";
import Stars from "./Stars";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/shop/${product.slug}`}
      className="group card flex flex-col overflow-hidden transition hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative">
        <ProductImage
          product={product}
          className={`aspect-[4/3] w-full ${product.soldOut ? "opacity-60 grayscale" : ""}`}
        />
        {product.soldOut ? (
          <span className="absolute left-3 top-3 rounded-full bg-ink/80 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
            Sold out
          </span>
        ) : (
          <>
            {product.badge && (
              <span className="absolute left-3 top-3 rounded-full bg-ink px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                {product.badge}
              </span>
            )}
            {product.oldPrice && (
              <span className="absolute right-3 top-3 rounded-full bg-rose-500 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
                Save {gbp(product.oldPrice - product.price)}
              </span>
            )}
          </>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <Stars rating={product.rating} reviews={product.reviews} />
        <h3 className="mt-2 font-semibold leading-snug text-ink group-hover:text-ice-600">
          {product.name}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm text-ink/55">{product.short}</p>
        <div className="mt-4 flex items-end gap-2">
          <span className="text-xl font-extrabold text-ink">
            {gbp(product.price)}
          </span>
          {product.oldPrice && (
            <span className="mb-0.5 text-sm text-ink/40 line-through">
              {gbp(product.oldPrice)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
