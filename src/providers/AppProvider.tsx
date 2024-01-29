import { LoadingProvider } from '@/providers/LoadingProvider'
import { MantineProvider } from './MantineProvider'

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <MantineProvider>
      <LoadingProvider>{children}</LoadingProvider>
    </MantineProvider>
  )
}
