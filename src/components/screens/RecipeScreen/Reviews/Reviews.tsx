'use client';

import type { Prisma } from '@prisma/client';
import { Edit } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import ReviewForm from './ReviewForm';
import ReviewItem from './ReviewItem';

interface ReviewsProps {
  data: Prisma.ReviewGetPayload<{ include: { user: true } }>[];
}

export default function Reviews({ data }: ReviewsProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className='w-3/5 h-fit'>
      <CardHeader className='flex flex-row justify-between'>
        <CardTitle>Reviews</CardTitle>{' '}
        {!isOpen && (
          <Button startIcon={<Edit className='mr-2' size={18} />} variant='outline' onClick={() => setIsOpen(true)}>
            Add review
          </Button>
        )}
      </CardHeader>
      <CardContent className='flex flex-col gap-8'>
        {isOpen && <ReviewForm close={() => setIsOpen(false)} />}
        {data.length ? (
          <ul className='w-full -mt-3'>
            {data.length &&
              data?.map((item, i) => (
                <li key={i} className='border-b py-3 last:border-b-0'>
                  <ReviewItem data={item}>{item.body}</ReviewItem>
                </li>
              ))}
          </ul>
        ) : (
          <span className='text-gray-500'>No reviews yet, be the first</span>
        )}
      </CardContent>
    </Card>
  );
}
