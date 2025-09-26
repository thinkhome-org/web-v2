export const SITE_CONFIG = {
  name: 'ThinkHome',
  title: 'ThinkHome – Moderní IT bez starostí',
  description: 'Komplexní IT služby pro SMB a domácnosti: správa IT, weby, cloud a bezpečnost.',
  tagline: 'Moderní IT bez starostí',
  official: {
    logo: {
      src: '/logo.svg',
      alt: 'ThinkHome Official Logo',
      width: 220,
      height: 52,
    },
    title: 'ThinkHome',
    tagline: 'IT, které prostě funguje',
  },
  contact: {
    email: 'info@thinkhome.org',
    phone: '+420 910 129 289',
    linkedin: 'https://www.linkedin.com/company/thinkhome-org',
    github: 'https://github.com/thinkhome-org',
    address: {
      name: 'Ing. Štefan Paluba',
      ico: '10727078',
      street: 'Rytířova 777/3',
      city: 'Praha 12',
      zip: '143 00',
    },
  },
  url: 'https://thinkhome.org',
} as const;

export type SiteConfig = typeof SITE_CONFIG;