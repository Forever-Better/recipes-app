import { UrlTemplates } from '@/lib/urlTemplates';

export const getPublicUrl = {
  main() {
    return UrlTemplates.Main;
  },
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
  },
  bookmarks() {
    return UrlTemplates.Bookmarks;
  },
  settings() {
    return UrlTemplates.Settings;
  }
};
