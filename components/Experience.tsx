"use client";

import { useTranslations } from "next-intl";
import { Briefcase } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function Experience() {
  const t = useTranslations("experience");

  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            {t("title")}
          </h2>
        </AnimatedSection>

        <div className="space-y-8">
          {t.raw("jobs").map((job: any, index: number) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <div className="glass rounded-xl p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/20 rounded-lg">
                    <Briefcase className="text-primary-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {job.company}
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">
                      {job.position}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {job.period} • {job.location}
                    </p>
                    <p className="mt-3 text-gray-700 dark:text-gray-300">
                      {job.description}
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