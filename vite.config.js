import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // GuideWell automation agents
      '/api/automation-agents': {
        target: 'https://sel-nexus.com',
        changeOrigin: true,
      },
    },
  },
})
