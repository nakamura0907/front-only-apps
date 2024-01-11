'use client'

import { Drawer } from '@/components/template/AppLayout/Drawer'
import { GlobalLayout } from '@/components/template/AppLayout/GlobalLayout'
import { useDisclosure } from '@/hooks'

type State = {
  opened: boolean
}

const initialState: State = {
  opened: false,
}

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  const [opened, { close, open }] = useDisclosure(initialState.opened)

  return (
    <>
      <GlobalLayout onBurgerClick={open} opened={opened}>
        {children}
      </GlobalLayout>
      <Drawer onClose={close} opened={opened} />
    </>
  )
}
