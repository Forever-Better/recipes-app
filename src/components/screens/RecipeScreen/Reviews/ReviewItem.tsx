import type { Prisma } from '@prisma/client';

import { UserAvatar } from '@/components/UserAvatar';

interface ReviewItemProps {
  children: React.ReactNode;
  data: Prisma.ReviewGetPayload<{ include: { user: true } }>;
}

export default function ReviewItem({ children, data }: ReviewItemProps) {
  return (
    <div className='flex items-center gap-4'>
      <UserAvatar user={{ image: data.user.image || null, name: data.user.name || null }} />
      <div className=''>
        <div className='flex gap-2 text-sm items-center'>
          <h4 className='font-medium'>{data.user.name}</h4>
          {/* <span className='text-gray-500'>{data.updatedAt.getUTCDate()}</span> */}
        </div>
        <p>{children}</p>
      </div>
    </div>
  );
}
