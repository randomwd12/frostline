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
      {/* Icon mark: bold "B" monogram with a reversed wind gust on a gradient badge */}
      <svg
        viewBox="0 0 54 40"
        className="h-9 w-auto drop-shadow-sm"
        role="img"
        aria-label="Breezely"
      >
        <defs>
          <linearGradient
            id={gradId}
            x1="0"
            y1="0"
            x2="54"
            y2="40"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#38bdf8" />
            <stop offset="1" stopColor="#06b6d4" />
          </linearGradient>
        </defs>
        <rect width="54" height="40" rx="12" fill={`url(#${gradId})`} />
        <text
          x="14"
          y="29"
          fontSize="25"
          fontWeight="800"
          fill="#fff"
          textAnchor="middle"
          fontFamily="var(--font-sans), system-ui, sans-serif"
        >
          B
        </text>
        {/* Wind gust, mirrored ("in reverse") so it streams off the B */}
        <g
          fill="none"
          stroke="#fff"
          strokeWidth="2.4"
          strokeLinecap="round"
          transform="matrix(-1 0 0 1 75 0)"
        >
          <path d="M27 13 H38 a3 3 0 1 0 -3 -3" />
          <path d="M27 20 H42 a3.5 3.5 0 1 1 -3.5 3.5" />
          <path d="M27 27 H36 a2.7 2.7 0 1 0 -2.7 -2.7" />
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
