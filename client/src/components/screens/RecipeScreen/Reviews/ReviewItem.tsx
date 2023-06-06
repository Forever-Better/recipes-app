'use client';

import { AvatarImage } from '@radix-ui/react-avatar';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export default function ReviewItem() {
  return (
    <div className='flex items-center gap-4'>
      <Avatar>
        <AvatarImage src='' />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className=''>
        <div className='flex gap-2 text-sm items-center'>
          <h4 className='font-medium'>Olivia Martin</h4>
          <span className='text-gray-500'>23.09.2023</span>
        </div>
        <p>Nice recipe!</p>
      </div>
    </div>
  );
}
