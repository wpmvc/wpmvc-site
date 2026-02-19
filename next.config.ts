import type { NextConfig } from 'next'
import nextra from 'nextra'

const withNextra = nextra({
  latex: true,
  search: {
    codeblocks: false
  },
  contentDirBasePath: '/docs'
})

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  reactStrictMode: true
}

export default withNextra(nextConfig)
