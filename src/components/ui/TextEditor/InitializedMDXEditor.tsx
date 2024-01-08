/**
 * TODO: 次はここから
 *
 * - Toolbar Plugin
 * - Code Blocks Plugin
 * - Tables Plugin
 * - Images Plugin
 * - Error Handling
 */

'use client'

import {
  BoldItalicUnderlineToggles,
  MDXEditor,
  RealmPlugin,
  UndoRedo,
  headingsPlugin,
  linkPlugin,
  listsPlugin,
  markdownShortcutPlugin,
  quotePlugin,
  tablePlugin,
  thematicBreakPlugin,
  toolbarPlugin,
  type MDXEditorMethods,
  type MDXEditorProps,
} from '@mdxeditor/editor'
import '@mdxeditor/editor/style.css'
import type { ForwardedRef } from 'react'

const plugins = [
  headingsPlugin(),
  linkPlugin(),
  listsPlugin(),
  markdownShortcutPlugin(),
  quotePlugin(),
  thematicBreakPlugin(),
  toolbarPlugin({
    toolbarContents: () => (
      <>
        <UndoRedo />
        <BoldItalicUnderlineToggles />
      </>
    ),
  }),
  tablePlugin(),
] as const satisfies RealmPlugin[]

export default function InitializedMDXEditor({
  editorRef,
  ...props
}: { editorRef: ForwardedRef<MDXEditorMethods> | null } & MDXEditorProps) {
  return <MDXEditor plugins={plugins} {...props} ref={editorRef} />
}
