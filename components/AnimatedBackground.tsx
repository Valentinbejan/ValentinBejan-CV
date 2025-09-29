// cv-website/components/AnimatedBackground.tsx
"use client";

import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <>
      {/* Base gradient layer */}
      <div className="fixed inset-0 -z-20 bg-gradient-to-br from-slate-50 via-purple-50 to-cyan-50 dark:from-slate-950 dark:via-purple-950/20 dark:to-cyan-950/20">
        <div className="absolute inset-0 gradient-mesh opacity-30 dark:opacity-20" />
      </div>
      
      {/* Aurora effect */}
      <div className="fixed inset-0 -z-19 opacity-20 dark:opacity-10 aurora-bg" />
      
      {/* Floating particles */}
      <div className="fixed inset-0 -z-18">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 10 + Math.random() * 20,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10,
            }}
          />
        ))}
      </div>
      
      {/* Animated morphing blobs */}
      <div className="fixed inset-0 -z-16">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-purple-400/10 to-indigo-400/10 blur-3xl"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, -100, 50, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            animation: "morph 8s ease-in-out infinite",
          }}
        />
        
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-gradient-to-br from-pink-400/10 to-orange-400/10 blur-3xl"
          animate={{
            x: [0, -100, 50, 0],
            y: [0, 100, -50, 0],
            scale: [1, 0.9, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            animation: "morph 10s ease-in-out infinite reverse",
          }}
        />
        
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gradient-to-br from-cyan-400/10 to-blue-400/10 blur-3xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.3, 0.8, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
      
      {/* Grid pattern overlay */}
      <div className="fixed inset-0 -z-15 opacity-5 dark:opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </>
  );
}