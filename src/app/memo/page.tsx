import { RichEditor } from '@/app/memo/_components'
import { Heading } from '@/components/modules'
import { Container } from '@/components/ui'
import { routes } from '@/config'
import { Metadata } from 'next'

export default function Page() {
  return (
    <Container>
      <Heading order={2}>{routes.memo.label}</Heading>
      <RichEditor />
    </Container>
  )
}

export const metadata: Metadata = {
  title: routes.memo.label,
}
