import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';

export default defineConfig({
  site: 'https://blog.gabbyortman.com',
  integrations: [mdx()],
  vite: {
    plugins: [vanillaExtractPlugin()],
  },
});
