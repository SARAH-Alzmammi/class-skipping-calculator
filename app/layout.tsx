import './globals.css'
import type { Metadata } from 'next'
import { Almarai } from 'next/font/google'

const almarai = Almarai({subsets:['arabic'], weight: '700'} )


export const metadata: Metadata = {
  title: 'كم باقي',
  description: 'كم باقي للغياب ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar">
      <body className={almarai.className}>{children}</body>
    </html>
  )
}
