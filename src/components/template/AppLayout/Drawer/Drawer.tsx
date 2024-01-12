'use client'

import {
  useCloseDrawer,
  useIsDrawerOpen,
} from '@/components/template/AppLayout/DrawerProvider'
import { Drawer as DrawerUI, NavLink } from '@/components/ui'
import { routes } from '@/config'
import Link from 'next/link'

export const Drawer = () => {
  const opened = useIsDrawerOpen()
  const close = useCloseDrawer()

  const handleClose = () => {
    close()
  }

  return (
    <DrawerUI
      onClose={handleClose}
      opened={opened}
      overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
    >
      <NavLink
        component={Link}
        href={routes.memo.path}
        label={routes.memo.label}
        onClick={handleClose}
      />
    </DrawerUI>
  )
}
