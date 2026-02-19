/* eslint-env node */
import React from 'react'
import Script from 'next/script'
import type { Metadata } from 'next'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import './globals.css'
import { FooterThemeSwitch } from '../components/FooterThemeSwitch'

// Update this to your production URL
const siteUrl = 'https://wpmvc.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    template: '%s – WPMVC',
    default: 'WPMVC – The Elegant MVC Framework for WordPress'
  },
  description:
    'WPMVC is an elegant MVC framework for WordPress — clean architecture, built-in routing, and a powerful CLI for plugin and theme development.',
  applicationName: 'WPMVC',
  generator: 'Next.js',
  keywords: ['WordPress', 'MVC', 'framework', 'plugin', 'theme', 'PHP'],
  authors: [{ name: 'WPMVC', url: siteUrl }],
  creator: 'WPMVC',
  publisher: 'WPMVC',
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    type: 'website',
    siteName: 'WPMVC',
    url: siteUrl,
    title: 'WPMVC – The Elegant MVC Framework for WordPress',
    description:
      'An elegant MVC framework for WordPress with clean architecture, built-in routing, and a powerful CLI.',
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'WpMVC - The Elegant MVC Framework for WordPress'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@wpmvc',
    creator: '@wpmvc',
    title: 'WPMVC – The Elegant MVC Framework for WordPress',
    description:
      'An elegant MVC framework for WordPress with clean architecture, built-in routing, and a powerful CLI.',
    images: [`${siteUrl}/og-image.png`]
  },
  appleWebApp: {
    title: 'WPMVC'
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  alternates: {
    canonical: './',
  },
  other: {
    'msapplication-TileImage': `${siteUrl}/ms-icon-144x144.png`,
    'msapplication-TileColor': '#4f46e5'
  }
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const navbar = (
    <Navbar
      logo={
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img src="/logo.svg" alt="WPMVC Logo" className="dark:hidden" style={{ height: '36px', width: 'auto' }} />
          <img src="/logo-white.svg" alt="WPMVC Logo" className="hidden dark:block" style={{ height: '36px', width: 'auto' }} />
        </div>
      }
      projectLink="https://github.com/wpmvc/wpmvc"
    />
  )
  const pageMap = await getPageMap()
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body suppressHydrationWarning>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZFX5VRQCY7"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZFX5VRQCY7');
          `}
        </Script>
        <Layout
          navbar={navbar}
          footer={
            <Footer>
              <div style={{ display: 'flex', flexDirection: 'column', width: '100%', gap: '24px' }}>
                <FooterThemeSwitch />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img src="/logo.svg" alt="WPMVC Logo" className="dark:hidden" style={{ height: '24px', width: 'auto', filter: 'grayscale(1) opacity(0.7)' }} />
                    <img src="/logo-white.svg" alt="WPMVC Logo" className="hidden dark:block" style={{ height: '24px', width: 'auto', filter: 'grayscale(1) opacity(0.7)' }} />
                    <span style={{ fontSize: '14px', color: '#666', fontWeight: 500 }}>
                      Built for modern WordPress development.
                    </span>
                  </div>
                  <div style={{ display: 'flex', gap: '16px' }}>
                    <a href="https://github.com/wpmvc/wpmvc" target="_blank" rel="noreferrer" className="footer-social-link">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a href="https://x.com/wpmvc" target="_blank" rel="noreferrer" className="footer-social-link">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                    <a href="https://linkedin.com/company/wpmvc" target="_blank" rel="noreferrer" className="footer-social-link">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a href="https://facebook.com/wpmvc" target="_blank" rel="noreferrer" className="footer-social-link">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.327v21.348C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.597 1.323-1.327V1.327C24 .597 23.403 0 22.675 0z"/>
                      </svg>
                    </a>
                  </div>
                </div>
                <div style={{ borderTop: '1px solid #eee', paddingTop: '16px', fontSize: '12px', color: '#888' }}>
                  MIT {new Date().getFullYear()} © WPMVC Framework.
                </div>
                <style dangerouslySetInnerHTML={{ __html: `
                  .footer-social-link { color: #666; transition: color 0.2s; }
                  .footer-social-link:hover { color: #000; }
                `}} />
              </div>
            </Footer>
          }
          editLink="Edit this page on GitHub"
          docsRepositoryBase="https://github.com/wpmvc/wpmvc-site/blob/master"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={pageMap}
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
