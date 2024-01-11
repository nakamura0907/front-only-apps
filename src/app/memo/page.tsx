import { RichEditor } from '@/app/memo/_components/RichEditor'
import { Container } from '@/components/ui/Container'
import { Title } from '@/components/ui/Title'
import { routes } from '@/config'
import { Metadata } from 'next'

export default function Page() {
  return (
    <Container>
      <Title order={2}>{routes.memo.label}</Title>
      <RichEditor />
    </Container>
  )
}

export const metadata: Metadata = {
  title: routes.memo.label,
}
