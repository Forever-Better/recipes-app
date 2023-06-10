import Image from 'next/image';
import Link from 'next/link';

import { getPublicUrl } from '@/helpers/getPublicUrl';
import type { Recipe as IRecipe } from '@/types/recipe.interface';

import DifficultyIndicator from '../DifficultyIndicator';

export default function Recipe({ data }: { data: IRecipe }) {
  return (
    <div className='recipe'>
      <Link className='rounded-2xl inline-flex flex-col' href={getPublicUrl.recipe(data.uri.split('recipe_')[1])}>
        <div className='rounded-xl overflow-hidden relative'>
          <Image
            priority
            alt='Cover'
            className='recipe-image hover:scale-110'
            height={224}
            src={data.images.LARGE?.url || data.image}
            width={224}
          />
        </div>
        <div className='flex flex-col'>
          <div className='mt-3 h-10 overflow-hidden'>
            <div className='text-base font-medium leading-5 recipe-headline'>{data.label}</div>
          </div>
          <div className='flex gap-6 my-4'>
            <div className=''>
              <div className='text-sm text-gray-500'>Prep</div>
              <div className='font-medium'>5m</div>
            </div>
            <div className=''>
              <div className='text-sm text-gray-500'>Cook</div>
              <div className='font-medium'>{data.totalTime || 10}m</div>
            </div>
            <div className=''>
              <div className='text-sm text-gray-500'>Difficulty</div>
              <DifficultyIndicator ingredientsLength={data.ingredients.length} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
