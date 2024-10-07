import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], preload: true })

export const metadata: Metadata = {
  title: 'Observatory Environment UI',
  description:
    'A user interface to handle viewing and managing the Observatory Environment.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/rubin-favicon.svg"
          type="image/svg+xml"
          sizes="32x32"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
