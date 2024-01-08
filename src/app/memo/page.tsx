import { RichEditor } from '@/app/memo/_components/RichEditor'
import { Container } from '@/components/ui/Container'
import { Title } from '@/components/ui/Title'
import { Metadata } from 'next'

export default function Page() {
  return (
    <Container>
      <Title order={1}>Webメモ帳</Title>
      <RichEditor />
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'Webメモ帳',
}
