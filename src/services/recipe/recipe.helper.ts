import type { Recipe } from '@/types/recipe.interface';

export interface GetRecipesResponse {
  from: number;
  to: number;
  count: number;
  _links: {
    next: {
      href: string;
      title: string;
    };
  };
  hits: [
    {
      recipe: Recipe;
      _links: {
        self: {
          title: string;
          href: string;
        };
      };
    }
  ];
}

export interface GetRecipeResponse {
  recipe: Recipe;
  _links: {
    self: {
      title: string;
      href: string;
    };
  };
}
