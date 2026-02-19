'use client'

import { usePathname } from 'next/navigation'
import { ThemeSwitch } from 'nextra-theme-docs'

export function FooterThemeSwitch() {
  const pathname = usePathname()
  const isDocsPage = pathname.startsWith('/docs')

  if (isDocsPage) return null

  return (
    <div className="-mt-8 mb-4 relative">
      <div className="pb-4">
        <ThemeSwitch />
      </div>
      <hr className="absolute left-1/2 -translate-x-1/2 w-screen border-t border-gray-200 dark:border-neutral-800 m-0" />
    </div>
  )
}
