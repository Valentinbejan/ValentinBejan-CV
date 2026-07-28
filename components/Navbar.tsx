// cv-website/components/Navbar.tsx — the document's header band.
"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { cvHref } from "@/lib/cv";

export default function Navbar() {
  const t = useTranslations("nav");
  const params = useParams();
  const locale = (params?.locale as string) || "ro";

  const [onCover, setOnCover] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setOnCover(window.scrollY < window.innerHeight - 96);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const fields = [
    { href: "#declaration", label: t("about") },
    { href: "#service", label: t("experience") },
    { href: "#credentials", label: t("education") },
    { href: "#competences", label: t("skills") },
    { href: "#annexes", label: t("projects") },
    { href: "#endorsements", label: t("hobbies") },
    { href: "#contact", label: t("contact") },
  ];

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-settle ${
          onCover
            ? "border-b border-transparent bg-transparent"
            : "border-b border-rule bg-stock/90 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex h-16 max-w-document items-center gap-4 px-5 sm:px-8">
          <a
            href="#cover"
            className={`flex items-baseline gap-3 transition-colors duration-500 ${
              onCover ? "text-cover-ink" : "text-ink"
            }`}
          >
            <span className="engraved text-xl leading-none">VB</span>
            <span
              className={`serial hidden text-index sm:inline ${
                onCover ? "text-cover-ink-2" : "text-ink-3"
              }`}
            >
              {t("reference")}
            </span>
          </a>

          <nav className="ml-auto hidden items-center gap-x-5 lg:flex">
            {fields.map((f) => (
              <a
                key={f.href}
                href={f.href}
                className={`field-label relative py-1 text-index transition-colors duration-200 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:ease-settle hover:after:scale-x-100 ${
                  onCover
                    ? "text-cover-ink-2 after:bg-cover-foil hover:text-cover-ink"
                    : "text-ink-2 after:bg-stamp hover:text-ink"
                }`}
              >
                {f.label}
              </a>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2 lg:ml-4">
            <LanguageToggle onCover={onCover} />
            <ThemeToggle onCover={onCover} />

            <a
              href={cvHref(locale)}
              download
              className={`field-label hidden px-4 py-2 transition-all duration-300 ease-settle sm:inline-flex ${
                onCover
                  ? "border border-cover-foil/60 text-cover-foil hover:border-cover-foil hover:bg-cover-foil hover:text-cover"
                  : "bg-ink text-stock hover:bg-stamp"
              }`}
            >
              {t("downloadCV")}
            </a>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label={t("openIndex")}
              className={`p-2 lg:hidden ${onCover ? "text-cover-ink" : "text-ink"}`}
            >
              <Menu size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* The index of fields, as its own page of the document */}
      {open ? (
        <div className="fixed inset-0 z-[60] overflow-y-auto bg-stock lg:hidden">
          <div className="flex h-16 items-center justify-between px-5 sm:px-8">
            <span className="serial text-index text-ink-3">
              {t("reference")}
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={t("closeIndex")}
              className="p-2 text-ink"
            >
              <X size={20} strokeWidth={1.5} />
            </button>
          </div>

          <nav className="px-5 pb-12 sm:px-8">
            {fields.map((f, i) => (
              <a
                key={f.href}
                href={f.href}
                onClick={() => setOpen(false)}
                className="field-row flex items-baseline justify-between py-5 text-ink"
              >
                <span className="engraved text-2xl">{f.label}</span>
                <span className="serial text-index text-ink-3">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </a>
            ))}

            <a
              href={cvHref(locale)}
              download
              onClick={() => setOpen(false)}
              className="field-label mt-8 flex items-center justify-center bg-ink px-4 py-4 text-stock"
            >
              {t("downloadCV")}
            </a>
          </nav>
        </div>
      ) : null}
    </>
  );
}
