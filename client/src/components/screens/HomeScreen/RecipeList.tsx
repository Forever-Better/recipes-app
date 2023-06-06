/* eslint-disable no-underscore-dangle */

'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import Recipe from '@/components/Recipe/Recipe';
import { RecipeService } from '@/services/recipe/recipe.service';

export default function RecipeList() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') ?? '';
  const router = useRouter();
  const { data, fetchNextPage, isFetching, isFetchingNextPage, isLoading, refetch } = useInfiniteQuery(
    ['recipes'],
    ({ pageParam }) => RecipeService.getAll(query, pageParam),
    {
      getNextPageParam: (lastPage) => lastPage._links.next?.href,
      refetchOnWindowFocus: false
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

  if (isLoading || (isFetching && !isFetchingNextPage))
    return <div className='flex h-96 items-center justify-center'>loading ...</div>;

  if (!data) return null;

  return (
    <>
      <div className='text-gray-600 text-sm mb-6'>
        {data.pages[0].count >= 10000 ? `More than ${data.pages[0].count}` : data.pages[0].count} recipes
      </div>
      <ul className='recipe-grid'>
        {data.pages.map(({ hits }) => hits.map(({ recipe }) => <Recipe key={recipe.url} data={recipe} />))}
      </ul>
      {isFetchingNextPage && (
        <div className='flex justify-center my-6'>
          <Spin />
        </div>
      )}
      {data && !isLoading && <div ref={ref} />}
    </>
  );
}
