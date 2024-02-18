import { Drawer } from '@/components/template/AppLayout/Drawer'
import { DrawerProvider } from '@/components/template/AppLayout/DrawerProvider'
import { GlobalLayout } from '@/components/template/AppLayout/GlobalLayout'
import { ProgressBar } from '@/components/ui/ProgressBar'

export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ProgressBar />
      <DrawerProvider>
        <GlobalLayout>{children}</GlobalLayout>
        <Drawer />
      </DrawerProvider>
    </>
  )
}