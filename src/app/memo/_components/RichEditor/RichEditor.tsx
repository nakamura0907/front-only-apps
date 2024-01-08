import { TextEditor } from '@/components/ui/TextEditor'
import './style.css'

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
