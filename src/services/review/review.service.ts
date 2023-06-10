import type { Prisma } from '@prisma/client';
import type * as z from 'zod';

import { env } from '@/env.mjs';
import { getApiUrl } from '@/helpers/getApiUrl';
import type { reviewCreateSchema } from '@/lib/validations/review';

export const ReviewService = {
  async create(data: z.infer<typeof reviewCreateSchema>, recipeId: string) {
    const response = await fetch(getApiUrl.review(recipeId), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        body: data.body
      })
    });

    return response;
  },
  async delete(recipeId: string) {
    const response = await fetch(getApiUrl.deleteReview(recipeId), {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return response;
  },
  async getAll(recipeId: string) {
    const response = await fetch(`${env.NEXT_PUBLIC_APP_URL}${getApiUrl.review(recipeId)}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return response.json() as Promise<{ reviews: Prisma.ReviewGetPayload<{ include: { user: true } }>[] }>;
  }
};
