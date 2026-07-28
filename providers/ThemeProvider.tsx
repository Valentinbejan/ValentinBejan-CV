"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

/* Two lighting conditions for one document: daylight and the UV inspection
   lamp. The dark class is `.uv` because that is what the dark state is. */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      value={{ light: "daylight", dark: "uv" }}
    >
      {children}
    </NextThemesProvider>
  );
}
