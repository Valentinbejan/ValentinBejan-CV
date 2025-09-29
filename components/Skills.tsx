/* cv-website/components/Skills.tsx */
"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";

export default function Skills() {
  const t = useTranslations("skills");
  const categories = t.raw("categories");
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const categoryIcons = {
    programming: "💻",
    ai: "🤖",
    database: "🗄️",
    graphics: "🎨",
    languages: "🌍",
  };

  const categoryColors = {
    programming: "from-blue-400 to-cyan-400",
    ai: "from-purple-400 to-pink-400",
    database: "from-green-400 to-emerald-400",
    graphics: "from-orange-400 to-red-400",
    languages: "from-indigo-400 to-purple-400",
  };

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto" ref={containerRef}>
        <AnimatedSection>
          <motion.h2 
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="animated-gradient-text">{t("title")}</span>
          </motion.h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(categories).map(([key, category]: [string, any], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 50, rotateY: -30 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.2 }
              }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl blur-xl -z-10 ${categoryColors[key as keyof typeof categoryColors]}" />
              
              <div className="relative glass rounded-xl p-6 h-full border border-gray-200 dark:border-gray-700 group-hover:border-purple-400 dark:group-hover:border-purple-600 transition-colors duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <motion.span 
                    className="text-4xl"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  >
                    {categoryIcons[key as keyof typeof categoryIcons]}
                  </motion.span>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item: string, itemIndex: number) => (
                    <motion.span
                      key={itemIndex}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ 
                        delay: index * 0.1 + itemIndex * 0.05,
                        type: "spring",
                        stiffness: 300,
                        damping: 20
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: [-2, 2, -2, 0],
                        transition: { duration: 0.2 }
                      }}
                      className={`px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${categoryColors[key as keyof typeof categoryColors]} text-white shadow-lg`}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}