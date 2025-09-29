"use client";

import { useTranslations } from "next-intl";
import { GraduationCap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function Education() {
  const t = useTranslations("education");

  return (
    <section id="education" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            {t("title")}
          </h2>
        </AnimatedSection>

        <div className="space-y-8">
          {t.raw("schools").map((school: any, index: number) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="glass rounded-xl p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/20 rounded-lg">
                    <GraduationCap className="text-primary-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {school.name}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">
                      {school.degree}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      {school.field}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {school.period} {school.status && `• ${school.status}`}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}