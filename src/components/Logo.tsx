export default function Logo({
  tone = "dark",
  className = "",
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      {/* Icon mark: bold "B" monogram on a gradient squircle */}
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-[11px] bg-gradient-to-br from-ice-400 to-accent shadow-sm ring-1 ring-white/20">
        <span className="text-[20px] font-extrabold leading-none text-white">B</span>
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
