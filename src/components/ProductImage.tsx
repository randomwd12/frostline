import Image from "next/image";
import { Product } from "@/lib/products";
import ProductArt from "./ProductArt";

export default function ProductImage({
  product,
  className = "",
  artSize = "h-3/4 w-3/4",
}: {
  product: Product;
  className?: string;
  artSize?: string;
}) {
  // Real photo, if one has been provided on the product.
  if (product.image) {
    return (
      <div className={`relative overflow-hidden bg-ice-50 ${className}`}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
    );
  }

  // Otherwise draw the themed SVG illustration.
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br ${product.accent} ${className}`}
    >
      <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/20 blur-2xl" />
      <div className="absolute -bottom-10 -left-6 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
      <ProductArt type={product.art} className={`relative ${artSize} drop-shadow-sm`} />
    </div>
  );
}
