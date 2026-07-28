// cv-website/components/security/Seal.tsx
// The issuer's own mark. Not an institutional seal — this document is
// self-issued, and the seal says so.

export default function Seal({
  className = "",
  legend = "VALENTIN BEJAN · GALAȚI · ROMÂNIA · EMITENT PROPRIU · ",
}: {
  className?: string;
  legend?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      role="img"
      aria-label="Valentin Bejan — self-issued seal"
    >
      <defs>
        <path
          id="seal-ring"
          d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0"
          fill="none"
        />
      </defs>

      <circle
        cx="100"
        cy="100"
        r="92"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.1"
        opacity="0.55"
      />
      <circle
        cx="100"
        cy="100"
        r="86"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
      />
      <circle
        cx="100"
        cy="100"
        r="60"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
        opacity="0.7"
        strokeDasharray="1.5 3.5"
      />

      <text
        fill="currentColor"
        fontSize="10.5"
        letterSpacing="2.9"
        fontWeight="600"
      >
        <textPath href="#seal-ring" startOffset="0">
          {legend}
        </textPath>
      </text>

      <text
        x="100"
        y="118"
        textAnchor="middle"
        fill="currentColor"
        fontSize="58"
        fontFamily="var(--font-display), Georgia, serif"
        fontWeight="600"
        letterSpacing="-1"
      >
        VB
      </text>
    </svg>
  );
}
