import { url } from 'inspector';

import { env } from '@/env.mjs';

import { edamamInstance } from '../api/api.service';

import type { GetRecipeResponse, GetRecipesResponse } from './recipe.helper';

interface SearchParams {
  q: string;
  diet: string;
  mealType: string;
}

export const RecipeService = {
  async prefetch(searchParams: SearchParams) {
    const { data } = await edamamInstance<GetRecipesResponse>({
      method: 'GET',
      params: searchParams ? { q: searchParams.q, imageSize: 'LARGE' } : { imageSize: 'LARGE' }
    });
    return data;
  },
  async getAll(searchParams: SearchParams, nextUrl?: string) {
    const { data } = await edamamInstance<GetRecipesResponse>({
      method: 'GET',
      params: searchParams ? { q: searchParams.q, imageSize: 'LARGE' } : { imageSize: 'LARGE' },
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
      `${env.NEXT_PUBLIC_EDAMAM_API_URL}/?type=public&app_id=${env.NEXT_PUBLIC_EDAMAM_ID}&app_key=${env.NEXT_PUBLIC_EDAMAM_KEY}&health=${health}&imageSize=LARGE&random=true`,
      { next: { revalidate: 2000 } }
    );

    return response.json();
  }
};
