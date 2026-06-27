"use client";

import { useMemo, useState } from "react";
import { categories, Product } from "@/lib/products";
import ProductCard from "./ProductCard";

type Sort =
  | "featured"
  | "price-asc"
  | "price-desc"
  | "rating"
  | "btu-desc"
  | "room-desc"
  | "noise-asc";

const sortOptions: { value: Sort; label: string }[] = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: low to high" },
  { value: "price-desc", label: "Price: high to low" },
  { value: "rating", label: "Top rated" },
  { value: "btu-desc", label: "Cooling power (BTU)" },
  { value: "room-desc", label: "Room size" },
  { value: "noise-asc", label: "Quietest" },
];

const priceBuckets = [
  { id: "u50", label: "Under £50", min: 0, max: 50 },
  { id: "50-150", label: "£50 – £150", min: 50, max: 150 },
  { id: "150-300", label: "£150 – £300", min: 150, max: 300 },
  { id: "300+", label: "Over £300", min: 300, max: Infinity },
];

const ratingOptions = [
  { value: 0, label: "Any rating" },
  { value: 4, label: "4.0★ & up" },
  { value: 4.5, label: "4.5★ & up" },
];

const btuOptions = [
  { value: 0, label: "Any" },
  { value: 7000, label: "7,000 BTU & up" },
  { value: 10000, label: "10,000 BTU & up" },
];

const roomOptions = [
  { value: 0, label: "Any" },
  { value: 18, label: "18m² & up" },
  { value: 30, label: "30m² & up" },
];

export default function ProductBrowser({
  products,
  showCategoryFilter = false,
}: {
  products: Product[];
  showCategoryFilter?: boolean;
}) {
  const [sort, setSort] = useState<Sort>("featured");
  const [cats, setCats] = useState<string[]>([]);
  const [prices, setPrices] = useState<string[]>([]);
  const [minRating, setMinRating] = useState(0);
  const [minBtu, setMinBtu] = useState(0);
  const [minRoom, setMinRoom] = useState(0);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const hasBtu = products.some((p) => p.btu != null);
  const hasRoom = products.some((p) => p.roomSize != null);

  const results = useMemo(() => {
    let list = products.filter((p) => {
      if (showCategoryFilter && cats.length && !cats.includes(p.category))
        return false;
      if (prices.length) {
        const inBucket = priceBuckets.some(
          (b) => prices.includes(b.id) && p.price >= b.min && p.price < b.max
        );
        if (!inBucket) return false;
      }
      if (minRating && p.rating < minRating) return false;
      if (minBtu && (p.btu == null || p.btu < minBtu)) return false;
      if (minRoom && (p.roomSize == null || p.roomSize < minRoom)) return false;
      return true;
    });

    const num = (v: number | undefined, fallback: number) =>
      v == null ? fallback : v;

    list = [...list].sort((a, b) => {
      switch (sort) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "btu-desc":
          return num(b.btu, -1) - num(a.btu, -1);
        case "room-desc":
          return num(b.roomSize, -1) - num(a.roomSize, -1);
        case "noise-asc":
          return num(a.noise, Infinity) - num(b.noise, Infinity);
        default:
          return 0;
      }
    });

    return list;
  }, [products, showCategoryFilter, cats, prices, minRating, minBtu, minRoom, sort]);

  function toggle(list: string[], value: string, set: (v: string[]) => void) {
    set(list.includes(value) ? list.filter((v) => v !== value) : [...list, value]);
  }

  const activeFilters =
    cats.length + prices.length + (minRating ? 1 : 0) + (minBtu ? 1 : 0) + (minRoom ? 1 : 0);

  function clearAll() {
    setCats([]);
    setPrices([]);
    setMinRating(0);
    setMinBtu(0);
    setMinRoom(0);
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[230px_1fr]">
      {/* Filters */}
      <button
        onClick={() => setFiltersOpen((v) => !v)}
        className="btn-ghost lg:hidden"
      >
        {filtersOpen ? "Hide" : "Show"} filters
        {activeFilters > 0 && ` (${activeFilters})`}
      </button>

      <aside
        className={`${filtersOpen ? "block" : "hidden"} lg:block lg:sticky lg:top-24 lg:self-start`}
      >
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-ink">Filters</h2>
          {activeFilters > 0 && (
            <button
              onClick={clearAll}
              className="text-xs font-semibold text-ice-600 hover:underline"
            >
              Clear all
            </button>
          )}
        </div>

        {showCategoryFilter && (
          <FilterGroup title="Category">
            {categories.map((c) => (
              <Check
                key={c.slug}
                label={c.name}
                checked={cats.includes(c.slug)}
                onChange={() => toggle(cats, c.slug, setCats)}
              />
            ))}
          </FilterGroup>
        )}

        <FilterGroup title="Price">
          {priceBuckets.map((b) => (
            <Check
              key={b.id}
              label={b.label}
              checked={prices.includes(b.id)}
              onChange={() => toggle(prices, b.id, setPrices)}
            />
          ))}
        </FilterGroup>

        <FilterGroup title="Rating">
          {ratingOptions.map((o) => (
            <Radio
              key={o.value}
              name="rating"
              label={o.label}
              checked={minRating === o.value}
              onChange={() => setMinRating(o.value)}
            />
          ))}
        </FilterGroup>

        {hasBtu && (
          <FilterGroup title="Cooling power">
            {btuOptions.map((o) => (
              <Radio
                key={o.value}
                name="btu"
                label={o.label}
                checked={minBtu === o.value}
                onChange={() => setMinBtu(o.value)}
              />
            ))}
          </FilterGroup>
        )}

        {hasRoom && (
          <FilterGroup title="Room size">
            {roomOptions.map((o) => (
              <Radio
                key={o.value}
                name="room"
                label={o.label}
                checked={minRoom === o.value}
                onChange={() => setMinRoom(o.value)}
              />
            ))}
          </FilterGroup>
        )}
      </aside>

      {/* Results */}
      <div>
        <div className="mb-6 flex items-center justify-between gap-4">
          <p className="text-sm text-ink/55">
            {results.length} product{results.length === 1 ? "" : "s"}
          </p>
          <label className="flex items-center gap-2 text-sm">
            <span className="text-ink/55">Sort</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as Sort)}
              className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-ink outline-none transition hover:bg-black/[0.02] focus:ring-2 focus:ring-accent/30"
            >
              {sortOptions.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        {results.length === 0 ? (
          <div className="card flex flex-col items-center gap-3 p-16 text-center">
            <span className="text-4xl">🔍</span>
            <p className="text-ink/60">No products match those filters.</p>
            <button onClick={clearAll} className="btn-ghost mt-1">
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {results.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function FilterGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-t border-black/5 py-5">
      <h3 className="mb-3 text-sm font-bold text-ink">{title}</h3>
      <div className="space-y-2.5">{children}</div>
    </div>
  );
}

function Check({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-2.5 text-sm text-ink/70 hover:text-ink">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 rounded border-black/20 text-accent accent-accent"
      />
      {label}
    </label>
  );
}

function Radio({
  name,
  label,
  checked,
  onChange,
}: {
  name: string;
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-2.5 text-sm text-ink/70 hover:text-ink">
      <input
        type="radio"
        name={name}
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 border-black/20 text-accent accent-accent"
      />
      {label}
    </label>
  );
}
