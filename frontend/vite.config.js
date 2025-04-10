import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // Ensure the correct base path for production
  build: {
    outDir: 'dist', // Ensures the build output is in 'dist'
  },
})
