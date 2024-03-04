import { ViteSSG } from 'vite-ssg'
import { h } from 'vue'
import { isClient } from '@vueuse/core'
import App from './App.vue'
import { getAllEpisode } from './utils/episode'
import { detectFont } from './utils/font'
import { getAllContributors } from './utils/contributor'

import type { RouteRecordRaw } from 'vue-router'

import '@unocss/reset/tailwind.css'
import 'uno.css'
import 'github-markdown-css'
import './style.css'

const routes: RouteRecordRaw[] = [
  {
    name: 'Index',
    path: '/',
    component: () => import('./components/index.vue'),
  },
  {
    name: 'NotFound',
    path: '/:pathMatch(.*)*',
    component: () => import('./components/not-found.vue'),
  },
  {
    name: 'NotFoundSSG',
    path: '/404',
    component: () => import('./components/not-found.vue'),
  },
  {
    name: 'Sponsors',
    path: '/sponsors',
    component: () => import('./components/sponsors.vue'),
  },
]

for (const { id } of getAllEpisode()) {
  routes.push({
    name: `Episode${id}`,
    path: `/episode/${id}`,
    component: () =>
      import('./components/episode-content.vue').then(
        ({ default: EpisodeContent }) => {
          return h(EpisodeContent, { id })
        },
      ),
  })
}
for (const { github } of getAllContributors()) {
  routes.push({
    name: `Contributor${github}`,
    path: `/contributor/${github}`,
    component: () =>
      import('./components/contributor-content.vue').then(
        ({ default: ContributorContent }) => {
          return h(ContributorContent, { github })
        },
      ),
  })
}

export const createApp = ViteSSG(App, { routes })

if (isClient && !detectFont()('PingFang SC')) {
  // improve font on Windows
  import('./style-font.css')
}
