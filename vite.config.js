import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // In dev: redirect all 404s back to index.html so React Router handles routing
    historyApiFallback: true,
  },
  preview: {
    // Same for `vite preview`
    historyApiFallback: true,
  }
})
