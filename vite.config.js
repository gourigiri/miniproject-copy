import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["tesseract.js"], // Prevents Vite from trying to bundle it
    },
    chunkSizeWarningLimit: 1000, // Optional: Increase chunk limit to avoid warnings
  },
});
