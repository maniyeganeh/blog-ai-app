import { FormattedPost } from '@/app/types';
import { Editor } from '@tiptap/react';
import React from 'react';
import { XMarkIcon, PencilSquareIcon } from '@heroicons/react/24/solid';

type Props = {
  isEditable: boolean;
  handleEnableEdit: (isEditable: boolean) => void;
  title: string;
  setTitle: (title: string) => void;
  tempTitle: string;
  setTempTitle: (tempTitle: string) => void;
  tempContent: string;
  setTempContent: (tempContent: string) => void;
  editor: Editor | null;
  post: FormattedPost;
};

const CategoryandEdit = ({
  isEditable,
  handleEnableEdit,
  title,
  setTitle,
  tempTitle,
  setTempTitle,
  tempContent,
  setTempContent,
  editor,
  post,
}: Props) => {
  const handleEditEnable = () => {
    handleEnableEdit(!isEditable);
    setTempTitle(title);
    setTempContent(editor?.getHTML() || '');
  };
  const handleCancelEdit = () => {
    handleEnableEdit(!isEditable);
    setTitle(tempTitle);
    editor?.commands.setContent(tempContent);
  };
  return (
    <div className="flex justify-between items-center">
      <h4 className="bg-accent-orange py-2 px-5 text-wh-900 text-sm font-bold">
        {post.category}
      </h4>
      <div className="mt-4 ">
        {isEditable ? (
          <div className="flex justify-between gap-3">
            <button type="button" onClick={handleCancelEdit}>
              <XMarkIcon className="h-6 w-6 text-accent-red" />
            </button>
          </div>
        ) : (
          <button type="button" onClick={handleEditEnable}>
            <PencilSquareIcon className="h-6 w-6 text-accent-red" />
          </button>
        )}
      </div>
    </div>
  );
};

export default CategoryandEdit;
