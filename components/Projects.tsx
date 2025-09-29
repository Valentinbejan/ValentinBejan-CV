// cv-website/components/Projects.tsx
"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ExternalLink, Github, Linkedin } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function Projects() {
  const t = useTranslations("projects");
  const projects = t.raw("items");

  const getLinkContent = (project: any) => {
    switch (project.linkType) {
      case "github":
        return (
          <>
            <Github size={20} />
            {t("viewGithub")}
          </>
        );
      case "linkedin":
        return (
          <>
            <Linkedin size={20} />
            {t("viewProject")}
          </>
        );
      default:
        return (
          <>
            <ExternalLink size={20} />
            {t("viewProject")}
          </>
        );
    }
  };

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            {t("title")}
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project: any, index: number) => (
            <AnimatedSection key={index} delay={index * 0.05}>
              <motion.div
                whileHover={{ y: -5 }}
                className="glass rounded-xl p-6 h-full flex flex-col"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech: string, techIndex: number) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium mt-auto pt-2"
                    whileHover={{ x: 5 }}
                  >
                    {getLinkContent(project)}
                    <ExternalLink size={16} className="opacity-70" />
                  </motion.a>
                )}
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}