import type { Prisma } from '@prisma/client';
import { Star } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface RatingProps {
  data: Prisma.ReviewGetPayload<{ include: { user: true } }>[];
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
  return (
    <Card className='w-2/5 h-fit'>
      <CardHeader>
        <CardTitle>Rating</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='flex items-center gap-2 mb-6'>
          <div className='flex gap-1'>
            <Star className='fill-secondary text-secondary' size={20} />
            <Star className='fill-secondary text-secondary' size={20} />
            <Star className='fill-secondary text-secondary' size={20} />
            <Star className='fill-secondary text-secondary' size={20} />
            <Star className='text-secondary' size={20} />
          </div>
          <span className='ml-2 text-gray-400'>161 reviews</span>
        </div>
        <div className='flex flex-col gap-2'>
          <RatingItem placeholder={5} reviewsCount={12} value={66} />
          <RatingItem placeholder={4} reviewsCount={3} value={8} />
          <RatingItem placeholder={3} reviewsCount={2} value={6} />
          <RatingItem placeholder={2} reviewsCount={0} value={0} />
          <RatingItem placeholder={1} reviewsCount={1} value={2} />
        </div>
      </CardContent>
    </Card>
  );
}
