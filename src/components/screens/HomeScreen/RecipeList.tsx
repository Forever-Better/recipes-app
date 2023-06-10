/* eslint-disable no-underscore-dangle */

'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { Loader2 } from 'lucide-react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import Recipe from '@/components/Recipe/Recipe';
import type { GetRecipesResponse } from '@/services/recipe/recipe.helper';
import { RecipeService } from '@/services/recipe/recipe.service';

import RecipeListSkeleton from './RecipeListSkeleton';

interface RecipeListProps {
  initialData: GetRecipesResponse;
}

export default function RecipeList({ initialData }: RecipeListProps) {
  const searchParams = useSearchParams();
  const query = searchParams?.get('q') ?? 'banana';
  const router = useRouter();

  const { data, fetchNextPage, isFetching, isFetchingNextPage, isLoading, refetch } = useInfiniteQuery(
    ['recipes'],
    ({ pageParam = 1 }) => RecipeService.getAll(query, pageParam),
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
    if (query) {
      router.push(`?q=${query}`);
      refetch();
    }
  }, [query, refetch, router]);

  if (!data) return null;

  return (
    <>
      <div className='text-gray-600 text-sm mb-6'>
        {data.pages[0].count >= 10000 ? `More than ${data.pages[0].count}` : data.pages[0].count} recipes
      </div>{' '}
      <ul className='recipe-grid'>
        {data.pages.map(({ hits }) => hits.map(({ recipe }) => <Recipe key={recipe.url} data={recipe} />))}
      </ul>
      {isFetchingNextPage && (
        <div className='flex justify-center my-6'>
          <Loader2 className='mr-2 h-8 w-8 animate-spin text-primary' />
        </div>
      )}
      {data && !isLoading && <div ref={ref} />}
    </>
  );
}
