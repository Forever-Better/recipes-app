'use client';

import { MoreVertical } from 'lucide-react';
import { useRouter } from 'next/navigation';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { ReviewService } from '@/services/review/review.service';

interface ReviewOperationsProps {
  reviewId: string;
}

export default function ReviewOperations({ reviewId }: ReviewOperationsProps) {
  const router = useRouter();
  async function deleteReview() {
    await ReviewService.delete(reviewId);

    // router.refresh();
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='flex h-8 w-8 items-center justify-center rounded-md transition-colors hover:bg-muted'>
        <MoreVertical size={16} />
        <span className='sr-only'>Open</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem>Edit</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          className='flex cursor-pointer items-center text-destructive focus:text-destructive'
          onSelect={() => deleteReview()}
        >
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
