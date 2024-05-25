import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://zuruh.dev',
  i18n: {
    defaultLocale: 'fr',
    locales: ['en', 'fr'],
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [sitemap()],
});
