import { resolve, join } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'

export default defineConfig({
  plugins: [vue(), eslintPlugin()],
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, 'src') },
      {
        find: /~(.+)/,
        replacement: join(process.cwd(), 'node_modules/$1'),
      },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData:
          '@import "./src/assets/styles/base/colors.scss"; @import "./src/assets/styles/base/fonts.scss";',
      },
    },
  },
})
