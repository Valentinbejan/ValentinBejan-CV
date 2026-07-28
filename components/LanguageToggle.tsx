"use client";

import { usePathname, useRouter } from "next/navigation";

/* Romanian diploma supplements are issued in two languages side by side.
   The pair belongs to the document, so both are always shown. */
export default function LanguageToggle({ onCover }: { onCover: boolean }) {
  const pathname = usePathname();
  const router = useRouter();
  const current = pathname.split("/")[1] === "en" ? "en" : "ro";

  const go = (next: "ro" | "en") => {
    if (next === current) return;
    router.push(pathname.replace(`/${current}`, `/${next}`));
  };

  return (
    <div
      className={`field-label flex items-stretch border ${
        onCover ? "border-cover-ink-2/40" : "border-rule"
      }`}
      role="group"
      aria-label={current === "ro" ? "Limba actului" : "Document language"}
    >
      {(["ro", "en"] as const).map((code) => {
        const active = code === current;
        return (
          <button
            key={code}
            type="button"
            onClick={() => go(code)}
            aria-current={active ? "true" : undefined}
            className={`px-2.5 py-2 transition-colors duration-200 ${
              active
                ? onCover
                  ? "bg-cover-ink-2/20 text-cover-ink"
                  : "bg-ink/10 text-ink"
                : onCover
                  ? "text-cover-ink-2 hover:text-cover-ink"
                  : "text-ink-3 hover:text-ink"
            }`}
          >
            {code.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
