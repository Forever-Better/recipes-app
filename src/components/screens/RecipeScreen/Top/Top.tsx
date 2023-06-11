import { ChefHat, Clock, Printer } from 'lucide-react';
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
      <CardContent className='grid sm:grid-cols-1 lg:grid-cols-[2fr,3fr] gap-4 w-full p-0'>
        <div>
          <Image
            priority
            alt='Cover'
            className='rounded-t lg:rounded-l-md lg:rounded-tr-none sm:w-full'
            height={320}
            quality={100}
            sizes='100vw'
            src={data.image}
            style={{ width: '100%', objectFit: 'cover', height: '320px' }}
            width={0}
          />
        </div>
        <div className='flex flex-col pt-0 p-6 lg:pt-6 justify-between'>
          <div>
            <h1 className='text-3xl mb-2 max-w-[90%]'>{data.label}</h1>
            <div className='flex gap-2 items-center mb-3'>
              <span
                className={cn(
                  rating.averageRating >= 7
                    ? 'bg-green-600'
                    : rating.averageRating === 0
                    ? 'bg-transparent border !text-gray-700'
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
            <div className='flex gap-3 mb-4'>
              <div className='flex text-gray-500 gap-1 items-center'>
                <Clock size={16} />
                <span>{data.totalTime || 10}m</span>
              </div>
              <div className='flex gap-1.5 items-center'>
                <ChefHat className='text-gray-500' size={16} />{' '}
                <DifficultyIndicator ingredientsLength={data.ingredients.length} />
              </div>
            </div>
          </div>
          <div className='flex gap-3 mt-6'>
            <BookmarkButton hasBookmark={hasBookmark} recipeId={recipeId} />
            <Button className='w-fit hidden xl:flex' variant='outline'>
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
