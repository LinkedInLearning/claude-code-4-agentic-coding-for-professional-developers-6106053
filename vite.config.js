import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({
    plugins: ['babel-plugin-react-compiler'],
  })],
  base: './',
  build: {
    outDir: 'docs',
  }
})
