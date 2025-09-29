import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['ro', 'en'],
  defaultLocale: 'ro',
  localeDetection: false,
});

export const config = {
  matcher: ['/', '/(ro|en)/:path*']
};