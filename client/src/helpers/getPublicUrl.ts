import { UrlTemplates } from '@/lib/urlTemplates';

export const getPublicUrl = {
  login() {
    return UrlTemplates.Login;
  },
  signup() {
    return UrlTemplates.Signup;
  },
  recipe(id: string | number) {
    return `${UrlTemplates.Recipe}/${id}`;
  },
  recipesQuery(query: string) {
    return `${UrlTemplates.Main}?q=${query}`;
  }
};
