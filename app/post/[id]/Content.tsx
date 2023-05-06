'use client';
import { FormattedPost } from '@/app/types';
import React, { useState } from 'react';
import Image from 'next/image';
import { useEditor, EditorContent, Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import SocialLinks from '@/app/(shared)/SocialLinks';
import EditorMenubar from './EditorMenubar';
import CategoryandEdit from './CategoryandEdit';
type Props = {
  post: FormattedPost;
};

const Content = ({ post }: Props) => {
  const [isEditable, setIsEditeable] = useState<boolean>(false);
  const [title, setTitle] = useState<string>(post.title);
  const [titleError, setTitleError] = useState<string>('');
  const [tempTitle, setTempTitle] = useState<string>(title);
  const [content, setContent] = useState<string>(post.content);
  const [contentError, setContentError] = useState<string>('');
  const [tempContent, setTempContent] = useState<string>(content);
  const date = new Date(post?.createdAt);
  const options = { year: 'numeric', month: 'long', day: 'numeric' } as any;
  const formattedDate = date.toLocaleDateString('en-us', options);

  const handleEnableEdit = (bool: boolean) => {
    setIsEditeable(bool);
    editor?.setEditable(bool);
  };
  const handleOnChangeTitle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (title) setTitleError('');
    setTitle(e.target.value);
  };

  const handleOnChangeContent = ({ editor }: any) => {
    if (!(editor as Editor).isEmpty) setContentError('');
    setContent((editor as Editor).getHTML());
  };
  const editor = useEditor({
    extensions: [StarterKit],
    onUpdate: handleOnChangeContent,
    content: content,
    editable: isEditable,
  });

  const handleSubmit = () => {};
  return (
    <div className="prose w-full max-w-full mb-10">
      <h1>Hello</h1>
      <h5 className="text-wh-300">{`Home >${post.category} > ${post.title}`}</h5>
      <CategoryandEdit
        isEditable={isEditable}
        handleEnableEdit={handleEnableEdit}
        title={title}
        setTitle={setTitle}
        tempTitle={tempTitle}
        setTempTitle={setTempTitle}
        tempContent={tempContent}
        setTempContent={setTempContent}
        editor={editor}
        post={post}
      />
      <form onSubmit={handleSubmit}>
        <>
          {isEditable ? (
            <div>
              <textarea
                className="border-2 rounded-md bg-wh-5- p-3 w-full"
                placeholder="Title"
                onChange={handleOnChangeTitle}
                value={title}
              />
            </div>
          ) : (
            <h3 className="font-bold text-3xl mt-3">{title}</h3>
          )}
          <div className="flex gap-3">
            <h5 className="font-semibold text-xs"> By {post.author}</h5>
            <h6 className="text-wh-300 text-xs ">{formattedDate}</h6>
          </div>
        </>
        <div className="relative w-auto mt-2 mb-16 h-96">
          <Image
            fill
            alt={post.title}
            src={post?.image}
            sizes="(max-width:480px) 100vw,
          (max-width:760px) 85vw,
          (max-width:1060px) 75vw,
          60vw
          "
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div
          className={
            isEditable
              ? 'border-2 rounded-md bg-wh-50 p-3'
              : 'w-full max-w-full '
          }
        >
          {isEditable && (
            <>
              <EditorMenubar editor={editor} />
              <hr className="border-1 mt-2 mb-5" />
            </>
          )}
          <EditorContent editor={editor} />
        </div>
        {isEditable && (
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-accent-red text-wh-10 hover:bg-wh-500 font-semibold py-2 px-5 mt-5"
            >
              Submit
            </button>
          </div>
        )}
      </form>
      <div className="hidden md:block mt-10 w-1/3">
        <SocialLinks isDark />
      </div>
    </div>
  );
};

export default Content;
