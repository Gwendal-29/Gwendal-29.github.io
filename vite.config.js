import { defineConfig } from 'vite';

export default defineConfig({
  define: {
    __DEFINES__: JSON.stringify({}), // Empêche l'erreur en fournissant une valeur vide
  },
});
