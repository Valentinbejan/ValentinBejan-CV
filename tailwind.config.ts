// cv-website/tailwind.config.ts
import type { Config } from "tailwindcss";

const token = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", ".uv"],
  theme: {
    extend: {
      colors: {
        stock: token("stock"),
        "stock-2": token("stock-2"),
        panel: token("panel"),
        ink: token("ink"),
        "ink-2": token("ink-2"),
        "ink-3": token("ink-3"),
        rule: token("rule"),
        guilloche: token("guilloche"),
        foil: token("foil"),
        "foil-text": token("foil-text"),
        stamp: token("stamp"),
        verify: token("verify"),
        cover: token("cover"),
        "cover-2": token("cover-2"),
        "cover-ink": token("cover-ink"),
        "cover-ink-2": token("cover-ink-2"),
        "cover-foil": token("cover-foil"),
        "cover-guilloche": token("cover-guilloche"),
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        record: ["var(--font-record)", "system-ui", "sans-serif"],
        serial: ["var(--font-serial)", "ui-monospace", "monospace"],
      },
      fontSize: {
        // Document scale — steps are obvious, not incremental.
        //
        // The serial family below is the small end of the ramp: five steps a
        // printed form actually uses, from the machine-readable strip up to a
        // data value. They are plain strings on purpose, so leading stays
        // inherited the way inline measurement text needs it.
        mrz: "0.5625rem", // machine-readable strip, narrow screens
        index: "0.625rem", // nav fields, index numerals, stamp date
        ref: "0.6875rem", // reference codes, hosts, the strip at sm and up
        proof: "0.75rem", // verification links, annex materials
        data: "0.8125rem", // periods, dates, cover data values

        // Engraved entity titles: the interior rung between entry and heading.
        lede: "1rem", // annex description at sm and up
        "entity-sm": "1.375rem", // competence category
        entity: "1.75rem", // employer, qualification, interest
        annex: "2.125rem", // annex title — the loudest interior entity

        field: ["0.6875rem", { lineHeight: "1.1", letterSpacing: "0.16em" }],
        record: ["0.9375rem", { lineHeight: "1.55" }],
        entry: ["1.0625rem", { lineHeight: "1.45" }],
        // A three-to-one step between the bearer and the denomination, so the
        // name owns the viewport and the qualification reads as its subtitle.
        // The positioning line must outrank every interior heading, or the word
        // "Education" is louder than what he actually does.
        denomination: [
          "clamp(1.7rem, 3.6vw, 3.1rem)",
          { lineHeight: "1.08", letterSpacing: "-0.018em" },
        ],
        bearer: [
          "clamp(3rem, 10vw, 7.6rem)",
          { lineHeight: "0.86", letterSpacing: "-0.03em" },
        ],
        heading: [
          "clamp(1.9rem, 3.6vw, 2.9rem)",
          { lineHeight: "1", letterSpacing: "-0.02em" },
        ],
      },
      maxWidth: {
        document: "78rem",
        page: "64rem",
      },
      transitionTimingFunction: {
        // exponential ease-out — the document settles, it never bounces
        settle: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      animation: {
        "foil-catch": "foil-catch 1.4s cubic-bezier(0.16,1,0.3,1) 0.3s both",
        "stamp-press": "stamp-press 0.7s cubic-bezier(0.16,1,0.3,1) both",
        "lamp-sweep": "lamp-sweep 22s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
