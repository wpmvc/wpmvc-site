import type { Metadata } from 'next'
import { LandingPage } from '../components/LandingPage'

export const metadata: Metadata = {
  title: 'WPMVC – The Elegant MVC Framework for WordPress',
  description:
    'Build modern, maintainable WordPress plugins with clean architecture, built-in routing, and a powerful CLI.'
}

export default function IndexPage() {
  return <LandingPage />
}
