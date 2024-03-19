import '@mantine/core/styles.css'
import '@mantine/notifications/styles.css'

import { MantineProvider } from './MantineProvider'
import { Notifications } from '@mantine/notifications'

export const UIProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <MantineProvider>
        <Notifications />
        {children}
    </MantineProvider>
  )
}