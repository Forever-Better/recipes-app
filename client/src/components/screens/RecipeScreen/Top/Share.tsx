'use client';

import { Share2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CopyToClipboard from 'react-copy-to-clipboard';

import Ok from '@/components/icons/ok';
import Telegram from '@/components/icons/telegram';
import Vk from '@/components/icons/vk';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import type { Recipe } from '@/types/recipe.interface';

interface ShareProps {
  data: {
    label: Recipe['label'];
    image: Recipe['image'];
  };
}

export default function Share({ data }: ShareProps) {
  const pathname = usePathname();

  const url = `${process.env.NEXT_PUBLIC_CLIENT_URL}${pathname}`;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className='absolute max-w-10 h-10 flex justify-center items-center right-6 top-4 rounded-full'>
          <Share2 size={22} />
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader />
        <div className='flex flex-col items-center'>
          {' '}
          <Image
            alt='Cover'
            className='rounded-lg mb-8'
            height={231}
            quality={100}
            sizes='50vw'
            src={data.image}
            style={{ height: '231px', objectFit: 'cover' }}
            width={457}
          />
          <h3 className='font-medium text-xl mb-5'>Share this recipe</h3>
          <div className='flex gap-6'>
            <div className='flex flex-col gap-2 items-center'>
              <Link
                className='w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center'
                href={`https://vk.com/share.php?url=${url}&title=${data.label}&image=${data.image}`}
                target='_blank'
              >
                <Vk />
              </Link>
              <span className='text-gray-600 font-light text-xs'>VK</span>
            </div>
            <div className='flex flex-col gap-2 items-center'>
              <Link
                className='w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center'
                href={`https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.title=${data.label}&st.shareUrl=${url}`}
                target='_blank'
              >
                <Ok />
              </Link>
              <span className='text-gray-600 font-light text-xs'>OK</span>
            </div>
            <div className='flex flex-col gap-2 items-center'>
              <Link
                className='w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center'
                href={`https://t.me/share/url?url=${url}&text=${data.label}`}
                target='_blank'
              >
                <Telegram />
              </Link>
              <span className='text-gray-600 font-light text-xs'>Telegram</span>
            </div>
          </div>
          <span className='text-gray-500 mt-6 mb-4'>or copy the link</span>
          <div className='flex w-full space-x-2'>
            <Input className='flex w-full' value={url} />
            <CopyToClipboard text={url}>
              <Button className='w-32' variant='link'>
                Copy Link
              </Button>
            </CopyToClipboard>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
