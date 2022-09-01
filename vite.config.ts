import path from 'node:path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'
import Markdown from 'vite-plugin-vue-markdown'

const pathSrc = path.resolve(__dirname, 'src')

export default defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
      reactivityTransform: true,
    }),
    Markdown(),
    Components({
      dts: path.resolve(pathSrc, 'typings/components.d.ts'),
    }),
    AutoImport({
      imports: ['vue', 'vue-router', '@vueuse/core'],
      dirs: [path.resolve(pathSrc, 'composables')],
      dts: path.resolve(pathSrc, 'typings/components.d.ts'),
    }),
    UnoCSS(),
  ],
})
