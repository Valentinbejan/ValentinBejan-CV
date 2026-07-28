"use client";

import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

/* Not a dark mode: the second lighting condition a security document is read
   under. Daylight shows the print; the UV lamp shows what fluoresces. */
export default function ThemeToggle({ onCover }: { onCover: boolean }) {
  const { resolvedTheme, setTheme } = useTheme();
  const t = useTranslations("controls");
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isUV = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isUV ? "light" : "dark")}
      aria-label={isUV ? t("toDaylight") : t("toUV")}
      className={`field-label flex items-center gap-2 border px-3 py-2 transition-colors duration-200 ${
        onCover
          ? "border-cover-ink-2/40 text-cover-ink-2 hover:border-cover-foil hover:text-cover-foil"
          : "border-rule text-ink-3 hover:border-stamp hover:text-stamp"
      }`}
    >
      <span
        aria-hidden="true"
        className={`h-2 w-2 rounded-full transition-colors duration-300 ${
          isUV ? "bg-stamp" : "bg-foil"
        }`}
      />
      <span suppressHydrationWarning>{isUV ? t("uv") : t("daylight")}</span>
    </button>
  );
}
