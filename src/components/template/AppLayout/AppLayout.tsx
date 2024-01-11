import { Drawer } from '@/components/template/AppLayout/Drawer'
import { DrawerProvider } from '@/components/template/AppLayout/DrawerProvider'
import { GlobalLayout } from '@/components/template/AppLayout/GlobalLayout'

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <DrawerProvider>
      <GlobalLayout>{children}</GlobalLayout>
      <Drawer />
    </DrawerProvider>
  )
}
