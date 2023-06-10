'use client';

import type { Prisma } from '@prisma/client';
import { useSession } from 'next-auth/react';

import { UserAvatar } from '@/components/UserAvatar';
import { getCurrentUser } from '@/lib/session';

import ReviewOperations from './ReviewOperations';

interface ReviewItemProps {
  children: React.ReactNode;
  data: Prisma.ReviewGetPayload<{ include: { user: true } }>;
}

export default function ReviewItem({ children, data }: ReviewItemProps) {
  const session = useSession();

  return (
    <div className='flex items-center justify-between'>
      <div className='flex gap-4'>
        <UserAvatar user={{ image: data.user.image || null, name: data.user.name || null }} />
        <div>
          <div className='flex gap-2 text-sm items-center'>
            <h4 className='font-medium'>{data.user.name}</h4>
            {/* <span className='text-gray-500'>{data.updatedAt.getUTCDate()}</span> */}
          </div>
          <p>{children}</p>
        </div>
      </div>
      {session.data?.user.id === data.userId && <ReviewOperations reviewId={data.id} />}
    </div>
  );
}
