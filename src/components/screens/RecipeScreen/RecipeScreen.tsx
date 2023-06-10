import type { Prisma } from '@prisma/client';

import { Separator } from '@/components/ui/separator';
import type { GetRecipeRatingResponse } from '@/services/rating/rating.helper';
import type { GetRecipesResponse } from '@/services/recipe/recipe.helper';
import type { Recipe } from '@/types/recipe.interface';

import AlsoRecipes from './AlsoRecipes/AlsoRecipes';
import Body from './Body/Body';
import Rating from './Rating/Rating';
import Reviews from './Reviews/Reviews';
import Top from './Top/Top';

interface RecipeScreenProps {
  data: Recipe;
  alsoRecipes: GetRecipesResponse;
  hasBookmark: boolean;
  reviews: Prisma.ReviewGetPayload<{ include: { user: true } }>[];
  rating: GetRecipeRatingResponse;
}

export default function RecipeScreen({ alsoRecipes, data, hasBookmark, rating, reviews }: RecipeScreenProps) {
  const { image, images, ingredients, label, source, totalTime, uri, url } = data;
  return (
    <>
      <Top
        data={{ label, image: images.LARGE.url || image, totalTime, source, url, ingredients, uri }}
        hasBookmark={hasBookmark}
        rating={{ averageRating: rating.averageRating, countRatings: rating.count }}
      />
      <Body data={data} />
      <Separator className='my-8 bg-transparent border-b border-dashed' />
      <AlsoRecipes data={alsoRecipes} />
      <Separator className='my-8 bg-transparent border-b border-dashed' />
      <div className='flex gap-8'>
        <Rating data={rating} />
        <Reviews data={reviews} />
      </div>
    </>
  );
}
