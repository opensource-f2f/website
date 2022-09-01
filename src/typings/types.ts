import type { Component } from 'vue'

export interface EpisodeInfo {
  id: string
  date: Date
  title: string
  hosts: string[]
  guests: string[]
  description: string
}

export interface EpisodeModule extends EpisodeInfo {
  default: Component
}
