export default function Stars({
  rating,
  reviews,
}: {
  rating: number;
  reviews?: number;
}) {
  const full = Math.round(rating);
  return (
    <div className="flex items-center gap-1.5 text-sm">
      <span className="text-amber-400" aria-hidden>
        {"★".repeat(full)}
        <span className="text-black/15">{"★".repeat(5 - full)}</span>
      </span>
      <span className="font-semibold text-ink">{rating.toFixed(1)}</span>
      {reviews != null && (
        <span className="text-ink/50">({reviews})</span>
      )}
    </div>
  );
}
