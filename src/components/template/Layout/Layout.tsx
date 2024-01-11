'use client'

import { Header } from '@/components/template/Layout/Header'
import { AppShell } from '@/components/ui/Layout'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppShell header={{ height: 90 }} pt="md">
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  )
}
