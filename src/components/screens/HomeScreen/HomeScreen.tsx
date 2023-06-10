import { Suspense } from 'react';

import type { GetRecipesResponse } from '@/services/recipe/recipe.helper';

import FilterBar from './FilterBar';
import HeaderBlock from './HeaderBlock';
import RecipeList from './RecipeList';
import RecipeListSkeleton from './RecipeListSkeleton';
import Search from './Search';

interface HomeScreenProps {
  initialRecipeList: GetRecipesResponse;
}

export default function HomeScreen({ initialRecipeList }: HomeScreenProps) {
  return (
    <>
      <HeaderBlock />
      <FilterBar />
      <Search />
      <Suspense fallback={<RecipeListSkeleton />}>
        <RecipeList initialData={initialRecipeList} />
      </Suspense>
    </>
  );
}
