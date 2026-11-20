/** Silhueta provisória, até a foto real ser colocada em /public. */
export function FotoPlaceholder() {
  return (
    <svg viewBox="0 0 400 500" className="h-full w-full" role="img" aria-label="Foto provisória">
      <rect width="400" height="500" fill="#1b1e24" />
      <circle cx="200" cy="190" r="78" fill="#2a2f38" />
      <path d="M60 500c0-90 63-150 140-150s140 60 140 150z" fill="#2a2f38" />
    </svg>
  );
}
