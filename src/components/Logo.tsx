export default function Logo({
  tone = "dark",
  className = "",
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const gradId = `bz-grad-${tone}`;
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      {/* Icon mark: a B with wind gusts streaming off its left side */}
      <svg
        viewBox="0 0 56 40"
        className="h-9 w-auto drop-shadow-sm"
        role="img"
        aria-label="Breezely"
      >
        <defs>
          <linearGradient
            id={gradId}
            x1="0"
            y1="0"
            x2="56"
            y2="40"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#38bdf8" />
            <stop offset="1" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
        <rect width="56" height="40" rx="12" fill={`url(#${gradId})`} />
        <g
          fill="none"
          stroke="#fff"
          strokeWidth="2.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* The B */}
          <path d="M30 8 V32" />
          <path d="M30 8 H40 a6 6 0 0 1 0 12 H30" />
          <path d="M30 20 H42 a6.5 6.5 0 0 1 0 12 H30" />
          {/* Wind streaming off the left */}
          <path d="M30 12 H14 a3 3 0 1 1 3 -3" />
          <path d="M30 20 H9 a3.3 3.3 0 1 0 -3.3 3.3" />
          <path d="M30 28 H16 a3 3 0 1 1 3 3" />
        </g>
      </svg>

      {/* Wordmark */}
      <span
        className={`text-xl font-extrabold tracking-tight ${
          tone === "light" ? "text-white" : "text-ink"
        }`}
      >
        Breeze
        <span className={tone === "light" ? "text-accent-glow" : "text-accent"}>
          ly
        </span>
      </span>
    </span>
  );
}
