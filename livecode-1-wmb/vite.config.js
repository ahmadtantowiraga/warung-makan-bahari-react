import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias: {
      // eslint-disable-next-line no-undef
      '@':path.resolve(__dirname, './src'),
      // eslint-disable-next-line no-undef
      '@pages': path.resolve(__dirname, './src/pages'),
      // eslint-disable-next-line no-undef
      '@shared': path.resolve(__dirname, './src/shared'),
      // eslint-disable-next-line no-undef
      '@images': path.resolve(__dirname, './src/assets/images'),
      // eslint-disable-next-line no-undef
      '@assets': path.resolve(__dirname, './src/assets'),
    }
  }
})
