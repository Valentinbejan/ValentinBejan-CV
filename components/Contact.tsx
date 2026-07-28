// cv-website/components/Contact.tsx — the countersignature block that closes
// the record. The cover's cobalt returns, so the document has two covers.
"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { GuillocheRosette, LatheRule } from "./security/Guilloche";
import Seal from "./security/Seal";
import { useInView } from "./security/useInView";

export default function Contact() {
  const t = useTranslations("contact");
  const [copied, setCopied] = useState<string | null>(null);
  const { ref, seen } = useInView<HTMLElement>();

  const copy = (value: string, label: string) => {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        setCopied(label);
        window.setTimeout(() => setCopied(null), 2200);
      })
      .catch(() => setCopied(null));
  };

  const channels = [
    {
      label: t("phone"),
      value: "(+40) 0770 625 029",
      href: "tel:+400770625029",
      copyable: "+400770625029",
      external: false,
    },
    {
      label: t("email"),
      value: "valentinbejan@yahoo.com",
      href: "mailto:valentinbejan@yahoo.com",
      copyable: "valentinbejan@yahoo.com",
      external: false,
    },
    {
      label: t("linkedin"),
      value: "in/bejan-valentin-702b53287",
      href: "https://www.linkedin.com/in/bejan-valentin-702b53287/",
      copyable: null,
      external: true,
    },
    {
      label: t("github"),
      value: "github.com/Valentinbejan",
      href: "https://github.com/Valentinbejan",
      copyable: null,
      external: true,
    },
    {
      label: t("youtube"),
      value: "@Valentinebej",
      href: "https://youtube.com/@Valentinebej",
      copyable: null,
      external: true,
    },
    {
      label: t("location"),
      value: "Galați, România",
      href: null,
      copyable: null,
      external: false,
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative scroll-mt-24 overflow-hidden bg-cover px-5 py-20 text-cover-ink sm:px-8 sm:py-24 lg:py-28"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(110%_80%_at_82%_100%,rgb(var(--cover-2))_0%,rgb(var(--cover))_60%)]" />
        <GuillocheRosette
          className="absolute -left-[22%] -top-[38%] aspect-square h-[190%] bg-cover-guilloche sm:-left-[10%] lg:left-[-4%] lg:h-[170%]"
          opacity={0.4}
        />
      </div>

      <div className="relative mx-auto max-w-page">
        <header className="mb-12">
          <h2 className="engraved cover-relief text-heading text-cover-ink">
            {t("title")}
          </h2>
          <div className="mt-4 overflow-hidden">
            <LatheRule
              className="h-6 w-full origin-left bg-cover-guilloche transition-transform duration-[1100ms] ease-settle"
              style={{ transform: seen ? "scaleX(1)" : "scaleX(0)" }}
            />
          </div>
        </header>

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-20">
          <dl>
            {channels.map((c) => (
              <div
                key={c.label}
                className="flex items-center justify-between gap-6 border-t border-cover-ink-2/25 py-4"
              >
                <div className="min-w-0">
                  <dt className="field-label text-cover-ink-2">{c.label}</dt>
                  <dd className="mt-1.5 truncate">
                    {c.href ? (
                      <a
                        href={c.href}
                        {...(c.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className="serial inline-flex items-center gap-1.5 text-record text-cover-ink underline decoration-cover-ink-2/40 underline-offset-4 transition-colors duration-200 hover:text-cover-foil hover:decoration-cover-foil"
                      >
                        {c.value}
                        {c.external ? (
                          <ArrowUpRight size={13} strokeWidth={2} />
                        ) : null}
                      </a>
                    ) : (
                      <span className="serial text-record text-cover-ink">
                        {c.value}
                      </span>
                    )}
                  </dd>
                </div>

                {c.copyable ? (
                  <button
                    type="button"
                    onClick={() => copy(c.copyable!, c.label)}
                    aria-label={`${t("copy")} — ${c.label}`}
                    className="field-label flex flex-none items-center gap-2 border border-cover-ink-2/35 px-3 py-2 text-cover-ink-2 transition-colors duration-200 hover:border-cover-foil hover:text-cover-foil"
                  >
                    {copied === c.label ? (
                      <>
                        <Check size={13} strokeWidth={2.5} className="text-cover-foil" />
                        <span className="text-cover-foil">{t("copied")}</span>
                      </>
                    ) : (
                      <>
                        <Copy size={13} strokeWidth={2} />
                        <span className="hidden sm:inline">{t("copy")}</span>
                      </>
                    )}
                  </button>
                ) : null}
              </div>
            ))}
          </dl>

          <div className="flex flex-col items-start gap-6 border-t border-cover-ink-2/25 pt-8 lg:w-64 lg:border-0 lg:pt-0">
            <Seal
              className="h-32 w-32 text-cover-foil"
              legend={t("sealLegend")}
            />
            <p className="measure-tight text-record text-cover-ink-2">
              {t("issuance")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
