import { ViteSSG } from 'vite-ssg'
import { h } from 'vue'
import App from './App.vue'
import { getAllEpisode } from './utils/episode'
import EpisodeContent from './components/episode-content.vue'
import type { RouteRecordRaw } from 'vue-router'

import '@unocss/reset/tailwind.css'
import 'uno.css'
import 'github-markdown-css/github-markdown-light.css'
import './style.css'

const routes: RouteRecordRaw[] = [
  {
    name: 'Index',
    path: '/',
    component: () => import('./components/index.vue'),
  },
]

for (const { id } of getAllEpisode()) {
  routes.push({
    name: `Episode${id}`,
    path: `/episode/${id}${import.meta.env.PROD ? '.html' : ''}`,
    component: h(EpisodeContent, { id }),
  })
}

export const createApp = ViteSSG(
  App,
  { routes }
  // ({ app, router, routes, isClient, initialState }) => {}
)
