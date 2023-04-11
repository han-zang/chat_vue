import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '/src': fileURLToPath(new URL('./src', import.meta.url)),
      '/public': fileURLToPath(new URL('./public', import.meta.url)),
      '/resource': fileURLToPath(new URL('./resource', import.meta.url))
    }
  },
  server: {
    proxy: {
      '^/test/*': {
        target: 'http://127.0.0.1:8888',
        changeOrigin: true
      },
      '^/chat/*': {
        target: 'http://127.0.0.1:8888',
        changeOrigin: true
      }
    }
  }
})
