import { defineConfig } from 'vite';

export default defineConfig({
    root: 'src/', // Sources files (typically where index.html is)
    publicDir: '../static/', // Path from "root" to static assets (files that are served as they are)
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
});
