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
      // Explicit redirect handled by src/pages/index.astro for reliable
      // behaviour on static hosting (Cloudflare Pages).
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/coming-soon'),
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
