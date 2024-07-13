export interface SiteConfig {
  name?: string,
  description?: string,
  tags?: string[],
  author?: string,
  github?: string,
}

const defaultSiteConfig: SiteConfig = {
  name: 'tzz.dev',
  description: 'tzz.dev',
  tags: [
    'tzz',
    '開発',
    'SE'
  ],
  author: 'tzz',
  github: 'https://github.com/tzzjp/tzz.dev'
}

export function defineSiteConfig(siteConfig: SiteConfig){
  return { ...defaultSiteConfig, ...siteConfig }
}