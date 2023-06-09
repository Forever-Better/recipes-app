import { zodResolver } from '@hookform/resolvers/zod';
import { usePathname, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import TextareaAutosize from 'react-textarea-autosize';
import type * as z from 'zod';

import StarRating from '@/components/StarRating';
import { UserAvatar } from '@/components/UserAvatar';
import { Button } from '@/components/ui/button';
import { reviewCreateSchema } from '@/lib/validations/review';
import { ReviewService } from '@/services/review/review.service';

interface ReviewFormProps {
  close: () => void;
}

type FormData = z.infer<typeof reviewCreateSchema>;

export default function ReviewForm({ close }: ReviewFormProps) {
  const { data } = useSession();
  const router = useRouter();
  const pathname = usePathname();
  const [rating, setRating] = useState(0);
  const [isSaving, setIsSaving] = useState(false);
  const { handleSubmit } = useForm<FormData>({
    resolver: zodResolver(reviewCreateSchema)
  });

  async function onSubmit(data: FormData) {
    setIsSaving(true);

    const response = await ReviewService.create({ rating, body: data.body }, pathname?.split('recipe/')[1] as string);

    if (response.ok) {
      setIsSaving(false);
      close();
      router.refresh();
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='flex gap-4 pb-6 border-b'>
        <UserAvatar className='w-8 h-8' user={{ image: data?.user.image || null, name: data?.user.name || null }} />
        <div className='w-full flex flex-col gap-4'>
          <div className='flex flex-col gap-1'>
            <span className='text-gray-500 text-sm'>Your mark: *</span>
            <StarRating rating={rating} setRating={setRating} />
          </div>
          <div className='flex flex-col gap-1'>
            <span className='text-gray-500 text-sm'>Your review:</span>
            <TextareaAutosize className='flex h-16 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium resize-none placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50' />
          </div>
          <div className='flex gap-2 justify-end'>
            <Button className='w-fit' disabled={!rating} loading={isSaving} size='sm' type='submit'>
              Publish
            </Button>{' '}
            <Button className='w-fit' disabled={isSaving} variant='ghost' onClick={close}>
              Cancel
            </Button>{' '}
          </div>
        </div>
      </div>
    </form>
  );
}
