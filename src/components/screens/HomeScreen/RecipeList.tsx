/* eslint-disable no-underscore-dangle */

'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import Recipe from '@/components/Recipe';
import type { GetRecipesResponse } from '@/services/recipe/recipe.helper';
import { RecipeService } from '@/services/recipe/recipe.service';

import RecipeListSkeleton from './RecipeListSkeleton';

interface RecipeListProps {
  initialData: GetRecipesResponse;
  searchParams: { q: string };
}

export default function RecipeList({ initialData, searchParams }: RecipeListProps) {
  const router = useRouter();

  const { data, fetchNextPage, isFetching, isFetchingNextPage, isLoading, refetch, remove } = useInfiniteQuery(
    ['recipes'],
    ({ pageParam = 1 }) => RecipeService.getAll(searchParams.q, pageParam),
    {
      getNextPageParam: (lastPage) => lastPage._links.next?.href,
      refetchOnWindowFocus: false,
      initialData: { pages: [initialData], pageParams: [1] }
    }
  );

  const { inView, ref } = useInView({
    threshold: 0.5
  });

  useEffect(() => {
    if (data && inView && data.pages[data.pages.length - 1].to < data.pages[data.pages.length - 1].count) {
      fetchNextPage();
    }
  }, [inView, data, fetchNextPage]);

  useEffect(() => {
    if (searchParams.q) {
      remove();
      refetch();
    }
  }, [searchParams.q, refetch, router, remove]);

  if (!data) return null;

  return (
    <>
      <div className='text-gray-500 text-sm mb-6'>
        {data.pages[0].count >= 10000 ? `More than ${data.pages[0].count}` : data.pages[0].count} recipes
      </div>{' '}
      {isFetching && !isFetchingNextPage ? (
        <RecipeListSkeleton />
      ) : (
        <ul className='recipe-grid'>
          {data.pages.map(({ hits }) => hits.map(({ recipe }) => <Recipe key={recipe.url} data={recipe} />))}
        </ul>
      )}
      {isFetchingNextPage && (
        <div className='flex justify-center my-6'>
          <Loader2 className='mr-2 h-8 w-8 animate-spin text-primary' />
        </div>
      )}
      {data && !isLoading && <div ref={ref} />}
    </>
  );
}
