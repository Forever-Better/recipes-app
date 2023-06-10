import { getApiUrl } from '@/helpers/getApiUrl';

export const BookmarkService = {
  async create(recipeId: string) {
    const res = await fetch(getApiUrl.bookmark(recipeId), {
      method: 'POST'
    });
    return res;
  },
  async delete(recipeId: string) {
    const res = await fetch(getApiUrl.bookmark(recipeId), {
      method: 'DELETE'
    });
    return res;
  }
};
