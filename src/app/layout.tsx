import { Layout } from '@/components/template/layout'
import { AppProvider } from '@/providers'
import { ColorSchemeScript } from '@mantine/core'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '@mantine/core/styles.css'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  description: 'フロントエンドだけで動作するNext.jsアプリケーション集',
  title: {
    default: 'Front Only Apps',
    template: '%s | Front Only Apps',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <AppProvider>
          <Layout>{children}</Layout>
        </AppProvider>
      </body>
    </html>
  )
}
