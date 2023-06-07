import { ApiUrlTemplates } from '@/lib/urlTemplates';

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
    return `${ApiUrlTemplates.Recipe}/${recipeId}/bookmarks`;
  }
};
