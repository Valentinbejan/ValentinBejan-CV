// cv-website/components/Projects.tsx — the annexes, each with its own reference.
"use client";

import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import DocumentSection from "./security/DocumentSection";
import { GuillocheRosette } from "./security/Guilloche";

type Project = {
  name: string;
  description: string;
  tech: string[];
  link: string;
  linkType: "github" | "website" | "linkedin";
  tier?: "principal" | "listed";
};

function host(url: string) {
  try {
    return new URL(url).host.replace(/^www\./, "");
  } catch {
    return url;
  }
}

export default function Projects() {
  const t = useTranslations("projects");
  const projects = t.raw("items") as Project[];

  const principal = projects.filter((p) => p.tier === "principal");
  const listed = projects.filter((p) => p.tier !== "principal");

  const proofLabel = (p: Project) =>
    p.linkType === "github" ? t("proofSource") : t("proofLive");

  return (
    <DocumentSection
      id="annexes"
      title={t("title")}
      reference={t("reference", { n: projects.length })}
      note={t("note")}
    >
      <div>
        {principal.map((p, i) => (
          <article
            key={p.link}
            className="field-row group relative grid gap-x-10 gap-y-4 overflow-hidden py-9 sm:grid-cols-[10.5rem_minmax(0,1fr)] lg:gap-x-14 lg:py-11"
          >
            <GuillocheRosette
              /* held at the same render scale as the other rosettes, so the
                 shared mask's hairlines carry the same weight everywhere */
              className="pointer-events-none absolute -right-[26rem] top-1/2 hidden aspect-square h-[420%] -translate-y-1/2 bg-guilloche opacity-0 transition-opacity duration-500 ease-settle group-hover:opacity-40 lg:block"
            />

            <div className="sm:pt-2">
              <p className="serial tnum text-data text-ink-2">
                {t("annexRef", { n: String(i + 1).padStart(2, "0") })}
              </p>
              <p className="field-label mt-2 text-verify">{proofLabel(p)}</p>
            </div>

            <div className="relative">
              <h3 className="engraved text-entity leading-[1.05] text-ink sm:text-annex">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="after:absolute after:inset-0 hover:text-stamp focus-visible:text-stamp"
                >
                  {p.name}
                </a>
              </h3>

              <p className="measure mt-3 text-record text-ink-2 sm:text-lede">
                {p.description}
              </p>

              <ul className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                {p.tech.map((tech, i) => (
                  <li key={tech} className="flex items-baseline gap-x-3">
                    {i > 0 ? (
                      <span aria-hidden="true" className="text-rule">
                        |
                      </span>
                    ) : null}
                    <span className="serial text-proof text-ink-2">
                      {tech}
                    </span>
                  </li>
                ))}
              </ul>

              <p
                aria-hidden="true"
                className="serial mt-5 inline-flex items-center gap-1.5 border-b border-verify/40 pb-0.5 text-proof text-verify transition-colors duration-200 group-hover:border-verify"
              >
                {host(p.link)}
                <ArrowUpRight
                  size={13}
                  strokeWidth={2}
                  className="transition-transform duration-300 ease-settle group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </p>
            </div>
          </article>
        ))}
      </div>

      {listed.length ? (
        <div className="mt-16">
          {/* the counterfoil: where the document changes register */}
          <div className="perforated mb-10" aria-hidden="true" />

          <h3 className="field-label border-b border-rule pb-3 text-ink-3">
            {t("furtherTitle")}
          </h3>

          <ul>
            {listed.map((p) => (
              <li key={p.link} className="field-row">
                {/* A ledger keeps its columns: every entry starts at the same x */}
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid items-baseline gap-x-8 gap-y-1 py-4 transition-colors duration-200 sm:grid-cols-[minmax(0,15rem)_minmax(0,1fr)_10rem]"
                >
                  <span className="text-entry text-ink group-hover:text-stamp">
                    {p.name}
                  </span>
                  <span className="text-record text-ink-3">{p.description}</span>
                  <span className="serial inline-flex items-baseline gap-1 text-ref text-ink-3 group-hover:text-stamp sm:justify-self-end">
                    {host(p.link)}
                    <ArrowUpRight size={12} strokeWidth={2} className="self-center" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </DocumentSection>
  );
}
