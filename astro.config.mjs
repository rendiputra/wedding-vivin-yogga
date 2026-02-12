// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config

export default defineConfig({
  site: 'https://rendiputra.github.io', 
  
  // Ganti dengan nama repository Anda (diawali garis miring)
  base: '/wedding-vivin-yogga',
  vite: {
    plugins: [tailwindcss()]
  }
});