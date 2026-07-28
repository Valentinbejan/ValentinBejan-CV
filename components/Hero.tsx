// cv-website/components/Hero.tsx — the cover of the record.
"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { GuillocheRosette, LatheRule } from "./security/Guilloche";
import Seal from "./security/Seal";
import { cvHref } from "@/lib/cv";

const ENGRAVING = "url(/img/portrait-engraved.png)";

// Both plates must occupy exactly the same box or the lit copy drifts out of
// register. On small screens the plate sits high, behind the name, so it never
// competes with body copy for contrast.
const PLATE =
  "absolute right-[-18%] top-[27%] h-[44%] w-[72%] -translate-y-1/2 sm:right-[-2%] sm:top-1/2 sm:h-[70%] sm:w-[54%] lg:right-[4%] lg:h-[80%] lg:w-[40%]";

const PLATE_MASK = {
  WebkitMaskSize: "contain",
  maskSize: "contain",
  WebkitMaskRepeat: "no-repeat",
  maskRepeat: "no-repeat",
  WebkitMaskPosition: "center",
  maskPosition: "center",
} as const;

export default function Hero() {
  const t = useTranslations("cover");
  const params = useParams();
  const locale = (params?.locale as string) || "ro";

  const sectionRef = useRef<HTMLElement>(null);
  const frame = useRef(0);
  const [handled, setHandled] = useState(false);

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLElement>) => {
    if (e.pointerType === "touch") return;
    const el = sectionRef.current;
    if (!el) return;
    if (frame.current) return;
    const { clientX, clientY } = e;
    frame.current = requestAnimationFrame(() => {
      frame.current = 0;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--lx", `${((clientX - r.left) / r.width) * 100}%`);
      el.style.setProperty("--ly", `${((clientY - r.top) / r.height) * 100}%`);
    });
    setHandled(true);
  }, []);

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  const fields = [
    { label: t("issuedLabel"), value: t("issuedValue") },
    { label: t("placeLabel"), value: t("placeValue") },
    { label: t("statusLabel"), value: t("statusValue") },
    { label: t("languagesLabel"), value: t("languagesValue") },
  ];

  return (
    <section
      id="cover"
      ref={sectionRef}
      onPointerMove={onPointerMove}
      className="relative flex min-h-[100svh] flex-col overflow-hidden bg-cover text-cover-ink"
    >
      {/* ── The cover's engine-turned ground ─────────────────────────── */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 ${
          handled ? "" : "animate-lamp-sweep"
        }`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(120%_90%_at_18%_0%,rgb(var(--cover-2))_0%,rgb(var(--cover))_62%)]" />

        {/* rosette, bleeding off the right edge */}
        <GuillocheRosette
          className="absolute -right-[26%] top-1/2 aspect-square h-[145%] -translate-y-1/2 bg-cover-guilloche sm:-right-[14%] lg:right-[-6%] lg:h-[125%]"
          opacity={0.62}
        />

        {/* the intaglio portrait, always present */}
        <div
          className={`${PLATE} bg-gradient-to-b from-cover-guilloche via-cover-ink-2 to-cover-foil opacity-[0.13] sm:opacity-[0.18] lg:opacity-[0.22]`}
          style={{
            ...PLATE_MASK,
            WebkitMaskImage: ENGRAVING,
            maskImage: ENGRAVING,
          }}
        />

        {/* the same plate, resolved wherever the light rakes across it */}
        <div
          className={`${PLATE} bg-gradient-to-b from-cover-ink via-cover-foil to-cover-ink-2 opacity-45 sm:opacity-60 lg:opacity-75`}
          style={{
            WebkitMaskImage: `${ENGRAVING}, radial-gradient(circle at var(--lx) var(--ly), #000 0%, #000 12%, transparent 46%)`,
            maskImage: `${ENGRAVING}, radial-gradient(circle at var(--lx) var(--ly), #000 0%, #000 12%, transparent 46%)`,
            WebkitMaskSize: "contain, 100% 100%",
            maskSize: "contain, 100% 100%",
            WebkitMaskRepeat: "no-repeat, no-repeat",
            maskRepeat: "no-repeat, no-repeat",
            WebkitMaskPosition: "center, center",
            maskPosition: "center, center",
            WebkitMaskComposite: "source-in",
            maskComposite: "intersect",
          }}
        />

        {/* the light itself */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--lx)_var(--ly),rgb(var(--cover-guilloche)/0.22)_0%,transparent_42%)] mix-blend-screen" />
      </div>

      {/* ── The bearer ───────────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto flex w-full max-w-document flex-1 flex-col justify-center px-5 pb-6 pt-24 sm:px-8 sm:pt-28">
        <h1 className="engraved cover-relief text-bearer text-cover-ink">
          <span className="block">{t("givenName")}</span>
          <span className="block">{t("familyName")}</span>
        </h1>

        <LatheRule className="mt-7 h-6 w-full max-w-xl bg-cover-guilloche opacity-90" />

        <p className="engraved mt-6 max-w-2xl text-denomination text-cover-ink">
          {t("denomination")}
        </p>
      </div>

      {/* ── The data panel ───────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto w-full max-w-document px-5 pb-8 sm:px-8">
        <div className="flex flex-col gap-8 border-t border-cover-ink-2/25 pt-7 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex items-start gap-5 sm:gap-7">
            {/* the bearer's photograph, mounted on the page */}
            <picture className="flex-none">
              <source srcSet="/img/portrait.webp" type="image/webp" />
              <img
                src="/img/portrait.jpg"
                width={900}
                height={1200}
                alt={t("photoAlt")}
                className="photo-mount h-[104px] w-[78px] flex-none object-cover object-top ring-1 ring-cover-foil/50 sm:h-[132px] sm:w-[99px]"
              />
            </picture>

            <dl className="grid grid-cols-2 gap-x-8 gap-y-4 sm:gap-x-12">
              {fields.map((f) => (
                <div key={f.label}>
                  <dt className="field-label text-cover-ink-2">{f.label}</dt>
                  <dd className="serial mt-1.5 text-data text-cover-ink">
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="flex items-end gap-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={cvHref(locale)}
                download
                className="field-label inline-flex items-center justify-center gap-2 bg-cover-foil px-6 py-3.5 text-cover transition-all duration-300 ease-settle hover:brightness-110 focus-visible:outline-cover-foil"
              >
                {t("certifiedCopy")}
              </a>
              <a
                href="#annexes"
                className="field-label inline-flex items-center justify-center gap-2 border border-cover-ink-2/45 px-6 py-3.5 text-cover-ink transition-all duration-300 ease-settle hover:border-cover-foil hover:text-cover-foil"
              >
                {t("verify")}
              </a>
            </div>

            <Seal
              className="hidden h-[104px] w-[104px] flex-none animate-[foil-catch_1.6s_cubic-bezier(0.16,1,0.3,1)_0.4s_both] text-cover-foil xl:block"
              legend={t("sealLegend")}
            />
          </div>
        </div>
      </div>

      {/* ── Machine-readable foot ────────────────────────────────────── */}
      <div className="relative z-10 border-t border-cover-ink-2/25 bg-cover-2/70">
        <div className="mx-auto max-w-document overflow-hidden px-5 py-3 sm:px-8">
          <p
            className="serial whitespace-nowrap text-mrz leading-[1.7] text-cover-ink-2/80 sm:text-ref"
            aria-hidden="true"
          >
            VB&lt;&lt;CV&lt;2026&lt;&lt;RO&lt;EN&lt;&lt;GALATI&lt;ROMANIA&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;&lt;
            <br />
            COMPUTER&lt;ENGINEERING&lt;&lt;AI&lt;&lt;LLM&lt;&lt;RAG&lt;&lt;JAVA&lt;&lt;REACT&lt;&lt;&lt;&lt;&lt;&lt;
          </p>
        </div>
      </div>
    </section>
  );
}
