import { Drawer as DrawerUI, NavLink } from '@/components/ui'
import { routes } from '@/config'
import Link from 'next/link'

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
      <NavLink
        component={Link}
        href={routes.memo.path}
        label={routes.memo.label}
      />
    </DrawerUI>
  )
}
