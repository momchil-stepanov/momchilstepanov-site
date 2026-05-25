// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://momchilstepanov.com',
  trailingSlash: 'never',
  // Force all <script> blocks to be emitted as external bundled chunks.
  // Default behaviour in Astro 6 is to inline small scripts directly
  // into HTML, which on Cloudflare Pages edge runtime triggers a 500
  // when combined with Cyrillic-heavy HTML above ~24 KB.
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      // Push all asset inlining off; emit scripts as separate files.
      assetsInlineLimit: 0,
    },
  },
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
