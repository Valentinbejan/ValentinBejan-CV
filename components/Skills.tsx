// cv-website/components/Skills.tsx — the schedule of competences.
"use client";

import { useTranslations } from "next-intl";
import DocumentSection from "./security/DocumentSection";

type Category = { title: string; items: string[] };

export default function Skills() {
  const t = useTranslations("skills");
  const categories = t.raw("categories") as Record<string, Category>;

  return (
    <DocumentSection
      id="competences"
      title={t("title")}
      reference={t("reference", { n: Object.keys(categories).length })}
      tint
    >
      <div>
        {Object.entries(categories).map(([key, category]) => (
          <div
            key={key}
            className="field-row grid gap-x-10 gap-y-4 py-7 sm:grid-cols-[10.5rem_minmax(0,1fr)] lg:gap-x-14"
          >
            <h3 className="engraved text-xl text-ink sm:pt-0.5 sm:text-entity-sm">
              {category.title}
            </h3>

            {/* A register of entries divided by rules, the way a schedule is
                printed — not a grid of boxes. */}
            {/* a right gutter, so no row can run flush into the column edge */}
            <ul className="flex flex-wrap items-baseline gap-x-4 gap-y-2 sm:pt-1 lg:pr-10">
              {category.items.map((item, i) => (
                <li key={item} className="flex items-baseline gap-x-4">
                  {i > 0 ? (
                    <span aria-hidden="true" className="text-rule">
                      |
                    </span>
                  ) : null}
                  <span className="text-entry text-ink">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </DocumentSection>
  );
}
