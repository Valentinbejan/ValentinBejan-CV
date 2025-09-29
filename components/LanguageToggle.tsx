"use client";

import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function LanguageToggle() {
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = pathname.split("/")[1] || "ro";

  const toggleLanguage = () => {
    const newLocale = currentLocale === "ro" ? "en" : "ro";
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleLanguage}
      className="px-3 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium"
    >
      {currentLocale === "ro" ? "EN" : "RO"}
    </motion.button>
  );
}