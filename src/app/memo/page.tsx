import { TextEditor } from '@/components/ui/TextEditor'
import { Metadata } from 'next'

export default function Page() {
  return (
    <main>
      <h1>Webメモ帳</h1>
      <TextEditor
        className="prose max-w-none"
        contentEditableClassName="prose"
        markdown=""
        placeholder="# Webメモ帳"
      />
    </main>
  )
}

export const metadata: Metadata = {
  title: 'Webメモ帳',
}
