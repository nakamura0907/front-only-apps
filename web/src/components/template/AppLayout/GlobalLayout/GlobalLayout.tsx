'use client'

import { Logo } from '@/components/modules/Logo'
import {
  useIsDrawerOpen,
  useOpenDrawer,
} from '@/components/template/AppLayout/DrawerProvider'
import { AppShell, Burger, Group } from '@repo/ui'

type Props = {
  children: React.ReactNode
}

export const GlobalLayout: React.FC<Props> = ({ children }) => {
  const opened = useIsDrawerOpen()
  const open = useOpenDrawer()

  const handleBurgerClick = () => {
    open()
  }

  return (
    <AppShell header={{ height: 90 }} pt="md">
      <AppShell.Header>
        <Group h="100%" px="md">
          <Logo />
          <Burger
            aria-label="Toggle menu"
            ml="auto"
            onClick={handleBurgerClick}
            opened={opened}
          />
        </Group>
      </AppShell.Header>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  )
}