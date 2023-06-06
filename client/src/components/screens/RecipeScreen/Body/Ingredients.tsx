'use client';

import { CopyPlus } from 'lucide-react';
import Image from 'next/image';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { capitalizeFirstLetter } from '@/helpers/capitalizeFirstLetter';
import type { Recipe } from '@/types/recipe.interface';

interface IngredientsProps {
  data: {
    ingredients: Recipe['ingredients'];
    ingredientLines: Recipe['ingredientLines'];
  };
}

export default function Ingredients({ data }: IngredientsProps) {
  return (
    <Card className='h-fit'>
      <CardHeader>
        {' '}
        <CardTitle className='text-xl font-medium'>Ingredients</CardTitle>
        <CardDescription>All ingredients for cooking</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className='flex flex-col'>
          {data.ingredients.map(({ food, image, measure, quantity }) => (
            <li className='flex transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted gap-4 items-center justify-between border-b py-3 px-3 last:border-b-0'>
              <div className='flex gap-4 items-center'>
                <Image alt='Nutrient' className='rounded-sm' height={32} src={image} width={32} />
                <span>{capitalizeFirstLetter(food)}</span>
              </div>
              <div className='flex gap-1 text-gray-500 text-sm'>
                <span>{Math.ceil(quantity)}</span>
                <span>{measure}</span>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        {' '}
        <CopyToClipboard text={data.ingredientLines.toString()}>
          <Button variant='outline'>
            <span className='flex'>
              {' '}
              Coppy ingredients <CopyPlus className='ml-2' size={18} />
            </span>
          </Button>
        </CopyToClipboard>
      </CardFooter>
    </Card>
  );
}
