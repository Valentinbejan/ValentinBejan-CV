// cv-website/components/About.tsx — the bearer's own statement.
"use client";

import { useTranslations } from "next-intl";
import DocumentSection from "./security/DocumentSection";
import Stamp from "./security/Stamp";
import { useInView } from "./security/useInView";

export default function About() {
  const t = useTranslations("about");
  const { ref, seen } = useInView<HTMLDivElement>("-20% 0px -20% 0px");

  return (
    <DocumentSection
      id="declaration"
      title={t("title")}
      reference={t("reference")}
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,19rem)_minmax(0,1fr)] lg:gap-16">
        <figure className="max-w-[19rem]">
          <picture>
            <source srcSet="/img/graduation.webp" type="image/webp" />
            <img
              src="/img/graduation.jpg"
              width={1100}
              height={1348}
              alt={t("photoAlt")}
              loading="lazy"
              className="photo-mount w-full object-cover ring-1 ring-foil/40"
            />
          </picture>
          <figcaption className="mt-3 border-t border-rule pt-3">
            <span className="engraved block text-lg leading-snug text-ink">
              {t("capQuote")}
            </span>
            <span className="field-label mt-2 block text-ink-3">
              {t("capCaption")}
            </span>
          </figcaption>
        </figure>

        <div>
          <p className="measure text-entry leading-[1.72] text-ink">
            {t("description")}
          </p>

          <div
            ref={ref}
            className="mt-10 flex flex-wrap items-end gap-x-12 gap-y-6 border-t border-rule pt-6"
          >
            <div>
              <span className="field-label block text-ink-3">
                {t("signedLabel")}
              </span>
              <span className="engraved mt-1.5 block text-2xl italic text-ink">
                Valentin Bejan
              </span>
            </div>
            <div>
              <span className="field-label block text-ink-3">
                {t("dateLabel")}
              </span>
              <span className="serial mt-2 block text-data text-ink-2">
                {t("dateValue")}
              </span>
            </div>

            <Stamp
              line1={t("stampLine1")}
              line2={t("stampLine2")}
              pressed={seen}
              className="ml-auto"
            />
          </div>
        </div>
      </div>
    </DocumentSection>
  );
}
