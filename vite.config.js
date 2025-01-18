
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: 'src/Test/setup.js',
  },
  build: {
    minify: 'terser', 
    terserOptions: {
      format: {
        comments: false, 
      },
      compress: {
        drop_console: true,
      },
      mangle: true, 
    },
  },
});
