import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' keeps assets working on both a project page (/portfolio/) and a custom domain (/)
export default defineConfig({
  plugins: [react()],
  base: './',
})
