'use client'

import { Anchor } from '@/components/ui/Anchor'
import { Group } from '@/components/ui/Group'
import { AppShell } from '@/components/ui/Layout'
import { BaseTitle } from '@/components/ui/Title'
import { meta } from '@/config'
import Link from 'next/link'

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

const Header = () => {
  return (
    <Group h="100%" px="md">
      <Logo />
    </Group>
  )
}

const Logo = () => {
  return (
    <Anchor c="dark" component={Link} href="/" underline="never">
      <BaseTitle>{meta.title.default}</BaseTitle>
    </Anchor>
  )
}
