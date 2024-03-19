'use client'

import { useDisclosure } from '@repo/ui'
import { createContext, useContext } from 'react'

const defaultValues = {
  close: () => {},
  isDrawerOpen: false,
  open: () => {},
}

const isDrawerOpenContext = createContext(defaultValues.isDrawerOpen)
const openDrawerContext = createContext(defaultValues.open)
const closeDrawerContext = createContext(defaultValues.close)

export const DrawerProvider = ({ children }: { children: React.ReactNode }) => {
  const [opened, { close, open }] = useDisclosure(defaultValues.isDrawerOpen)

  return (
    <isDrawerOpenContext.Provider value={opened}>
      <openDrawerContext.Provider value={open}>
        <closeDrawerContext.Provider value={close}>
          {children}
        </closeDrawerContext.Provider>
      </openDrawerContext.Provider>
    </isDrawerOpenContext.Provider>
  )
}

export const useIsDrawerOpen = () => useContext(isDrawerOpenContext)
export const useOpenDrawer = () => useContext(openDrawerContext)
export const useCloseDrawer = () => useContext(closeDrawerContext)