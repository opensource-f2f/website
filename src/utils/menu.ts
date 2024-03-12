export interface MenuItem {
  label: string
  href: string
  icon: string
}

// @unocss-include
export const menus: MenuItem[] = [
  {
    label: 'Sponsors',
    href: '/sponsors',
    icon: 'i-ri:heart-3-line text-pink',
  },
]

export const isShowMenu = ref(false)
