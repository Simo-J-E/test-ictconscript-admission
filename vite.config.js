import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/test-ictconscript-admission/',
  plugins: [react()],
})
