'use client'

import { AppShell } from '@mantine/core'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <AppShell>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  )
}
