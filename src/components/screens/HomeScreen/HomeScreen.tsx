import { Suspense } from 'react';

import type { GetRecipesResponse } from '@/services/recipe/recipe.helper';

import FilterBar from './FilterBar';
import RecipeList from './RecipeList';
import RecipeListSkeleton from './RecipeListSkeleton';
import Search from './Search';

interface HomeScreenProps {
  initialRecipeList: GetRecipesResponse;
  searchParams: { q: string };
}

export default function HomeScreen({ initialRecipeList, searchParams }: HomeScreenProps) {
  return (
    <>
      <FilterBar searchParams={searchParams} />
      <Search />
      <Suspense fallback={<RecipeListSkeleton />}>
        <RecipeList initialData={initialRecipeList} searchParams={searchParams} />
      </Suspense>
    </>
  );
}
