import { defineConfig } from 'vite';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';

export default defineConfig({
    root: 'src/', // Sources files (typically where index.html is)
    publicDir: '../static/', // Path from "root" to static assets (files that are served as they are)
    plugins: [],
  optimizeDeps: {
    esbuildOptions: {
      // Polyfills Node.js globals for browser compatibility
      define: {
        global: 'globalThis',
      },
      plugins: [
        NodeGlobalsPolyfillPlugin({
          process: true,
          buffer: true,
        }),
      ],
    },
  },
    define: {
        // Définir une valeur par défaut pour éviter l'erreur
        __DEFINES__: JSON.stringify({}),
      },
    build:
    {
        outDir: '../dist', // Output in the dist/ folder
        emptyOutDir: true, // Empty the folder first
        sourcemap: true // Add sourcemap
    },
    server: {
        hmr: {
          overlay: false, // Désactive l'affichage des erreurs HMR dans l'interface
        },
      },
});
