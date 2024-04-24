import { defineConfig } from 'vite'
// import { resolve } from 'path'
import react from '@vitejs/plugin-react'
import sass from 'sass'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://ark9606.github.io/coin-keeper-react',
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
  // build: {
  //   rollupOptions: {
  //     input: {
  //       main: resolve(__dirname, 'index.html'),
  //       // nested: resolve(__dirname, 'nested/index.html'),
  //     },
  //   },
  // },
})
