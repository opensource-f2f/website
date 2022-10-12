import type { Component } from 'vue'

export type Person = string | { name: string; link: string }

export interface RawEpisode {
  num: string
  date: string
  title: string
  hosts?: Person[]
  guests?: Person[]
  description: string
  link: string
  default: Component
}

export interface Episode extends Omit<RawEpisode, 'date'> {
  id: string
  date: Date
}

export const getAllEpisode = () =>
  Object.values(
    import.meta.glob<RawEpisode>('../episodes/*.md', { eager: true })
  ).map(
    (module): Episode => ({
      ...module,
      id: module.num,
      date: new Date(module.date),
    })
  )

export const getPersonKey = (person: Person) =>
  typeof person === 'string' ? person : person.name
