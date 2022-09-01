import type { Component } from 'vue'

export type Person = string | { name: string; link: string }

export interface RawEpisode {
  date: string
  title: string
  hosts?: Person[]
  guests?: Person[]
  description: string
  default: Component
}

export interface Episode extends Omit<RawEpisode, 'date'> {
  id: string
  date: Date
}

export const getEpisodeId = (filename: string) => {
  return /episodes[/\\](.*?)\.md$/.exec(filename)?.[1] ?? undefined
}

export const getAllEpisode = () =>
  Object.entries(
    import.meta.glob<RawEpisode>('../episodes/*.md', { eager: true })
  ).map(([filename, module]): Episode => {
    const id = getEpisodeId(filename)!
    return {
      ...module,
      date: new Date(module.date),
      id,
    }
  })

export const getPersonKey = (person: Person) =>
  typeof person === 'string' ? person : person.name
