import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { translations } from './lib/translations';

const locales = ['ro', 'en'] as const;
type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = locales.includes(requested as Locale)
    ? (requested as Locale)
    : undefined;

  if (!locale) notFound();

  return {
    locale,
    messages: translations[locale] as any,
  };
});
