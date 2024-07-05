export interface SiteConfig {
  name?: string,
  description?: string,
  tag?: string[],
}

const defaultSiteConfig: SiteConfig = {
  name: 'tzz.dev',
  description: 'tzz.dev',
  tag: [
    'tzz',
    '開発',
    'SE'
  ],
}

export function defineSiteConfig(siteConfig: SiteConfig){
  return { ...defaultSiteConfig, ...siteConfig }
}

