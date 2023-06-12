import type { Metadata } from 'next';

import Layout from '@/components/layout/Layout';
import HomeScreen from '@/components/screens/HomeScreen/HomeScreen';
import { getCurrentUser } from '@/lib/session';
import { RecipeService } from '@/services/recipe/recipe.service';

type Props = {
  searchParams: { q: string; diet: string; mealType: string };
};

export function generateMetadata({ searchParams }: Props): Metadata {
  return {
    title: searchParams.q ? `${searchParams.q} - Recipes App` : 'Recipes App'
  };
}

export default async function Home({ searchParams }: Props) {
  const user = await getCurrentUser();
  const data = await RecipeService.prefetch(searchParams);
  console.log(searchParams);
  return (
    <Layout
      user={{
        name: user?.name,
        image: user?.image,
        email: user?.email
      }}
    >
      <div className='container'>
        <HomeScreen initialRecipeList={data} searchParams={searchParams} />
      </div>
    </Layout>
  );
}
