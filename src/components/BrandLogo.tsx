/**
 * Official Prayaan Capital logo assets (in /public):
 * - prayaan-logo-full.png — horizontal lockup: mark + PRAYAAN CAPITAL wordmark
 * - prayaan-mark.png — round mark only, for square/tight contexts
 */
const BrandLogo = ({
  size = 32,
  variant = "full",
}: {
  /** rendered height in px; full lockup keeps its aspect ratio */
  size?: number;
  variant?: "full" | "mark";
}) =>
  variant === "full" ? (
    <img
      src="/prayaan-logo-full.png"
      alt="Prayaan Capital"
      style={{ height: size }}
      className="w-auto shrink-0"
    />
  ) : (
    <img
      src="/prayaan-mark.png"
      alt="Prayaan Capital"
      width={size}
      height={size}
      className="shrink-0"
    />
  );

export default BrandLogo;
