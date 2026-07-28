// cv-website/app/[locale]/layout.tsx
import type { Metadata } from "next";
import { Bodoni_Moda, Archivo, Courier_Prime } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import "../globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";

const display = Bodoni_Moda({
  subsets: ["latin", "latin-ext"],
  variable: "--font-display",
  display: "swap",
});

const record = Archivo({
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
  variable: "--font-record",
  display: "swap",
});

const serial = Courier_Prime({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serial",
  display: "swap",
});

const locales = ["ro", "en"] as const;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

const META = {
  ro: {
    title: "Valentin Bejan — Inginer software · Galați, România",
    description:
      "Actul de competență al lui Valentin Bejan: inginer web care își antrenează propriile modele. Fiecare rând are o referință verificabilă.",
  },
  en: {
    title: "Valentin Bejan — Software engineer · Galați, Romania",
    description:
      "The competence record of Valentin Bejan: a web engineer who trains his own models. Every line carries a verifiable reference.",
  },
} as const;

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const m = META[locale as keyof typeof META] ?? META.ro;
  return {
    metadataBase: new URL("https://valentin-bejan-cv.vercel.app"),
    title: m.title,
    description: m.description,
    authors: [{ name: "Valentin Bejan" }],
    alternates: {
      canonical: `/${locale}`,
      languages: { ro: "/ro", en: "/en" },
    },
    openGraph: {
      title: m.title,
      description: m.description,
      url: `/${locale}`,
      siteName: "Valentin Bejan",
      locale: locale === "en" ? "en_GB" : "ro_RO",
      type: "profile",
    },
    twitter: {
      card: "summary_large_image",
      title: m.title,
      description: m.description,
    },
  };
}

// The direction contract, emitted into the built markup so it can be audited.
const CONTRACT = `<!--
IMPECCABLE DIRECTION CONTRACT · seed 6088f178

THESIS: A credential Valentin issues to himself, where every line carries a
reference anyone can check. Refuses the dark-portfolio hero-plus-project-grid.

OWN-WORLD: Intaglio security printing. Cobalt cover, anti-photocopy tinted
stock interior, engine-turned guilloche, gold foil, violet stamp ink, teal
verification. Bodoni Moda engraved, Archivo form grotesque, Courier Prime
serials. Ruled fields and ledgers, never cards.

STORY: The visitor reads a credential, believes it because each claim is
hyperlinked to a repo, a live URL or a degree, then takes the certified copy
or counter-signs by writing.

FIRST VIEWPORT: Full-bleed cobalt cover. Guilloche rosette right, engraved
portrait watermark inside it, VALENTIN BEJAN at bearer scale on the left,
denomination line beneath, foil seal lower right, VERIFY and CERTIFIED COPY as
the two actions, machine-readable strip along the foot.

FORM: Self-issued credential; candidate 7 of my 7 grounded directions;
lit-veil staging, raking light resolves the watermark.

FINISH: unreviewed and undocumented is unfinished; this build ends with the
finish review, the verdict, and DESIGN.md
-->`;

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as (typeof locales)[number])) notFound();
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${display.variable} ${record.variable} ${serial.variable}`}
    >
      <body className="bg-stock font-record text-ink">
        <div hidden dangerouslySetInnerHTML={{ __html: CONTRACT }} />
        <ThemeProvider>
          <NextIntlClientProvider locale={locale} messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
