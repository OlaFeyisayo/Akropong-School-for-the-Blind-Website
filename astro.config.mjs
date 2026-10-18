import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static site, built to /dist and published by Netlify.
// Set `site` to your final Netlify URL for correct sitemap/SEO metadata.
export default defineConfig({
  site: 'https://akropong-school.netlify.app',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: { en: 'en', fr: 'fr' },
      },
    }),
  ],
});
