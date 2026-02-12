import React from "react"
import type { Metadata, Viewport } from 'next'
import { DM_Sans, Playfair_Display } from 'next/font/google'

import './globals.css'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Tumbuh Setara — Bertumbuh Bersama, Melangkah Setara',
  description:
    'Komunitas yang berfokus pada pertumbuhan bersama, kesetaraan, edukasi, dan dampak sosial. Bertumbuh bersama tanpa meninggalkan siapa pun.',
}

export const viewport: Viewport = {
  themeColor: '#3a7d52',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="scroll-smooth">
      <body
        className={`${dmSans.variable} ${playfair.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
