import type { Episode, RawEpisode } from '../typings/types'

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
