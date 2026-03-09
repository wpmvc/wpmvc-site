'use client'

import React from 'react'
import { ShineBorder } from "./ui/shine-border"

export function LandingPage() {
  const [copied, setCopied] = React.useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText('composer create-project wpmvc/wpmvc plugin-name')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex flex-col items-center w-full min-h-[80vh] px-6 py-20 bg-white dark:bg-neutral-950 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#333_1px,transparent_1px)] bg-[length:32px_32px] text-neutral-900 dark:text-neutral-100 font-[Inter,system-ui,-apple-system,sans-serif]">
      <header className="text-center max-w-[1100px] mb-16">
        <div className="inline-block px-3.5 py-1.5 bg-gray-100 dark:bg-neutral-800 rounded-full text-sm font-medium text-gray-600 dark:text-neutral-400 mb-6 border border-gray-200 dark:border-neutral-700">
          The AI-Ready Framework for Modern Plugin Engineering
        </div>
        <h1 className="text-[clamp(40px,8vw,76px)] font-extrabold leading-[1.1] tracking-[-0.04em] mb-6 bg-gradient-to-b from-neutral-900 via-neutral-800 to-gray-600 dark:from-white dark:via-neutral-200 dark:to-neutral-400 bg-clip-text text-transparent">
          The Elegant MVC Framework for WordPress
        </h1>
        <p className="text-[clamp(18px,4vw,22px)] leading-relaxed text-gray-500 dark:text-neutral-400 max-w-[750px] mx-auto mb-10">
          WpMVC brings architectural precision and execution velocity to the WordPress ecosystem. Build maintainable, secure, and ultra-scalable plugins with modern tools.
        </p>

        <div className="flex flex-row items-center justify-center gap-4 flex-wrap">
          <a
            href="/docs"
            className="h-[48px] px-6 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium no-underline border border-black dark:border-white transition-all duration-200 flex items-center justify-center hover:bg-gray-900 dark:hover:bg-gray-100"
          >
            Explore the Documentation
          </a>

          <div
            className={`flex items-center h-[48px] px-6 border rounded-lg font-mono text-xs max-w-full cursor-pointer transition-all duration-300 ${
              copied
                ? 'border-black dark:border-white bg-white dark:bg-neutral-800 text-gray-900 dark:text-white'
                : 'border-gray-200 dark:border-neutral-800 bg-gray-50/50 dark:bg-neutral-900/50 text-gray-500 dark:text-neutral-400 hover:border-gray-300 dark:hover:border-neutral-700'
            }`}
            onClick={copyToClipboard}
            title="Click to copy"
          >
            <span className="mr-3 opacity-40 select-none">$</span>
            <span className="font-semibold tracking-tight">
              {copied ? 'Copied to clipboard!' : 'composer create-project wpmvc/wpmvc plugin-name'}
            </span>
            <svg className={`ml-4 w-3 h-3 transition-transform duration-200 ${copied ? 'scale-110 text-emerald-500' : 'opacity-30'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {copied ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
              )}
            </svg>
          </div>
        </div>
      </header>

      <section className="mt-30 text-center w-full max-w-[1200px] px-6">
        <h2 className="text-[clamp(32px,5vw,48px)] font-extrabold mb-4 tracking-[-0.02em]">
          Professional Plugin Engineering
        </h2>
        <p className="text-lg text-gray-500 dark:text-neutral-400 max-w-[800px] mx-auto mb-16">
          WpMVC provides the standardized architectural foundation to build faster, manage complexity, and scale WordPress plugins with ease.
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-3 gap-6 text-left max-lg:grid-cols-2 max-md:gap-4 max-sm:grid-cols-1">
          {/* Top Row: The Four Pillars */}
          {[
            {
              title: "Maintainability",
              desc: "Deeply decoupled business logic using Clean Architecture and Dependency Injection for superior testability.",
              link: "/docs/architecture/container",
              icon: (
                <svg width="100%" height="80" viewBox="0 0 200 80" fill="none">
                  <path d="M40 40H160" stroke="currentColor" className="text-gray-200 dark:text-neutral-700" strokeWidth="2" strokeDasharray="4 4" />
                  <circle cx="40" cy="40" r="4" fill="#3b82f6" />
                  <circle cx="100" cy="40" r="6" className="fill-blue-500" />
                  <circle cx="160" cy="40" r="4" fill="#3b82f6" />
                </svg>
              )
            },
            {
              title: "Professional Security",
              desc: "Automated namespace isolation via PHPScoper ensures your plugin never crashes due to dependency conflicts.",
              link: "/docs/architecture/isolation",
              icon: (
                <svg width="100%" height="80" viewBox="0 0 200 80" fill="none">
                  <rect x="70" y="20" width="60" height="40" rx="4" className="fill-emerald-50 dark:fill-emerald-950 stroke-emerald-500" />
                  <path d="M100 30V50M85 40H115" stroke="#10b981" strokeWidth="2" />
                </svg>
              )
            },
            {
              title: "Development Velocity",
              desc: "Ship features 10x faster with the Artisan CLI and a premium React component library tailored for WordPress.",
              link: "/docs/artisan",
              icon: (
                <svg width="100%" height="80" viewBox="0 0 200 80" fill="none">
                  <path d="M40 60L70 30L100 50L130 20L160 40" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="160" cy="40" r="3" fill="#6366f1" />
                </svg>
              )
            },
            {
                title: "Ultimate Scalability",
                desc: "Enterprise-ready architecture designed to handle massive datasets and complex SaaS-style integrations with ease.",
                link: "/docs/database",
                icon: (
                  <svg width="100%" height="80" viewBox="0 0 200 80" fill="none">
                    <rect x="60" y="10" width="80" height="60" rx="2" className="fill-amber-50 dark:fill-amber-950 stroke-amber-500" />
                    <path d="M60 30H140M60 50H140" stroke="#f59e0b" strokeWidth="1" />
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

          {/* Vibe Coding Feature Card */}
          <a
            href="/docs"
            className="col-span-2 max-lg:col-span-2 max-sm:col-span-1 block no-underline rounded-2xl transition-all duration-300 p-10 bg-white dark:bg-neutral-900/50 border border-blue-100/50 dark:border-blue-900/30 max-md:p-6 relative overflow-hidden group"
          >
            <ShineBorder 
              className="absolute inset-0 z-0" 
              shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} 
              borderWidth={2}
            />
            <div className="relative z-10">
              <div className="inline-block px-3 py-1 bg-blue-500 text-white text-[10px] uppercase font-bold tracking-wider rounded mb-6">
                Optimized for Vibe Coding
              </div>
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">Built for the AI Era</h3>
              <p className="text-[16px] text-gray-600 dark:text-neutral-400 leading-relaxed max-w-[600px] mb-8">
                Standardized MVC patterns, DTOs, and predictable directory structures provide AI agents with 100% architectural context, enabling pixel-perfect code generation and seamless pair programming.
              </p>
              <div className="flex gap-8 max-sm:flex-col max-sm:gap-4">
                {[
                    { label: "Predictable Context", val: "100%" },
                    { label: "Generation Accuracy", val: "High" },
                    { label: "Agentic Precision", val: "100%" }
                ].map((stat, i) => (
                    <div key={i}>
                        <div className="text-xs text-blue-600 dark:text-blue-400 font-bold uppercase tracking-tight mb-1">{stat.label}</div>
                        <div className="text-xl font-bold text-neutral-900 dark:text-neutral-100">{stat.val}</div>
                    </div>
                ))}
              </div>
            </div>
          </a>

          {/* Core Feature References */}
          {[
            { title: "Eloquent ORM", desc: "Fluent SQL construction and Elegant ORM. Manage schemas with migrations and expressive models.", link: "/docs/database/eloquent-models" },
            { title: "Modern Routing", desc: "Manage REST API and AJAX endpoints with declarative syntax, middleware, and type-safe groups.", link: "/docs/routing" }
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

          {/* Smaller Secondary Cards */}
          {[
            { title: "Artisan CLI", desc: "Scaffold boilerplate code and automate development tasks with ease.", link: "/docs/artisan" },
            { title: "Admin Sidebar", desc: "Manage responsive WordPress admin layouts and intelligent menu highlighting with React hooks.", link: "/docs/jskit/admin-sidebar" },
            { title: "Middleware", desc: "Secure your plugin with robust request filtering and authentication layers. Perfect for REST API and AJAX route protection.", link: "/docs/middleware" }
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
              <h3 className="text-2xl font-bold mb-2">WpMVC 2.0</h3>
              <p className="text-sm text-neutral-400 dark:text-neutral-300 leading-relaxed">
                Experience the power of professional PHP orchestration in WordPress. Read the 2.0 release notes and explore the future of plugin development.
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
