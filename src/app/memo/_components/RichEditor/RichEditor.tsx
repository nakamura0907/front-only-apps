import './style.css'

import { TextEditor } from '@/components/ui'

export const RichEditor = () => {
  return (
    <>
      {/* Comming Soon... */}
      {/* 自動保存チェックボックス */}
      <TextEditor
        className="prose max-w-none"
        contentEditableClassName="editable"
        markdown=""
        placeholder="# Webメモ帳"
      />
    </>
  )
}
