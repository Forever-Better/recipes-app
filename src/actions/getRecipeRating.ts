import { db } from '@/lib/db';
import { getCurrentUser } from '@/lib/session';

export default async function getRecipeRating(recipeId: string) {
  const user = await getCurrentUser();

  const ratings = await db.rating.findMany({ where: { recipeId } });

  if (!ratings.length) return { averageRating: 0, userRating: 0, count: 0 };

  const ratingsCount = ratings.length;
  const averageRating = ratings.reduce((sum, current) => sum + current.value, 0) / ratingsCount;
  const userRating = user ? await db.rating.findFirst({ where: { recipeId, userId: user.id } }) : null;

  return {
    averageRating: +averageRating.toFixed(1) || 0,
    userRating: userRating?.value || 0,
    count: ratingsCount
  };
}
