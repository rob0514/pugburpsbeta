import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  root: './',
  srcDir: './src',
  publicDir: './public',
  outDir: './dist',
  assets: 'assets',
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), alpinejs()]
});