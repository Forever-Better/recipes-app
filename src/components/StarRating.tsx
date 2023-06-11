'use client';

import clsx from 'clsx';
import { Star } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useState } from 'react';

import { cn } from '@/lib/utils';

interface StarRatingProps {
  rating: number;
  selectValue: number;
  setValue: (index: number) => void;
}

export default function StarRating({ rating, selectValue, setValue }: StarRatingProps) {
  const session = useSession();
  const [hover, setHover] = useState(0);

  function getClass(type: 'hover' | 'rating' | 'selectValue') {
    if (type === 'rating') return 'fill-yellow-500 text-transparent';

    return 'fill-gray-800 dark:fill-gray-200';
  }
  return (
    <div className='flex flex-wrap'>
      {[...Array(10)].map((star, index) => {
        index += 1;
        return (
          <button
            key={index}
            className={cn('px-0.5 first:pl-0', { 'cursor-default': !session.data?.user })}
            type='button'
            onClick={() => {
              if (!session.data?.user) return null;
              setValue(index);
            }}
            onMouseEnter={() => {
              if (!session.data?.user) return null;
              setHover(index);
            }}
            onMouseLeave={() => {
              if (!session.data?.user) return null;
              setHover(0);
            }}
          >
            <Star
              size={28}
              className={clsx(
                index <= (hover || selectValue || rating)
                  ? getClass(hover ? 'hover' : selectValue ? 'selectValue' : 'rating')
                  : 'fill-slate-300 dark:fill-slate-600',
                'text-transparent'
              )}
            />
            <span
              className={clsx(
                index <= (hover || selectValue || rating)
                  ? 'text-gray-400 dark:text-gray-300'
                  : 'text-gray-300 dark:text-gray-400',
                'text-sm'
              )}
            >
              {index}
            </span>
          </button>
        );
      })}
    </div>
  );
}
