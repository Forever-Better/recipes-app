'use client';

import { Bookmark, Check } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { getApiUrl } from '@/helpers/getApiUrl';

interface BookmarkButtonProps {
  hasBookmark: boolean;
  recipeInfo: { label: string; image: string; recipeId: string };
}

export default function BookmarkButton({ hasBookmark, recipeInfo }: BookmarkButtonProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  async function onClick() {
    setIsLoading(true);

    if (hasBookmark) {
      await fetch(getApiUrl.bookmark(recipeInfo.recipeId), {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } else {
      await fetch(getApiUrl.bookmark(recipeInfo.recipeId), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ label: recipeInfo.label, image: recipeInfo.image, originalId: recipeInfo.recipeId })
      });
    }

    router.refresh();
    setIsLoading(false);
  }

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            className='w-fit'
            loading={isLoading}
            startIcon={hasBookmark ? <Check className='mr-2' size={18} /> : <Bookmark className='mr-2' size={18} />}
            variant={hasBookmark ? 'outline' : 'secondary'}
            onClick={() => onClick()}
          >
            {hasBookmark ? 'Added' : 'Save'}
          </Button>
        </TooltipTrigger>
        <TooltipContent>{hasBookmark ? 'Remove from bookmarks' : 'Save to bookmarks'}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
