import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { tanstackStart } from '@tanstack/start/plugin/vite'

export default defineConfig({
  plugins: [tanstackStart(), react()],
})
import netlify from '@netlify/vite-plugin-tanstack-start'

export default defineConfig({
  plugins: [
    tanstackStart(),
    netlify(),
  ],
})
