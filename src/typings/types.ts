import type { Component } from 'vue'

export interface RawEpisode {
  date: string
  title: string
  hosts: string[]
  guests: string[]
  description: string
  default: Component
}

export interface Episode extends Omit<RawEpisode, 'date'> {
  id: string
  date: Date
}
