// cv-website/components/Hero.tsx
"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { MapPin, Send, FileDown, Sparkles } from "lucide-react";
import { useParams } from "next/navigation";

export default function Hero() {
  const t = useTranslations("hero");
  const params = useParams();
  const locale = (params?.locale as string) || "ro";

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20">
      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {t("role")}
            </span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4 font-light"
        >
          {t("greeting")}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6"
        >
          <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent animate-gradient bg-300% ">
            {t("name")}
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400 mb-8"
        >
          <MapPin className="w-4 h-4" />
          <span>{t("location")}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            Contact
          </motion.a>
          
          <motion.a
            href={`/cv/cv-${locale}.pdf`}
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-shine"
          >
            <FileDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            Download CV
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}