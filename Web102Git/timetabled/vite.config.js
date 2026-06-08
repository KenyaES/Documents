import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  vite: {
    server: {
      fs: {
        allow: ['"C:\Users\kenya\Documents\.git\Web102Git\timetabled"']
      }
    }
  }
  
})
