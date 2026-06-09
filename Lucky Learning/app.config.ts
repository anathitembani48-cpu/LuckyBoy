import { defineConfig } from '@tanstack/start/config'

export default defineConfig({
  server: {
    prerender: {
      crawlLinks: true,
    },
  },
}) 
