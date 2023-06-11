'use client';

import clsx from 'clsx';
import { Star } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useState } from 'react';

import StarRating from '@/components/StarRating';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { UrlTemplates } from '@/lib/urlTemplates';
import type { GetRecipeRatingResponse } from '@/services/rating/rating.helper';
import { RatingService } from '@/services/rating/rating.service';

interface RatingProps {
  data: GetRecipeRatingResponse;
}

function RatingItem({
  placeholder,
  reviewsCount,
  value
}: {
  placeholder: number;
  reviewsCount: number;
  value: number;
}) {
  return (
    <div className='flex gap-4 items-center'>
      <div>
        <span className='flex w-8 justify-between text-sm text-gray-400'>
          {placeholder}
          <Star className='text-gray-300' size={18} />
        </span>
      </div>
      <Progress value={value} />
      <div className='w-3 text-sm text-gray-400'>{reviewsCount}</div>
    </div>
  );
}

export default function Rating({ data }: RatingProps) {
  const pathname = usePathname();
  const session = useSession();
  const recipeId = pathname?.split(`${UrlTemplates.Recipe}/`)[1] as string;
  const [selectValue, setSelectValue] = useState(0);
  const [yourRating, setYourRating] = useState(data.userRating);

  async function patchRating(rating: number) {
    setYourRating(rating);

    await RatingService.create(rating, recipeId);
  }
  async function deleteRating() {
    await RatingService.delete(recipeId);
  }

  return (
    <Card className='h-fit'>
      <CardHeader>
        <CardTitle>Rating</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='sm:flex justify-between items-start gap-2'>
          <StarRating
            rating={data.averageRating}
            selectValue={selectValue}
            setValue={(index) => {
              if (!session.data?.user) return null;

              setSelectValue(index);
              patchRating(index);
            }}
          />
          <div>
            <div
              className={clsx(
                data.averageRating >= 7
                  ? 'text-green-600'
                  : data.averageRating === 0
                  ? 'text-gray-700'
                  : data.averageRating <= 4
                  ? 'text-red-600'
                  : 'text-gray-500',
                'text-3xl  font-medium'
              )}
            >
              {data.averageRating || '–'}
            </div>
            <span className='text-sm text-gray-400 font-light'>{data.count} ratings</span>
          </div>
        </div>
        <div className='flex justify-between'>
          {yourRating ? (
            <div className='flex items-center gap-2'>
              <span className='text-sm'>Your rating</span>
              <span
                className={clsx(
                  yourRating >= 7 ? 'bg-green-600' : yourRating <= 4 ? 'bg-red-600' : 'bg-gray-500',
                  'flex items-center font-medium justify-center text-white w-9 h-9 rounded-full'
                )}
              >
                {yourRating}
              </span>
              <button
                className='ml-2 text-gray-400 text-sm'
                onClick={() => {
                  if (!session.data?.user) return null;

                  setSelectValue(0);
                  setYourRating(0);
                  deleteRating();
                }}
              >
                Delete
              </button>
            </div>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
}
