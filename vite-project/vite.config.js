import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  define: {
    VUE_APP_TMDM_API_KEY: JSON.stringify("2ba2028d36a764bffe9dbb02c7b2d725"),
  },
})
