'use client'

import { MDXEditorMethods, MDXEditorProps } from '@mdxeditor/editor'
import dynamic from 'next/dynamic'
import { forwardRef } from 'react'

const Editor = dynamic(() => import('./InitializedMDXEditor'), {
  ssr: false,
})

// See: https://mdxeditor.dev/editor/docs/getting-started#nextjs-app-router
export const ForwardRefEditor = forwardRef<MDXEditorMethods, MDXEditorProps>(
  (props, ref) => <Editor {...props} editorRef={ref} />,
)

ForwardRefEditor.displayName = 'ForwardRefEditor'