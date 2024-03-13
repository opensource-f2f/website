export interface BannerItem {
  alt: string
  href: string
  src: string
}

export const banners: BannerItem[] = [
  {
    alt: "GitHub Org's stars",
    href: 'https://github.com/opensource-f2f',
    src: 'https://img.shields.io/github/stars/opensource-f2f?style=social',
  },
  {
    alt: 'Twitter followers',
    href: 'https://twitter.com/osf2f',
    src: 'https://img.shields.io/twitter/follow/osf2f?style=social',
  },
  {
    alt: 'YouTube subscribers',
    href: 'https://www.youtube.com/channel/UCV7Ibg1k_aMSEcDFgJvuvdg',
    src: 'https://img.shields.io/youtube/channel/subscribers/UCV7Ibg1k_aMSEcDFgJvuvdg?style=social',
  },
  {
    alt: 'RSS address',
    href: 'https://feeds.osf2f.net/osf2f.xml',
    src: 'https://img.shields.io/badge/rss-F88900?style=flat&logo=rss&logoColor=white',
  },
  {
    alt: 'Listen on Spotify',
    href: 'https://open.spotify.com/show/48Yeu1L5pTluk1AVc3ShU6',
    src: 'https://img.shields.io/badge/spotify-1DB954?style=flat&logo=spotify&logoColor=white',
  },
  {
    alt: 'NetEase Music',
    href: 'https://music.163.com/#/djradio?id=1001312291',
    src: '/static/netease-music.svg',
  },
]
