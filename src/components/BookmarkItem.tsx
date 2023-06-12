import type { Recipe } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';

import { getPublicUrl } from '@/helpers/getPublicUrl';

import { Skeleton } from './ui/skeleton';

interface BookmarkItemProps {
  recipe: Pick<Recipe, 'originalId' | 'image' | 'label'>;
}

export default function BookmarkItem({ recipe }: BookmarkItemProps) {
  return (
    <Link className='flex items-center gap-2' href={getPublicUrl.recipe(recipe.originalId)}>
      <Image alt='Recipe image' height={64} src={recipe.image} width={64} />
      <span>{recipe.label}</span>
    </Link>
  );
}

BookmarkItem.Skeleton = function PostItemSkeleton() {
  return (
    <div className='flex items-center gap-2'>
      <Skeleton className='w-16 h-16' />
      <Skeleton className='h-4 w-4/5' />
    </div>
  );
};
