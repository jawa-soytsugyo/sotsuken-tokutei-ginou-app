import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base: './' — GitHub Pages yoki istalgan papkada ishlashi uchun
export default defineConfig({
  base: './',
  plugins: [react()],
  server: { host: '0.0.0.0', allowedHosts: true },
  preview: { host: '0.0.0.0', allowedHosts: true },
});
