import { getServerSession } from 'next-auth';
import * as z from 'zod';

import { authOptions } from '@/lib/auth';
import { db } from '@/lib/db';

const deleteReviewContextSchema = z.object({
  params: z.object({
    reviewId: z.string(),
    recipeId: z.string()
  })
});

export async function DELETE(req: Request, context: z.infer<typeof deleteReviewContextSchema>) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new Response('Unauthorized', { status: 403 });
    }

    const { params } = deleteReviewContextSchema.parse(context);

    const { user } = session;

    const findReview = await db.review.findUnique({ where: { id: params.reviewId } });

    if (!findReview) return new Response('Отзыв не найден.', { status: 400 });

    if (findReview.userId !== user.id) return new Response('Вы не являетесь автором отзыва.', { status: 400 });

    const review = await db.review.delete({ where: { id: findReview.id } });

    return new Response(review.id, { status: 200 });
  } catch (error) {
    return new Response(null, { status: 500 });
  }
}
