import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// El sitio vive en la raíz de https://leomr-ict.github.io, por eso base = '/'.
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
})
