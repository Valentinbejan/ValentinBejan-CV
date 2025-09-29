"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Github, Linkedin, Youtube } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function Contact() {
  const t = useTranslations("contact");

  const contactInfo = [
    { icon: Phone, label: t("phone"), value: "(+40) 0770625029", href: "tel:+400770625029" },
    { icon: Mail, label: t("email"), value: "valentinbejan@yahoo.com", href: "mailto:valentinbejan@yahoo.com" },
    { icon: Linkedin, label: t("linkedin"), value: "LinkedIn Profile", href: "https://www.linkedin.com/in/bejan-valentin-702b53287/" },
    { icon: Github, label: t("github"), value: "GitHub Profile", href: "https://github.com/valentinbejan" },
    { icon: MapPin, label: t("location"), value: "Galați, România", href: null },
    { icon: Youtube, label: t("youtube"), value: "@Valentinebej", href: "https://youtube.com/@Valentinebej" },
  ];

  return (
    <section id="contact" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
            {t("title")}
          </h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {contactInfo.map((item, index) => (
            <AnimatedSection key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="glass rounded-xl p-6"
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    <item.icon className="text-primary-600" size={24} />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {item.label}
                      </p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                    <item.icon className="text-primary-600" size={24} />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {item.label}
                      </p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}