const path = require('path');
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@redux': path.resolve(__dirname, './src/redux'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@templates': path.resolve(__dirname, './src/templates'),
      '@organims': path.resolve(__dirname, './src/organims'),
      '@contexts': path.resolve(__dirname, './src/contexts'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@services': path.resolve(__dirname, './src/services'),
      '@models': path.resolve(__dirname, './src/models'),
      '@adapters': path.resolve(__dirname, './src/adapters')
    }
  },

  // optimizeDeps: {
  //   "exclude": ["node_modules", "./src/**/*.spec.*", "./src/**/*.stories.*"],
  // },
  define: {
    global: {}
  }
});
