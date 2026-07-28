// cv-website/components/Hobbies.tsx — endorsements added to the record.
"use client";

import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import DocumentSection from "./security/DocumentSection";

type Hobby = {
  title: string;
  description: string;
  link: string | null;
  icon: string;
};

export default function Hobbies() {
  const t = useTranslations("hobbies");
  const hobbies = t.raw("items") as Hobby[];

  return (
    <DocumentSection
      id="endorsements"
      title={t("title")}
      reference={t("reference", { n: hobbies.length })}
      tint
    >
      <div>
        {hobbies.map((hobby, i) => (
          <article
            key={hobby.title}
            className="field-row grid gap-x-10 gap-y-3 py-7 sm:grid-cols-[10.5rem_minmax(0,1fr)] lg:gap-x-14"
          >
            <p className="serial text-data text-ink-2 sm:pt-1">
              {t("endorsementRef", { n: String(i + 1).padStart(2, "0") })}
            </p>

            <div>
              <h3 className="engraved text-2xl text-ink sm:text-entity">
                {hobby.title}
              </h3>
              <p className="measure mt-3 text-record text-ink-2">
                {hobby.description}
              </p>

              {hobby.link ? (
                <a
                  href={hobby.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="serial mt-4 inline-flex items-center gap-1.5 border-b border-verify/40 pb-0.5 text-proof text-verify transition-colors duration-200 hover:border-verify"
                >
                  {t("visit")}
                  <ArrowUpRight size={13} strokeWidth={2} />
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </DocumentSection>
  );
}
