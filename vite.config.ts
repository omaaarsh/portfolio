import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base '/' — served at domain root on Vercel; required for nested SPA routes
export default defineConfig({
  plugins: [react()],
  base: '/',
})
