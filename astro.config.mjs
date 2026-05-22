// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://momchilstepanov.com',
  trailingSlash: 'never',
  i18n: {
    locales: ['bg', 'en'],
    defaultLocale: 'bg',
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: true,
    },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'bg',
        locales: {
          bg: 'bg-BG',
          en: 'en-US',
        },
      },
    }),
  ],
});
