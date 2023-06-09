import { ApiUrlTemplates } from '@/lib/urlTemplates';

const prefix = '/api';

export const getApiUrl = {
  signup() {
    return ApiUrlTemplates.Signup;
  },
  login() {
    return ApiUrlTemplates.Login;
  },
  refresh() {
    return ApiUrlTemplates.Refresh;
  },
  recipe() {
    return ApiUrlTemplates.Recipe;
  },
  bookmark(recipeId: string) {
    return `${prefix}${ApiUrlTemplates.Recipe}/${recipeId}/bookmarks`;
  },
  review(recipeId: string) {
    return `${prefix}${ApiUrlTemplates.Recipe}/${recipeId}/reviews`;
  }
};
