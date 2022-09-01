import type { EpisodeModule } from '../typings/types'

export const getEpisodeId = (filename: string) => {
  return /episodes[/\\](.*?)\.md$/.exec(filename)?.[1] ?? undefined
}

export const getAllEpisode = (): Record<string, EpisodeModule> =>
  Object.fromEntries(
    Object.entries(
      import.meta.glob<EpisodeModule>('../episodes/*.md', { eager: true })
    ).map(([filename, module]) => {
      const id = getEpisodeId(filename)
      return [
        id,
        {
          ...module,
          date: new Date(module.date),
          id,
        },
      ] as const
    })
  )
