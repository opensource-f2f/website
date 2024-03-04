import type { Component } from 'vue'

interface Link {
  title: string
  link: string
}

export interface RawContributor {
  name: string
  github: string
  blog?: string
  twitter?: string
  audios?: Link[]
  videos?: Link[]
  description: string
  default: Component
}

export const getAllContributors = () =>
  Object.values(
    import.meta.glob<RawContributor>('../contributors/*.md', { eager: true }),
  )
