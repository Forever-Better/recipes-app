import { useQuery } from '@tanstack/react-query';

import RecipeScreen from '@/components/screens/RecipeScreen/RecipeScreen';
import { RecipeService } from '@/services/recipe/recipe.service';

export default async function RecipePage({ params }: { params: { slug: string } }) {
  const data = await RecipeService.getOne(params.slug);
  // const { data } = useQuery(['recipe', params.slug], () => RecipeService.getOne(params.slug));

  if (!data) return null;

  return <RecipeScreen data={data?.recipe} />;
}
