import type { MetadataRoute } from 'next'

export const dynamic = 'force-static'

const siteUrl = 'https://wpmvc.com'

// All static routes — keep in sync with content/ directory structure
const docRoutes: string[] = [
  '/docs',
  '/docs/installation',
  '/docs/architecture',
  '/docs/architecture/lifecycle',
  '/docs/architecture/providers',
  '/docs/architecture/container',
  '/docs/architecture/isolation',
  '/docs/routing',
  '/docs/controllers',
  '/docs/middleware',
  '/docs/request-validator',
  '/docs/database/eloquent-models',
  '/docs/database/query-builder',
  '/docs/database/relationships',
  '/docs/database/collections',
  '/docs/database/mutators-and-casting',
  '/docs/database/schema-builder',
  '/docs/database/factories-and-seeding',
  '/docs/dto',
  '/docs/repository',
  '/docs/queue',
  '/docs/dependent-manager',
  '/docs/helpers',
  '/docs/artisan',
  '/docs/jskit/components',
  '/docs/jskit/fields',
  '/docs/jskit/data',
  '/docs/jskit/admin-sidebar',
  '/docs/jskit/classic-editor',
  '/docs/jskit/colors',
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
