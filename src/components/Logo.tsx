export default function Logo({
  tone = "dark",
  className = "",
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      {/* Icon mark: a breeze/wind glyph on a gradient squircle */}
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-[11px] bg-gradient-to-br from-ice-400 to-accent shadow-sm ring-1 ring-white/20">
        <svg
          viewBox="0 0 32 32"
          className="h-[22px] w-[22px]"
          fill="none"
          stroke="#fff"
          strokeWidth={2.4}
          strokeLinecap="round"
          aria-hidden
        >
          <path d="M5 11 H17.5 a3.2 3.2 0 1 0 -3 -3.4" />
          <path d="M5 16 H21 a3.6 3.6 0 1 1 -3.4 3.8" />
          <path d="M5 21 H14.5 a2.7 2.7 0 1 0 -2.5 -2.9" />
        </svg>
      </span>

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
