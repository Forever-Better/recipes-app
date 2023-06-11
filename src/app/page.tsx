import type { Metadata } from 'next';

import HomeScreen from '@/components/screens/HomeScreen/HomeScreen';
import { RecipeService } from '@/services/recipe/recipe.service';

type Props = {
  searchParams: { q: string };
};

export function generateMetadata({ searchParams }: Props): Metadata {
  return {
    title: searchParams.q ? `${searchParams.q} - Recipes App` : 'Recipes App'
  };
}

export default async function Home({ searchParams }: Props) {
  const data = await RecipeService.prefetch(searchParams.q);
  // await new Promise((resolve) => setTimeout(resolve, 300000));
  return (
    <div className='container py-8'>
      <HomeScreen initialRecipeList={data} searchParams={searchParams} />
    </div>
  );
}
