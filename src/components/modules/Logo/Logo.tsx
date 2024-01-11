import { Anchor, Title } from '@/components/ui'
import { meta } from '@/config'
import Link from 'next/link'

export const Logo = () => {
  return (
    <Anchor c="dark" component={Link} href="/" underline="never">
      <Title>{meta.title.default}</Title>
    </Anchor>
  )
}
