import '@mantine/core/styles.css'
import '@mantine/notifications/styles.css'

import { AppLayout } from '@/components/template'
import { meta } from '@/config'
import { AppProvider, ColorSchemeScript } from '@/providers'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  description: meta.description,
  title: {
    default: meta.title.default,
    template: `%s ${meta.title.separator} ${meta.title.default}`,
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
          <AppLayout>{children}</AppLayout>
        </AppProvider>
      </body>
    </html>
  )
}
