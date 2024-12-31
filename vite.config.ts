import path from 'node:path'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Markdown from 'unplugin-vue-markdown/vite'
import { defineConfig } from 'vite'
import Inspect from 'vite-plugin-inspect'
import { VitePWA } from 'vite-plugin-pwa'
import VueDevTools from 'vite-plugin-vue-devtools'

const pathSrc = path.resolve(__dirname, 'src')

export default defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown({}),
    Components({
      dts: path.resolve(pathSrc, 'typings/components.d.ts'),
    }),
    AutoImport({
      imports: ['vue', 'vue-router', '@vueuse/core'],
      dirs: [path.resolve(pathSrc, 'composables')],
      vueTemplate: true,
      dts: path.resolve(pathSrc, 'typings/auto-import.d.ts'),
    }),
    UnoCSS(),
    Inspect(),
    VitePWA({
      manifest: {
        name: '开源面对面',
        short_name: 'osf2f',
        description: '开源面对面，连接热爱开源的你！',
        id: 'net.osf2f',
        theme_color: '#b7dca7',
        icons: [
          {
            src: '/pwa/logo_200x200.png',
            sizes: '200x200',
            type: 'image/png',
          },
          {
            src: '/pwa/logo.ico',
            sizes: '256x170',
            type: 'image/x-icon',
          },
        ],
      },
      devOptions: {
        enabled: false,
      },
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,jpg,svg,ico}'],
        runtimeCaching: [
          {
            urlPattern: ({ url }) => url.origin === 'https://img.shields.io',
            method: 'GET',
            handler: 'NetworkFirst',
          },
        ],
        clientsClaim: true,
      },
    }),
    VueDevTools(),
  ],
})
