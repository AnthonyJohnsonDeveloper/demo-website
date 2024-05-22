import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: './',
  server: {
    open: true, // This should open your default browser on running npm run dev
  }
});
