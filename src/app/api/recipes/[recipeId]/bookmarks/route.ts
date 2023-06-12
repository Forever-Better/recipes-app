import { getServerSession } from 'next-auth';
import * as z from 'zod';

import { authOptions } from '@/lib/auth';
import { db } from '@/lib/db';

const routeContextSchema = z.object({
  params: z.object({
    recipeId: z.string()
  })
});

type RecipeCreateBody = { label: string; image: string; originalId: string };

export async function POST(req: Request, context: z.infer<typeof routeContextSchema>) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new Response('Unauthorized', { status: 403 });
    }

    const { params } = routeContextSchema.parse(context);

    const { user } = session;

    const findBookmark = await db.bookmark.findFirst({ where: { userId: user.id, recipeId: params.recipeId } });

    if (findBookmark) return new Response('Вы уже добавили рецепт в закладки.', { status: 400 });

    // пока вижу выход только - создать рецепт
    const { image, label, originalId }: RecipeCreateBody = await req.json();
    const recipe = await db.recipe.create({ data: { image, label, originalId } });

    const bookmark = await db.bookmark.create({ data: { userId: user.id, recipeId: recipe.id } });

    return new Response(bookmark.id, { status: 200 });
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

    const findBookmark = await db.bookmark.findFirst({
      where: { userId: user.id, recipe: { originalId: params.recipeId } }
    });

    if (!findBookmark) return new Response('Вы не добавляли этот рецепт в закладки.', { status: 400 });

    const bookmark = await db.bookmark.delete({ where: { id: findBookmark.id } });

    return new Response(bookmark.id, { status: 200 });
  } catch (error) {
    return new Response(null, { status: 500 });
  }
}
