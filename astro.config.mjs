// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://kaikilka.github.io',
  base: '/altersvorsorge-fuer-alle',
  vite: {
    plugins: [tailwindcss()],
  },
});