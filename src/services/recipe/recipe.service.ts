import { env } from '@/env.mjs';

import { edamamInstance } from '../api/api.service';

import type { GetRecipeResponse, GetRecipesResponse } from './recipe.helper';

export const RecipeService = {
  // async getAll(query: string, nextUrl?: string) {
  //   const response = await fetch(
  //     nextUrl ||
  //       `${env.NEXT_PUBLIC_EDAMAM_API_URL}/?type=public&app_id=${env.NEXT_PUBLIC_EDAMAM_ID}&app_key=${
  //         env.NEXT_PUBLIC_EDAMAM_KEY
  //       }${query ? `&q=${query}` : `&cuisineType=Eastern Europe`}&random=true`
  //   );

  //   return response.json() as Promise<GetRecipesResponse>;
  // },
  async getAll(query: string, nextUrl?: string) {
    const { data } = await edamamInstance<GetRecipesResponse>({
      method: 'GET',
      params: query ? { q: query } : { cuisineType: 'Eastern Europe', random: 'true' },
      url: nextUrl
    });
    return data;
  },
  async getOne(id: string) {
    const response = await fetch(
      `${env.NEXT_PUBLIC_EDAMAM_API_URL}/${id}?type=public&app_id=${env.NEXT_PUBLIC_EDAMAM_ID}&app_key=${env.NEXT_PUBLIC_EDAMAM_KEY}`,
      { next: { revalidate: 1000 } }
    );

    return response.json() as Promise<GetRecipeResponse>;
  },
  async getSimilar(category: string) {
    const health = category.split(' ').join('-').toLowerCase();
    const response = await fetch(
      `${env.NEXT_PUBLIC_EDAMAM_API_URL}/?type=public&app_id=${env.NEXT_PUBLIC_EDAMAM_ID}&app_key=${env.NEXT_PUBLIC_EDAMAM_KEY}&health=${health}&random=true`,
      { next: { revalidate: 20 } }
    );

    return response.json();
  }
};
