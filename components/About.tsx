"use client";

import { useTranslations } from "next-intl";
import AnimatedSection from "./AnimatedSection";

export default function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-8 gradient-text">
            {t("title")}
          </h2>
        </AnimatedSection>
        
        <AnimatedSection delay={0.2}>
          <div className="glass rounded-2xl p-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {t("description")}
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}