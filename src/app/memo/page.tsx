import { RichEditor } from '@/app/memo/_components/RichEditor'
import { Title } from '@/components/ui/Title'
import { Metadata } from 'next'

export default function Page() {
  return (
    <main>
      <Title order={1}>Webメモ帳</Title>
      <RichEditor />
    </main>
  )
}

export const metadata: Metadata = {
  title: 'Webメモ帳',
}
