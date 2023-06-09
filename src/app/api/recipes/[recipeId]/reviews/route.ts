import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import * as z from 'zod';

import { authOptions } from '@/lib/auth';
import { db } from '@/lib/db';
import type { reviewCreateSchema } from '@/lib/validations/review';

const routeContextSchema = z.object({
  params: z.object({
    recipeId: z.string()
  })
});

type CreateReviewBody = z.infer<typeof reviewCreateSchema>;

export async function POST(req: Request, context: z.infer<typeof routeContextSchema>) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new Response('Unauthorized', { status: 403 });
    }

    const { params } = routeContextSchema.parse(context);

    const { body, rating }: CreateReviewBody = await req.json();
    const { user } = session;

    const findReview = await db.review.findFirst({ where: { userId: user.id, recipeId: params.recipeId } });

    if (findReview) {
      return new Response('Вы уже добавили отзыв, к одному рецепту может быть добавлен только один отзыв.', {
        status: 400
      });
    }

    if (!rating) {
      return new Response('Рейтинг и отзыв оябазательные поля.', {
        status: 400
      });
    }

    const review = await db.review.create({
      data: { body, rating, userId: user.id, recipeId: params.recipeId }
    });

    return new Response(review.id, { status: 200 });
  } catch (error) {
    return new Response(null, { status: 500 });
  }
}

export async function GET(req: Request, context: z.infer<typeof routeContextSchema>) {
  try {
    // const session = await getServerSession(authOptions);

    // if (!session) {
    //   return new Response('Unauthorized', { status: 403 });
    // }

    const { params } = routeContextSchema.parse(context);

    // const { user } = session;

    const reviews = await db.review.findMany({ where: { recipeId: params.recipeId }, include: { user: true } });

    return NextResponse.json({ reviews });
  } catch (error) {
    return new Response(null, { status: 500 });
  }
}

export async function DELETE(req: Request, context: z.infer<typeof routeContextSchema>) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new Response('Unauthorized', { status: 403 });
    }

    const { params } = routeContextSchema.parse(context);

    const { user } = session;

    const findReview = await db.review.findFirst({ where: { userId: user.id, recipeId: params.recipeId } });

    if (!findReview) return new Response('Отзыв не найден.', { status: 400 });

    const review = await db.review.delete({ where: { id: findReview.id } });

    return new Response(review.id, { status: 200 });
  } catch (error) {
    return new Response(null, { status: 500 });
  }
}
