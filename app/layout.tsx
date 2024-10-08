import { Manrope } from 'next/font/google'

import { Providers } from '@/app/providers'

import '@/styles/globals.css'

import React from 'react'

import { Toaster } from 'react-hot-toast'

const baseFont = Manrope({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata = {
  title: 'Glokas',
  description: `Get God's Message to Every Language, Faster`,
  icons: {
    icon: [
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    title: 'Glokas',
  },
}

export const viewport = {
  themeColor: '#ffffff',
  colorScheme: 'light',
}

export default function RootLayout(props: { children: React.ReactNode }): JSX.Element {
  const { children } = props

  return (
    <html lang="en" className="light">
      <body className={`${baseFont.className}`}>
        <Providers>
          <div className="flex min-h-screen w-full flex-col">{children}</div>
        </Providers>
        <Toaster />
      </body>
    </html>
  )
}
