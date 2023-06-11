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
    <div className='grid gap-6'>
      <FilterBar searchParams={searchParams} />
      <Search searchParams={searchParams} />
      <Suspense fallback={<RecipeListSkeleton />}>
        <RecipeList initialData={initialRecipeList} searchParams={searchParams} />
      </Suspense>
    </div>
  );
}
