import { useQuery } from '@tanstack/react-query';
import { Printer } from 'lucide-react';
import Image from 'next/image';

import { DifficultPoint } from '@/components/Recipe/Recipe';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { BookmarkService } from '@/services/bookmark/bookmark.service';
import type { Recipe } from '@/types/recipe.interface';

import BookmarkButton from './BookmarkButton';
import Share from './Share';

interface TopProps {
  data: {
    label: Recipe['label'];
    image: Recipe['image'];
    totalTime: Recipe['totalTime'];
    source: Recipe['source'];
    url: Recipe['url'];
    uri: Recipe['uri'];
    ingredients: Recipe['ingredients'];
  };
  hasBookmark: boolean;
}

export default function Top({ data, hasBookmark }: TopProps) {
  const recipeId = data.uri.split('recipe_')[1];

  return (
    <Card className='p-0 relative'>
      <CardContent className='flex gap-4 w-full p-0'>
        <div className='w-2/5'>
          <Image
            priority
            alt='Cover'
            className='rounded-l-md'
            height={300}
            quality={100}
            sizes='100vw'
            src={data.image}
            style={{ width: '100%', objectFit: 'cover', height: '300px' }}
            width={0}
          />
        </div>
        <div className='flex flex-col p-6 justify-between w-3/5'>
          <div>
            <h1 className='text-3xl mb-3 max-w-[90%]'>{data.label}</h1>
            <div className='flex gap-2'>
              <div className='flex text-xs flex-col transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted border py-2 px-4 rounded-lg'>
                <div className='flex text-gray-500 gap-1 items-center'>
                  <span>Cooking time</span>
                </div>
                <span>{data.totalTime || 10} minutes</span>
              </div>
              <div className='border py-2 px-4 transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted rounded-lg'>
                <div className='text-gray-500 flex gap-1 items-center'>
                  <span className='text-xs'>Difficulty</span>
                </div>
                <div className='flex gap-[3px] mt-2'>
                  <DifficultPoint active className='!w-2 !h-2' />
                  <DifficultPoint active={data.ingredients?.length > 4} className='!w-2 !h-2' />
                  <DifficultPoint active={data.ingredients.length > 8} className='!w-2 !h-2' />
                  <DifficultPoint active={data.ingredients.length > 12} className='!w-2 !h-2' />
                </div>
              </div>
            </div>
          </div>
          <div className='flex gap-3'>
            <BookmarkButton hasBookmark={hasBookmark} recipeId={recipeId} />
            <Button className='w-fit' variant='outline'>
              <Printer className='mr-2' size={18} />
              Print
            </Button>

            <Share data={{ image: data.image, label: data.label }} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
