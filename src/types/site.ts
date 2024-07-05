export interface SiteConfig {
  name?: string,
  description?: string,
  tags?: string[],
  author?: string,
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
}

export function defineSiteConfig(siteConfig: SiteConfig){
  return { ...defaultSiteConfig, ...siteConfig }
}