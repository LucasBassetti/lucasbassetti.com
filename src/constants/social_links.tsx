interface ISocialLink {
  label: 'Github' | 'LinkedIn' | 'Instagram'
  url: string
}

const socialLinks: ISocialLink[] = [
  {
    label: 'Github',
    url: 'https://github.com/LucasBassetti',
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/lucas-bassetti/',
  },
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/lucasbassetti/',
  },
]

export default socialLinks
