import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'South Florida Lead Demos',
  description: 'Demo websites for South Florida small business leads',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
