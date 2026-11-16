import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, type Plugin} from 'vite';

function spaHtmlFallbackPlugin(): Plugin {
  return {
    name: 'firstyear-au-html-fallback',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        if (req.url && req.method === 'GET') {
          const cleanUrl = req.url.split('?')[0];
          if (cleanUrl.endsWith('.html') && cleanUrl !== '/index.html') {
            req.url = '/index.html';
          }
        }
        next();
      });
    },
  };
}

export default defineConfig(({command}) => {
  return {
    base: process.env.VITE_BASE_PATH ?? (command === 'build' ? '/FirstYearAU/' : '/'),
    plugins: [react(), tailwindcss(), spaHtmlFallbackPlugin()],
    resolve: {
      alias: {
        '@': path.resolve('.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
