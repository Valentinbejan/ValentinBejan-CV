"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function Skills() {
  const t = useTranslations("skills");
  const categories = t.raw("categories");

  const categoryIcons = {
    programming: "💻",
    ai: "🤖",
    database: "🗄️",
    graphics: "🎨",
    languages: "🌍",
  };

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            {t("title")}
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(categories).map(([key, category]: [string, any], index) => (
            <AnimatedSection key={key} delay={index * 0.1}>
              <div className="glass rounded-xl p-6 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">
                    {categoryIcons[key as keyof typeof categoryIcons]}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item: string, itemIndex: number) => (
                    <motion.span
                      key={itemIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + itemIndex * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}