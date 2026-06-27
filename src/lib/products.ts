export type Category = {
  slug: string;
  name: string;
  blurb: string;
  emoji: string;
};

export type Product = {
  slug: string;
  name: string;
  category: string; // category slug
  price: number; // GBP
  oldPrice?: number;
  rating: number;
  reviews: number;
  badge?: string;
  short: string;
  description: string;
  features: string[];
  specs: { label: string; value: string }[];
  emoji: string;
  accent: string; // tailwind gradient classes for the image tile
  art: ArtType; // which SVG illustration to draw
  image?: string; // optional real product photo URL (overrides the SVG art)
  soldOut?: boolean; // hides the buy button and shows a "Sold out" badge
};

export type ArtType =
  | "ac"
  | "tower-fan"
  | "bladeless-fan"
  | "desk-fan"
  | "evap-cooler"
  | "evap-compact"
  | "dehumidifier";

export const categories: Category[] = [
  {
    slug: "portable-air-conditioners",
    name: "Portable Air Conditioners",
    blurb: "Real cooling power you can wheel from room to room.",
    emoji: "❄️",
  },
  {
    slug: "fans",
    name: "Fans",
    blurb: "Tower, pedestal, desk and bladeless fans for every space.",
    emoji: "🌀",
  },
  {
    slug: "air-coolers",
    name: "Evaporative Air Coolers",
    blurb: "Low-energy cooling that's kinder to your electricity bill.",
    emoji: "💧",
  },
  {
    slug: "dehumidifiers",
    name: "Dehumidifiers",
    blurb: "Strip out muggy moisture for fresher, comfier air.",
    emoji: "🌬️",
  },
];

export const products: Product[] = [
  {
    slug: "arctic-pro-12000",
    name: "Arctic Pro 12,000 BTU Portable Air Conditioner",
    category: "portable-air-conditioners",
    price: 379.99,
    oldPrice: 449.99,
    rating: 4.8,
    reviews: 214,
    badge: "Bestseller",
    short: "Cools rooms up to 30m² with 3-in-1 cool, fan & dehumidify modes.",
    description:
      "The Arctic Pro is our flagship portable air conditioner, built for proper British heatwaves. With 12,000 BTU of cooling power it brings large living rooms and bedrooms down to a comfortable temperature in minutes, then holds it there quietly through the night.",
    features: [
      "12,000 BTU — cools rooms up to 30m²",
      "3-in-1: cooling, fan and dehumidifier",
      "24-hour timer with sleep mode",
      "Includes window venting kit",
      "Remote control & LED display",
    ],
    specs: [
      { label: "Cooling power", value: "12,000 BTU (3.5kW)" },
      { label: "Room size", value: "Up to 30m²" },
      { label: "Energy class", value: "A" },
      { label: "Noise level", value: "52 dB" },
      { label: "Warranty", value: "2 years" },
    ],
    emoji: "❄️",
    accent: "from-ice-400 to-ice-600",
    art: "ac",
    soldOut: true,
  },
  {
    slug: "arctic-mini-7000",
    name: "Arctic Mini 7,000 BTU Portable Air Conditioner",
    category: "portable-air-conditioners",
    price: 249.99,
    rating: 4.6,
    reviews: 138,
    short: "Compact cooling for bedrooms & home offices up to 18m².",
    description:
      "Small footprint, big relief. The Arctic Mini slips neatly into bedrooms, studies and box rooms, delivering 7,000 BTU of cooling without dominating the space. Castor wheels make it easy to move wherever the sun's beating down.",
    features: [
      "7,000 BTU — ideal for rooms up to 18m²",
      "Whisper-quiet 48 dB night mode",
      "Self-evaporating — minimal emptying",
      "Easy-roll castor wheels",
      "Washable dust filter",
    ],
    specs: [
      { label: "Cooling power", value: "7,000 BTU (2.0kW)" },
      { label: "Room size", value: "Up to 18m²" },
      { label: "Energy class", value: "A" },
      { label: "Noise level", value: "48 dB" },
      { label: "Warranty", value: "2 years" },
    ],
    emoji: "❄️",
    accent: "from-ice-300 to-ice-500",
    art: "ac",
    soldOut: true,
  },
  {
    slug: "breeze-tower-x",
    name: "Breeze Tower X Oscillating Tower Fan",
    category: "fans",
    price: 89.99,
    oldPrice: 109.99,
    rating: 4.7,
    reviews: 326,
    badge: "Top rated",
    short: "Slim 42-inch tower fan with 12 speeds and a remote.",
    description:
      "A sleek tower of cool air. The Breeze Tower X oscillates a full 90° to move air right across the room, with 12 precise speeds and a timer so you can set it and forget it. The slimline design tucks into any corner.",
    features: [
      "42-inch tower with 90° oscillation",
      "12 speed settings & 3 modes",
      "8-hour timer with remote control",
      "Quiet 35 dB on low",
      "Tip-over safety cut-off",
    ],
    specs: [
      { label: "Height", value: "107 cm" },
      { label: "Speeds", value: "12" },
      { label: "Power", value: "45W" },
      { label: "Noise level", value: "35–58 dB" },
      { label: "Warranty", value: "2 years" },
    ],
    emoji: "🌀",
    accent: "from-sky-400 to-ice-600",
    art: "tower-fan",
  },
  {
    slug: "halo-bladeless",
    name: "Halo Bladeless Cooling Fan",
    category: "fans",
    price: 129.99,
    rating: 4.5,
    reviews: 187,
    badge: "New",
    short: "Safe, easy-clean bladeless design with smooth airflow.",
    description:
      "Modern, child-safe and seriously quiet. The Halo's bladeless design pushes a smooth, uninterrupted stream of air with no fast-spinning blades to clean or worry about. A centrepiece that happens to keep you cool.",
    features: [
      "Bladeless — safe around children & pets",
      "10 airflow settings",
      "Sleep, normal & natural breeze modes",
      "Touch panel & remote",
      "Wipe-clean in seconds",
    ],
    specs: [
      { label: "Height", value: "92 cm" },
      { label: "Speeds", value: "10" },
      { label: "Power", value: "40W" },
      { label: "Noise level", value: "32–54 dB" },
      { label: "Warranty", value: "2 years" },
    ],
    emoji: "💨",
    accent: "from-cyan-300 to-ice-500",
    art: "bladeless-fan",
  },
  {
    slug: "desk-breeze-mini",
    name: "Desk Breeze Mini USB Fan",
    category: "fans",
    price: 24.99,
    rating: 4.4,
    reviews: 512,
    short: "Rechargeable personal fan for desks, prams & travel.",
    description:
      "Personal cooling that goes anywhere. The Desk Breeze Mini runs up to 14 hours on a charge, tilts to any angle and is quiet enough for the office. Perfect for desks, bedside tables, prams and picnics.",
    features: [
      "Rechargeable — up to 14 hours",
      "4 speeds & 360° tilt",
      "USB-C charging",
      "Whisper quiet at 28 dB",
      "Weighs just 380g",
    ],
    specs: [
      { label: "Battery", value: "5,000 mAh" },
      { label: "Runtime", value: "Up to 14 hrs" },
      { label: "Speeds", value: "4" },
      { label: "Charging", value: "USB-C" },
      { label: "Warranty", value: "1 year" },
    ],
    emoji: "🌬️",
    accent: "from-ice-200 to-ice-400",
    art: "desk-fan",
  },
  {
    slug: "frostflow-evap-cooler",
    name: "FrostFlow Evaporative Air Cooler",
    category: "air-coolers",
    price: 159.99,
    oldPrice: 189.99,
    rating: 4.3,
    reviews: 96,
    short: "Low-energy cooling with a 7L tank and ice packs included.",
    description:
      "All the relief, a fraction of the running cost. The FrostFlow draws air through water-chilled pads to drop the temperature, using a tiny amount of electricity compared to an air conditioner. The 7-litre tank and included ice packs keep it going for hours.",
    features: [
      "7-litre water tank",
      "2 ice packs included",
      "Cool, humidify & fan-only modes",
      "Just 65W — very low running cost",
      "Castor wheels & remote",
    ],
    specs: [
      { label: "Tank", value: "7 litres" },
      { label: "Power", value: "65W" },
      { label: "Airflow", value: "550 m³/h" },
      { label: "Noise level", value: "54 dB" },
      { label: "Warranty", value: "2 years" },
    ],
    emoji: "💧",
    accent: "from-cyan-400 to-ice-600",
    art: "evap-cooler",
  },
  {
    slug: "frostflow-compact",
    name: "FrostFlow Compact Desktop Cooler",
    category: "air-coolers",
    price: 49.99,
    rating: 4.1,
    reviews: 233,
    short: "Personal evaporative cooler for desks and bedsides.",
    description:
      "Your own pocket of cool. This compact evaporative cooler sits on a desk or bedside table, misting chilled air exactly where you need it. Fill the tank, drop in the ice and enjoy quiet, focused cooling.",
    features: [
      "800ml tank with ice compartment",
      "3 speeds & 7-colour night light",
      "USB powered",
      "Ultra quiet for desks",
      "No window kit needed",
    ],
    specs: [
      { label: "Tank", value: "800 ml" },
      { label: "Power", value: "USB 10W" },
      { label: "Speeds", value: "3" },
      { label: "Noise level", value: "30 dB" },
      { label: "Warranty", value: "1 year" },
    ],
    emoji: "💧",
    accent: "from-ice-200 to-cyan-400",
    art: "evap-compact",
  },
  {
    slug: "dryair-20l",
    name: "DryAir 20L Dehumidifier",
    category: "dehumidifiers",
    price: 199.99,
    rating: 4.7,
    reviews: 174,
    badge: "Bestseller",
    short: "Pulls 20L/day of moisture to beat damp and muggy heat.",
    description:
      "Muggy air feels hotter — the DryAir fixes that. Extracting up to 20 litres of moisture a day, it makes warm rooms feel noticeably cooler and fresher, tackles condensation, and helps clothes dry faster on rainy British days.",
    features: [
      "Extracts up to 20L per day",
      "Laundry & continuous drain modes",
      "Digital humidistat",
      "Smart auto-restart",
      "Quiet 42 dB operation",
    ],
    specs: [
      { label: "Extraction", value: "20 L/day" },
      { label: "Tank", value: "4 litres" },
      { label: "Coverage", value: "Up to 5 bedrooms" },
      { label: "Noise level", value: "42 dB" },
      { label: "Warranty", value: "2 years" },
    ],
    emoji: "🌫️",
    accent: "from-ice-400 to-ice-700",
    art: "dehumidifier",
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function productsByCategory(slug: string) {
  return products.filter((p) => p.category === slug);
}
