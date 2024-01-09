'use client'

import '@mdxeditor/editor/style.css'

import {
  BlockTypeSelect,
  BoldItalicUnderlineToggles,
  CodeToggle,
  CreateLink,
  InsertTable,
  ListsToggle,
  MDXEditor,
  RealmPlugin,
  Separator,
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
        <Separator />
        <BoldItalicUnderlineToggles />
        <CodeToggle />
        <Separator />
        <ListsToggle />
        <Separator />
        <BlockTypeSelect />
        <Separator />
        <CreateLink />
        <InsertTable />
      </>
    ),
  }),
  tablePlugin(),
] as const satisfies RealmPlugin[]

// See: https://mdxeditor.dev/editor/docs/getting-started#nextjs-app-router
export default function InitializedMDXEditor({
  editorRef,
  ...props
}: { editorRef: ForwardedRef<MDXEditorMethods> | null } & MDXEditorProps) {
  return <MDXEditor plugins={plugins} {...props} ref={editorRef} />
}
