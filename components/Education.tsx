// cv-website/components/Education.tsx — the credentials on file.
"use client";

import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import DocumentSection from "./security/DocumentSection";

type School = {
  name: string;
  degree: string;
  field: string;
  period: string;
  status: string;
  link?: string;
};

const host = (url: string) => {
  try {
    return new URL(url).host.replace(/^www\./, "");
  } catch {
    return url;
  }
};

export default function Education() {
  const t = useTranslations("education");
  const schools = t.raw("schools") as School[];

  return (
    <DocumentSection
      id="credentials"
      title={t("title")}
      reference={t("reference", { n: schools.length })}
    >
      <div>
        {schools.map((school, i) => (
          <article
            key={`${school.name}-${i}`}
            className="field-row grid gap-x-10 gap-y-3 py-7 sm:grid-cols-[10.5rem_minmax(0,1fr)] lg:gap-x-14"
          >
            <div className="sm:pt-1">
              <p className="serial tnum text-data text-ink-2">
                {school.period}
              </p>
              {school.status ? (
                <p className="field-label mt-2 text-foil-text">{school.status}</p>
              ) : null}
            </div>

            <div>
              <h3 className="engraved text-2xl text-ink sm:text-entity">
                {school.field}
              </h3>
              <p className="mt-1.5 text-entry text-ink">{school.name}</p>
              <p className="measure-tight mt-1 text-record text-ink-3">
                {school.degree}
              </p>
              {school.link ? (
                <a
                  href={school.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="serial mt-3 inline-flex items-center gap-1.5 border-b border-verify/40 pb-0.5 text-proof text-verify transition-colors duration-200 hover:border-verify"
                >
                  {host(school.link)}
                  <ArrowUpRight size={12} strokeWidth={2} />
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </DocumentSection>
  );
}
