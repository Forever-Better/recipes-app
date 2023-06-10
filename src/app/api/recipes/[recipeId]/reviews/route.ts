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

    const { body }: CreateReviewBody = await req.json();
    const { user } = session;

    if (!body) {
      return new Response('Отзыв оябазательное поле.', {
        status: 400
      });
    }

    const review = await db.review.create({
      data: { body, userId: user.id, recipeId: params.recipeId }
    });

    return new Response(review.id, { status: 200 });
  } catch (error) {
    return new Response(null, { status: 500 });
  }
}

export async function GET(req: Request, context: z.infer<typeof routeContextSchema>) {
  try {
    const { params } = routeContextSchema.parse(context);

    const reviews = await db.review.findMany({
      where: { recipeId: params.recipeId },
      include: { user: true },
      orderBy: { updatedAt: 'desc' }
    });

    return NextResponse.json({ reviews });
  } catch (error) {
    return new Response(null, { status: 500 });
  }
}
