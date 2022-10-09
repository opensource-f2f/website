import type { Component } from 'vue'

export type Link = { title: string; link: string }

export interface RawContributor {
  github: string
  blog?: string
  twitter?: string
  audios?: Link[]
  videos?: Link[]
  description: string
  default: Component
}

export const getAllContributors = () =>
  Object.entries(
    import.meta.glob<RawContributor>('../contributors/*.md', { eager: true })
  ).map(([, module]): RawContributor => {
    return {
      ...module,
    }
  })
