import { RichEditor } from '@/app/memo/_components/RichEditor'
import { Metadata } from 'next'

export default function Page() {
  return (
    <main>
      <h1>Webメモ帳</h1>
      <RichEditor />
    </main>
  )
}

export const metadata: Metadata = {
  title: 'Webメモ帳',
}
