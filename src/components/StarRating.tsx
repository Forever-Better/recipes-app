'use client';

import clsx from 'clsx';
import { Star } from 'lucide-react';
import { useState } from 'react';

interface StarRatingProps {
  rating: number;
  selectValue: number;
  setValue: (index: number) => void;
}

export default function StarRating({ rating, selectValue, setValue }: StarRatingProps) {
  const [hover, setHover] = useState(0);

  function getClass(type: 'hover' | 'rating' | 'selectValue') {
    if (type === 'rating') return 'fill-yellow-500 text-transparent';

    return 'fill-gray-800';
  }
  return (
    <div className='flex'>
      {[...Array(10)].map((star, index) => {
        index += 1;
        return (
          <button
            key={index}
            className='px-0.5 first:pl-0'
            type='button'
            onClick={() => setValue(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(0)}
          >
            <Star
              size={28}
              className={clsx(
                index <= (hover || selectValue || rating)
                  ? getClass(hover ? 'hover' : selectValue ? 'selectValue' : 'rating')
                  : 'fill-slate-300',
                'text-transparent'
              )}
            />
            <span
              className={clsx(index <= (hover || selectValue || rating) ? 'text-gray-400' : 'text-gray-300', 'text-sm')}
            >
              {index}
            </span>
          </button>
        );
      })}
    </div>
  );
}
