import { MantineProvider } from './MantineProvider'

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return <MantineProvider>{children}</MantineProvider>
}
