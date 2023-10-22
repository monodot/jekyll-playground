import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({ customElement: true }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    // Specify a directory in your SSG's build directory
    outDir: '_includes/js/dist',
    rollupOptions: {
      // Improvement: loop through files in the elements directory to build this object
      input: {
        'henlo-borb': resolve(__dirname, 'src/elements/henlo-borb.js'),
      },
      // Use predictable file names
      output: {
        entryFileNames(chunkInfo) {
          return `${chunkInfo.name}.js`
        },
      },
    }
  }
})
