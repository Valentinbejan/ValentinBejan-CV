/* cv-website/components/LoadingScreen.tsx */
"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-900 to-pink-900"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        {/* Animated logo */}
        <motion.div
          className="text-6xl md:text-8xl font-bold"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 1.5,
          }}
        >
          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent animated-gradient-text">
            VB
          </span>
        </motion.div>
        
        {/* Loading dots */}
        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-2 loading-dots">
          <span className="w-3 h-3 bg-purple-400 rounded-full"></span>
          <span className="w-3 h-3 bg-pink-400 rounded-full"></span>
          <span className="w-3 h-3 bg-indigo-400 rounded-full"></span>
        </div>
        
        {/* Orbiting particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
            style={{
              top: "50%",
              left: "50%",
            }}
            animate={{
              x: Math.cos((i * Math.PI) / 3) * 80,
              y: Math.sin((i * Math.PI) / 3) * 80,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}