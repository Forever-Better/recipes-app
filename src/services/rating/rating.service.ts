import type { Rating } from '@prisma/client';

import { env } from '@/env.mjs';
import { getApiUrl } from '@/helpers/getApiUrl';

import type { GetRecipeRatingResponse } from './rating.helper';

export const RatingService = {
  async create(rating: number, recipeId: string) {
    const response = await fetch(getApiUrl.rating(recipeId), {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        rating
      })
    });

    return response.json() as Promise<{ rate: Rating }>;
  },
  async delete(recipeId: string) {
    const response = await fetch(getApiUrl.rating(recipeId), {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return response;
  },
  async getRecipeRating(recipeId: string) {
    const response = await fetch(env.NEXT_PUBLIC_APP_URL + getApiUrl.rating(recipeId), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return response.json() as Promise<GetRecipeRatingResponse>;
  }
};
