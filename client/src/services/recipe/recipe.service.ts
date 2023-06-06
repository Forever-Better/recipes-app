import { edamamInstance } from '../api/api.service';

import type { GetRecipeResponse, GetRecipesResponse } from './recipe.helper';

export const RecipeService = {
  async getAll(query: string, nextUrl?: string) {
    const { data } = await edamamInstance<GetRecipesResponse>({
      method: 'GET',
      params: query ? { q: query } : { cuisineType: 'Eastern Europe' },
      url: nextUrl
    });
    return data;
  },
  async getOne(id: string) {
    const { data } = await edamamInstance<GetRecipeResponse>({
      method: 'GET',
      url: `/${id}`
    });
    return data;
  },
  async getSimilar(category: string) {
    const health = category.split(' ').join('-').toLowerCase();
    const { data } = await edamamInstance<GetRecipesResponse>({
      method: 'GET',
      params: { health, random: 'true' }
    });
    return data;
  }
};
