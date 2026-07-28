"use client";

import { ReactNode } from "react";
import { LatheRule } from "./Guilloche";
import { useInView } from "./useInView";

/** A field of the record. Ruled and titled the way a form is, never carded. */
export default function DocumentSection({
  id,
  title,
  reference,
  note,
  children,
  tint = false,
}: {
  id: string;
  title: string;
  reference: string;
  note?: string;
  children: ReactNode;
  tint?: boolean;
}) {
  const { ref, seen } = useInView<HTMLElement>();

  return (
    <section
      id={id}
      ref={ref}
      className={`security-tint scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24 lg:py-28 ${
        tint ? "bg-stock-2" : "bg-stock"
      }`}
    >
      <div className="mx-auto max-w-page">
        <header className="mb-12 lg:mb-14">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
            <h2 className="engraved relief text-heading text-ink">{title}</h2>
            <span className="serial text-ref text-ink-3">{reference}</span>
          </div>

          <div className="mt-4 overflow-hidden">
            <LatheRule
              className="h-6 w-full origin-left bg-guilloche transition-transform duration-[1100ms] ease-settle"
              style={{ transform: seen ? "scaleX(1)" : "scaleX(0)" }}
            />
          </div>

          {note ? (
            <p className="measure mt-4 text-record text-ink-2">{note}</p>
          ) : null}
        </header>

        {children}
      </div>
    </section>
  );
}
