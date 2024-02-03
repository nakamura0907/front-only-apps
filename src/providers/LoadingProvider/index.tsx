'use client'

import { LoadingOverlay } from '@/components/ui/Loader'
import { useDisclosure } from '@/hooks'
import { createContext, useContext } from 'react'

type LoadingActions = {
  close: () => void
  open: () => void
}

const initialLoadingActions: LoadingActions = {
  close: () => undefined,
  open: () => undefined,
}

const loadingActionsContext = createContext<LoadingActions>({
  ...initialLoadingActions,
})

export const useLoadingActions = () => useContext(loadingActionsContext)

export const LoadingProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [visible, { close, open }] = useDisclosure(false)

  return (
    <>
      <LoadingOverlay
        overlayProps={{ blur: 2, radius: 'sm' }}
        visible={visible}
        zIndex={1000}
      />
      <loadingActionsContext.Provider value={{ close, open }}>
        {children}
      </loadingActionsContext.Provider>
    </>
  )
}
