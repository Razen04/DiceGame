import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


const isProjectSite = false
const base = isProjectSite ? '/DiceGame/' : '/'

// https://vitejs.dev/config/
export default defineConfig({
  base: base,
  plugins: [react()],
})
