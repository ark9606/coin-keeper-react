import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sass from 'sass'

const APP_BASE_URL = process.env.APP_BASE_URL || '';

// https://vitejs.dev/config/
export default defineConfig({
  base: APP_BASE_URL,
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
})
