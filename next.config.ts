import type { NextConfig } from 'next'
import nextra from 'nextra'

const withNextra = nextra({
  latex: true,
  search: {
    codeblocks: false
  },
  contentDirBasePath: '/docs',
  mdxOptions: {
    rehypePrettyCodeOptions: {
      theme: {
        dark: 'material-theme-palenight', // Specify the dark theme here
        light: 'material-theme-palenight' // Specify the light theme here
      }
    }
  }
})

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/docs/database',
        destination: '/docs/database/schema-builder',
        permanent: true,
      },
    ]
  },
}

export default withNextra(nextConfig)
