// cv-website/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Valentin Bejan - Web Developer & AI Enthusiast",
  description:
    "Personal CV website of Valentin Bejan, a passionate web developer and AI enthusiast from Galați, Romania",
  keywords:
    "Valentin Bejan, Web Developer, React, JavaScript, AI, Galați, Romania",
  authors: [{ name: "Valentin Bejan" }],
  openGraph: {
    title: "Valentin Bejan - Web Developer & AI Enthusiast",
    description: "Personal CV website of Valentin Bejan",
    url: "https://valentinbejan.vercel.app",
    siteName: "Valentin Bejan CV",
    locale: "ro_RO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Valentin Bejan - Web Developer",
    description: "Personal CV website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ro" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-[hsl(var(--background))] text-[hsl(var(--foreground))] antialiased`}
      >
        {/* Background layers */}
        <div className="fixed inset-0 -z-10">
          {/* gradient mesh */}
          <div className="absolute inset-0 opacity-60 dark:opacity-50 bg-[radial-gradient(60%_60%_at_20%_20%,rgba(99,102,241,0.25),transparent),radial-gradient(40%_40%_at_80%_0%,rgba(168,85,247,0.25),transparent),radial-gradient(30%_30%_at_50%_100%,rgba(59,130,246,0.25),transparent)]" />
          {/* subtle noise */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22128%22 height=%22128%22 viewBox=%220 0 128 128%22><filter id=%22n%22 x=%220%22 y=%220%22 width=%22100%25%22 height=%22100%25%22><feTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%222%22 stitchTiles=%22stitch%22/></filter><rect width=%22128%22 height=%22128%22 filter=%22url(%23n)%22 opacity=%220.04%22/></svg>')] dark:opacity-10 opacity-20 mix-blend-overlay" />
        </div>

        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
