import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n/request';

export default createMiddleware({
  locales,
  defaultLocale: 'es',
  localePrefix: 'always',
  localeDetection: false
});

export const config = {
  matcher: ['/', '/(es|pt|en)/:path*']
};