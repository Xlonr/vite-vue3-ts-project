import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  base: './', // 设置打包路径
  server: {
    port: 3000,
    open: true, // 设置是否自动打开浏览器
    cors: true // 允许跨域
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `$injectedColor: orange`
      }
    }
  }
})
