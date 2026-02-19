'use client'

import React from 'react'

export function LandingPage() {
  const [copied, setCopied] = React.useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText('composer create-project wpmvc/wpmvc')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex flex-col items-center w-full min-h-[80vh] px-6 py-20 bg-white dark:bg-neutral-950 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#333_1px,transparent_1px)] bg-[length:32px_32px] text-neutral-900 dark:text-neutral-100 font-[Inter,system-ui,-apple-system,sans-serif]">
      <header className="text-center max-w-[1100px] mb-16">
        <div className="inline-block px-3.5 py-1.5 bg-gray-100 dark:bg-neutral-800 rounded-full text-sm font-medium text-gray-600 dark:text-neutral-400 mb-6 border border-gray-200 dark:border-neutral-700">
          Build and scale WordPress plugins faster
        </div>
        <h1 className="text-[clamp(40px,8vw,76px)] font-extrabold leading-[1.1] tracking-[-0.04em] mb-6 bg-gradient-to-b from-neutral-900 to-gray-600 dark:from-white dark:to-neutral-400 bg-clip-text text-transparent">
          The Elegant MVC Framework for WordPress
        </h1>
        <p className="text-[clamp(18px,4vw,22px)] leading-relaxed text-gray-500 dark:text-neutral-400 max-w-[700px] mx-auto mb-10">
          WPMVC brings modern software engineering to the WordPress ecosystem.
          Clean architecture, powerful tools, and a developer experience you'll love.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="/docs/installation"
            className="px-7 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-semibold text-base no-underline border border-black dark:border-white transition-all duration-200 inline-block hover:opacity-90"
          >
            Installation
          </a>
          <a
            href="https://github.com/wpmvc/wpmvc"
            target="_blank"
            className="px-7 py-3 bg-white dark:bg-neutral-800 text-black dark:text-white rounded-lg font-semibold text-base no-underline border border-gray-200 dark:border-neutral-700 transition-all duration-200 inline-block hover:opacity-90"
          >
            View on GitHub
          </a>
        </div>

        <div
          className={`mt-12 flex items-center px-5 py-3 border rounded-full font-mono text-sm max-w-full cursor-pointer transition-all duration-200 ${
            copied
              ? 'border-black dark:border-white bg-white dark:bg-neutral-800 text-gray-600 dark:text-neutral-300'
              : 'border-gray-200 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-900 text-gray-600 dark:text-neutral-400'
          }`}
          onClick={copyToClipboard}
          title="Click to copy"
        >
          <span className="mr-3 opacity-50">$</span>
          <span className="font-medium">
            {copied ? 'Copied to clipboard!' : 'composer create-project wpmvc/wpmvc'}
          </span>
          <svg className="ml-3 w-4 h-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {copied ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
            )}
          </svg>
        </div>
      </header>

      <section className="mt-30 text-center w-full max-w-[1200px] px-6">
        <h2 className="text-[clamp(32px,5vw,48px)] font-extrabold mb-4 tracking-[-0.02em]">
          What's in WPMVC?
        </h2>
        <p className="text-lg text-gray-500 dark:text-neutral-400 max-w-[800px] mx-auto mb-16">
          Everything you need to build professional, maintainable WordPress plugins.
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-3 gap-6 text-left max-lg:grid-cols-2 max-md:gap-4 max-sm:grid-cols-1">
          {/* Top Row: 3 Large Cards */}
          {[
            {
              title: "Modern Routing",
              desc: "Manage REST API and AJAX endpoints with a clean, declarative syntax. Supports middleware and groups.",
              link: "/docs/routing",
              icon: (
                <svg width="100%" height="80" viewBox="0 0 200 80" fill="none">
                  <path d="M20 40H60M60 40L80 20M60 40L80 60M140 40H180M120 40L140 40" stroke="currentColor" className="text-gray-200 dark:text-neutral-700" strokeWidth="2" strokeDasharray="4 4" />
                  <circle cx="20" cy="40" r="4" fill="#3b82f6" />
                  <circle cx="60" cy="40" r="4" fill="#3b82f6" />
                  <rect x="80" y="15" width="40" height="10" rx="2" className="fill-blue-50 dark:fill-blue-950 stroke-blue-500" />
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
                  <rect x="70" y="10" width="60" height="12" rx="2" className="fill-emerald-50 dark:fill-emerald-950 stroke-emerald-500" />
                  <rect x="70" y="28" width="60" height="12" rx="2" className="fill-emerald-50 dark:fill-emerald-950 stroke-emerald-500" />
                  <rect x="70" y="46" width="60" height="12" rx="2" className="fill-emerald-50 dark:fill-emerald-950 stroke-emerald-500" />
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
            <a
              key={i}
              href={item.link}
              className="block no-underline rounded-2xl transition-all duration-300 p-10 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 overflow-hidden hover:border-neutral-900 dark:hover:border-neutral-500 hover:bg-gray-50 dark:hover:bg-neutral-800 max-md:p-6"
            >
              <div className="mb-8">{item.icon}</div>
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-3">{item.title}</h3>
              <p className="text-[15px] text-gray-500 dark:text-neutral-400 leading-relaxed">{item.desc}</p>
            </a>
          ))}

          {/* Smaller Cards */}
          {[
            { title: "Middleware", desc: "Filter and inspect HTTP requests entering your application routes.", link: "/docs/routing" },
            { title: "Artisan CLI", desc: "Scaffold boilerplate code and automate development tasks with ease.", link: "/docs/installation" },
            { title: "Dependency Injection", desc: "Decoupled logic using a powerful container-based DI system.", link: "/docs/installation" },
            { title: "JSKit Fields", desc: "Build complex forms with declarative React field components.", link: "/docs/jskit/fields" },
            { title: "Admin Sidebar", desc: "Customizable React-based sidebar navigation for WordPress.", link: "/docs/jskit/admin-sidebar" }
          ].map((item, i) => (
            <a
              key={i}
              href={item.link}
              className="block no-underline rounded-2xl transition-all duration-300 p-8 bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 hover:border-neutral-900 dark:hover:border-neutral-500 hover:bg-gray-50 dark:hover:bg-neutral-800 max-md:p-6"
            >
              <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100 mb-3">{item.title}</h3>
              <p className="text-sm text-gray-500 dark:text-neutral-400 leading-relaxed">{item.desc}</p>
            </a>
          ))}

          {/* Dark Release Card */}
          <a
            href="/docs/installation"
            className="block no-underline rounded-2xl transition-all duration-300 p-8 bg-neutral-900 dark:bg-neutral-800 bg-[radial-gradient(circle_at_20%_20%,#222_0%,transparent_50%)] dark:bg-[radial-gradient(circle_at_20%_20%,#444_0%,transparent_50%)] border border-neutral-700 dark:border-neutral-600 text-white flex flex-col justify-between hover:border-neutral-600 dark:hover:border-neutral-500 hover:bg-neutral-800 dark:hover:bg-neutral-700 max-md:p-6"
          >
            <div>
              <div className="flex gap-2 mb-6">
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <div key={i} className="w-1 h-1 rounded-full bg-neutral-700 dark:bg-neutral-500" />
                ))}
              </div>
              <h3 className="text-2xl font-bold mb-2">WpMVC 1.0</h3>
              <p className="text-sm text-neutral-400 dark:text-neutral-300 leading-relaxed">
                The power of professional PHP patterns brought to the frontend. Read the release notes.
              </p>
            </div>
            <div className="flex items-center mt-8">
              <div className="w-8 h-8 rounded-full bg-neutral-700 dark:bg-neutral-600 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </a>
        </div>
      </section>

      <div className="h-[100px]" />
    </div>
  )
}
