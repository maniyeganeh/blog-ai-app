'use client';
import { FormattedPost } from '@/app/types';
import React, { useState } from 'react';

type Props = {
  post: FormattedPost;
};

const Content = ({ post }: Props) => {
  const [isEditable, setIsEditeable] = useState<boolean>(false);
  const [title, setTitle] = useState<string>(post.title);
  const [titleError, setTitleError] = useState<string>('');
  const [content, setContent] = useState<string>(post.content);
  const [contentError, setContentError] = useState<string>('');
  return <div>Content</div>;
};

export default Content;
