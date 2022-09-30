import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        labs: resolve(__dirname, 'labs/index.html')
      }
    },
    outDir: 'docs'
  }
})