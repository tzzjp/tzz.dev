import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";
import vercelStatic from '@astrojs/vercel/static';

// https://astro.build/config
export default defineConfig({
  adapter: vercelStatic({
    webAnalytics: true,
  }),
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja']
  },
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    })
  ]
});