import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/Coderhouse/mi-ecommerce/',
  build: {
    outDir: 'dist', // Cambia aquí el nombre de la carpeta de salida
  },
  plugins: [react(), tailwindcss()],
})
