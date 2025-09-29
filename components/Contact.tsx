// cv-website/components/Contact.tsx
"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Github,
  Linkedin,
  Youtube,
  Copy,
  Check,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function Contact() {
  const t = useTranslations("contact");
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setCopiedItem(label);
        setTimeout(() => setCopiedItem(null), 2000); // Reset after 2 seconds
      },
      (err) => {
        console.error("Could not copy text: ", err);
      },
    );
  };

  const contactInfo = [
    {
      icon: Phone,
      label: t("phone"),
      value: "(+40) 0770625029",
      href: "tel:+400770625029",
      copyable: "(+40) 0770625029",
    },
    {
      icon: Mail,
      label: t("email"),
      value: "valentinbejan@yahoo.com",
      href: "mailto:valentinbejan@yahoo.com",
      copyable: "valentinbejan@yahoo.com",
    },
    {
      icon: Linkedin,
      label: t("linkedin"),
      value: "LinkedIn Profile",
      href: "https://www.linkedin.com/in/bejan-valentin-702b53287/",
    },
    {
      icon: Github,
      label: t("github"),
      value: "GitHub Profile",
      href: "https://github.com/valentinbejan",
    },
    { icon: MapPin, label: t("location"), value: "Galați, România", href: null },
    {
      icon: Youtube,
      label: t("youtube"),
      value: "@Valentinebej",
      href: "https://youtube.com/@Valentinebej",
    },
  ];

  return (
    <section
      id="contact"
      className="section-padding bg-gray-50 dark:bg-gray-900/50"
    >
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
                whileHover={{ scale: 1.02 }}
                className="glass rounded-xl p-6 flex items-center justify-between"
              >
                {/* Contact Info (link or text) */}
                <div className="flex-1 overflow-hidden">
                  {item.href ? (
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 text-gray-700 dark:text-gray-300 group"
                    >
                      <item.icon className="text-primary-600 flex-shrink-0" size={24} />
                      <div className="truncate">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {item.label}
                        </p>
                        <p className="font-medium group-hover:underline truncate">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 text-gray-700 dark:text-gray-300">
                      <item.icon className="text-primary-600 flex-shrink-0" size={24} />
                      <div className="truncate">
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {item.label}
                        </p>
                        <p className="font-medium truncate">{item.value}</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Copy Button */}
                {item.copyable && (
                  <motion.button
                    onClick={() => handleCopy(item.copyable!, item.label)}
                    whileTap={{ scale: 0.9 }}
                    className="ml-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus-ring"
                    aria-label={`Copy ${item.label}`}
                  >
                    {copiedItem === item.label ? (
                      <Check className="text-green-500" size={20} />
                    ) : (
                      <Copy
                        className="text-gray-500 dark:text-gray-400"
                        size={20}
                      />
                    )}
                  </motion.button>
                )}
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}