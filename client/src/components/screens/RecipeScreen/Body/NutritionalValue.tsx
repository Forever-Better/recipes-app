import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { Recipe } from '@/types/recipe.interface';

interface NutritionalValueProps {
  data: {
    calories: Recipe['calories'];
    totalNutrients: Recipe['totalNutrients'];
    totalWeight: Recipe['totalWeight'];
  };
}

function NutrientItem({ placeholder, value }: { placeholder: string; value: number | string }) {
  return (
    <div className='flex transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted justify-center border p-4 rounded-xl min-w-[80px] flex-col text-center'>
      <span className='text-sm text-gray-500'>{placeholder}</span>
      <span>{value}</span>
    </div>
  );
}

export default function NutritionalValue({ data }: NutritionalValueProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='text-xl font-medium'>Nutritional value</CardTitle>
        <CardDescription>per 100g of product</CardDescription>
      </CardHeader>

      <CardContent>
        {' '}
        <div>
          <div className='flex gap-2'>
            <NutrientItem placeholder='Calories' value={Math.ceil((data.calories / data.totalWeight) * 100)} />
            <NutrientItem
              placeholder='Protein'
              value={((data.totalNutrients.PROCNT.quantity / data.totalWeight) * 100).toFixed(1)}
            />
            <NutrientItem
              placeholder='Carb'
              value={((data.totalNutrients.CHOCDF.quantity / data.totalWeight) * 100).toFixed(1)}
            />
            <NutrientItem
              placeholder='Fat'
              value={((data.totalNutrients.FAT.quantity / data.totalWeight) * 100).toFixed(1)}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
