import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/': {  // Matches all requests starting with a forward slash (/)
        target: 'https://backend-for-hackathon.vercel.app',
        changeOrigin: true, // Adjust if CORS handling is different on backend
      },
    },
  },
})
