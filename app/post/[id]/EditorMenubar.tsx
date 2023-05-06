import React from 'react';
import { Editor } from '@tiptap/react';
import ListItem from '@tiptap/extension-list-item';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

type Props = {
  editor: Editor | null;
};

const EditorMenubar = ({ editor }: Props) => {
  if (!editor) {
    return null;
  }

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          className={
            editor.isActive('heading', { level: 1 })
              ? 'bg-wh-500 text-wh-50 p-1 rounded-md'
              : 'p-1'
          }
        >
          h1
        </button>
        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          className={
            editor.isActive('heading', { level: 2 })
              ? 'bg-wh-500 text-wh-50 p-1 rounded-md'
              : 'p-1'
          }
        >
          h2
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={
            editor.isActive('paragraph')
              ? 'bg-wh-500 text-wh-50 p-1 rounded-md'
              : 'p-1'
          }
        >
          paragraph
        </button>
        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          className={
            editor.isActive('heading', { level: 3 })
              ? 'bg-wh-500 text-wh-50 p-1 rounded-md'
              : 'p-1'
          }
        >
          h3
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          className={
            editor.isActive('bold')
              ? 'bg-wh-500 text-wh-50 p-1 rounded-md'
              : 'p-1'
          }
        >
          bold
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          className={
            editor.isActive('italic')
              ? 'bg-wh-500 text-wh-50 p-1 rounded-md'
              : 'p-1'
          }
        >
          italic
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          className={
            editor.isActive('strike')
              ? 'bg-wh-500 text-wh-50 p-1 rounded-md'
              : 'p-1'
          }
        >
          strike
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={!editor.can().chain().focus().toggleCode().run()}
          className={
            editor.isActive('code')
              ? 'bg-wh-500 text-wh-50 p-1 rounded-md'
              : 'p-1'
          }
        >
          code
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().unsetAllMarks().run()}
        >
          clear marks
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().clearNodes().run()}
        >
          clear nodes
        </button>
      </div>
    </div>
  );
};
export default EditorMenubar;
