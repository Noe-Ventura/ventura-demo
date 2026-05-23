import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import { resolve } from 'path';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  base: '/ventura-demo/', // Base path for GitHub Pages
  plugins: [
    handlebars({
      partialDirectory: resolve(__dirname, 'src/components'),
    }),
    ViteImageOptimizer({
      png: { quality: 80 },
      jpeg: { quality: 80 },
      jpg: { quality: 80 },
    }),
  ],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        toolHeads: resolve(__dirname, 'src/pages/tool-heads/index.html'),
        lathes: resolve(__dirname, 'src/pages/lathes/index.html'),
        partsEquipment: resolve(__dirname, 'src/pages/parts-equipment/index.html'),
        aboutUs: resolve(__dirname, 'src/pages/about-us/index.html'),
        downloads: resolve(__dirname, 'src/pages/downloads/index.html'),
        contact: resolve(__dirname, 'src/pages/contact/index.html'),
        legal: resolve(__dirname, 'src/pages/legal/index.html'),
        notFound: resolve(__dirname, '404.html'),
      },
    },
  },
});
