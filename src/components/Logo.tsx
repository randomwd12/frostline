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
        {/* Wind streaming off the left of the B */}
        <g
          fill="none"
          stroke="#fff"
          strokeWidth="2.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M33 13 H17 a3 3 0 1 1 3 -3" />
          <path d="M33 20 H12 a3.3 3.3 0 1 0 -3.3 3.3" />
          <path d="M33 27 H19 a3 3 0 1 1 3 3" />
        </g>
        {/* Bold B in the site font */}
        <text
          x="40"
          y="29"
          fontSize="26"
          fontWeight="800"
          fill="#fff"
          textAnchor="middle"
          fontFamily="var(--font-sans), system-ui, sans-serif"
        >
          B
        </text>
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
