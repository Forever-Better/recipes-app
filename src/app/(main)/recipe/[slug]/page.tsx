import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import RecipeScreen from '@/components/screens/RecipeScreen/RecipeScreen';
import { db } from '@/lib/db';
import { getCurrentUser } from '@/lib/session';
import { RecipeService } from '@/services/recipe/recipe.service';
import { ReviewService } from '@/services/review/review.service';

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;

  const { recipe } = await RecipeService.getOne(slug);

  return {
    title: recipe.label,
    openGraph: {
      images: [recipe.image]
    }
  };
}

export default async function RecipePage({ params }: Props) {
  const user = await getCurrentUser();

  const { recipe } = await RecipeService.getOne(params.slug);

  const hasBookmark = await db.bookmark.findFirst({ where: { userId: user?.id, recipeId: params.slug } });

  if (!recipe) return notFound();

  const alsoRecipes = await RecipeService.getSimilar(recipe.healthLabels[0]);
  const { reviews } = await ReviewService.getAll(params.slug);

  return <RecipeScreen alsoRecipes={alsoRecipes} data={recipe} hasBookmark={!!hasBookmark} reviews={reviews} />;
}
