interface Images {
  THUMBNAIL: {
    url: string;
    width: number;
    height: number;
  };
  SMALL: {
    url: string;
    width: number;
    height: number;
  };
  REGULAR: {
    url: string;
    width: number;
    height: number;
  };
}

interface Ingredient {
  text: string;
  quantity: number;
  measure: string | null;
  food: string;
  weight: number;
  foodCategory: string;
  foodId: string;
  image: string;
}

interface Nutrient {
  label: string;
  quantity: number;
  unit: string;
}

interface Digest {
  label: string;
  tag: string;
  schemaOrgTag: string;
  total: number;
  hasRDI: boolean;
  daily: number;
  unit: string;
  sub: [
    { label: string; tag: string; schemaOrgTag: string; total: number; hasRDI: boolean; daily: number; unit: string }
  ];
}

export interface Recipe {
  uri: string;
  label: string;
  image: string;
  images: Images;
  source: string;
  url: string;
  shareAs: string;
  yield: number;
  dietLabels: string[];
  healthLabels: string[];
  cautions: string[];
  ingredientLines: string[];
  ingredients: Ingredient[];
  calories: number;
  totalWeight: number;
  totalTime: number;
  cuisineType: string[];
  mealType: string[];
  dishType: string[];
  totalNutrients: {
    ENERC_KCAL: Nutrient;
    FAT: Nutrient;
    FASAT: Nutrient;
    FATRN: Nutrient;
    FAMS: Nutrient;
    FAPU: Nutrient;
    CHOCDF: Nutrient;
    'CHOCDF.net': {
      label: 'Carbohydrates (net)';
      quantity: 290.29282500000005;
      unit: 'g';
    };
    FIBTG: Nutrient;
    SUGAR: Nutrient;
    'SUGAR.added': {
      label: 'Sugars, added';
      quantity: 279.8048;
      unit: 'g';
    };
    PROCNT: Nutrient;
    CHOLE: Nutrient;
    NA: Nutrient;
    CA: Nutrient;
    MG: Nutrient;
    K: Nutrient;
    FE: Nutrient;
    ZN: Nutrient;
    P: Nutrient;
    VITA_RAE: {
      label: 'Vitamin A';
      quantity: 339.58000000000004;
      unit: 'µg';
    };
    VITC: Nutrient;
    THIA: Nutrient;
    RIBF: Nutrient;
    NIA: {
      label: 'Niacin (B3)';
      quantity: 0.9632299999999999;
      unit: 'mg';
    };
    VITB6A: Nutrient;
    FOLDFE: {
      label: 'Folate equivalent (total)';
      quantity: 22.175;
      unit: 'µg';
    };
    FOLFD: Nutrient;
    FOLAC: Nutrient;
    VITB12: Nutrient;
    VITD: {
      label: 'Vitamin D';
      quantity: 1.3210000000000002;
      unit: 'µg';
    };
    TOCPHA: Nutrient;
    VITK1: {
      label: 'Vitamin K';
      quantity: 1.2712500000000002;
      unit: 'µg';
    };
    'Sugar.alcohol': Nutrient;
    WATER: Nutrient;
  };
  totalDaily: {
    ENERC_KCAL: Nutrient;
    NA: Nutrient;
    VITC: Nutrient;
    THIA: Nutrient;
    RIBF: Nutrient;
    NIA: Nutrient;
    VITB6A: Nutrient;
    FOLDFE: Nutrient;
    VITB12: Nutrient;
    VITD: Nutrient;
    TOCPHA: Nutrient;
    VITK1: Nutrient;
  };
  digest: Digest[];
}
