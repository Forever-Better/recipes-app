'use client';

import { Star } from 'lucide-react';
import { useState } from 'react';

interface StarRatingProps {
  rating: number;
  setRating: React.Dispatch<React.SetStateAction<number>>;
}

export default function StarRating({ rating, setRating }: StarRatingProps) {
  const [hover, setHover] = useState(0);

  return (
    <div className='star-rating'>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            key={index}
            type='button'
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <Star
              className={index <= (hover || rating) ? 'fill-secondary text-secondary' : 'text-gray-300'}
              size={32}
            />
          </button>
        );
      })}
    </div>
  );
}
