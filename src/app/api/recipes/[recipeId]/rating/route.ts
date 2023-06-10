import { NextResponse } from 'next/server';
import * as z from 'zod';

import { db } from '@/lib/db';
import { getCurrentUser } from '@/lib/session';

const routeContextSchema = z.object({
  params: z.object({
    recipeId: z.string()
  })
});

type RatingCreateBody = { rating: number };

export async function PATCH(req: Request, context: z.infer<typeof routeContextSchema>) {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return new Response('Unauthorized', { status: 403 });
    }

    const { params } = routeContextSchema.parse(context);

    const { rating }: RatingCreateBody = await req.json();

    if (!rating) {
      return new Response('Рейтинг оябазательное поле.', {
        status: 400
      });
    }

    const findRating = await db.rating.findFirst({ where: { userId: user.id, recipeId: params.recipeId } });

    let rate;

    if (findRating) {
      rate = await db.rating.update({ data: { value: rating }, where: { id: findRating.id } });
    } else {
      rate = await db.rating.create({
        data: { value: rating, userId: user.id, recipeId: params.recipeId }
      });
    }

    return NextResponse.json({ rate });
  } catch (error) {
    return new Response(null, { status: 500 });
  }
}

export async function DELETE(req: Request, context: z.infer<typeof routeContextSchema>) {
  try {
    const user = await getCurrentUser();

    if (!user) {
      return new Response('Unauthorized', { status: 403 });
    }

    const { params } = routeContextSchema.parse(context);

    const findRating = await db.rating.findFirst({ where: { userId: user.id, recipeId: params.recipeId } });

    if (!findRating) return new Response('Оценка не найдена.', { status: 400 });

    const rate = await db.rating.delete({
      where: { id: findRating.id }
    });

    return new Response(rate.id, { status: 200 });
  } catch (error) {
    return new Response(null, { status: 500 });
  }
}
