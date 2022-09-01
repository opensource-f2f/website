import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import routes from '~pages'
import '@unocss/reset/tailwind.css'
import 'uno.css'
import 'github-markdown-css/github-markdown-light.css'
import './style.css'

export const createApp = ViteSSG(
  App,
  { routes }
  // ({ app, router, routes, isClient, initialState }) => {}
)
