// cv-website/components/Hobbies.tsx
"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Youtube, BrainCircuit, ExternalLink } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function Hobbies() {
  const t = useTranslations("hobbies");
  const hobbies = t.raw("items");

  const hobbyIcons: { [key: string]: React.ReactNode } = {
    youtube: <Youtube className="text-red-500" size={24} />,
    ai: <BrainCircuit className="text-purple-500" size={24} />,
  };

  return (
    <section id="hobbies" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            {t("title")}
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {hobbies.map((hobby: any, index: number) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                className="glass rounded-xl p-6 h-full flex flex-col"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/20 rounded-lg">
                    {hobbyIcons[hobby.icon] || <BrainCircuit size={24} />}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {hobby.title}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">
                      {hobby.description}
                    </p>
                    {hobby.link && (
                      <motion.a
                        href={hobby.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium mt-auto"
                        whileHover={{ x: 5 }}
                      >
                        {hobby.icon === "youtube" ? "Visit Channel" : "Learn More"}
                        <ExternalLink size={16} />
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}