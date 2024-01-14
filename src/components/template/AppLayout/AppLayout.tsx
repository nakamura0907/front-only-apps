import { Drawer } from '@/components/template/AppLayout/Drawer'
import { DrawerProvider } from '@/components/template/AppLayout/DrawerProvider'
import { GlobalLayout } from '@/components/template/AppLayout/GlobalLayout'
import { Notifications, ProgressBar } from '@/components/ui'

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ProgressBar />
      <Notifications />
      <DrawerProvider>
        <GlobalLayout>{children}</GlobalLayout>
        <Drawer />
      </DrawerProvider>
    </>
  )
}
