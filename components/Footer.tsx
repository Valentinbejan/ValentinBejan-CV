// cv-website/components/Footer.tsx — the foot of the document.
"use client";

import { useTranslations } from "next-intl";

const MICROPRINT = "VALENTIN BEJAN · GALAȚI · ROMÂNIA · ";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t border-cover-ink-2/25 bg-cover-2 text-cover-ink-2">
      <p className="microprint select-none px-5 py-2 text-cover-ink-2/45 sm:px-8">
        {MICROPRINT.repeat(24)}
      </p>

      <div className="mx-auto flex max-w-page flex-col gap-2 px-5 pb-8 pt-4 sm:flex-row sm:items-baseline sm:justify-between sm:px-8">
        <p className="text-record">{t("rights")}</p>
        <p className="serial text-ref text-cover-ink-2/70">
          {t("built")}
        </p>
      </div>
    </footer>
  );
}
