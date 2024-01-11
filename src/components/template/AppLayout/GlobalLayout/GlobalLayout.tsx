import { Logo } from '@/components/modules'
import { AppShell, Burger, Group } from '@/components/ui'

type Props = {
  children: React.ReactNode
  onBurgerClick: () => void
  opened: boolean
}

export const GlobalLayout: React.FC<Props> = ({
  children,
  onBurgerClick,
  opened,
}) => {
  const handleBurgerClick = () => {
    onBurgerClick()
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
