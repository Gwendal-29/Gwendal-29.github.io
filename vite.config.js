import { defineConfig } from 'vite';

export default defineConfig({
    define: {
        // By default, Vite doesn't include shims for NodeJS/
        // necessary for segment analytics lib to work
        global: {},
        __DEFINES__: JSON.stringify({}),
      },
      build: {
        minify: 'esbuild', // Utilisez esbuild pour minimiser les erreurs
      },
});
