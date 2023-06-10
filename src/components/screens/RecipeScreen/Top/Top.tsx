import { Printer } from 'lucide-react';
import Image from 'next/image';

import DifficultyIndicator from '@/components/DifficultyIndicator';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
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
  rating: { averageRating: number; countRatings: number };
}

export default function Top({ data, hasBookmark, rating }: TopProps) {
  const recipeId = data.uri.split('recipe_')[1];

  return (
    <Card className='p-0 relative'>
      <CardContent className='flex gap-4 w-full p-0'>
        <div className='w-2/5'>
          <Image
            priority
            alt='Cover'
            className='rounded-l-md'
            height={320}
            quality={100}
            sizes='100vw'
            src={data.image}
            style={{ width: '100%', objectFit: 'cover', height: '320px' }}
            width={0}
          />
        </div>
        <div className='flex flex-col p-6 justify-between w-3/5'>
          <div>
            <h1 className='text-3xl mb-2 max-w-[90%]'>{data.label}</h1>
            <div className='flex gap-2 items-center mb-3'>
              <span
                className={cn(
                  rating.averageRating >= 7
                    ? 'bg-green-600'
                    : rating.averageRating === 0
                    ? 'bg-transparent border !text-black'
                    : rating.averageRating <= 4
                    ? 'bg-red-600'
                    : 'bg-gray-500',
                  'flex text-sm justify-center items-center h-6 w-9 font-medium text-white rounded-md'
                )}
              >
                {rating.averageRating || '–'}
              </span>
              <span className='text-sm text-gray-500'>{rating.countRatings} ratings</span>
            </div>
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
                <DifficultyIndicator ingredientsLength={data.ingredients.length} />
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
