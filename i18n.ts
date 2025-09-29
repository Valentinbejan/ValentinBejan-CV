import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { translations } from './lib/translations'; // Add './lib/'

const locales = ['ro', 'en'] as const;

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale as any)) notFound();

  return {
    // Add 'as any' here to bypass the strict type check
    messages: translations[locale as keyof typeof translations] as any,
  };
});