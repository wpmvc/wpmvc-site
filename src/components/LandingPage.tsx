'use client'

import React from 'react'

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    minHeight: '80vh',
    padding: '80px 24px',
    backgroundColor: '#ffffff',
    backgroundImage: `radial-gradient(#e5e7eb 1px, transparent 1px)`,
    backgroundSize: '32px 32px',
    color: '#171717',
    fontFamily: 'Inter, system-ui, -apple-system, sans-serif',
  },
  hero: {
    textAlign: 'center',
    maxWidth: '1100px',
    marginBottom: '64px',
  },
  badge: {
    display: 'inline-block',
    padding: '6px 14px',
    backgroundColor: '#f3f4f6',
    borderRadius: '100px',
    fontSize: '14px',
    fontWeight: 500,
    color: '#4b5563',
    marginBottom: '24px',
    border: '1px solid #e5e7eb',
  },
  title: {
    fontSize: 'clamp(40px, 8vw, 76px)',
    fontWeight: 800,
    lineHeight: 1.1,
    letterSpacing: '-0.04em',
    marginBottom: '24px',
    background: 'linear-gradient(to bottom, #171717 0%, #4b5563 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  subtitle: {
    fontSize: 'clamp(18px, 4vw, 22px)',
    lineHeight: 1.5,
    color: '#666',
    marginBottom: '40px',
    maxWidth: '700px',
    margin: '0 auto 40px auto',
  },
  ctaGroup: {
    display: 'flex',
    gap: '16px',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  primaryBtn: {
    padding: '12px 28px',
    backgroundColor: '#000',
    color: '#fff',
    borderRadius: '8px',
    fontWeight: 600,
    fontSize: '16px',
    textDecoration: 'none',
    transition: 'all 0.2s ease',
    display: 'inline-block',
    border: '1px solid #000',
  },
  secondaryBtn: {
    padding: '12px 28px',
    backgroundColor: '#fff',
    color: '#000',
    borderRadius: '8px',
    fontWeight: 600,
    fontSize: '16px',
    textDecoration: 'none',
    border: '1px solid #e5e7eb',
    transition: 'all 0.2s ease',
    display: 'inline-block',
  },
  commandBox: {
    marginTop: '48px',
    display: 'flex',
    alignItems: 'center',
    padding: '12px 20px',
    backgroundColor: '#f9fafb',
    border: '1px solid #e5e7eb',
    borderRadius: '100px',
    fontFamily: 'monospace',
    fontSize: '14px',
    color: '#4b5563',
    maxWidth: '100%',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
  },
  featureGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '24px',
    width: '100%',
    maxWidth: '1100px',
    marginTop: '40px',
  },
  featureCard: {
    padding: '32px',
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    backdropFilter: 'blur(10px)',
    borderRadius: '16px',
    border: '1px solid #e5e7eb',
    transition: 'transform 0.2s ease, border-color 0.2s ease',
    textAlign: 'left',
  },
  featureTitle: {
    fontSize: '18px',
    fontWeight: 600,
    marginBottom: '12px',
    color: '#171717',
  },
  featureText: {
    fontSize: '15px',
    lineHeight: 1.6,
    color: '#666',
  }
}

export function LandingPage() {
  const [copied, setCopied] = React.useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText('composer create-project wpmvc/wpmvc')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div style={styles.container}>
      <header style={styles.hero}>
        <div style={styles.badge}>Build and scale WordPress plugins faster</div>
        <h1 style={styles.title}>
          The Elegant MVC Framework for WordPress
        </h1>
        <p style={styles.subtitle}>
          WPMVC brings modern software engineering to the WordPress ecosystem. 
          Clean architecture, powerful tools, and a developer experience you'll love.
        </p>
        
        <div style={styles.ctaGroup}>
          <a href="/docs/get-started" style={styles.primaryBtn}>
            Get Started
          </a>
          <a href="https://github.com/wpmvc/wpmvc" target="_blank" style={styles.secondaryBtn}>
            View on GitHub
          </a>
        </div>

        <div 
          style={{
            ...styles.commandBox,
            borderColor: copied ? '#000' : '#e5e7eb',
            backgroundColor: copied ? '#fff' : '#f9fafb'
          }}
          onClick={copyToClipboard}
          title="Click to copy"
        >
          <span style={{ marginRight: '12px', opacity: 0.5 }}>$</span>
          <span style={{ fontWeight: 500 }}>{copied ? 'Copied to clipboard!' : 'composer create-project wpmvc/wpmvc'}</span>
          <svg style={{ marginLeft: '12px', width: '16px', height: '16px', opacity: 0.5 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {copied ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
            )}
          </svg>
        </div>
      </header>

      <section style={{
        marginTop: '120px',
        textAlign: 'center',
        width: '100%',
        maxWidth: '1200px',
        padding: '0 24px'
      }}>
        <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 800, marginBottom: '16px', letterSpacing: '-0.02em' }}>
          What's in WPMVC?
        </h2>
        <p style={{ fontSize: '18px', color: '#666', marginBottom: '64px', maxWidth: '800px', margin: '0 auto 64px auto' }}>
          Everything you need to build professional, maintainable WordPress plugins.
        </p>

        {/* Feature Grid Inspired by Next.js */}
        <div className="feature-grid">
          {/* Top Row: 3 Large Cards */}
          {[
            {
              title: "Modern Routing",
              desc: "Manage REST API and AJAX endpoints with a clean, declarative syntax. Supports middleware and groups.",
              link: "/docs/routing",
              icon: (
                <svg width="100%" height="80" viewBox="0 0 200 80" fill="none">
                  <path d="M20 40H60M60 40L80 20M60 40L80 60M140 40H180M120 40L140 40" stroke="#e5e7eb" strokeWidth="2" strokeDasharray="4 4" />
                  <circle cx="20" cy="40" r="4" fill="#3b82f6" />
                  <circle cx="60" cy="40" r="4" fill="#3b82f6" />
                  <rect x="80" y="15" width="40" height="10" rx="2" fill="#eff6ff" stroke="#3b82f6" />
                  <circle cx="140" cy="40" r="4" fill="#3b82f6" />
                  <circle cx="180" cy="40" r="4" fill="#3b82f6" />
                </svg>
              )
            },
            {
              title: "Database & Eloquent",
              desc: "A fluent SQL query builder and Eloquent ORM. Manage schema with migrations and models.",
              link: "/docs/database",
              icon: (
                <svg width="100%" height="80" viewBox="0 0 200 80" fill="none">
                  <rect x="70" y="10" width="60" height="12" rx="2" fill="#ecfdf5" stroke="#10b981" />
                  <rect x="70" y="28" width="60" height="12" rx="2" fill="#ecfdf5" stroke="#10b981" />
                  <rect x="70" y="46" width="60" height="12" rx="2" fill="#ecfdf5" stroke="#10b981" />
                  <path d="M100 22V28M100 40V46" stroke="#10b981" strokeWidth="1" />
                </svg>
              )
            },
            {
              title: "JSKit Components",
              desc: "Professional React components for WordPress Admin interfaces, perfectly integrated with WpMVC.",
              link: "/docs/jskit/components",
              icon: (
                <svg width="100%" height="80" viewBox="0 0 200 80" fill="none">
                  <rect x="40" y="15" width="30" height="30" rx="4" fill="#6366f1" opacity="0.1" />
                  <rect x="85" y="15" width="30" height="30" rx="4" fill="#6366f1" opacity="0.3" />
                  <rect x="130" y="15" width="30" height="30" rx="4" fill="#6366f1" opacity="0.6" />
                  <path d="M55 45V60M100 45V60M145 45V60" stroke="#6366f1" strokeWidth="1" strokeDasharray="2 2" />
                </svg>
              )
            }
          ].map((item, i) => (
            <a key={i} href={item.link} className="feature-card-main">
              <div style={{ marginBottom: '32px' }}>{item.icon}</div>
              <h3 style={{ fontSize: '20px', fontWeight: 600, color: '#171717', marginBottom: '12px' }}>{item.title}</h3>
              <p style={{ fontSize: '15px', color: '#666', lineHeight: 1.6 }}>{item.desc}</p>
            </a>
          ))}

          {/* Smaller Cards */}
          {[
            { title: "Middleware", desc: "Filter and inspect HTTP requests entering your application routes.", link: "/docs/routing" },
            { title: "Artisan CLI", desc: "Scaffold boilerplate code and automate development tasks with ease.", link: "/docs/get-started" },
            { title: "Dependency Injection", desc: "Decoupled logic using a powerful container-based DI system.", link: "/docs/get-started" },
            { title: "JSKit Fields", desc: "Build complex forms with declarative React field components.", link: "/docs/jskit/fields" },
            { title: "Admin Sidebar", desc: "Customizable React-based sidebar navigation for WordPress.", link: "/docs/jskit/admin-sidebar" }
          ].map((item, i) => (
            <a key={i} href={item.link} className="feature-card-small">
              <h3 style={{ fontSize: '18px', fontWeight: 600, color: '#171717', marginBottom: '12px' }}>{item.title}</h3>
              <p style={{ fontSize: '14px', color: '#666', lineHeight: 1.6 }}>{item.desc}</p>
            </a>
          ))}

          {/* Dark Release Card */}
          <a href="/docs/get-started" className="feature-card-dark">
            <div>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <div key={i} style={{ width: '4px', height: '4px', borderRadius: '50%', backgroundColor: '#444' }} />
                ))}
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '8px' }}>WpMVC 1.0</h3>
              <p style={{ fontSize: '14px', color: '#999', lineHeight: 1.6 }}>
                The power of professional PHP patterns brought to the frontend. Read the release notes.
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '32px' }}>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </a>
        </div>
      </section>

      <div style={{ height: '100px' }} />

      <style dangerouslySetInnerHTML={{ __html: `
        a:hover { opacity: 0.9; }
        .feature-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          text-align: left;
        }
        .feature-card-main, .feature-card-small, .feature-card-dark {
          display: block;
          text-decoration: none;
          border-radius: 16px;
          transition: all 0.3s ease;
        }
        .feature-card-main {
          padding: 40px;
          background-color: #fff;
          border: 1px solid #e5e7eb;
          overflow: hidden;
        }
        .feature-card-small {
          padding: 32px;
          background-color: #fff;
          border: 1px solid #e5e7eb;
        }
        .feature-card-dark {
          padding: 32px;
          background-color: #111;
          background-image: radial-gradient(circle at 20% 20%, #222 0%, transparent 50%);
          border: 1px solid #333;
          color: #fff;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .feature-card-main:hover, .feature-card-small:hover { border-color: #171717; background-color: var(--ds-background-200, #f8f8f8); }
        .feature-card-dark:hover { border-color: #444; background-color: #1a1a1a; }
        
        @media (max-width: 1024px) {
          .feature-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 768px) {
          .feature-grid { gap: 16px; }
          .feature-card-main, .feature-card-small, .feature-card-dark { padding: 24px; }
          h2 { font-size: 28px !important; margin-bottom: 12px !important; }
          p { font-size: 16px !important; margin-bottom: 32px !important; }
        }
        @media (max-width: 640px) {
          .feature-grid { grid-template-columns: 1fr; }
          h1 { font-size: 36px !important; line-height: 1.2 !important; }
          div[title="Click to copy"] { width: 100%; font-size: 11px !important; padding: 12px !important; }
          div[title="Click to copy"] span { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        }
      `}} />
    </div>
  )
}
