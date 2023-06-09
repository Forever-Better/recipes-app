import { getApiUrl } from '@/helpers/getApiUrl';

import { instance } from '../api/api.service';

export const BookmarkService = {
  async create(recipeId: string) {
    const { data } = await instance({
      method: 'POST',
      url: getApiUrl.bookmark(recipeId)
    });
    return data;
  },
  async delete(recipeId: string) {
    const { data } = await instance({
      method: 'DELETE',
      url: getApiUrl.bookmark(recipeId)
    });
    return data;
  },
  async findOne(recipeId: string) {
    const { data } = await instance<{ id: string }>({
      url: getApiUrl.bookmark(recipeId)
    });
    return data;
  }
};
