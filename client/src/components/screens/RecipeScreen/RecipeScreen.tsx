import { Separator } from '@/components/ui/separator';
import type { Recipe } from '@/types/recipe.interface';

import AlsoRecipes from './AlsoRecipes/AlsoRecipes';
import Body from './Body/Body';
import Reviews from './Reviews/Reviews';
import Top from './Top/Top';

export default function RecipeScreen({ data }: { data: Recipe }) {
  const { image, ingredients, label, source, totalTime, url } = data;
  return (
    <>
      <Top data={{ label, image, totalTime, source, url, ingredients }} />
      <Body data={data} />
      <Separator className='my-8 ' />
      <AlsoRecipes category={data.healthLabels[0]} />
      <Separator className='my-8 ' />
      <Reviews />
    </>
  );
}
