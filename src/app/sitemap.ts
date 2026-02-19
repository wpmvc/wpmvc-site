import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const siteUrl = 'https://wpmvc.com'

// All static routes — keep in sync with content/ directory structure
const docRoutes: string[] = [
  '/docs',
  '/docs/get-started',
  '/docs/routing',
  '/docs/database',
  '/docs/jskit/admin-sidebar',
  '/docs/jskit/classic-editor',
  '/docs/jskit/colors',
  '/docs/jskit/components',
  '/docs/jskit/data',
  '/docs/jskit/fields',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0
    },
  ]

  const docPages: MetadataRoute.Sitemap = docRoutes.map(route => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: route === '/docs' ? 0.9 : 0.8
  }))

  return [...staticPages, ...docPages]
}
