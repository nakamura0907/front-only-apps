import { Drawer as DrawerUI } from '@/components/ui'

type Props = {
  onClose: () => void
  opened: boolean
}

export const Drawer: React.FC<Props> = ({ onClose, opened }) => {
  const handleClose = () => {
    onClose()
  }

  return (
    <DrawerUI
      onClose={handleClose}
      opened={opened}
      overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      withCloseButton={false}
    >
      aho
    </DrawerUI>
  )
}
