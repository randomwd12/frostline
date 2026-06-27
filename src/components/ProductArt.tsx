import { ArtType } from "@/lib/products";

// Clean white line illustrations drawn on the product's gradient tile.
// Stroke uses currentColor so callers can tint via text-* if needed.
function Ac() {
  return (
    <>
      <rect x="56" y="34" width="88" height="118" rx="14" fill="#fff" fillOpacity="0.16" />
      <rect x="56" y="34" width="88" height="118" rx="14" />
      <rect x="68" y="46" width="64" height="30" rx="6" fill="#fff" fillOpacity="0.25" />
      <line x1="74" y1="92" x2="126" y2="92" />
      <line x1="74" y1="104" x2="126" y2="104" />
      <line x1="74" y1="116" x2="126" y2="116" />
      <circle cx="126" cy="136" r="4" fill="#fff" />
      <circle cx="76" cy="160" r="7" fill="#fff" fillOpacity="0.3" />
      <circle cx="124" cy="160" r="7" fill="#fff" fillOpacity="0.3" />
    </>
  );
}

function TowerFan() {
  return (
    <>
      <rect x="80" y="24" width="40" height="120" rx="20" fill="#fff" fillOpacity="0.16" />
      <rect x="80" y="24" width="40" height="120" rx="20" />
      <line x1="92" y1="40" x2="92" y2="128" strokeOpacity="0.7" />
      <line x1="100" y1="40" x2="100" y2="128" strokeOpacity="0.7" />
      <line x1="108" y1="40" x2="108" y2="128" strokeOpacity="0.7" />
      <rect x="90" y="150" width="20" height="14" rx="3" fill="#fff" fillOpacity="0.25" />
      <ellipse cx="100" cy="170" rx="34" ry="8" fill="#fff" fillOpacity="0.2" />
      <ellipse cx="100" cy="170" rx="34" ry="8" />
    </>
  );
}

function BladelessFan() {
  return (
    <>
      <ellipse cx="100" cy="64" rx="40" ry="50" fill="#fff" fillOpacity="0.12" />
      <ellipse cx="100" cy="64" rx="40" ry="50" />
      <ellipse cx="100" cy="64" rx="24" ry="32" />
      <rect x="92" y="114" width="16" height="28" fill="#fff" fillOpacity="0.2" />
      <path d="M70 142 h60 l10 28 h-80 z" fill="#fff" fillOpacity="0.22" />
      <path d="M70 142 h60 l10 28 h-80 z" />
    </>
  );
}

function DeskFan() {
  return (
    <>
      <circle cx="100" cy="72" r="48" fill="#fff" fillOpacity="0.12" />
      <circle cx="100" cy="72" r="48" />
      <circle cx="100" cy="72" r="34" strokeOpacity="0.6" />
      <circle cx="100" cy="72" r="20" strokeOpacity="0.6" />
      <circle cx="100" cy="72" r="7" fill="#fff" />
      <line x1="100" y1="120" x2="100" y2="150" />
      <ellipse cx="100" cy="160" rx="30" ry="8" fill="#fff" fillOpacity="0.2" />
      <ellipse cx="100" cy="160" rx="30" ry="8" />
    </>
  );
}

function EvapCooler() {
  return (
    <>
      <rect x="58" y="34" width="84" height="118" rx="12" fill="#fff" fillOpacity="0.16" />
      <rect x="58" y="34" width="84" height="118" rx="12" />
      <line x1="72" y1="50" x2="128" y2="50" strokeOpacity="0.6" />
      <line x1="72" y1="62" x2="128" y2="62" strokeOpacity="0.6" />
      <line x1="72" y1="74" x2="128" y2="74" strokeOpacity="0.6" />
      <path d="M70 118 q10 -8 20 0 t20 0 t20 0" fill="none" strokeOpacity="0.8" />
      <path d="M70 132 q10 -8 20 0 t20 0 t20 0" fill="none" strokeOpacity="0.8" />
      <path d="M100 150 c-7 8 -7 16 0 16 s7 -8 0 -16z" fill="#fff" />
    </>
  );
}

function EvapCompact() {
  return (
    <>
      <rect x="68" y="60" width="64" height="80" rx="12" fill="#fff" fillOpacity="0.16" />
      <rect x="68" y="60" width="64" height="80" rx="12" />
      <line x1="80" y1="76" x2="120" y2="76" strokeOpacity="0.6" />
      <line x1="80" y1="88" x2="120" y2="88" strokeOpacity="0.6" />
      <path d="M88 40 c-6 8 -6 14 0 14 s6 -6 0 -14z" fill="#fff" />
      <path d="M112 34 c-7 9 -7 16 0 16 s7 -7 0 -16z" fill="#fff" />
      <path d="M100 22 c-5 7 -5 12 0 12 s5 -5 0 -12z" fill="#fff" />
    </>
  );
}

function Dehumidifier() {
  return (
    <>
      <rect x="58" y="38" width="84" height="114" rx="16" fill="#fff" fillOpacity="0.16" />
      <rect x="58" y="38" width="84" height="114" rx="16" />
      <path d="M74 38 q26 -16 52 0" fill="none" />
      <rect x="74" y="56" width="52" height="22" rx="5" fill="#fff" fillOpacity="0.25" />
      <circle cx="118" cy="67" r="3" fill="#fff" />
      <path d="M100 96 c-10 14 -10 26 0 26 s10 -12 0 -26z" fill="#fff" fillOpacity="0.5" />
      <path d="M100 96 c-10 14 -10 26 0 26 s10 -12 0 -26z" />
    </>
  );
}

const art: Record<ArtType, () => React.ReactNode> = {
  ac: Ac,
  "tower-fan": TowerFan,
  "bladeless-fan": BladelessFan,
  "desk-fan": DeskFan,
  "evap-cooler": EvapCooler,
  "evap-compact": EvapCompact,
  dehumidifier: Dehumidifier,
};

export default function ProductArt({
  type,
  className = "",
}: {
  type: ArtType;
  className?: string;
}) {
  const Art = art[type] ?? Ac;
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      stroke="#fff"
      strokeWidth={3.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <Art />
    </svg>
  );
}
