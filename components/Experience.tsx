// cv-website/components/Experience.tsx — the service record.
"use client";

import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import DocumentSection from "./security/DocumentSection";

type Job = {
  company: string;
  location: string;
  position: string;
  period: string;
  description: string;
  link?: string;
};

const host = (url: string) => {
  try {
    return new URL(url).host.replace(/^www\./, "");
  } catch {
    return url;
  }
};

export default function Experience() {
  const t = useTranslations("experience");
  const jobs = t.raw("jobs") as Job[];

  return (
    <DocumentSection
      id="service"
      title={t("title")}
      reference={t("reference", { n: jobs.length })}
      tint
    >
      <div>
        {jobs.map((job, i) => (
          <article
            key={`${job.company}-${i}`}
            className="field-row grid gap-x-10 gap-y-3 py-7 sm:grid-cols-[10.5rem_minmax(0,1fr)] lg:gap-x-14"
          >
            <div className="sm:pt-1">
              <p className="serial tnum text-data text-ink-2">
                {job.period}
              </p>
              <p className="field-label mt-2 text-ink-3">{job.location}</p>
            </div>

            <div>
              <h3 className="engraved text-2xl text-ink sm:text-entity">
                {job.company}
              </h3>
              <p className="mt-1 text-entry text-ink-2">{job.position}</p>
              {job.description ? (
                <p className="measure mt-3 text-record text-ink-2">
                  {job.description}
                </p>
              ) : null}
              {job.link ? (
                <a
                  href={job.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="serial mt-3 inline-flex items-center gap-1.5 border-b border-verify/40 pb-0.5 text-proof text-verify transition-colors duration-200 hover:border-verify"
                >
                  {host(job.link)}
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
