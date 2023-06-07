'use client';

import { useMutation } from '@tanstack/react-query';
import { Bookmark } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { BookmarkService } from '@/services/bookmark/bookmark.service';

interface BookmarkButtonProps {
  recipeId: string;
  hasBookmark: boolean;
}

export default function BookmarkButton({ hasBookmark, recipeId }: BookmarkButtonProps) {
  const { mutate: createBookmark } = useMutation(['create bookmark'], () => BookmarkService.create(recipeId));
  const { mutate: deleteBookmark } = useMutation(['delete bookmark'], () => BookmarkService.delete(recipeId));

  function handleClick() {
    if (hasBookmark) {
      return deleteBookmark();
    }

    createBookmark();
  }

  return (
    <Button className='w-fit' variant='secondary'>
      <Bookmark className='mr-2' size={18} />
      Save
    </Button>
  );
}
