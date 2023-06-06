import type { Recipe } from '@/types/recipe.interface';

import Ingredients from './Ingredients';
import Nutrition from './Nutrition';
import NutritionalValue from './NutritionalValue';
import Preparation from './Preparation';

interface BodyProps {
  data: Recipe;
}

export default function Body({ data }: BodyProps) {
  return (
    <div className='mt-8'>
      <div className='flex gap-8'>
        {' '}
        <div className='flex flex-col gap-8 w-2/5'>
          <Ingredients data={{ ingredients: data.ingredients, ingredientLines: data.ingredientLines }} />
          <Preparation data={{ source: data.source, url: data.url }} />
        </div>
        <div className='flex w-3/5 gap-8 flex-col'>
          <NutritionalValue
            data={{ calories: data.calories, totalNutrients: data.totalNutrients, totalWeight: data.totalWeight }}
          />
          <Nutrition data={data} />
        </div>
      </div>
    </div>
  );
}
