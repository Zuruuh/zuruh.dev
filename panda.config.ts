import { defineConfig, defineGlobalStyles } from '@pandacss/dev';

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{js,jsx,ts,tsx,astro}'],
  exclude: [],
  globalCss: defineGlobalStyles({
    ':root': {
      fontFamily: 'inter',
    },
  }),
  theme: {
    extend: {
      tokens: {
        colors: {
          primary: {
            value: '#f77533',
          },
        },
        fonts: {
          inter: {
            value: 'Inter',
          },
        },
      },
    },
  },
  strictTokens: true,
  strictPropertyValues: true,
  outdir: 'styled-system',
});
