import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": {
      REACT_APP_TOKEN_KEY: "",
      REACT_APP_SECRET_KEY: "",
      ENV_KEY: ""
    }
  }
})
