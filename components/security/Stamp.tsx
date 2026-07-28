// The issuing mark, in office violet. It presses onto the page when the
// declaration comes into view — the document's one moment of ink.
"use client";

export default function Stamp({
  line1,
  line2,
  pressed,
  className = "",
}: {
  line1: string;
  line2: string;
  pressed: boolean;
  className?: string;
}) {
  return (
    <div
      className={`stamp-mark pointer-events-none select-none px-4 py-2.5 text-center ${
        pressed ? "animate-stamp-press" : "opacity-0"
      } ${className}`}
      aria-hidden="true"
    >
      <span className="field-label block">{line1}</span>
      <span className="serial mt-1 block text-index tracking-[0.2em]">
        {line2}
      </span>
    </div>
  );
}
