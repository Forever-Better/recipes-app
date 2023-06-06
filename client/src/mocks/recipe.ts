export const nutrients = {
  macronutrients: [
    { value: 'PROCNT', label: 'protein' },
    { value: 'SUGAR', label: 'sugar' },
    { value: 'FAT', label: 'fat' }
  ],
  micronutrients: [
    { value: 'VITD', label: 'vitamin D' },
    { value: 'VITE', label: 'vitamin E' }
  ]
};
export const allergies = [
  { value: 'Celery-free', label: 'celery' },
  { value: 'Crustacean-free', label: 'crustacean' },
  { value: 'Dairy-free', label: 'dairy' },
  { value: 'Egg-free', label: 'egg' },
  { value: 'Fish-free', label: 'fish' },
  { value: 'Gluten-free', label: 'gluten' },
  { value: 'Lupine-free', label: 'lupine' },
  { value: 'Soy-free', label: 'soy' },
  { value: 'Tree-Nut-free', label: 'tree nut' },
  { value: 'Wheat-free', label: 'wheat' }
];
export const mealTypes = [
  {
    value: 'breakfast'
  },
  {
    value: 'brunch'
  },
  {
    value: 'lunch'
  },
  {
    value: 'snack'
  },
  {
    value: 'teatime'
  }
];

export const recipesResponse = {
  from: 1,
  to: 20,
  count: 10000,
  _links: {
    next: {
      href: 'https://api.edamam.com/api/recipes/v2/?q=coffee&app_key=5c61b3aea75a67ec7ced14be8a5c81e1&_cont=CHcVQBtNNQphDmgVQntAEX4BYVFtAQECQW1FBWUWY1F7DAEPUXlSAjNGN1AnDFUGEWUVAmVFYFEnBAQFQTAVADESYVZ0BFAVLnlSVSBMPkd5BgMbUSYRVTdgMgksRlpSAAcRXTVGcV84SU4%3D&type=public&app_id=2a3177b2',
      title: 'Next page'
    }
  },
  hits: [
    {
      recipe: {
        uri: 'http://www.edamam.com/ontologies/edamam.owl#recipe_cf665dda5068a07d26ccfda829588474',
        label: 'Coffee Cabinets (Rhode Island-Style Coffee Milkshakes) Recipe',
        image:
          'https://edamam-product-images.s3.amazonaws.com/web-img/6b0/6b0e1ae1cad3ec26ac8814052ea8fe0c.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=10e3ca85f8577a656720189d28916603371bf2821a927254b47c0e8001c7a3f8',
        images: {
          THUMBNAIL: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/6b0/6b0e1ae1cad3ec26ac8814052ea8fe0c-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=94d81db416e5ffe72ebdafb8b50902825cee6f1d2a6d42b077bfaaf8fb2ba2e0',
            width: 100,
            height: 100
          },
          SMALL: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/6b0/6b0e1ae1cad3ec26ac8814052ea8fe0c-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6ef9786eab001bf00da3956cde3c1c0f91b647b876fb6bf49209c4f1dc445263',
            width: 200,
            height: 200
          },
          REGULAR: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/6b0/6b0e1ae1cad3ec26ac8814052ea8fe0c.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=10e3ca85f8577a656720189d28916603371bf2821a927254b47c0e8001c7a3f8',
            width: 300,
            height: 300
          }
        },
        source: 'Serious Eats',
        url: 'http://www.seriouseats.com/recipes/2012/06/coffee-cabinets-ice-cream-milkshake-recipe.html',
        shareAs:
          'http://www.edamam.com/recipe/coffee-cabinets-rhode-island-style-coffee-milkshakes-recipe-cf665dda5068a07d26ccfda829588474/coffee',
        yield: 2.0,
        dietLabels: ['Low-Sodium'],
        healthLabels: [
          'Vegetarian',
          'Pescatarian',
          'Gluten-Free',
          'Wheat-Free',
          'Egg-Free',
          'Peanut-Free',
          'Tree-Nut-Free',
          'Soy-Free',
          'Fish-Free',
          'Shellfish-Free',
          'Pork-Free',
          'Red-Meat-Free',
          'Crustacean-Free',
          'Celery-Free',
          'Mustard-Free',
          'Sesame-Free',
          'Lupine-Free',
          'Mollusk-Free',
          'Alcohol-Free',
          'Kosher'
        ],
        cautions: ['Sulfites'],
        ingredientLines: [
          'For the Coffee Syrup:',
          '1 cup strong brewed coffee',
          '1 cup sugar',
          '1/4 teaspoon vanilla extract',
          'For the Coffee Cabinet:',
          '1 pint coffee ice cream',
          '1/4 cup whole milk',
          '1/4 cup chilled coffee',
          '2 tablespoons coffee syrup'
        ],
        ingredients: [
          {
            text: '1 cup strong brewed coffee',
            quantity: 1.0,
            measure: 'cup',
            food: 'coffee',
            weight: 237.0,
            foodCategory: 'coffee and tea',
            foodId: 'food_ax0a0yxbbe4hx0apiz1tla01s2w7',
            image: 'https://www.edamam.com/food-img/ee9/ee9566349cb84dfd9ddac1fdf8cbc907.jpg'
          },
          {
            text: '1 cup sugar',
            quantity: 1.0,
            measure: 'cup',
            food: 'sugar',
            weight: 200.0,
            foodCategory: 'sugars',
            foodId: 'food_axi2ijobrk819yb0adceobnhm1c2',
            image: 'https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg'
          },
          {
            text: '1/4 teaspoon vanilla extract',
            quantity: 0.25,
            measure: 'teaspoon',
            food: 'vanilla extract',
            weight: 1.05,
            foodCategory: 'Condiments and sauces',
            foodId: 'food_bh1wvnqaw3q7ciascfoygaabax2a',
            image: 'https://www.edamam.com/food-img/90f/90f910b0bf82750d4f6528263e014cca.jpg'
          },
          {
            text: '1 pint coffee ice cream',
            quantity: 1.0,
            measure: 'pint',
            food: 'ice cream',
            weight: 264.0,
            foodCategory: 'frozen treats',
            foodId: 'food_bsg87una16tr8waipd66na9drm1k',
            image: 'https://www.edamam.com/food-img/1be/1be43587dc55730fc761aedf4f3df090.jpg'
          },
          {
            text: '1/4 cup whole milk',
            quantity: 0.25,
            measure: 'cup',
            food: 'whole milk',
            weight: 61.0,
            foodCategory: 'Milk',
            foodId: 'food_b49rs1kaw0jktabzkg2vvanvvsis',
            image: 'https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg'
          },
          {
            text: '1/4 cup chilled coffee',
            quantity: 0.25,
            measure: 'cup',
            food: 'coffee',
            weight: 59.25,
            foodCategory: 'coffee and tea',
            foodId: 'food_ax0a0yxbbe4hx0apiz1tla01s2w7',
            image: 'https://www.edamam.com/food-img/ee9/ee9566349cb84dfd9ddac1fdf8cbc907.jpg'
          },
          {
            text: '2 tablespoons coffee syrup',
            quantity: 2.0,
            measure: 'tablespoon',
            food: 'syrup',
            weight: 40.0,
            foodCategory: 'sugars',
            foodId: 'food_bo37p69bopqshvaul0bn4bv0kqni',
            image: 'https://www.edamam.com/food-img/ced/ced25c45453a118e531c8aaf33e2ee38.jpg'
          }
        ],
        calories: 1467.6765,
        totalWeight: 862.3,
        totalTime: 60.0,
        cuisineType: ['american'],
        mealType: ['lunch/dinner'],
        dishType: ['drinks'],
        totalNutrients: {
          ENERC_KCAL: { label: 'Energy', quantity: 1467.6765, unit: 'kcal' },
          FAT: { label: 'Fat', quantity: 31.106380000000005, unit: 'g' },
          FASAT: { label: 'Saturated', quantity: 19.07208, unit: 'g' },
          FATRN: { label: 'Trans', quantity: 0.0, unit: 'g' },
          FAMS: { label: 'Monounsaturated', quantity: 8.3824225, unit: 'g' },
          FAPU: { label: 'Polyunsaturated', quantity: 1.3220345, unit: 'g' },
          CHOCDF: { label: 'Carbs', quantity: 292.14082500000006, unit: 'g' },
          'CHOCDF.net': {
            label: 'Carbohydrates (net)',
            quantity: 290.29282500000005,
            unit: 'g'
          },
          FIBTG: { label: 'Fiber', quantity: 1.8479999999999999, unit: 'g' },
          SUGAR: { label: 'Sugars', quantity: 283.018125, unit: 'g' },
          'SUGAR.added': {
            label: 'Sugars, added',
            quantity: 279.8048,
            unit: 'g'
          },
          PROCNT: { label: 'Protein', quantity: 11.53363, unit: 'g' },
          CHOLE: { label: 'Cholesterol', quantity: 122.26, unit: 'mg' },
          NA: { label: 'Sodium', quantity: 250.2495, unit: 'mg' },
          CA: { label: 'Calcium', quantity: 455.69050000000004, unit: 'mg' },
          MG: { label: 'Magnesium', quantity: 60.4735, unit: 'mg' },
          K: { label: 'Potassium', quantity: 841.3965000000001, unit: 'mg' },
          FE: { label: 'Iron', quantity: 0.430785, unit: 'mg' },
          ZN: { label: 'Zinc', quantity: 2.715705, unit: 'mg' },
          P: { label: 'Phosphorus', quantity: 338.1905, unit: 'mg' },
          VITA_RAE: {
            label: 'Vitamin A',
            quantity: 339.58000000000004,
            unit: 'µg'
          },
          VITC: { label: 'Vitamin C', quantity: 1.584, unit: 'mg' },
          THIA: { label: 'Thiamin (B1)', quantity: 0.2042905, unit: 'mg' },
          RIBF: { label: 'Riboflavin (B2)', quantity: 1.5088375, unit: 'mg' },
          NIA: {
            label: 'Niacin (B3)',
            quantity: 0.9632299999999999,
            unit: 'mg'
          },
          VITB6A: { label: 'Vitamin B6', quantity: 0.1527155, unit: 'mg' },
          FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 22.175,
            unit: 'µg'
          },
          FOLFD: { label: 'Folate (food)', quantity: 22.175, unit: 'µg' },
          FOLAC: { label: 'Folic acid', quantity: 0.0, unit: 'µg' },
          VITB12: { label: 'Vitamin B12', quantity: 1.3041, unit: 'µg' },
          VITD: {
            label: 'Vitamin D',
            quantity: 1.3210000000000002,
            unit: 'µg'
          },
          TOCPHA: { label: 'Vitamin E', quantity: 0.864325, unit: 'mg' },
          VITK1: {
            label: 'Vitamin K',
            quantity: 1.2712500000000002,
            unit: 'µg'
          },
          'Sugar.alcohol': { label: 'Sugar alcohol', quantity: 0.0, unit: 'g' },
          WATER: { label: 'Water', quantity: 522.790265, unit: 'g' }
        },
        totalDaily: {
          ENERC_KCAL: { label: 'Energy', quantity: 73.383825, unit: '%' },
          FAT: { label: 'Fat', quantity: 47.85596923076923, unit: '%' },
          FASAT: { label: 'Saturated', quantity: 95.3604, unit: '%' },
          CHOCDF: { label: 'Carbs', quantity: 97.38027500000003, unit: '%' },
          FIBTG: { label: 'Fiber', quantity: 7.3919999999999995, unit: '%' },
          PROCNT: { label: 'Protein', quantity: 23.06726, unit: '%' },
          CHOLE: {
            label: 'Cholesterol',
            quantity: 40.75333333333333,
            unit: '%'
          },
          NA: { label: 'Sodium', quantity: 10.4270625, unit: '%' },
          CA: { label: 'Calcium', quantity: 45.569050000000004, unit: '%' },
          MG: { label: 'Magnesium', quantity: 14.398452380952381, unit: '%' },
          K: { label: 'Potassium', quantity: 17.902053191489365, unit: '%' },
          FE: { label: 'Iron', quantity: 2.39325, unit: '%' },
          ZN: { label: 'Zinc', quantity: 24.68822727272727, unit: '%' },
          P: { label: 'Phosphorus', quantity: 48.312928571428564, unit: '%' },
          VITA_RAE: {
            label: 'Vitamin A',
            quantity: 37.73111111111112,
            unit: '%'
          },
          VITC: { label: 'Vitamin C', quantity: 1.76, unit: '%' },
          THIA: {
            label: 'Thiamin (B1)',
            quantity: 17.024208333333334,
            unit: '%'
          },
          RIBF: {
            label: 'Riboflavin (B2)',
            quantity: 116.06442307692306,
            unit: '%'
          },
          NIA: { label: 'Niacin (B3)', quantity: 6.0201875, unit: '%' },
          VITB6A: {
            label: 'Vitamin B6',
            quantity: 11.747346153846154,
            unit: '%'
          },
          FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 5.54375,
            unit: '%'
          },
          VITB12: { label: 'Vitamin B12', quantity: 54.3375, unit: '%' },
          VITD: { label: 'Vitamin D', quantity: 8.806666666666668, unit: '%' },
          TOCPHA: {
            label: 'Vitamin E',
            quantity: 5.762166666666667,
            unit: '%'
          },
          VITK1: {
            label: 'Vitamin K',
            quantity: 1.0593750000000002,
            unit: '%'
          }
        },
        digest: [
          {
            label: 'Fat',
            tag: 'FAT',
            schemaOrgTag: 'fatContent',
            total: 31.106380000000005,
            hasRDI: true,
            daily: 47.85596923076923,
            unit: 'g',
            sub: [
              {
                label: 'Saturated',
                tag: 'FASAT',
                schemaOrgTag: 'saturatedFatContent',
                total: 19.07208,
                hasRDI: true,
                daily: 95.3604,
                unit: 'g'
              },
              {
                label: 'Trans',
                tag: 'FATRN',
                schemaOrgTag: 'transFatContent',
                total: 0.0,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Monounsaturated',
                tag: 'FAMS',
                schemaOrgTag: null,
                total: 8.3824225,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Polyunsaturated',
                tag: 'FAPU',
                schemaOrgTag: null,
                total: 1.3220345,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              }
            ]
          },
          {
            label: 'Carbs',
            tag: 'CHOCDF',
            schemaOrgTag: 'carbohydrateContent',
            total: 292.14082500000006,
            hasRDI: true,
            daily: 97.38027500000003,
            unit: 'g',
            sub: [
              {
                label: 'Carbs (net)',
                tag: 'CHOCDF.net',
                schemaOrgTag: null,
                total: 290.29282500000005,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Fiber',
                tag: 'FIBTG',
                schemaOrgTag: 'fiberContent',
                total: 1.8479999999999999,
                hasRDI: true,
                daily: 7.3919999999999995,
                unit: 'g'
              },
              {
                label: 'Sugars',
                tag: 'SUGAR',
                schemaOrgTag: 'sugarContent',
                total: 283.018125,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Sugars, added',
                tag: 'SUGAR.added',
                schemaOrgTag: null,
                total: 279.8048,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              }
            ]
          },
          {
            label: 'Protein',
            tag: 'PROCNT',
            schemaOrgTag: 'proteinContent',
            total: 11.53363,
            hasRDI: true,
            daily: 23.06726,
            unit: 'g'
          },
          {
            label: 'Cholesterol',
            tag: 'CHOLE',
            schemaOrgTag: 'cholesterolContent',
            total: 122.26,
            hasRDI: true,
            daily: 40.75333333333333,
            unit: 'mg'
          },
          {
            label: 'Sodium',
            tag: 'NA',
            schemaOrgTag: 'sodiumContent',
            total: 250.2495,
            hasRDI: true,
            daily: 10.4270625,
            unit: 'mg'
          },
          {
            label: 'Calcium',
            tag: 'CA',
            schemaOrgTag: null,
            total: 455.69050000000004,
            hasRDI: true,
            daily: 45.569050000000004,
            unit: 'mg'
          },
          {
            label: 'Magnesium',
            tag: 'MG',
            schemaOrgTag: null,
            total: 60.4735,
            hasRDI: true,
            daily: 14.398452380952381,
            unit: 'mg'
          },
          {
            label: 'Potassium',
            tag: 'K',
            schemaOrgTag: null,
            total: 841.3965000000001,
            hasRDI: true,
            daily: 17.902053191489365,
            unit: 'mg'
          },
          {
            label: 'Iron',
            tag: 'FE',
            schemaOrgTag: null,
            total: 0.430785,
            hasRDI: true,
            daily: 2.39325,
            unit: 'mg'
          },
          {
            label: 'Zinc',
            tag: 'ZN',
            schemaOrgTag: null,
            total: 2.715705,
            hasRDI: true,
            daily: 24.68822727272727,
            unit: 'mg'
          },
          {
            label: 'Phosphorus',
            tag: 'P',
            schemaOrgTag: null,
            total: 338.1905,
            hasRDI: true,
            daily: 48.312928571428564,
            unit: 'mg'
          },
          {
            label: 'Vitamin A',
            tag: 'VITA_RAE',
            schemaOrgTag: null,
            total: 339.58000000000004,
            hasRDI: true,
            daily: 37.73111111111112,
            unit: 'µg'
          },
          {
            label: 'Vitamin C',
            tag: 'VITC',
            schemaOrgTag: null,
            total: 1.584,
            hasRDI: true,
            daily: 1.76,
            unit: 'mg'
          },
          {
            label: 'Thiamin (B1)',
            tag: 'THIA',
            schemaOrgTag: null,
            total: 0.2042905,
            hasRDI: true,
            daily: 17.024208333333334,
            unit: 'mg'
          },
          {
            label: 'Riboflavin (B2)',
            tag: 'RIBF',
            schemaOrgTag: null,
            total: 1.5088375,
            hasRDI: true,
            daily: 116.06442307692306,
            unit: 'mg'
          },
          {
            label: 'Niacin (B3)',
            tag: 'NIA',
            schemaOrgTag: null,
            total: 0.9632299999999999,
            hasRDI: true,
            daily: 6.0201875,
            unit: 'mg'
          },
          {
            label: 'Vitamin B6',
            tag: 'VITB6A',
            schemaOrgTag: null,
            total: 0.1527155,
            hasRDI: true,
            daily: 11.747346153846154,
            unit: 'mg'
          },
          {
            label: 'Folate equivalent (total)',
            tag: 'FOLDFE',
            schemaOrgTag: null,
            total: 22.175,
            hasRDI: true,
            daily: 5.54375,
            unit: 'µg'
          },
          {
            label: 'Folate (food)',
            tag: 'FOLFD',
            schemaOrgTag: null,
            total: 22.175,
            hasRDI: false,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Folic acid',
            tag: 'FOLAC',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: false,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Vitamin B12',
            tag: 'VITB12',
            schemaOrgTag: null,
            total: 1.3041,
            hasRDI: true,
            daily: 54.3375,
            unit: 'µg'
          },
          {
            label: 'Vitamin D',
            tag: 'VITD',
            schemaOrgTag: null,
            total: 1.3210000000000002,
            hasRDI: true,
            daily: 8.806666666666668,
            unit: 'µg'
          },
          {
            label: 'Vitamin E',
            tag: 'TOCPHA',
            schemaOrgTag: null,
            total: 0.864325,
            hasRDI: true,
            daily: 5.762166666666667,
            unit: 'mg'
          },
          {
            label: 'Vitamin K',
            tag: 'VITK1',
            schemaOrgTag: null,
            total: 1.2712500000000002,
            hasRDI: true,
            daily: 1.0593750000000002,
            unit: 'µg'
          },
          {
            label: 'Sugar alcohols',
            tag: 'Sugar.alcohol',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: false,
            daily: 0.0,
            unit: 'g'
          },
          {
            label: 'Water',
            tag: 'WATER',
            schemaOrgTag: null,
            total: 522.790265,
            hasRDI: false,
            daily: 0.0,
            unit: 'g'
          }
        ]
      },
      _links: {
        self: {
          title: 'Self',
          href: 'https://api.edamam.com/api/recipes/v2/cf665dda5068a07d26ccfda829588474?type=public&app_id=2a3177b2&app_key=5c61b3aea75a67ec7ced14be8a5c81e1'
        }
      }
    },
    {
      recipe: {
        uri: 'http://www.edamam.com/ontologies/edamam.owl#recipe_ef95ea29b642721f44216f033590de21',
        label: 'Turkish Coffee',
        image:
          'https://edamam-product-images.s3.amazonaws.com/web-img/8bc/8bc6df7902e4d7bcc1d1650f3b32351e.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=91b1063e681820194b2e5219cee1977e0319562308c3f79281f47baa46594359',
        images: {
          THUMBNAIL: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/8bc/8bc6df7902e4d7bcc1d1650f3b32351e-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=87323d3c2a881bc43cf649bbe7f70c05f816b0d297def03c5fb5dabf8dcefa35',
            width: 100,
            height: 100
          },
          SMALL: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/8bc/8bc6df7902e4d7bcc1d1650f3b32351e-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b39b18f896edbc5e70655026f7998eb980cf6e5789e0805f6ab57423af5356dd',
            width: 200,
            height: 200
          },
          REGULAR: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/8bc/8bc6df7902e4d7bcc1d1650f3b32351e.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=91b1063e681820194b2e5219cee1977e0319562308c3f79281f47baa46594359',
            width: 300,
            height: 300
          },
          LARGE: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/8bc/8bc6df7902e4d7bcc1d1650f3b32351e-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=996674386f66c68f9ce215984e5ffe409d0f31b6f7ac35693705d7cc677c44b7',
            width: 600,
            height: 600
          }
        },
        source: 'Food52',
        url: 'https://food52.com/recipes/40287-turkish-coffee',
        shareAs: 'http://www.edamam.com/recipe/turkish-coffee-ef95ea29b642721f44216f033590de21/coffee',
        yield: 2.0,
        dietLabels: ['Low-Fat', 'Low-Sodium'],
        healthLabels: [
          'Low Potassium',
          'Kidney-Friendly',
          'Keto-Friendly',
          'Vegan',
          'Vegetarian',
          'Pescatarian',
          'Dairy-Free',
          'Gluten-Free',
          'Wheat-Free',
          'Egg-Free',
          'Peanut-Free',
          'Tree-Nut-Free',
          'Soy-Free',
          'Fish-Free',
          'Shellfish-Free',
          'Pork-Free',
          'Red-Meat-Free',
          'Crustacean-Free',
          'Celery-Free',
          'Mustard-Free',
          'Sesame-Free',
          'Lupine-Free',
          'Mollusk-Free',
          'Alcohol-Free',
          'No oil added',
          'FODMAP-Free',
          'Kosher'
        ],
        cautions: ['Sulfites'],
        ingredientLines: [
          '3 cups (Turkish coffee cup-sized cups) of cold filtered water',
          '2 1/2 tablespoons ground Turkish coffee',
          'Sugar, as desired'
        ],
        ingredients: [
          {
            text: '3 cups (Turkish coffee cup-sized cups) of cold filtered water',
            quantity: 3.0,
            measure: 'cup',
            food: 'filtered water',
            weight: 711.0,
            foodCategory: 'water',
            foodId: 'food_a8ya093b8xvmglaux4scabvvpj5n',
            image: 'https://www.edamam.com/food-img/23a/23ad491827f58ce949c582bbb13a9c12.jpg'
          },
          {
            text: '2 1/2 tablespoons ground Turkish coffee',
            quantity: 2.5,
            measure: 'tablespoon',
            food: 'coffee',
            weight: 36.999999999374445,
            foodCategory: 'coffee and tea',
            foodId: 'food_ax0a0yxbbe4hx0apiz1tla01s2w7',
            image: 'https://www.edamam.com/food-img/ee9/ee9566349cb84dfd9ddac1fdf8cbc907.jpg'
          },
          {
            text: 'Sugar, as desired',
            quantity: 0.0,
            measure: null,
            food: 'Sugar',
            weight: 8.975999999992494,
            foodCategory: 'sugars',
            foodId: 'food_axi2ijobrk819yb0adceobnhm1c2',
            image: 'https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg'
          }
        ],
        calories: 35.107119999964695,
        totalWeight: 756.975999999367,
        totalTime: 0.0,
        cuisineType: ['middle eastern'],
        mealType: ['lunch/dinner'],
        dishType: ['condiments and sauces'],
        totalNutrients: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 35.107119999964695,
            unit: 'kcal'
          },
          FAT: { label: 'Fat', quantity: 0.007399999999874889, unit: 'g' },
          FASAT: {
            label: 'Saturated',
            quantity: 7.39999999987489e-4,
            unit: 'g'
          },
          FATRN: { label: 'Trans', quantity: 0.0, unit: 'g' },
          FAMS: {
            label: 'Monounsaturated',
            quantity: 0.0055499999999061665,
            unit: 'g'
          },
          FAPU: {
            label: 'Polyunsaturated',
            quantity: 3.699999999937445e-4,
            unit: 'g'
          },
          CHOCDF: { label: 'Carbs', quantity: 8.974204799992496, unit: 'g' },
          'CHOCDF.net': {
            label: 'Carbohydrates (net)',
            quantity: 8.974204799992496,
            unit: 'g'
          },
          FIBTG: { label: 'Fiber', quantity: 0.0, unit: 'g' },
          SUGAR: { label: 'Sugars', quantity: 8.958047999992509, unit: 'g' },
          'SUGAR.added': {
            label: 'Sugars, added',
            quantity: 8.958047999992509,
            unit: 'g'
          },
          PROCNT: {
            label: 'Protein',
            quantity: 0.04439999999924933,
            unit: 'g'
          },
          CHOLE: { label: 'Cholesterol', quantity: 0.0, unit: 'mg' },
          NA: { label: 'Sodium', quantity: 15.049759999987415, unit: 'mg' },
          CA: { label: 'Calcium', quantity: 71.92975999998743, unit: 'mg' },
          MG: { label: 'Magnesium', quantity: 15.329999999981235, unit: 'mg' },
          K: { label: 'Potassium', quantity: 18.30951999969333, unit: 'mg' },
          FE: { label: 'Iron', quantity: 0.008187999999933693, unit: 'mg' },
          ZN: { label: 'Zinc', quantity: 0.008297599999874138, unit: 'mg' },
          P: { label: 'Phosphorus', quantity: 1.1099999999812333, unit: 'mg' },
          VITA_RAE: { label: 'Vitamin A', quantity: 0.0, unit: 'µg' },
          VITC: { label: 'Vitamin C', quantity: 0.0, unit: 'mg' },
          THIA: {
            label: 'Thiamin (B1)',
            quantity: 0.005179999999912422,
            unit: 'mg'
          },
          RIBF: {
            label: 'Riboflavin (B2)',
            quantity: 0.02982543999952315,
            unit: 'mg'
          },
          NIA: {
            label: 'Niacin (B3)',
            quantity: 0.07066999999880519,
            unit: 'mg'
          },
          VITB6A: {
            label: 'Vitamin B6',
            quantity: 3.699999999937445e-4,
            unit: 'mg'
          },
          FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 0.7399999999874889,
            unit: 'µg'
          },
          FOLFD: {
            label: 'Folate (food)',
            quantity: 0.7399999999874889,
            unit: 'µg'
          },
          FOLAC: { label: 'Folic acid', quantity: 0.0, unit: 'µg' },
          VITB12: { label: 'Vitamin B12', quantity: 0.0, unit: 'µg' },
          VITD: { label: 'Vitamin D', quantity: 0.0, unit: 'µg' },
          TOCPHA: {
            label: 'Vitamin E',
            quantity: 0.0036999999999374443,
            unit: 'mg'
          },
          VITK1: {
            label: 'Vitamin K',
            quantity: 0.03699999999937444,
            unit: 'µg'
          },
          'Sugar.alcohol': { label: 'Sugar alcohol', quantity: 0.0, unit: 'g' },
          WATER: { label: 'Water', quantity: 747.6338951993783, unit: 'g' }
        },
        totalDaily: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 1.7553559999982347,
            unit: '%'
          },
          FAT: { label: 'Fat', quantity: 0.011384615384422906, unit: '%' },
          FASAT: {
            label: 'Saturated',
            quantity: 0.003699999999937445,
            unit: '%'
          },
          CHOCDF: { label: 'Carbs', quantity: 2.9914015999974986, unit: '%' },
          FIBTG: { label: 'Fiber', quantity: 0.0, unit: '%' },
          PROCNT: {
            label: 'Protein',
            quantity: 0.08879999999849866,
            unit: '%'
          },
          CHOLE: { label: 'Cholesterol', quantity: 0.0, unit: '%' },
          NA: { label: 'Sodium', quantity: 0.627073333332809, unit: '%' },
          CA: { label: 'Calcium', quantity: 7.192975999998743, unit: '%' },
          MG: { label: 'Magnesium', quantity: 3.649999999995532, unit: '%' },
          K: { label: 'Potassium', quantity: 0.38956425531262406, unit: '%' },
          FE: { label: 'Iron', quantity: 0.04548888888852051, unit: '%' },
          ZN: { label: 'Zinc', quantity: 0.07543272727158307, unit: '%' },
          P: { label: 'Phosphorus', quantity: 0.15857142856874762, unit: '%' },
          VITA_RAE: { label: 'Vitamin A', quantity: 0.0, unit: '%' },
          VITC: { label: 'Vitamin C', quantity: 0.0, unit: '%' },
          THIA: {
            label: 'Thiamin (B1)',
            quantity: 0.43166666665936854,
            unit: '%'
          },
          RIBF: {
            label: 'Riboflavin (B2)',
            quantity: 2.2942646153479345,
            unit: '%'
          },
          NIA: {
            label: 'Niacin (B3)',
            quantity: 0.44168749999253243,
            unit: '%'
          },
          VITB6A: {
            label: 'Vitamin B6',
            quantity: 0.028461538461057267,
            unit: '%'
          },
          FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 0.18499999999687222,
            unit: '%'
          },
          VITB12: { label: 'Vitamin B12', quantity: 0.0, unit: '%' },
          VITD: { label: 'Vitamin D', quantity: 0.0, unit: '%' },
          TOCPHA: {
            label: 'Vitamin E',
            quantity: 0.02466666666624963,
            unit: '%'
          },
          VITK1: {
            label: 'Vitamin K',
            quantity: 0.030833333332812036,
            unit: '%'
          }
        },
        digest: [
          {
            label: 'Fat',
            tag: 'FAT',
            schemaOrgTag: 'fatContent',
            total: 0.007399999999874889,
            hasRDI: true,
            daily: 0.011384615384422906,
            unit: 'g',
            sub: [
              {
                label: 'Saturated',
                tag: 'FASAT',
                schemaOrgTag: 'saturatedFatContent',
                total: 7.39999999987489e-4,
                hasRDI: true,
                daily: 0.003699999999937445,
                unit: 'g'
              },
              {
                label: 'Trans',
                tag: 'FATRN',
                schemaOrgTag: 'transFatContent',
                total: 0.0,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Monounsaturated',
                tag: 'FAMS',
                schemaOrgTag: null,
                total: 0.0055499999999061665,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Polyunsaturated',
                tag: 'FAPU',
                schemaOrgTag: null,
                total: 3.699999999937445e-4,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              }
            ]
          },
          {
            label: 'Carbs',
            tag: 'CHOCDF',
            schemaOrgTag: 'carbohydrateContent',
            total: 8.974204799992496,
            hasRDI: true,
            daily: 2.9914015999974986,
            unit: 'g',
            sub: [
              {
                label: 'Carbs (net)',
                tag: 'CHOCDF.net',
                schemaOrgTag: null,
                total: 8.974204799992496,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Fiber',
                tag: 'FIBTG',
                schemaOrgTag: 'fiberContent',
                total: 0.0,
                hasRDI: true,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Sugars',
                tag: 'SUGAR',
                schemaOrgTag: 'sugarContent',
                total: 8.958047999992509,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Sugars, added',
                tag: 'SUGAR.added',
                schemaOrgTag: null,
                total: 8.958047999992509,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              }
            ]
          },
          {
            label: 'Protein',
            tag: 'PROCNT',
            schemaOrgTag: 'proteinContent',
            total: 0.04439999999924933,
            hasRDI: true,
            daily: 0.08879999999849866,
            unit: 'g'
          },
          {
            label: 'Cholesterol',
            tag: 'CHOLE',
            schemaOrgTag: 'cholesterolContent',
            total: 0.0,
            hasRDI: true,
            daily: 0.0,
            unit: 'mg'
          },
          {
            label: 'Sodium',
            tag: 'NA',
            schemaOrgTag: 'sodiumContent',
            total: 15.049759999987415,
            hasRDI: true,
            daily: 0.627073333332809,
            unit: 'mg'
          },
          {
            label: 'Calcium',
            tag: 'CA',
            schemaOrgTag: null,
            total: 71.92975999998743,
            hasRDI: true,
            daily: 7.192975999998743,
            unit: 'mg'
          },
          {
            label: 'Magnesium',
            tag: 'MG',
            schemaOrgTag: null,
            total: 15.329999999981235,
            hasRDI: true,
            daily: 3.649999999995532,
            unit: 'mg'
          },
          {
            label: 'Potassium',
            tag: 'K',
            schemaOrgTag: null,
            total: 18.30951999969333,
            hasRDI: true,
            daily: 0.38956425531262406,
            unit: 'mg'
          },
          {
            label: 'Iron',
            tag: 'FE',
            schemaOrgTag: null,
            total: 0.008187999999933693,
            hasRDI: true,
            daily: 0.04548888888852051,
            unit: 'mg'
          },
          {
            label: 'Zinc',
            tag: 'ZN',
            schemaOrgTag: null,
            total: 0.008297599999874138,
            hasRDI: true,
            daily: 0.07543272727158307,
            unit: 'mg'
          },
          {
            label: 'Phosphorus',
            tag: 'P',
            schemaOrgTag: null,
            total: 1.1099999999812333,
            hasRDI: true,
            daily: 0.15857142856874762,
            unit: 'mg'
          },
          {
            label: 'Vitamin A',
            tag: 'VITA_RAE',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: true,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Vitamin C',
            tag: 'VITC',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: true,
            daily: 0.0,
            unit: 'mg'
          },
          {
            label: 'Thiamin (B1)',
            tag: 'THIA',
            schemaOrgTag: null,
            total: 0.005179999999912422,
            hasRDI: true,
            daily: 0.43166666665936854,
            unit: 'mg'
          },
          {
            label: 'Riboflavin (B2)',
            tag: 'RIBF',
            schemaOrgTag: null,
            total: 0.02982543999952315,
            hasRDI: true,
            daily: 2.2942646153479345,
            unit: 'mg'
          },
          {
            label: 'Niacin (B3)',
            tag: 'NIA',
            schemaOrgTag: null,
            total: 0.07066999999880519,
            hasRDI: true,
            daily: 0.44168749999253243,
            unit: 'mg'
          },
          {
            label: 'Vitamin B6',
            tag: 'VITB6A',
            schemaOrgTag: null,
            total: 3.699999999937445e-4,
            hasRDI: true,
            daily: 0.028461538461057267,
            unit: 'mg'
          },
          {
            label: 'Folate equivalent (total)',
            tag: 'FOLDFE',
            schemaOrgTag: null,
            total: 0.7399999999874889,
            hasRDI: true,
            daily: 0.18499999999687222,
            unit: 'µg'
          },
          {
            label: 'Folate (food)',
            tag: 'FOLFD',
            schemaOrgTag: null,
            total: 0.7399999999874889,
            hasRDI: false,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Folic acid',
            tag: 'FOLAC',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: false,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Vitamin B12',
            tag: 'VITB12',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: true,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Vitamin D',
            tag: 'VITD',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: true,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Vitamin E',
            tag: 'TOCPHA',
            schemaOrgTag: null,
            total: 0.0036999999999374443,
            hasRDI: true,
            daily: 0.02466666666624963,
            unit: 'mg'
          },
          {
            label: 'Vitamin K',
            tag: 'VITK1',
            schemaOrgTag: null,
            total: 0.03699999999937444,
            hasRDI: true,
            daily: 0.030833333332812036,
            unit: 'µg'
          },
          {
            label: 'Sugar alcohols',
            tag: 'Sugar.alcohol',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: false,
            daily: 0.0,
            unit: 'g'
          },
          {
            label: 'Water',
            tag: 'WATER',
            schemaOrgTag: null,
            total: 747.6338951993783,
            hasRDI: false,
            daily: 0.0,
            unit: 'g'
          }
        ]
      },
      _links: {
        self: {
          title: 'Self',
          href: 'https://api.edamam.com/api/recipes/v2/ef95ea29b642721f44216f033590de21?type=public&app_id=2a3177b2&app_key=5c61b3aea75a67ec7ced14be8a5c81e1'
        }
      }
    },
    {
      recipe: {
        uri: 'http://www.edamam.com/ontologies/edamam.owl#recipe_bccf9937e9c083be501c92457d50f1a3',
        label: 'Turkish Coffee recipes',
        image:
          'https://edamam-product-images.s3.amazonaws.com/web-img/410/410f7cb37081dca88604f0d8829ee05e?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ab45f40f01192247351761b19180eed7a79fdeb8b3d0d4f4045b16d6d9792182',
        images: {
          THUMBNAIL: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/410/410f7cb37081dca88604f0d8829ee05e-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=62c2e3fd017e3b58b1f6e68c387bcbd61d3b958a9c6daf550c758abaf06d1ab2',
            width: 100,
            height: 100
          },
          SMALL: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/410/410f7cb37081dca88604f0d8829ee05e-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3c9f395744bead11d099bb9822219e6f4100d630cd7a9d1d79c7d49b539edeff',
            width: 200,
            height: 200
          },
          REGULAR: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/410/410f7cb37081dca88604f0d8829ee05e?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ab45f40f01192247351761b19180eed7a79fdeb8b3d0d4f4045b16d6d9792182',
            width: 300,
            height: 300
          }
        },
        source: 'Martha Stewart',
        url: 'http://www.marthastewart.com/349722/turkish-coffee',
        shareAs: 'http://www.edamam.com/recipe/turkish-coffee-recipes-bccf9937e9c083be501c92457d50f1a3/coffee',
        yield: 4.0,
        dietLabels: ['Low-Fat', 'Low-Sodium'],
        healthLabels: [
          'Low Potassium',
          'Kidney-Friendly',
          'Vegan',
          'Vegetarian',
          'Pescatarian',
          'Dairy-Free',
          'Gluten-Free',
          'Wheat-Free',
          'Egg-Free',
          'Peanut-Free',
          'Tree-Nut-Free',
          'Soy-Free',
          'Fish-Free',
          'Shellfish-Free',
          'Pork-Free',
          'Red-Meat-Free',
          'Crustacean-Free',
          'Celery-Free',
          'Mustard-Free',
          'Sesame-Free',
          'Lupine-Free',
          'Mollusk-Free',
          'Alcohol-Free',
          'No oil added',
          'FODMAP-Free',
          'Kosher'
        ],
        cautions: ['Sulfites'],
        ingredientLines: [
          '4 small coffee cups of water',
          '4 small coffee cups of water',
          '4 scoops of coffee',
          '4 spoons of sugar'
        ],
        ingredients: [
          {
            text: '4 small coffee cups of water',
            quantity: 4.0,
            measure: 'cup',
            food: 'water',
            weight: 948.0,
            foodCategory: 'water',
            foodId: 'food_a99vzubbk1ayrsad318rvbzr3dh0',
            image: 'https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg'
          },
          {
            text: '4 small coffee cups of water',
            quantity: 4.0,
            measure: 'cup',
            food: 'water',
            weight: 948.0,
            foodCategory: 'water',
            foodId: 'food_a99vzubbk1ayrsad318rvbzr3dh0',
            image: 'https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg'
          },
          {
            text: '4 scoops of coffee',
            quantity: 4.0,
            measure: 'scoop',
            food: 'coffee',
            weight: 120.10740863694633,
            foodCategory: 'coffee and tea',
            foodId: 'food_ax0a0yxbbe4hx0apiz1tla01s2w7',
            image: 'https://www.edamam.com/food-img/ee9/ee9566349cb84dfd9ddac1fdf8cbc907.jpg'
          },
          {
            text: '4 spoons of sugar',
            quantity: 4.0,
            measure: 'tablespoon',
            food: 'sugar',
            weight: 49.9999999991548,
            foodCategory: 'sugars',
            foodId: 'food_axi2ijobrk819yb0adceobnhm1c2',
            image: 'https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg'
          }
        ],
        calories: 194.70107408309855,
        totalWeight: 2066.107408636101,
        totalTime: 25.0,
        cuisineType: ['middle eastern'],
        mealType: ['lunch/dinner'],
        dishType: ['condiments and sauces'],
        totalNutrients: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 194.70107408309855,
            unit: 'kcal'
          },
          FAT: { label: 'Fat', quantity: 0.024021481727389268, unit: 'g' },
          FASAT: {
            label: 'Saturated',
            quantity: 0.0024021481727389267,
            unit: 'g'
          },
          FATRN: { label: 'Trans', quantity: 0.0, unit: 'g' },
          FAMS: {
            label: 'Monounsaturated',
            quantity: 0.01801611129554195,
            unit: 'g'
          },
          FAPU: {
            label: 'Polyunsaturated',
            quantity: 0.0012010740863694633,
            unit: 'g'
          },
          CHOCDF: { label: 'Carbs', quantity: 49.989999999154975, unit: 'g' },
          'CHOCDF.net': {
            label: 'Carbohydrates (net)',
            quantity: 49.989999999154975,
            unit: 'g'
          },
          FIBTG: { label: 'Fiber', quantity: 0.0, unit: 'g' },
          SUGAR: { label: 'Sugars', quantity: 49.89999999915649, unit: 'g' },
          'SUGAR.added': {
            label: 'Sugars, added',
            quantity: 49.89999999915649,
            unit: 'g'
          },
          PROCNT: { label: 'Protein', quantity: 0.1441288903643356, unit: 'g' },
          CHOLE: { label: 'Cholesterol', quantity: 0.0, unit: 'mg' },
          NA: { label: 'Sodium', quantity: 78.74214817273048, unit: 'mg' },
          CA: { label: 'Calcium', quantity: 59.78214817273047, unit: 'mg' },
          MG: { label: 'Magnesium', quantity: 22.56322225910839, unit: 'mg' },
          K: { label: 'Potassium', quantity: 59.8526302320868, unit: 'mg' },
          FE: { label: 'Iron', quantity: 0.03701074086327204, unit: 'mg' },
          ZN: { label: 'Zinc', quantity: 0.21862148172730478, unit: 'mg' },
          P: { label: 'Phosphorus', quantity: 3.60322225910839, unit: 'mg' },
          VITA_RAE: { label: 'Vitamin A', quantity: 0.0, unit: 'µg' },
          VITC: { label: 'Vitamin C', quantity: 0.0, unit: 'mg' },
          THIA: {
            label: 'Thiamin (B1)',
            quantity: 0.016815037209172486,
            unit: 'mg'
          },
          RIBF: {
            label: 'Riboflavin (B2)',
            quantity: 0.10078163056391863,
            unit: 'mg'
          },
          NIA: {
            label: 'Niacin (B3)',
            quantity: 0.2294051504965675,
            unit: 'mg'
          },
          VITB6A: {
            label: 'Vitamin B6',
            quantity: 0.0012010740863694633,
            unit: 'mg'
          },
          FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 2.4021481727389267,
            unit: 'µg'
          },
          FOLFD: {
            label: 'Folate (food)',
            quantity: 2.4021481727389267,
            unit: 'µg'
          },
          FOLAC: { label: 'Folic acid', quantity: 0.0, unit: 'µg' },
          VITB12: { label: 'Vitamin B12', quantity: 0.0, unit: 'µg' },
          VITD: { label: 'Vitamin D', quantity: 0.0, unit: 'µg' },
          TOCPHA: {
            label: 'Vitamin E',
            quantity: 0.012010740863694634,
            unit: 'mg'
          },
          VITK1: {
            label: 'Vitamin K',
            quantity: 0.12010740863694634,
            unit: 'µg'
          },
          'Sugar.alcohol': { label: 'Sugar alcohol', quantity: 0.0, unit: 'g' },
          WATER: { label: 'Water', quantity: 2013.488753444261, unit: 'g' }
        },
        totalDaily: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 9.735053704154927,
            unit: '%'
          },
          FAT: { label: 'Fat', quantity: 0.036956125734445025, unit: '%' },
          FASAT: {
            label: 'Saturated',
            quantity: 0.012010740863694632,
            unit: '%'
          },
          CHOCDF: { label: 'Carbs', quantity: 16.663333333051657, unit: '%' },
          FIBTG: { label: 'Fiber', quantity: 0.0, unit: '%' },
          PROCNT: { label: 'Protein', quantity: 0.2882577807286712, unit: '%' },
          CHOLE: { label: 'Cholesterol', quantity: 0.0, unit: '%' },
          NA: { label: 'Sodium', quantity: 3.2809228405304367, unit: '%' },
          CA: { label: 'Calcium', quantity: 5.978214817273048, unit: '%' },
          MG: { label: 'Magnesium', quantity: 5.372195775978188, unit: '%' },
          K: { label: 'Potassium', quantity: 1.2734602177039744, unit: '%' },
          FE: { label: 'Iron', quantity: 0.205615227018178, unit: '%' },
          ZN: { label: 'Zinc', quantity: 1.9874680157027707, unit: '%' },
          P: { label: 'Phosphorus', quantity: 0.5147460370154843, unit: '%' },
          VITA_RAE: { label: 'Vitamin A', quantity: 0.0, unit: '%' },
          VITC: { label: 'Vitamin C', quantity: 0.0, unit: '%' },
          THIA: {
            label: 'Thiamin (B1)',
            quantity: 1.4012531007643738,
            unit: '%'
          },
          RIBF: {
            label: 'Riboflavin (B2)',
            quantity: 7.752433120301434,
            unit: '%'
          },
          NIA: { label: 'Niacin (B3)', quantity: 1.433782190603547, unit: '%' },
          VITB6A: {
            label: 'Vitamin B6',
            quantity: 0.09239031433611256,
            unit: '%'
          },
          FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 0.6005370431847317,
            unit: '%'
          },
          VITB12: { label: 'Vitamin B12', quantity: 0.0, unit: '%' },
          VITD: { label: 'Vitamin D', quantity: 0.0, unit: '%' },
          TOCPHA: {
            label: 'Vitamin E',
            quantity: 0.08007160575796422,
            unit: '%'
          },
          VITK1: {
            label: 'Vitamin K',
            quantity: 0.10008950719745528,
            unit: '%'
          }
        },
        digest: [
          {
            label: 'Fat',
            tag: 'FAT',
            schemaOrgTag: 'fatContent',
            total: 0.024021481727389268,
            hasRDI: true,
            daily: 0.036956125734445025,
            unit: 'g',
            sub: [
              {
                label: 'Saturated',
                tag: 'FASAT',
                schemaOrgTag: 'saturatedFatContent',
                total: 0.0024021481727389267,
                hasRDI: true,
                daily: 0.012010740863694632,
                unit: 'g'
              },
              {
                label: 'Trans',
                tag: 'FATRN',
                schemaOrgTag: 'transFatContent',
                total: 0.0,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Monounsaturated',
                tag: 'FAMS',
                schemaOrgTag: null,
                total: 0.01801611129554195,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Polyunsaturated',
                tag: 'FAPU',
                schemaOrgTag: null,
                total: 0.0012010740863694633,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              }
            ]
          },
          {
            label: 'Carbs',
            tag: 'CHOCDF',
            schemaOrgTag: 'carbohydrateContent',
            total: 49.989999999154975,
            hasRDI: true,
            daily: 16.663333333051657,
            unit: 'g',
            sub: [
              {
                label: 'Carbs (net)',
                tag: 'CHOCDF.net',
                schemaOrgTag: null,
                total: 49.989999999154975,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Fiber',
                tag: 'FIBTG',
                schemaOrgTag: 'fiberContent',
                total: 0.0,
                hasRDI: true,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Sugars',
                tag: 'SUGAR',
                schemaOrgTag: 'sugarContent',
                total: 49.89999999915649,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Sugars, added',
                tag: 'SUGAR.added',
                schemaOrgTag: null,
                total: 49.89999999915649,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              }
            ]
          },
          {
            label: 'Protein',
            tag: 'PROCNT',
            schemaOrgTag: 'proteinContent',
            total: 0.1441288903643356,
            hasRDI: true,
            daily: 0.2882577807286712,
            unit: 'g'
          },
          {
            label: 'Cholesterol',
            tag: 'CHOLE',
            schemaOrgTag: 'cholesterolContent',
            total: 0.0,
            hasRDI: true,
            daily: 0.0,
            unit: 'mg'
          },
          {
            label: 'Sodium',
            tag: 'NA',
            schemaOrgTag: 'sodiumContent',
            total: 78.74214817273048,
            hasRDI: true,
            daily: 3.2809228405304367,
            unit: 'mg'
          },
          {
            label: 'Calcium',
            tag: 'CA',
            schemaOrgTag: null,
            total: 59.78214817273047,
            hasRDI: true,
            daily: 5.978214817273048,
            unit: 'mg'
          },
          {
            label: 'Magnesium',
            tag: 'MG',
            schemaOrgTag: null,
            total: 22.56322225910839,
            hasRDI: true,
            daily: 5.372195775978188,
            unit: 'mg'
          },
          {
            label: 'Potassium',
            tag: 'K',
            schemaOrgTag: null,
            total: 59.8526302320868,
            hasRDI: true,
            daily: 1.2734602177039744,
            unit: 'mg'
          },
          {
            label: 'Iron',
            tag: 'FE',
            schemaOrgTag: null,
            total: 0.03701074086327204,
            hasRDI: true,
            daily: 0.205615227018178,
            unit: 'mg'
          },
          {
            label: 'Zinc',
            tag: 'ZN',
            schemaOrgTag: null,
            total: 0.21862148172730478,
            hasRDI: true,
            daily: 1.9874680157027707,
            unit: 'mg'
          },
          {
            label: 'Phosphorus',
            tag: 'P',
            schemaOrgTag: null,
            total: 3.60322225910839,
            hasRDI: true,
            daily: 0.5147460370154843,
            unit: 'mg'
          },
          {
            label: 'Vitamin A',
            tag: 'VITA_RAE',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: true,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Vitamin C',
            tag: 'VITC',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: true,
            daily: 0.0,
            unit: 'mg'
          },
          {
            label: 'Thiamin (B1)',
            tag: 'THIA',
            schemaOrgTag: null,
            total: 0.016815037209172486,
            hasRDI: true,
            daily: 1.4012531007643738,
            unit: 'mg'
          },
          {
            label: 'Riboflavin (B2)',
            tag: 'RIBF',
            schemaOrgTag: null,
            total: 0.10078163056391863,
            hasRDI: true,
            daily: 7.752433120301434,
            unit: 'mg'
          },
          {
            label: 'Niacin (B3)',
            tag: 'NIA',
            schemaOrgTag: null,
            total: 0.2294051504965675,
            hasRDI: true,
            daily: 1.433782190603547,
            unit: 'mg'
          },
          {
            label: 'Vitamin B6',
            tag: 'VITB6A',
            schemaOrgTag: null,
            total: 0.0012010740863694633,
            hasRDI: true,
            daily: 0.09239031433611256,
            unit: 'mg'
          },
          {
            label: 'Folate equivalent (total)',
            tag: 'FOLDFE',
            schemaOrgTag: null,
            total: 2.4021481727389267,
            hasRDI: true,
            daily: 0.6005370431847317,
            unit: 'µg'
          },
          {
            label: 'Folate (food)',
            tag: 'FOLFD',
            schemaOrgTag: null,
            total: 2.4021481727389267,
            hasRDI: false,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Folic acid',
            tag: 'FOLAC',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: false,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Vitamin B12',
            tag: 'VITB12',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: true,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Vitamin D',
            tag: 'VITD',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: true,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Vitamin E',
            tag: 'TOCPHA',
            schemaOrgTag: null,
            total: 0.012010740863694634,
            hasRDI: true,
            daily: 0.08007160575796422,
            unit: 'mg'
          },
          {
            label: 'Vitamin K',
            tag: 'VITK1',
            schemaOrgTag: null,
            total: 0.12010740863694634,
            hasRDI: true,
            daily: 0.10008950719745528,
            unit: 'µg'
          },
          {
            label: 'Sugar alcohols',
            tag: 'Sugar.alcohol',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: false,
            daily: 0.0,
            unit: 'g'
          },
          {
            label: 'Water',
            tag: 'WATER',
            schemaOrgTag: null,
            total: 2013.488753444261,
            hasRDI: false,
            daily: 0.0,
            unit: 'g'
          }
        ]
      },
      _links: {
        self: {
          title: 'Self',
          href: 'https://api.edamam.com/api/recipes/v2/bccf9937e9c083be501c92457d50f1a3?type=public&app_id=2a3177b2&app_key=5c61b3aea75a67ec7ced14be8a5c81e1'
        }
      }
    },
    {
      recipe: {
        uri: 'http://www.edamam.com/ontologies/edamam.owl#recipe_25e09f000a24fe43ad27dc14bbd1cb04',
        label: 'Vietnamese Ice Coffee',
        image:
          'https://edamam-product-images.s3.amazonaws.com/web-img/ff8/ff8a2b01153ad3aa8ee846813b5c21e5.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=75f5a885703fe95ab2310ecdb8d2c170acfced4a458edd90fe1854271ee8e1bb',
        images: {
          THUMBNAIL: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/ff8/ff8a2b01153ad3aa8ee846813b5c21e5-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=11e0a0bd40522a95b25a330f0904fc42b238a44b0349d0b8c81ebee43653fffe',
            width: 100,
            height: 100
          },
          SMALL: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/ff8/ff8a2b01153ad3aa8ee846813b5c21e5-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=85b51f77a6aa9cdde8cc2381b3e57cb1564cf301044f0588e9dcb0a39e3429a9',
            width: 200,
            height: 200
          },
          REGULAR: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/ff8/ff8a2b01153ad3aa8ee846813b5c21e5.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=75f5a885703fe95ab2310ecdb8d2c170acfced4a458edd90fe1854271ee8e1bb',
            width: 300,
            height: 300
          }
        },
        source: 'Epicurious',
        url: 'https://www.epicurious.com/recipes/food/views/vietnamese-ice-coffee-395453',
        shareAs: 'http://www.edamam.com/recipe/vietnamese-ice-coffee-25e09f000a24fe43ad27dc14bbd1cb04/coffee',
        yield: 1.0,
        dietLabels: ['Low-Sodium'],
        healthLabels: [
          'Vegetarian',
          'Pescatarian',
          'Mediterranean',
          'Gluten-Free',
          'Wheat-Free',
          'Egg-Free',
          'Peanut-Free',
          'Tree-Nut-Free',
          'Soy-Free',
          'Fish-Free',
          'Shellfish-Free',
          'Pork-Free',
          'Red-Meat-Free',
          'Crustacean-Free',
          'Celery-Free',
          'Mustard-Free',
          'Sesame-Free',
          'Lupine-Free',
          'Mollusk-Free',
          'Alcohol-Free',
          'No oil added',
          'Sulfite-Free',
          'Kosher'
        ],
        cautions: ['Sulfites'],
        ingredientLines: [
          '2 tablespoons dark-roast ground coffee (preferably Trung Nguyen Premium Blend or Café Du Monde Coffee with Chicory)',
          '2 tablespoons (scant) sweetened condensed milk',
          'Ingredient info: Café Du Monde Coffee with Chicory can be found at cafedumonde.com. The metal filter (phin) and Trung Nguyen coffee can be found at trungnguyen-online.com.',
          'A single-cup Vietnamese metal coffee filter set'
        ],
        ingredients: [
          {
            text: '2 tablespoons dark-roast ground coffee (preferably Trung Nguyen Premium Blend or Café Du Monde Coffee with Chicory)',
            quantity: 2.0,
            measure: 'tablespoon',
            food: 'ground coffee',
            weight: 5.999999999594232,
            foodCategory: 'coffee and tea',
            foodId: 'food_aof7z08ad0qgsta38run7arojif8',
            image: 'https://www.edamam.com/food-img/336/336e810373dd353a955a6896699b586e.jpg'
          },
          {
            text: '2 tablespoons (scant) sweetened condensed milk',
            quantity: 2.0,
            measure: 'tablespoon',
            food: 'sweetened condensed milk',
            weight: 38.19999999935416,
            foodCategory: 'Milk',
            foodId: 'food_a89byenbz1jssabxmx7i6aa77jz1',
            image: 'https://www.edamam.com/food-img/bc9/bc97e9aa15ccef74dbad4d6267e30e3f.jpg'
          },
          {
            text: 'A single-cup Vietnamese metal coffee filter set',
            quantity: 1.0,
            measure: 'cup',
            food: 'coffee',
            weight: 237.0,
            foodCategory: 'coffee and tea',
            foodId: 'food_ax0a0yxbbe4hx0apiz1tla01s2w7',
            image: 'https://www.edamam.com/food-img/ee9/ee9566349cb84dfd9ddac1fdf8cbc907.jpg'
          }
        ],
        calories: 146.1719999964945,
        totalWeight: 281.1999999989484,
        totalTime: 0.0,
        cuisineType: ['south east asian'],
        mealType: ['lunch/dinner'],
        dishType: ['desserts'],
        totalNutrients: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 146.1719999964945,
            unit: 'kcal'
          },
          FAT: { label: 'Fat', quantity: 3.4007999999417833, unit: 'g' },
          FASAT: { label: 'Saturated', quantity: 2.11221199996377, unit: 'g' },
          FATRN: { label: 'Trans', quantity: 0.0, unit: 'g' },
          FAMS: {
            label: 'Monounsaturated',
            quantity: 0.9651239999841591,
            unit: 'g'
          },
          FAPU: {
            label: 'Polyunsaturated',
            quantity: 0.14286399999702823,
            unit: 'g'
          },
          CHOCDF: { label: 'Carbs', quantity: 25.304799999342716, unit: 'g' },
          'CHOCDF.net': {
            label: 'Carbohydrates (net)',
            quantity: 25.304799999342716,
            unit: 'g'
          },
          FIBTG: { label: 'Fiber', quantity: 0.0, unit: 'g' },
          SUGAR: { label: 'Sugars', quantity: 20.780799999648664, unit: 'g' },
          'SUGAR.added': { label: 'Sugars, added', quantity: 0.0, unit: 'g' },
          PROCNT: { label: 'Protein', quantity: 4.038019999899411, unit: 'g' },
          CHOLE: {
            label: 'Cholesterol',
            quantity: 12.987999999780415,
            unit: 'mg'
          },
          NA: { label: 'Sodium', quantity: 55.47399999902966, unit: 'mg' },
          CA: { label: 'Calcium', quantity: 121.68799999759368, unit: 'mg' },
          MG: { label: 'Magnesium', quantity: 36.661999998505216, unit: 'mg' },
          K: { label: 'Potassium', quantity: 469.95199998326007, unit: 'mg' },
          FE: { label: 'Iron', quantity: 0.36087999998087855, unit: 'mg' },
          ZN: { label: 'Zinc', quantity: 0.4274799999925089, unit: 'mg' },
          P: { label: 'Phosphorus', quantity: 121.93599999713655, unit: 'mg' },
          VITA_RAE: {
            label: 'Vitamin A',
            quantity: 28.26799999952208,
            unit: 'µg'
          },
          VITC: {
            label: 'Vitamin C',
            quantity: 0.9931999999832083,
            unit: 'mg'
          },
          THIA: {
            label: 'Thiamin (B1)',
            quantity: 0.06803999999938629,
            unit: 'mg'
          },
          RIBF: {
            label: 'Riboflavin (B2)',
            quantity: 0.34347199999701306,
            unit: 'mg'
          },
          NIA: {
            label: 'Niacin (B3)',
            quantity: 2.2232699998843266,
            unit: 'mg'
          },
          VITB6A: {
            label: 'Vitamin B6',
            quantity: 0.02359199999955295,
            unit: 'mg'
          },
          FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 8.941999999928958,
            unit: 'µg'
          },
          FOLFD: {
            label: 'Folate (food)',
            quantity: 8.941999999928958,
            unit: 'µg'
          },
          FOLAC: { label: 'Folic acid', quantity: 0.0, unit: 'µg' },
          VITB12: {
            label: 'Vitamin B12',
            quantity: 0.1680799999971583,
            unit: 'µg'
          },
          VITD: {
            label: 'Vitamin D',
            quantity: 0.07639999999870833,
            unit: 'µg'
          },
          TOCPHA: {
            label: 'Vitamin E',
            quantity: 0.08481999999896667,
            unit: 'mg'
          },
          VITK1: {
            label: 'Vitamin K',
            quantity: 0.5801999999884153,
            unit: 'µg'
          },
          'Sugar.alcohol': { label: 'Sugar alcohol', quantity: 0.0, unit: 'g' },
          WATER: { label: 'Water', quantity: 246.11541999981202, unit: 'g' }
        },
        totalDaily: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 7.308599999824724,
            unit: '%'
          },
          FAT: { label: 'Fat', quantity: 5.231999999910435, unit: '%' },
          FASAT: {
            label: 'Saturated',
            quantity: 10.561059999818848,
            unit: '%'
          },
          CHOCDF: { label: 'Carbs', quantity: 8.43493333311424, unit: '%' },
          FIBTG: { label: 'Fiber', quantity: 0.0, unit: '%' },
          PROCNT: { label: 'Protein', quantity: 8.076039999798821, unit: '%' },
          CHOLE: {
            label: 'Cholesterol',
            quantity: 4.329333333260139,
            unit: '%'
          },
          NA: { label: 'Sodium', quantity: 2.311416666626236, unit: '%' },
          CA: { label: 'Calcium', quantity: 12.168799999759367, unit: '%' },
          MG: { label: 'Magnesium', quantity: 8.729047618691718, unit: '%' },
          K: { label: 'Potassium', quantity: 9.998978723048086, unit: '%' },
          FE: { label: 'Iron', quantity: 2.0048888887826584, unit: '%' },
          ZN: { label: 'Zinc', quantity: 3.8861818181137178, unit: '%' },
          P: { label: 'Phosphorus', quantity: 17.41942857101951, unit: '%' },
          VITA_RAE: {
            label: 'Vitamin A',
            quantity: 3.1408888888357867,
            unit: '%'
          },
          VITC: { label: 'Vitamin C', quantity: 1.103555555536898, unit: '%' },
          THIA: {
            label: 'Thiamin (B1)',
            quantity: 5.669999999948858,
            unit: '%'
          },
          RIBF: {
            label: 'Riboflavin (B2)',
            quantity: 26.42092307669331,
            unit: '%'
          },
          NIA: { label: 'Niacin (B3)', quantity: 13.89543749927704, unit: '%' },
          VITB6A: {
            label: 'Vitamin B6',
            quantity: 1.8147692307348422,
            unit: '%'
          },
          FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 2.2354999999822396,
            unit: '%'
          },
          VITB12: {
            label: 'Vitamin B12',
            quantity: 7.003333333214931,
            unit: '%'
          },
          VITD: { label: 'Vitamin D', quantity: 0.5093333333247222, unit: '%' },
          TOCPHA: {
            label: 'Vitamin E',
            quantity: 0.5654666666597777,
            unit: '%'
          },
          VITK1: {
            label: 'Vitamin K',
            quantity: 0.4834999999903461,
            unit: '%'
          }
        },
        digest: [
          {
            label: 'Fat',
            tag: 'FAT',
            schemaOrgTag: 'fatContent',
            total: 3.4007999999417833,
            hasRDI: true,
            daily: 5.231999999910435,
            unit: 'g',
            sub: [
              {
                label: 'Saturated',
                tag: 'FASAT',
                schemaOrgTag: 'saturatedFatContent',
                total: 2.11221199996377,
                hasRDI: true,
                daily: 10.561059999818848,
                unit: 'g'
              },
              {
                label: 'Trans',
                tag: 'FATRN',
                schemaOrgTag: 'transFatContent',
                total: 0.0,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Monounsaturated',
                tag: 'FAMS',
                schemaOrgTag: null,
                total: 0.9651239999841591,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Polyunsaturated',
                tag: 'FAPU',
                schemaOrgTag: null,
                total: 0.14286399999702823,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              }
            ]
          },
          {
            label: 'Carbs',
            tag: 'CHOCDF',
            schemaOrgTag: 'carbohydrateContent',
            total: 25.304799999342716,
            hasRDI: true,
            daily: 8.43493333311424,
            unit: 'g',
            sub: [
              {
                label: 'Carbs (net)',
                tag: 'CHOCDF.net',
                schemaOrgTag: null,
                total: 25.304799999342716,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Fiber',
                tag: 'FIBTG',
                schemaOrgTag: 'fiberContent',
                total: 0.0,
                hasRDI: true,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Sugars',
                tag: 'SUGAR',
                schemaOrgTag: 'sugarContent',
                total: 20.780799999648664,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Sugars, added',
                tag: 'SUGAR.added',
                schemaOrgTag: null,
                total: 0.0,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              }
            ]
          },
          {
            label: 'Protein',
            tag: 'PROCNT',
            schemaOrgTag: 'proteinContent',
            total: 4.038019999899411,
            hasRDI: true,
            daily: 8.076039999798821,
            unit: 'g'
          },
          {
            label: 'Cholesterol',
            tag: 'CHOLE',
            schemaOrgTag: 'cholesterolContent',
            total: 12.987999999780415,
            hasRDI: true,
            daily: 4.329333333260139,
            unit: 'mg'
          },
          {
            label: 'Sodium',
            tag: 'NA',
            schemaOrgTag: 'sodiumContent',
            total: 55.47399999902966,
            hasRDI: true,
            daily: 2.311416666626236,
            unit: 'mg'
          },
          {
            label: 'Calcium',
            tag: 'CA',
            schemaOrgTag: null,
            total: 121.68799999759368,
            hasRDI: true,
            daily: 12.168799999759367,
            unit: 'mg'
          },
          {
            label: 'Magnesium',
            tag: 'MG',
            schemaOrgTag: null,
            total: 36.661999998505216,
            hasRDI: true,
            daily: 8.729047618691718,
            unit: 'mg'
          },
          {
            label: 'Potassium',
            tag: 'K',
            schemaOrgTag: null,
            total: 469.95199998326007,
            hasRDI: true,
            daily: 9.998978723048086,
            unit: 'mg'
          },
          {
            label: 'Iron',
            tag: 'FE',
            schemaOrgTag: null,
            total: 0.36087999998087855,
            hasRDI: true,
            daily: 2.0048888887826584,
            unit: 'mg'
          },
          {
            label: 'Zinc',
            tag: 'ZN',
            schemaOrgTag: null,
            total: 0.4274799999925089,
            hasRDI: true,
            daily: 3.8861818181137178,
            unit: 'mg'
          },
          {
            label: 'Phosphorus',
            tag: 'P',
            schemaOrgTag: null,
            total: 121.93599999713655,
            hasRDI: true,
            daily: 17.41942857101951,
            unit: 'mg'
          },
          {
            label: 'Vitamin A',
            tag: 'VITA_RAE',
            schemaOrgTag: null,
            total: 28.26799999952208,
            hasRDI: true,
            daily: 3.1408888888357867,
            unit: 'µg'
          },
          {
            label: 'Vitamin C',
            tag: 'VITC',
            schemaOrgTag: null,
            total: 0.9931999999832083,
            hasRDI: true,
            daily: 1.103555555536898,
            unit: 'mg'
          },
          {
            label: 'Thiamin (B1)',
            tag: 'THIA',
            schemaOrgTag: null,
            total: 0.06803999999938629,
            hasRDI: true,
            daily: 5.669999999948858,
            unit: 'mg'
          },
          {
            label: 'Riboflavin (B2)',
            tag: 'RIBF',
            schemaOrgTag: null,
            total: 0.34347199999701306,
            hasRDI: true,
            daily: 26.42092307669331,
            unit: 'mg'
          },
          {
            label: 'Niacin (B3)',
            tag: 'NIA',
            schemaOrgTag: null,
            total: 2.2232699998843266,
            hasRDI: true,
            daily: 13.89543749927704,
            unit: 'mg'
          },
          {
            label: 'Vitamin B6',
            tag: 'VITB6A',
            schemaOrgTag: null,
            total: 0.02359199999955295,
            hasRDI: true,
            daily: 1.8147692307348422,
            unit: 'mg'
          },
          {
            label: 'Folate equivalent (total)',
            tag: 'FOLDFE',
            schemaOrgTag: null,
            total: 8.941999999928958,
            hasRDI: true,
            daily: 2.2354999999822396,
            unit: 'µg'
          },
          {
            label: 'Folate (food)',
            tag: 'FOLFD',
            schemaOrgTag: null,
            total: 8.941999999928958,
            hasRDI: false,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Folic acid',
            tag: 'FOLAC',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: false,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Vitamin B12',
            tag: 'VITB12',
            schemaOrgTag: null,
            total: 0.1680799999971583,
            hasRDI: true,
            daily: 7.003333333214931,
            unit: 'µg'
          },
          {
            label: 'Vitamin D',
            tag: 'VITD',
            schemaOrgTag: null,
            total: 0.07639999999870833,
            hasRDI: true,
            daily: 0.5093333333247222,
            unit: 'µg'
          },
          {
            label: 'Vitamin E',
            tag: 'TOCPHA',
            schemaOrgTag: null,
            total: 0.08481999999896667,
            hasRDI: true,
            daily: 0.5654666666597777,
            unit: 'mg'
          },
          {
            label: 'Vitamin K',
            tag: 'VITK1',
            schemaOrgTag: null,
            total: 0.5801999999884153,
            hasRDI: true,
            daily: 0.4834999999903461,
            unit: 'µg'
          },
          {
            label: 'Sugar alcohols',
            tag: 'Sugar.alcohol',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: false,
            daily: 0.0,
            unit: 'g'
          },
          {
            label: 'Water',
            tag: 'WATER',
            schemaOrgTag: null,
            total: 246.11541999981202,
            hasRDI: false,
            daily: 0.0,
            unit: 'g'
          }
        ]
      },
      _links: {
        self: {
          title: 'Self',
          href: 'https://api.edamam.com/api/recipes/v2/25e09f000a24fe43ad27dc14bbd1cb04?type=public&app_id=2a3177b2&app_key=5c61b3aea75a67ec7ced14be8a5c81e1'
        }
      }
    },
    {
      recipe: {
        uri: 'http://www.edamam.com/ontologies/edamam.owl#recipe_2d6b5f79a65af3fa9a5722ebbd9b442a',
        label: 'Dalgona coffee',
        image:
          'https://edamam-product-images.s3.amazonaws.com/web-img/7e6/7e641b1084545d55517cbf330d3f7d42.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d64c2cfce66e93b74dea9da92ba7d41d48682875acaf267dfcbaf977254ee6c0',
        images: {
          THUMBNAIL: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/7e6/7e641b1084545d55517cbf330d3f7d42-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=481380ca6ead1d129202fd20c16a973ede03e000fd679c756d84bcaa183599ca',
            width: 100,
            height: 100
          },
          SMALL: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/7e6/7e641b1084545d55517cbf330d3f7d42-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=43a7829ac6399c982ec4b9b4cdda4596b98fa9620ebabc9f37081d22538ae490',
            width: 200,
            height: 200
          },
          REGULAR: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/7e6/7e641b1084545d55517cbf330d3f7d42.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d64c2cfce66e93b74dea9da92ba7d41d48682875acaf267dfcbaf977254ee6c0',
            width: 300,
            height: 300
          }
        },
        source: 'BBC Good Food',
        url: 'https://www.bbcgoodfood.com/recipes/dalgona-coffee',
        shareAs: 'http://www.edamam.com/recipe/dalgona-coffee-2d6b5f79a65af3fa9a5722ebbd9b442a/coffee',
        yield: 4.0,
        dietLabels: ['Balanced', 'Low-Sodium'],
        healthLabels: [
          'Kidney-Friendly',
          'Vegetarian',
          'Pescatarian',
          'Gluten-Free',
          'Wheat-Free',
          'Egg-Free',
          'Peanut-Free',
          'Tree-Nut-Free',
          'Soy-Free',
          'Fish-Free',
          'Shellfish-Free',
          'Pork-Free',
          'Red-Meat-Free',
          'Crustacean-Free',
          'Celery-Free',
          'Mustard-Free',
          'Sesame-Free',
          'Lupine-Free',
          'Mollusk-Free',
          'Alcohol-Free',
          'No oil added',
          'Kosher'
        ],
        cautions: ['Sulfites'],
        ingredientLines: ['3 tbsp instant coffee', '2 tbsp sugar', '400-500ml milk (we used whole milk)'],
        ingredients: [
          {
            text: '3 tbsp instant coffee',
            quantity: 3.0,
            measure: 'tablespoon',
            food: 'instant coffee',
            weight: 8.999999999391349,
            foodCategory: 'coffee and tea',
            foodId: 'food_aof7z08ad0qgsta38run7arojif8',
            image: 'https://www.edamam.com/food-img/336/336e810373dd353a955a6896699b586e.jpg'
          },
          {
            text: '2 tbsp sugar',
            quantity: 2.0,
            measure: 'tablespoon',
            food: 'sugar',
            weight: 24.9999999995774,
            foodCategory: 'sugars',
            foodId: 'food_axi2ijobrk819yb0adceobnhm1c2',
            image: 'https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg'
          },
          {
            text: '400-500ml milk (we used whole milk)',
            quantity: 450.0,
            measure: 'milliliter',
            food: 'milk',
            weight: 464.0974615827951,
            foodCategory: 'Milk',
            foodId: 'food_b49rs1kaw0jktabzkg2vvanvvsis',
            image: 'https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg'
          }
        ],
        calories: 411.619451561721,
        totalWeight: 498.09746158176387,
        totalTime: 8.0,
        cuisineType: ['british'],
        mealType: ['breakfast'],
        dishType: ['drinks'],
        totalNutrients: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 411.619451561721,
            unit: 'kcal'
          },
          FAT: { label: 'Fat', quantity: 15.1281675014378, unit: 'g' },
          FASAT: { label: 'Saturated', quantity: 8.67314765851793, unit: 'g' },
          FATRN: { label: 'Trans', quantity: 0.0, unit: 'g' },
          FAMS: {
            label: 'Monounsaturated',
            quantity: 3.7721613880520475,
            unit: 'g'
          },
          FAPU: {
            label: 'Polyunsaturated',
            quantity: 0.9226300500852576,
            unit: 'g'
          },
          CHOCDF: { label: 'Carbs', quantity: 54.05767815509273, unit: 'g' },
          'CHOCDF.net': {
            label: 'Carbohydrates (net)',
            quantity: 54.05767815509273,
            unit: 'g'
          },
          FIBTG: { label: 'Fiber', quantity: 0.0, unit: 'g' },
          SUGAR: { label: 'Sugars', quantity: 48.3869218095094, unit: 'g' },
          'SUGAR.added': {
            label: 'Sugars, added',
            quantity: 24.949999999578246,
            unit: 'g'
          },
          PROCNT: { label: 'Protein', quantity: 15.717070039783792, unit: 'g' },
          CHOLE: {
            label: 'Cholesterol',
            quantity: 46.40974615827951,
            unit: 'mg'
          },
          NA: { label: 'Sodium', quantity: 203.14190848037248, unit: 'mg' },
          CA: { label: 'Calcium', quantity: 537.3701315876962, unit: 'mg' },
          MG: { label: 'Magnesium', quantity: 75.83974615628922, unit: 'mg' },
          K: { label: 'Potassium', quantity: 931.2586492677653, unit: 'mg' },
          FE: { label: 'Iron', quantity: 0.5486292384477858, unit: 'mg' },
          ZN: { label: 'Zinc', quantity: 1.7511606078541695, unit: 'mg' },
          P: { label: 'Phosphorus', quantity: 417.1118677277037, unit: 'mg' },
          VITA_RAE: {
            label: 'Vitamin A',
            quantity: 213.48483232808576,
            unit: 'µg'
          },
          VITC: { label: 'Vitamin C', quantity: 0.0, unit: 'mg' },
          THIA: {
            label: 'Thiamin (B1)',
            quantity: 0.21420483232803708,
            unit: 'mg'
          },
          RIBF: {
            label: 'Riboflavin (B2)',
            quantity: 0.7957347100743931,
            unit: 'mg'
          },
          NIA: {
            label: 'Niacin (B3)',
            quantity: 2.9486167406372124,
            unit: 'mg'
          },
          VITB6A: {
            label: 'Vitamin B6',
            quantity: 0.16968508616962974,
            unit: 'mg'
          },
          FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 23.204873079139755,
            unit: 'µg'
          },
          FOLFD: {
            label: 'Folate (food)',
            quantity: 23.204873079139755,
            unit: 'µg'
          },
          FOLAC: { label: 'Folic acid', quantity: 0.0, unit: 'µg' },
          VITB12: {
            label: 'Vitamin B12',
            quantity: 2.088438577122578,
            unit: 'µg'
          },
          VITD: { label: 'Vitamin D', quantity: 6.033267000576337, unit: 'µg' },
          TOCPHA: {
            label: 'Vitamin E',
            quantity: 0.3248682231079566,
            unit: 'mg'
          },
          VITK1: {
            label: 'Vitamin K',
            quantity: 1.5632923847368208,
            unit: 'µg'
          },
          'Sugar.alcohol': { label: 'Sugar alcohol', quantity: 0.0, unit: 'g' },
          WATER: { label: 'Water', quantity: 409.29309289289836, unit: 'g' }
        },
        totalDaily: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 20.58097257808605,
            unit: '%'
          },
          FAT: { label: 'Fat', quantity: 23.274103848365844, unit: '%' },
          FASAT: {
            label: 'Saturated',
            quantity: 43.365738292589654,
            unit: '%'
          },
          CHOCDF: { label: 'Carbs', quantity: 18.019226051697576, unit: '%' },
          FIBTG: { label: 'Fiber', quantity: 0.0, unit: '%' },
          PROCNT: { label: 'Protein', quantity: 31.434140079567584, unit: '%' },
          CHOLE: {
            label: 'Cholesterol',
            quantity: 15.46991538609317,
            unit: '%'
          },
          NA: { label: 'Sodium', quantity: 8.464246186682187, unit: '%' },
          CA: { label: 'Calcium', quantity: 53.737013158769614, unit: '%' },
          MG: { label: 'Magnesium', quantity: 18.0570824181641, unit: '%' },
          K: { label: 'Potassium', quantity: 19.814013814207772, unit: '%' },
          FE: { label: 'Iron', quantity: 3.04794021359881, unit: '%' },
          ZN: { label: 'Zinc', quantity: 15.919641889583358, unit: '%' },
          P: { label: 'Phosphorus', quantity: 59.58740967538625, unit: '%' },
          VITA_RAE: {
            label: 'Vitamin A',
            quantity: 23.720536925342863,
            unit: '%'
          },
          VITC: { label: 'Vitamin C', quantity: 0.0, unit: '%' },
          THIA: {
            label: 'Thiamin (B1)',
            quantity: 17.85040269400309,
            unit: '%'
          },
          RIBF: {
            label: 'Riboflavin (B2)',
            quantity: 61.21036231341485,
            unit: '%'
          },
          NIA: {
            label: 'Niacin (B3)',
            quantity: 18.428854628982577,
            unit: '%'
          },
          VITB6A: {
            label: 'Vitamin B6',
            quantity: 13.052698936125365,
            unit: '%'
          },
          FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 5.801218269784939,
            unit: '%'
          },
          VITB12: {
            label: 'Vitamin B12',
            quantity: 87.0182740467741,
            unit: '%'
          },
          VITD: { label: 'Vitamin D', quantity: 40.22178000384224, unit: '%' },
          TOCPHA: {
            label: 'Vitamin E',
            quantity: 2.165788154053044,
            unit: '%'
          },
          VITK1: {
            label: 'Vitamin K',
            quantity: 1.3027436539473505,
            unit: '%'
          }
        },
        digest: [
          {
            label: 'Fat',
            tag: 'FAT',
            schemaOrgTag: 'fatContent',
            total: 15.1281675014378,
            hasRDI: true,
            daily: 23.274103848365844,
            unit: 'g',
            sub: [
              {
                label: 'Saturated',
                tag: 'FASAT',
                schemaOrgTag: 'saturatedFatContent',
                total: 8.67314765851793,
                hasRDI: true,
                daily: 43.365738292589654,
                unit: 'g'
              },
              {
                label: 'Trans',
                tag: 'FATRN',
                schemaOrgTag: 'transFatContent',
                total: 0.0,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Monounsaturated',
                tag: 'FAMS',
                schemaOrgTag: null,
                total: 3.7721613880520475,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Polyunsaturated',
                tag: 'FAPU',
                schemaOrgTag: null,
                total: 0.9226300500852576,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              }
            ]
          },
          {
            label: 'Carbs',
            tag: 'CHOCDF',
            schemaOrgTag: 'carbohydrateContent',
            total: 54.05767815509273,
            hasRDI: true,
            daily: 18.019226051697576,
            unit: 'g',
            sub: [
              {
                label: 'Carbs (net)',
                tag: 'CHOCDF.net',
                schemaOrgTag: null,
                total: 54.05767815509273,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Fiber',
                tag: 'FIBTG',
                schemaOrgTag: 'fiberContent',
                total: 0.0,
                hasRDI: true,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Sugars',
                tag: 'SUGAR',
                schemaOrgTag: 'sugarContent',
                total: 48.3869218095094,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Sugars, added',
                tag: 'SUGAR.added',
                schemaOrgTag: null,
                total: 24.949999999578246,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              }
            ]
          },
          {
            label: 'Protein',
            tag: 'PROCNT',
            schemaOrgTag: 'proteinContent',
            total: 15.717070039783792,
            hasRDI: true,
            daily: 31.434140079567584,
            unit: 'g'
          },
          {
            label: 'Cholesterol',
            tag: 'CHOLE',
            schemaOrgTag: 'cholesterolContent',
            total: 46.40974615827951,
            hasRDI: true,
            daily: 15.46991538609317,
            unit: 'mg'
          },
          {
            label: 'Sodium',
            tag: 'NA',
            schemaOrgTag: 'sodiumContent',
            total: 203.14190848037248,
            hasRDI: true,
            daily: 8.464246186682187,
            unit: 'mg'
          },
          {
            label: 'Calcium',
            tag: 'CA',
            schemaOrgTag: null,
            total: 537.3701315876962,
            hasRDI: true,
            daily: 53.737013158769614,
            unit: 'mg'
          },
          {
            label: 'Magnesium',
            tag: 'MG',
            schemaOrgTag: null,
            total: 75.83974615628922,
            hasRDI: true,
            daily: 18.0570824181641,
            unit: 'mg'
          },
          {
            label: 'Potassium',
            tag: 'K',
            schemaOrgTag: null,
            total: 931.2586492677653,
            hasRDI: true,
            daily: 19.814013814207772,
            unit: 'mg'
          },
          {
            label: 'Iron',
            tag: 'FE',
            schemaOrgTag: null,
            total: 0.5486292384477858,
            hasRDI: true,
            daily: 3.04794021359881,
            unit: 'mg'
          },
          {
            label: 'Zinc',
            tag: 'ZN',
            schemaOrgTag: null,
            total: 1.7511606078541695,
            hasRDI: true,
            daily: 15.919641889583358,
            unit: 'mg'
          },
          {
            label: 'Phosphorus',
            tag: 'P',
            schemaOrgTag: null,
            total: 417.1118677277037,
            hasRDI: true,
            daily: 59.58740967538625,
            unit: 'mg'
          },
          {
            label: 'Vitamin A',
            tag: 'VITA_RAE',
            schemaOrgTag: null,
            total: 213.48483232808576,
            hasRDI: true,
            daily: 23.720536925342863,
            unit: 'µg'
          },
          {
            label: 'Vitamin C',
            tag: 'VITC',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: true,
            daily: 0.0,
            unit: 'mg'
          },
          {
            label: 'Thiamin (B1)',
            tag: 'THIA',
            schemaOrgTag: null,
            total: 0.21420483232803708,
            hasRDI: true,
            daily: 17.85040269400309,
            unit: 'mg'
          },
          {
            label: 'Riboflavin (B2)',
            tag: 'RIBF',
            schemaOrgTag: null,
            total: 0.7957347100743931,
            hasRDI: true,
            daily: 61.21036231341485,
            unit: 'mg'
          },
          {
            label: 'Niacin (B3)',
            tag: 'NIA',
            schemaOrgTag: null,
            total: 2.9486167406372124,
            hasRDI: true,
            daily: 18.428854628982577,
            unit: 'mg'
          },
          {
            label: 'Vitamin B6',
            tag: 'VITB6A',
            schemaOrgTag: null,
            total: 0.16968508616962974,
            hasRDI: true,
            daily: 13.052698936125365,
            unit: 'mg'
          },
          {
            label: 'Folate equivalent (total)',
            tag: 'FOLDFE',
            schemaOrgTag: null,
            total: 23.204873079139755,
            hasRDI: true,
            daily: 5.801218269784939,
            unit: 'µg'
          },
          {
            label: 'Folate (food)',
            tag: 'FOLFD',
            schemaOrgTag: null,
            total: 23.204873079139755,
            hasRDI: false,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Folic acid',
            tag: 'FOLAC',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: false,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Vitamin B12',
            tag: 'VITB12',
            schemaOrgTag: null,
            total: 2.088438577122578,
            hasRDI: true,
            daily: 87.0182740467741,
            unit: 'µg'
          },
          {
            label: 'Vitamin D',
            tag: 'VITD',
            schemaOrgTag: null,
            total: 6.033267000576337,
            hasRDI: true,
            daily: 40.22178000384224,
            unit: 'µg'
          },
          {
            label: 'Vitamin E',
            tag: 'TOCPHA',
            schemaOrgTag: null,
            total: 0.3248682231079566,
            hasRDI: true,
            daily: 2.165788154053044,
            unit: 'mg'
          },
          {
            label: 'Vitamin K',
            tag: 'VITK1',
            schemaOrgTag: null,
            total: 1.5632923847368208,
            hasRDI: true,
            daily: 1.3027436539473505,
            unit: 'µg'
          },
          {
            label: 'Sugar alcohols',
            tag: 'Sugar.alcohol',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: false,
            daily: 0.0,
            unit: 'g'
          },
          {
            label: 'Water',
            tag: 'WATER',
            schemaOrgTag: null,
            total: 409.29309289289836,
            hasRDI: false,
            daily: 0.0,
            unit: 'g'
          }
        ]
      },
      _links: {
        self: {
          title: 'Self',
          href: 'https://api.edamam.com/api/recipes/v2/2d6b5f79a65af3fa9a5722ebbd9b442a?type=public&app_id=2a3177b2&app_key=5c61b3aea75a67ec7ced14be8a5c81e1'
        }
      }
    },
    {
      recipe: {
        uri: 'http://www.edamam.com/ontologies/edamam.owl#recipe_325688ac0730799a40af596b5cfbbceb',
        label: 'Thai Iced Coffee',
        image:
          'https://edamam-product-images.s3.amazonaws.com/web-img/9fe/9febad522d91c11a6ec95a6648ee27ca.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8135e9302cc902ee99697d06bfbfce9de8a8c1f30ab04fb740875c299cadd0d0',
        images: {
          THUMBNAIL: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/9fe/9febad522d91c11a6ec95a6648ee27ca-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=099b9ff6d6b44a5b90214037f885fa620c87c684379645baca6fa37309a5e8e1',
            width: 100,
            height: 100
          },
          SMALL: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/9fe/9febad522d91c11a6ec95a6648ee27ca-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=887d309bcd6dba13913733a1cdc9fad40c0c01f73b50fea69127742151bab49b',
            width: 200,
            height: 200
          },
          REGULAR: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/9fe/9febad522d91c11a6ec95a6648ee27ca.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8135e9302cc902ee99697d06bfbfce9de8a8c1f30ab04fb740875c299cadd0d0',
            width: 300,
            height: 300
          },
          LARGE: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/9fe/9febad522d91c11a6ec95a6648ee27ca-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c49e87d58487aeec8f102815ca4d6370baa4283193417ef18255215af0d2abe5',
            width: 600,
            height: 600
          }
        },
        source: 'Saveur',
        url: 'http://www.saveur.com/article/Recipes/Classic-Thai-Iced-Coffee',
        shareAs: 'http://www.edamam.com/recipe/thai-iced-coffee-325688ac0730799a40af596b5cfbbceb/coffee',
        yield: 6.0,
        dietLabels: ['Low-Sodium'],
        healthLabels: [
          'Vegetarian',
          'Pescatarian',
          'Mediterranean',
          'Gluten-Free',
          'Wheat-Free',
          'Egg-Free',
          'Peanut-Free',
          'Tree-Nut-Free',
          'Soy-Free',
          'Fish-Free',
          'Shellfish-Free',
          'Pork-Free',
          'Red-Meat-Free',
          'Crustacean-Free',
          'Celery-Free',
          'Mustard-Free',
          'Sesame-Free',
          'Lupine-Free',
          'Mollusk-Free',
          'Alcohol-Free',
          'No oil added',
          'Sulfite-Free',
          'Kosher'
        ],
        cautions: ['Sulfites'],
        ingredientLines: ['1 cup ground coffee', '1 cup sweetened condensed milk', '¾ cup milk'],
        ingredients: [
          {
            text: '1 cup ground coffee',
            quantity: 1.0,
            measure: 'cup',
            food: 'ground coffee',
            weight: 47.99999999756539,
            foodCategory: 'coffee and tea',
            foodId: 'food_aof7z08ad0qgsta38run7arojif8',
            image: 'https://www.edamam.com/food-img/336/336e810373dd353a955a6896699b586e.jpg'
          },
          {
            text: '1 cup sweetened condensed milk',
            quantity: 1.0,
            measure: 'cup',
            food: 'sweetened condensed milk',
            weight: 306.0,
            foodCategory: 'Milk',
            foodId: 'food_a89byenbz1jssabxmx7i6aa77jz1',
            image: 'https://www.edamam.com/food-img/bc9/bc97e9aa15ccef74dbad4d6267e30e3f.jpg'
          },
          {
            text: '¾ cup milk',
            quantity: 0.75,
            measure: 'cup',
            food: 'milk',
            weight: 183.0,
            foodCategory: 'Milk',
            foodId: 'food_b49rs1kaw0jktabzkg2vvanvvsis',
            image: 'https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg'
          }
        ],
        calories: 1263.3299999914059,
        totalWeight: 536.9999999975654,
        totalTime: 0.0,
        cuisineType: ['south east asian'],
        mealType: ['teatime'],
        dishType: ['drinks'],
        totalNutrients: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 1263.3299999914059,
            unit: 'kcal'
          },
          FAT: { label: 'Fat', quantity: 32.80949999998783, unit: 'g' },
          FASAT: {
            label: 'Saturated',
            quantity: 20.294669999995204,
            unit: 'g'
          },
          FATRN: { label: 'Trans', quantity: 0.0, unit: 'g' },
          FAMS: {
            label: 'Monounsaturated',
            quantity: 8.932259999999003,
            unit: 'g'
          },
          FAPU: {
            label: 'Polyunsaturated',
            quantity: 1.4821499999952281,
            unit: 'g'
          },
          CHOCDF: { label: 'Carbs', quantity: 211.4399999981643, unit: 'g' },
          'CHOCDF.net': {
            label: 'Carbohydrates (net)',
            quantity: 211.4399999981643,
            unit: 'g'
          },
          FIBTG: { label: 'Fiber', quantity: 0.0, unit: 'g' },
          SUGAR: { label: 'Sugars', quantity: 175.7055, unit: 'g' },
          'SUGAR.added': { label: 'Sugars, added', quantity: 0.0, unit: 'g' },
          PROCNT: { label: 'Protein', quantity: 35.82509999970298, unit: 'g' },
          CHOLE: { label: 'Cholesterol', quantity: 122.34, unit: 'mg' },
          NA: { label: 'Sodium', quantity: 485.0699999990992, unit: 'mg' },
          CA: { label: 'Calcium', quantity: 1143.509999996567, unit: 'mg' },
          MG: { label: 'Magnesium', quantity: 254.81999999203884, unit: 'mg' },
          K: { label: 'Potassium', quantity: 3073.6199999139367, unit: 'mg' },
          FE: { label: 'Iron', quantity: 2.7530999998926338, unit: 'mg' },
          ZN: { label: 'Zinc', quantity: 3.7214999999914786, unit: 'mg' },
          P: { label: 'Phosphorus', quantity: 1073.3399999926232, unit: 'mg' },
          VITA_RAE: { label: 'Vitamin A', quantity: 310.62, unit: 'µg' },
          VITC: { label: 'Vitamin C', quantity: 7.956, unit: 'mg' },
          THIA: {
            label: 'Thiamin (B1)',
            quantity: 0.36341999999980523,
            unit: 'mg'
          },
          RIBF: {
            label: 'Riboflavin (B2)',
            quantity: 1.6177499999981984,
            unit: 'mg'
          },
          NIA: {
            label: 'Niacin (B3)',
            quantity: 14.328509999314097,
            unit: 'mg'
          },
          VITB6A: {
            label: 'Vitamin B6',
            quantity: 0.23585999999929397,
            unit: 'mg'
          },
          FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 42.81,
            unit: 'µg'
          },
          FOLFD: { label: 'Folate (food)', quantity: 42.81, unit: 'µg' },
          FOLAC: { label: 'Folic acid', quantity: 0.0, unit: 'µg' },
          VITB12: { label: 'Vitamin B12', quantity: 2.1699, unit: 'µg' },
          VITD: { label: 'Vitamin D', quantity: 2.991, unit: 'µg' },
          TOCPHA: { label: 'Vitamin E', quantity: 0.6177, unit: 'mg' },
          VITK1: {
            label: 'Vitamin K',
            quantity: 3.2969999999537425,
            unit: 'µg'
          },
          'Sugar.alcohol': { label: 'Sugar alcohol', quantity: 0.0, unit: 'g' },
          WATER: { label: 'Water', quantity: 245.8754999999245, unit: 'g' }
        },
        totalDaily: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 63.1664999995703,
            unit: '%'
          },
          FAT: { label: 'Fat', quantity: 50.47615384613512, unit: '%' },
          FASAT: {
            label: 'Saturated',
            quantity: 101.47334999997602,
            unit: '%'
          },
          CHOCDF: { label: 'Carbs', quantity: 70.4799999993881, unit: '%' },
          FIBTG: { label: 'Fiber', quantity: 0.0, unit: '%' },
          PROCNT: { label: 'Protein', quantity: 71.65019999940596, unit: '%' },
          CHOLE: { label: 'Cholesterol', quantity: 40.78, unit: '%' },
          NA: { label: 'Sodium', quantity: 20.211249999962465, unit: '%' },
          CA: { label: 'Calcium', quantity: 114.35099999965671, unit: '%' },
          MG: { label: 'Magnesium', quantity: 60.671428569533056, unit: '%' },
          K: { label: 'Potassium', quantity: 65.39617021093481, unit: '%' },
          FE: { label: 'Iron', quantity: 15.29499999940352, unit: '%' },
          ZN: { label: 'Zinc', quantity: 33.831818181740715, unit: '%' },
          P: { label: 'Phosphorus', quantity: 153.33428571323188, unit: '%' },
          VITA_RAE: {
            label: 'Vitamin A',
            quantity: 34.513333333333335,
            unit: '%'
          },
          VITC: { label: 'Vitamin C', quantity: 8.84, unit: '%' },
          THIA: {
            label: 'Thiamin (B1)',
            quantity: 30.28499999998377,
            unit: '%'
          },
          RIBF: {
            label: 'Riboflavin (B2)',
            quantity: 124.44230769216911,
            unit: '%'
          },
          NIA: { label: 'Niacin (B3)', quantity: 89.5531874957131, unit: '%' },
          VITB6A: {
            label: 'Vitamin B6',
            quantity: 18.143076923022612,
            unit: '%'
          },
          FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 10.7025,
            unit: '%'
          },
          VITB12: {
            label: 'Vitamin B12',
            quantity: 90.41250000000001,
            unit: '%'
          },
          VITD: { label: 'Vitamin D', quantity: 19.94, unit: '%' },
          TOCPHA: { label: 'Vitamin E', quantity: 4.118, unit: '%' },
          VITK1: { label: 'Vitamin K', quantity: 2.747499999961452, unit: '%' }
        },
        digest: [
          {
            label: 'Fat',
            tag: 'FAT',
            schemaOrgTag: 'fatContent',
            total: 32.80949999998783,
            hasRDI: true,
            daily: 50.47615384613512,
            unit: 'g',
            sub: [
              {
                label: 'Saturated',
                tag: 'FASAT',
                schemaOrgTag: 'saturatedFatContent',
                total: 20.294669999995204,
                hasRDI: true,
                daily: 101.47334999997602,
                unit: 'g'
              },
              {
                label: 'Trans',
                tag: 'FATRN',
                schemaOrgTag: 'transFatContent',
                total: 0.0,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Monounsaturated',
                tag: 'FAMS',
                schemaOrgTag: null,
                total: 8.932259999999003,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Polyunsaturated',
                tag: 'FAPU',
                schemaOrgTag: null,
                total: 1.4821499999952281,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              }
            ]
          },
          {
            label: 'Carbs',
            tag: 'CHOCDF',
            schemaOrgTag: 'carbohydrateContent',
            total: 211.4399999981643,
            hasRDI: true,
            daily: 70.4799999993881,
            unit: 'g',
            sub: [
              {
                label: 'Carbs (net)',
                tag: 'CHOCDF.net',
                schemaOrgTag: null,
                total: 211.4399999981643,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Fiber',
                tag: 'FIBTG',
                schemaOrgTag: 'fiberContent',
                total: 0.0,
                hasRDI: true,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Sugars',
                tag: 'SUGAR',
                schemaOrgTag: 'sugarContent',
                total: 175.7055,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Sugars, added',
                tag: 'SUGAR.added',
                schemaOrgTag: null,
                total: 0.0,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              }
            ]
          },
          {
            label: 'Protein',
            tag: 'PROCNT',
            schemaOrgTag: 'proteinContent',
            total: 35.82509999970298,
            hasRDI: true,
            daily: 71.65019999940596,
            unit: 'g'
          },
          {
            label: 'Cholesterol',
            tag: 'CHOLE',
            schemaOrgTag: 'cholesterolContent',
            total: 122.34,
            hasRDI: true,
            daily: 40.78,
            unit: 'mg'
          },
          {
            label: 'Sodium',
            tag: 'NA',
            schemaOrgTag: 'sodiumContent',
            total: 485.0699999990992,
            hasRDI: true,
            daily: 20.211249999962465,
            unit: 'mg'
          },
          {
            label: 'Calcium',
            tag: 'CA',
            schemaOrgTag: null,
            total: 1143.509999996567,
            hasRDI: true,
            daily: 114.35099999965671,
            unit: 'mg'
          },
          {
            label: 'Magnesium',
            tag: 'MG',
            schemaOrgTag: null,
            total: 254.81999999203884,
            hasRDI: true,
            daily: 60.671428569533056,
            unit: 'mg'
          },
          {
            label: 'Potassium',
            tag: 'K',
            schemaOrgTag: null,
            total: 3073.6199999139367,
            hasRDI: true,
            daily: 65.39617021093481,
            unit: 'mg'
          },
          {
            label: 'Iron',
            tag: 'FE',
            schemaOrgTag: null,
            total: 2.7530999998926338,
            hasRDI: true,
            daily: 15.29499999940352,
            unit: 'mg'
          },
          {
            label: 'Zinc',
            tag: 'ZN',
            schemaOrgTag: null,
            total: 3.7214999999914786,
            hasRDI: true,
            daily: 33.831818181740715,
            unit: 'mg'
          },
          {
            label: 'Phosphorus',
            tag: 'P',
            schemaOrgTag: null,
            total: 1073.3399999926232,
            hasRDI: true,
            daily: 153.33428571323188,
            unit: 'mg'
          },
          {
            label: 'Vitamin A',
            tag: 'VITA_RAE',
            schemaOrgTag: null,
            total: 310.62,
            hasRDI: true,
            daily: 34.513333333333335,
            unit: 'µg'
          },
          {
            label: 'Vitamin C',
            tag: 'VITC',
            schemaOrgTag: null,
            total: 7.956,
            hasRDI: true,
            daily: 8.84,
            unit: 'mg'
          },
          {
            label: 'Thiamin (B1)',
            tag: 'THIA',
            schemaOrgTag: null,
            total: 0.36341999999980523,
            hasRDI: true,
            daily: 30.28499999998377,
            unit: 'mg'
          },
          {
            label: 'Riboflavin (B2)',
            tag: 'RIBF',
            schemaOrgTag: null,
            total: 1.6177499999981984,
            hasRDI: true,
            daily: 124.44230769216911,
            unit: 'mg'
          },
          {
            label: 'Niacin (B3)',
            tag: 'NIA',
            schemaOrgTag: null,
            total: 14.328509999314097,
            hasRDI: true,
            daily: 89.5531874957131,
            unit: 'mg'
          },
          {
            label: 'Vitamin B6',
            tag: 'VITB6A',
            schemaOrgTag: null,
            total: 0.23585999999929397,
            hasRDI: true,
            daily: 18.143076923022612,
            unit: 'mg'
          },
          {
            label: 'Folate equivalent (total)',
            tag: 'FOLDFE',
            schemaOrgTag: null,
            total: 42.81,
            hasRDI: true,
            daily: 10.7025,
            unit: 'µg'
          },
          {
            label: 'Folate (food)',
            tag: 'FOLFD',
            schemaOrgTag: null,
            total: 42.81,
            hasRDI: false,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Folic acid',
            tag: 'FOLAC',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: false,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Vitamin B12',
            tag: 'VITB12',
            schemaOrgTag: null,
            total: 2.1699,
            hasRDI: true,
            daily: 90.41250000000001,
            unit: 'µg'
          },
          {
            label: 'Vitamin D',
            tag: 'VITD',
            schemaOrgTag: null,
            total: 2.991,
            hasRDI: true,
            daily: 19.94,
            unit: 'µg'
          },
          {
            label: 'Vitamin E',
            tag: 'TOCPHA',
            schemaOrgTag: null,
            total: 0.6177,
            hasRDI: true,
            daily: 4.118,
            unit: 'mg'
          },
          {
            label: 'Vitamin K',
            tag: 'VITK1',
            schemaOrgTag: null,
            total: 3.2969999999537425,
            hasRDI: true,
            daily: 2.747499999961452,
            unit: 'µg'
          },
          {
            label: 'Sugar alcohols',
            tag: 'Sugar.alcohol',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: false,
            daily: 0.0,
            unit: 'g'
          },
          {
            label: 'Water',
            tag: 'WATER',
            schemaOrgTag: null,
            total: 245.8754999999245,
            hasRDI: false,
            daily: 0.0,
            unit: 'g'
          }
        ]
      },
      _links: {
        self: {
          title: 'Self',
          href: 'https://api.edamam.com/api/recipes/v2/325688ac0730799a40af596b5cfbbceb?type=public&app_id=2a3177b2&app_key=5c61b3aea75a67ec7ced14be8a5c81e1'
        }
      }
    },
    {
      recipe: {
        uri: 'http://www.edamam.com/ontologies/edamam.owl#recipe_4e7496f1bcf738645fb9e1f3ad091fe9',
        label: 'Coffee Butter recipes',
        image:
          'https://edamam-product-images.s3.amazonaws.com/web-img/58f/58f769881cb9d199958441b75be0eb35?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ec2b91d13e550ee8cb17728f212b551dfc12687143506666038468ef1a8e1364',
        images: {
          THUMBNAIL: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/58f/58f769881cb9d199958441b75be0eb35-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b36e81b24343e26ff2171e388072f2f579216fe5059604709312b5809bebf829',
            width: 100,
            height: 100
          },
          SMALL: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/58f/58f769881cb9d199958441b75be0eb35-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=7019d7b47b62d5ebff82738382c7312d71ddcd6146b4db7cb424138ee23f58aa',
            width: 200,
            height: 200
          },
          REGULAR: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/58f/58f769881cb9d199958441b75be0eb35?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ec2b91d13e550ee8cb17728f212b551dfc12687143506666038468ef1a8e1364',
            width: 300,
            height: 300
          }
        },
        source: 'Tasting Table',
        url: 'https://www.tastingtable.com/cook/recipes/coffee-butter-recipe?utm_medium=email&utm_source=TT&utm_campaign=Weekend&utm_content=Editorial',
        shareAs: 'http://www.edamam.com/recipe/coffee-butter-recipes-4e7496f1bcf738645fb9e1f3ad091fe9/coffee',
        yield: 4.0,
        dietLabels: ['Low-Carb'],
        healthLabels: [
          'Vegetarian',
          'Pescatarian',
          'Gluten-Free',
          'Wheat-Free',
          'Egg-Free',
          'Peanut-Free',
          'Tree-Nut-Free',
          'Soy-Free',
          'Fish-Free',
          'Shellfish-Free',
          'Pork-Free',
          'Red-Meat-Free',
          'Crustacean-Free',
          'Celery-Free',
          'Mustard-Free',
          'Sesame-Free',
          'Lupine-Free',
          'Mollusk-Free',
          'Alcohol-Free',
          'No oil added',
          'Kosher'
        ],
        cautions: ['Sulfites'],
        ingredientLines: [
          '2 cups heavy cream',
          '¾ cup ground coffee',
          "2 tablespoons confectioners' sugar",
          '½ teaspoon kosher salt',
          'salt'
        ],
        ingredients: [
          {
            text: '2 cups heavy cream',
            quantity: 2.0,
            measure: 'cup',
            food: 'heavy cream',
            weight: 476.0,
            foodCategory: 'Dairy',
            foodId: 'food_bgtkr21b5v16mca246x9ebnaswyo',
            image: 'https://www.edamam.com/food-img/484/4848d71f6a14dd5076083f5e17925420.jpg'
          },
          {
            text: '¾ cup ground coffee',
            quantity: 0.75,
            measure: 'cup',
            food: 'ground coffee',
            weight: 35.99999999817404,
            foodCategory: 'coffee and tea',
            foodId: 'food_aof7z08ad0qgsta38run7arojif8',
            image: 'https://www.edamam.com/food-img/336/336e810373dd353a955a6896699b586e.jpg'
          },
          {
            text: "2 tablespoons confectioners' sugar",
            quantity: 2.0,
            measure: 'tablespoon',
            food: "confectioners' sugar",
            weight: 16.0,
            foodCategory: 'sugars',
            foodId: 'food_b7rbtshahirxisbtyc77sbv8jdue',
            image: 'https://www.edamam.com/food-img/290/290624aa4c0e279551e462443e38bb40.jpg'
          },
          {
            text: '½ teaspoon kosher salt',
            quantity: 0.5,
            measure: 'teaspoon',
            food: 'kosher salt',
            weight: 2.4270833334564377,
            foodCategory: 'Condiments and sauces',
            foodId: 'food_a1vgrj1bs8rd1majvmd9ubz8ttkg',
            image: 'https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg'
          },
          {
            text: 'salt',
            quantity: 0.0,
            measure: null,
            food: 'salt',
            weight: 3.182562499989783,
            foodCategory: 'Condiments and sauces',
            foodId: 'food_btxz81db72hwbra2pncvebzzzum9',
            image: 'https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg'
          }
        ],
        calories: 1831.5199999935542,
        totalWeight: 530.666116516045,
        totalTime: 15.0,
        cuisineType: ['american'],
        mealType: ['breakfast'],
        dishType: ['condiments and sauces'],
        totalNutrients: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 1831.5199999935542,
            unit: 'kcal'
          },
          FAT: { label: 'Fat', quantity: 176.2999999999909, unit: 'g' },
          FASAT: { label: 'Saturated', quantity: 109.7032399999964, unit: 'g' },
          FATRN: { label: 'Trans', quantity: 0.0, unit: 'g' },
          FAMS: {
            label: 'Monounsaturated',
            quantity: 50.880119999999245,
            unit: 'g'
          },
          FAPU: {
            label: 'Polyunsaturated',
            quantity: 6.610799999996421,
            unit: 'g'
          },
          CHOCDF: { label: 'Carbs', quantity: 56.38759999862323, unit: 'g' },
          'CHOCDF.net': {
            label: 'Carbohydrates (net)',
            quantity: 56.38759999862323,
            unit: 'g'
          },
          FIBTG: { label: 'Fiber', quantity: 0.0, unit: 'g' },
          SUGAR: { label: 'Sugars', quantity: 28.93, unit: 'g' },
          'SUGAR.added': {
            label: 'Sugars, added',
            quantity: 15.649600000000001,
            unit: 'g'
          },
          PROCNT: { label: 'Protein', quantity: 14.149999999777233, unit: 'g' },
          CHOLE: { label: 'Cholesterol', quantity: 652.12, unit: 'mg' },
          NA: { label: 'Sodium', quantity: 1227.8534399957534, unit: 'mg' },
          CA: { label: 'Calcium', quantity: 360.9598679617144, unit: 'mg' },
          MG: { label: 'Magnesium', quantity: 151.06666115920783, unit: 'mg' },
          K: { label: 'Potassium', quantity: 1630.1332892568819, unit: 'mg' },
          FE: { label: 'Iron', quantity: 1.7487981844284497, unit: 'mg' },
          ZN: { label: 'Zinc', quantity: 1.2250661165114802, unit: 'mg' },
          P: { label: 'Phosphorus', quantity: 404.19999999446736, unit: 'mg' },
          VITA_RAE: { label: 'Vitamin A', quantity: 1956.36, unit: 'µg' },
          VITC: { label: 'Vitamin C', quantity: 2.856, unit: 'mg' },
          THIA: {
            label: 'Thiamin (B1)',
            quantity: 0.10759999999985392,
            unit: 'mg'
          },
          RIBF: {
            label: 'Riboflavin (B2)',
            quantity: 0.5532799999986487,
            unit: 'mg'
          },
          NIA: {
            label: 'Niacin (B3)',
            quantity: 10.327919999485571,
            unit: 'mg'
          },
          VITB6A: {
            label: 'Vitamin B6',
            quantity: 0.13419999999947047,
            unit: 'mg'
          },
          FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 19.04,
            unit: 'µg'
          },
          FOLFD: { label: 'Folate (food)', quantity: 19.04, unit: 'µg' },
          FOLAC: { label: 'Folic acid', quantity: 0.0, unit: 'µg' },
          VITB12: {
            label: 'Vitamin B12',
            quantity: 0.8567999999999999,
            unit: 'µg'
          },
          VITD: { label: 'Vitamin D', quantity: 3.332, unit: 'µg' },
          TOCPHA: { label: 'Vitamin E', quantity: 5.0456, unit: 'mg' },
          VITK1: {
            label: 'Vitamin K',
            quantity: 15.915999999965306,
            unit: 'µg'
          },
          'Sugar.alcohol': { label: 'Sugar alcohol', quantity: 0.0, unit: 'g' },
          WATER: { label: 'Water', quantity: 275.8577322329791, unit: 'g' }
        },
        totalDaily: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 91.5759999996777,
            unit: '%'
          },
          FAT: { label: 'Fat', quantity: 271.23076923075524, unit: '%' },
          FASAT: { label: 'Saturated', quantity: 548.5161999999821, unit: '%' },
          CHOCDF: { label: 'Carbs', quantity: 18.795866666207743, unit: '%' },
          FIBTG: { label: 'Fiber', quantity: 0.0, unit: '%' },
          PROCNT: { label: 'Protein', quantity: 28.299999999554466, unit: '%' },
          CHOLE: {
            label: 'Cholesterol',
            quantity: 217.37333333333333,
            unit: '%'
          },
          NA: { label: 'Sodium', quantity: 51.16055999982306, unit: '%' },
          CA: { label: 'Calcium', quantity: 36.09598679617144, unit: '%' },
          MG: { label: 'Magnesium', quantity: 35.96825265695425, unit: '%' },
          K: { label: 'Potassium', quantity: 34.68368700546557, unit: '%' },
          FE: { label: 'Iron', quantity: 9.715545469046942, unit: '%' },
          ZN: { label: 'Zinc', quantity: 11.13696469555891, unit: '%' },
          P: { label: 'Phosphorus', quantity: 57.74285714206677, unit: '%' },
          VITA_RAE: {
            label: 'Vitamin A',
            quantity: 217.37333333333333,
            unit: '%'
          },
          VITC: { label: 'Vitamin C', quantity: 3.173333333333333, unit: '%' },
          THIA: {
            label: 'Thiamin (B1)',
            quantity: 8.966666666654495,
            unit: '%'
          },
          RIBF: {
            label: 'Riboflavin (B2)',
            quantity: 42.55999999989606,
            unit: '%'
          },
          NIA: { label: 'Niacin (B3)', quantity: 64.54949999678482, unit: '%' },
          VITB6A: {
            label: 'Vitamin B6',
            quantity: 10.32307692303619,
            unit: '%'
          },
          FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 4.76,
            unit: '%'
          },
          VITB12: {
            label: 'Vitamin B12',
            quantity: 35.699999999999996,
            unit: '%'
          },
          VITD: { label: 'Vitamin D', quantity: 22.21333333333333, unit: '%' },
          TOCPHA: {
            label: 'Vitamin E',
            quantity: 33.63733333333334,
            unit: '%'
          },
          VITK1: {
            label: 'Vitamin K',
            quantity: 13.263333333304422,
            unit: '%'
          }
        },
        digest: [
          {
            label: 'Fat',
            tag: 'FAT',
            schemaOrgTag: 'fatContent',
            total: 176.2999999999909,
            hasRDI: true,
            daily: 271.23076923075524,
            unit: 'g',
            sub: [
              {
                label: 'Saturated',
                tag: 'FASAT',
                schemaOrgTag: 'saturatedFatContent',
                total: 109.7032399999964,
                hasRDI: true,
                daily: 548.5161999999821,
                unit: 'g'
              },
              {
                label: 'Trans',
                tag: 'FATRN',
                schemaOrgTag: 'transFatContent',
                total: 0.0,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Monounsaturated',
                tag: 'FAMS',
                schemaOrgTag: null,
                total: 50.880119999999245,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Polyunsaturated',
                tag: 'FAPU',
                schemaOrgTag: null,
                total: 6.610799999996421,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              }
            ]
          },
          {
            label: 'Carbs',
            tag: 'CHOCDF',
            schemaOrgTag: 'carbohydrateContent',
            total: 56.38759999862323,
            hasRDI: true,
            daily: 18.795866666207743,
            unit: 'g',
            sub: [
              {
                label: 'Carbs (net)',
                tag: 'CHOCDF.net',
                schemaOrgTag: null,
                total: 56.38759999862323,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Fiber',
                tag: 'FIBTG',
                schemaOrgTag: 'fiberContent',
                total: 0.0,
                hasRDI: true,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Sugars',
                tag: 'SUGAR',
                schemaOrgTag: 'sugarContent',
                total: 28.93,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Sugars, added',
                tag: 'SUGAR.added',
                schemaOrgTag: null,
                total: 15.649600000000001,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              }
            ]
          },
          {
            label: 'Protein',
            tag: 'PROCNT',
            schemaOrgTag: 'proteinContent',
            total: 14.149999999777233,
            hasRDI: true,
            daily: 28.299999999554466,
            unit: 'g'
          },
          {
            label: 'Cholesterol',
            tag: 'CHOLE',
            schemaOrgTag: 'cholesterolContent',
            total: 652.12,
            hasRDI: true,
            daily: 217.37333333333333,
            unit: 'mg'
          },
          {
            label: 'Sodium',
            tag: 'NA',
            schemaOrgTag: 'sodiumContent',
            total: 1227.8534399957534,
            hasRDI: true,
            daily: 51.16055999982306,
            unit: 'mg'
          },
          {
            label: 'Calcium',
            tag: 'CA',
            schemaOrgTag: null,
            total: 360.9598679617144,
            hasRDI: true,
            daily: 36.09598679617144,
            unit: 'mg'
          },
          {
            label: 'Magnesium',
            tag: 'MG',
            schemaOrgTag: null,
            total: 151.06666115920783,
            hasRDI: true,
            daily: 35.96825265695425,
            unit: 'mg'
          },
          {
            label: 'Potassium',
            tag: 'K',
            schemaOrgTag: null,
            total: 1630.1332892568819,
            hasRDI: true,
            daily: 34.68368700546557,
            unit: 'mg'
          },
          {
            label: 'Iron',
            tag: 'FE',
            schemaOrgTag: null,
            total: 1.7487981844284497,
            hasRDI: true,
            daily: 9.715545469046942,
            unit: 'mg'
          },
          {
            label: 'Zinc',
            tag: 'ZN',
            schemaOrgTag: null,
            total: 1.2250661165114802,
            hasRDI: true,
            daily: 11.13696469555891,
            unit: 'mg'
          },
          {
            label: 'Phosphorus',
            tag: 'P',
            schemaOrgTag: null,
            total: 404.19999999446736,
            hasRDI: true,
            daily: 57.74285714206677,
            unit: 'mg'
          },
          {
            label: 'Vitamin A',
            tag: 'VITA_RAE',
            schemaOrgTag: null,
            total: 1956.36,
            hasRDI: true,
            daily: 217.37333333333333,
            unit: 'µg'
          },
          {
            label: 'Vitamin C',
            tag: 'VITC',
            schemaOrgTag: null,
            total: 2.856,
            hasRDI: true,
            daily: 3.173333333333333,
            unit: 'mg'
          },
          {
            label: 'Thiamin (B1)',
            tag: 'THIA',
            schemaOrgTag: null,
            total: 0.10759999999985392,
            hasRDI: true,
            daily: 8.966666666654495,
            unit: 'mg'
          },
          {
            label: 'Riboflavin (B2)',
            tag: 'RIBF',
            schemaOrgTag: null,
            total: 0.5532799999986487,
            hasRDI: true,
            daily: 42.55999999989606,
            unit: 'mg'
          },
          {
            label: 'Niacin (B3)',
            tag: 'NIA',
            schemaOrgTag: null,
            total: 10.327919999485571,
            hasRDI: true,
            daily: 64.54949999678482,
            unit: 'mg'
          },
          {
            label: 'Vitamin B6',
            tag: 'VITB6A',
            schemaOrgTag: null,
            total: 0.13419999999947047,
            hasRDI: true,
            daily: 10.32307692303619,
            unit: 'mg'
          },
          {
            label: 'Folate equivalent (total)',
            tag: 'FOLDFE',
            schemaOrgTag: null,
            total: 19.04,
            hasRDI: true,
            daily: 4.76,
            unit: 'µg'
          },
          {
            label: 'Folate (food)',
            tag: 'FOLFD',
            schemaOrgTag: null,
            total: 19.04,
            hasRDI: false,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Folic acid',
            tag: 'FOLAC',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: false,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Vitamin B12',
            tag: 'VITB12',
            schemaOrgTag: null,
            total: 0.8567999999999999,
            hasRDI: true,
            daily: 35.699999999999996,
            unit: 'µg'
          },
          {
            label: 'Vitamin D',
            tag: 'VITD',
            schemaOrgTag: null,
            total: 3.332,
            hasRDI: true,
            daily: 22.21333333333333,
            unit: 'µg'
          },
          {
            label: 'Vitamin E',
            tag: 'TOCPHA',
            schemaOrgTag: null,
            total: 5.0456,
            hasRDI: true,
            daily: 33.63733333333334,
            unit: 'mg'
          },
          {
            label: 'Vitamin K',
            tag: 'VITK1',
            schemaOrgTag: null,
            total: 15.915999999965306,
            hasRDI: true,
            daily: 13.263333333304422,
            unit: 'µg'
          },
          {
            label: 'Sugar alcohols',
            tag: 'Sugar.alcohol',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: false,
            daily: 0.0,
            unit: 'g'
          },
          {
            label: 'Water',
            tag: 'WATER',
            schemaOrgTag: null,
            total: 275.8577322329791,
            hasRDI: false,
            daily: 0.0,
            unit: 'g'
          }
        ]
      },
      _links: {
        self: {
          title: 'Self',
          href: 'https://api.edamam.com/api/recipes/v2/4e7496f1bcf738645fb9e1f3ad091fe9?type=public&app_id=2a3177b2&app_key=5c61b3aea75a67ec7ced14be8a5c81e1'
        }
      }
    },
    {
      recipe: {
        uri: 'http://www.edamam.com/ontologies/edamam.owl#recipe_ef05e990ec17b2dd8e8c0d2ce1375f0b',
        label: 'Coffee granita',
        image:
          'https://edamam-product-images.s3.amazonaws.com/web-img/dde/ddee3ef68528f3c15f04c66ad2b57a8f.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=19438a01eda259379f234a72efd92bdf71251a129a331ad315761a596e4b3e2f',
        images: {
          THUMBNAIL: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/dde/ddee3ef68528f3c15f04c66ad2b57a8f-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=10d7ecaa3c93e14aeb3e978f642d8718a299cb4eee47fcfffc99a8b5e12b1864',
            width: 100,
            height: 100
          },
          SMALL: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/dde/ddee3ef68528f3c15f04c66ad2b57a8f-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=a203eb87960b79eb6f39664c37d5be5a586ff95df611888741b4f27d23fbbd1c',
            width: 200,
            height: 200
          },
          REGULAR: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/dde/ddee3ef68528f3c15f04c66ad2b57a8f.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=19438a01eda259379f234a72efd92bdf71251a129a331ad315761a596e4b3e2f',
            width: 300,
            height: 300
          }
        },
        source: 'BBC',
        url: 'http://www.bbc.co.uk/food/recipes/coffee_granita_02612',
        shareAs: 'http://www.edamam.com/recipe/coffee-granita-ef05e990ec17b2dd8e8c0d2ce1375f0b/coffee',
        yield: 4.0,
        dietLabels: ['Low-Sodium'],
        healthLabels: [
          'Low Potassium',
          'Kidney-Friendly',
          'Vegetarian',
          'Pescatarian',
          'Gluten-Free',
          'Wheat-Free',
          'Egg-Free',
          'Peanut-Free',
          'Tree-Nut-Free',
          'Soy-Free',
          'Fish-Free',
          'Shellfish-Free',
          'Pork-Free',
          'Red-Meat-Free',
          'Crustacean-Free',
          'Celery-Free',
          'Mustard-Free',
          'Sesame-Free',
          'Lupine-Free',
          'Mollusk-Free',
          'Alcohol-Free',
          'No oil added',
          'Kosher'
        ],
        cautions: ['Sulfites'],
        ingredientLines: [
          '600ml/1 pint strong, hot espresso coffee',
          '120g/4oz caster sugar',
          '300ml/10fl oz double cream',
          '1 vanilla pod, split lengthway, seeds scraped out',
          '1 tbsp icing sugar'
        ],
        ingredients: [
          {
            text: '600ml/1 pint strong, hot espresso coffee',
            quantity: 600.0,
            measure: 'milliliter',
            food: 'coffee',
            weight: 600.5370431847317,
            foodCategory: 'coffee and tea',
            foodId: 'food_ax0a0yxbbe4hx0apiz1tla01s2w7',
            image: 'https://www.edamam.com/food-img/ee9/ee9566349cb84dfd9ddac1fdf8cbc907.jpg'
          },
          {
            text: '120g/4oz caster sugar',
            quantity: 120.0,
            measure: 'gram',
            food: 'caster sugar',
            weight: 120.0,
            foodCategory: 'sugars',
            foodId: 'food_b83hz1dbrydiwzag8btahb15lu4l',
            image: 'https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg'
          },
          {
            text: '300ml/10fl oz double cream',
            quantity: 300.0,
            measure: 'milliliter',
            food: 'cream',
            weight: 302.2973629544764,
            foodCategory: 'Dairy',
            foodId: 'food_bvhbvd7bwy6a7wamfrmvmbmen1sz',
            image: 'https://www.edamam.com/food-img/484/4848d71f6a14dd5076083f5e17925420.jpg'
          },
          {
            text: '1 vanilla pod, split lengthway, seeds scraped out',
            quantity: 1.0,
            measure: '<unit>',
            food: 'vanilla',
            weight: 5.0,
            foodCategory: 'Condiments and sauces',
            foodId: 'food_bh1wvnqaw3q7ciascfoygaabax2a',
            image: 'https://www.edamam.com/food-img/90f/90f910b0bf82750d4f6528263e014cca.jpg'
          },
          {
            text: '1 tbsp icing sugar',
            quantity: 1.0,
            measure: 'tablespoon',
            food: 'icing sugar',
            weight: 8.0,
            foodCategory: 'sugars',
            foodId: 'food_b7rbtshahirxisbtyc77sbv8jdue',
            image: 'https://www.edamam.com/food-img/290/290624aa4c0e279551e462443e38bb40.jpg'
          }
        ],
        calories: 1558.851272624791,
        totalWeight: 1035.834406139208,
        totalTime: 159.0,
        cuisineType: ['italian'],
        mealType: ['teatime'],
        dishType: ['drinks'],
        totalNutrients: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 1558.851272624791,
            unit: 'kcal'
          },
          FAT: { label: 'Fat', quantity: 111.97313170179322, unit: 'g' },
          FASAT: { label: 'Saturated', quantity: 69.63763937653871, unit: 'g' },
          FATRN: { label: 'Trans', quantity: 0.0, unit: 'g' },
          FAMS: {
            label: 'Monounsaturated',
            quantity: 32.39407676179306,
            unit: 'g'
          },
          FAPU: {
            label: 'Polyunsaturated',
            quantity: 4.159771137426354,
            unit: 'g'
          },
          CHOCDF: { label: 'Carbs', quantity: 137.0241964264299, unit: 'g' },
          'CHOCDF.net': {
            label: 'Carbohydrates (net)',
            quantity: 137.0241964264299,
            unit: 'g'
          },
          FIBTG: { label: 'Fiber', quantity: 0.0, unit: 'g' },
          SUGAR: { label: 'Sugars', quantity: 136.6513964264299, unit: 'g' },
          'SUGAR.added': {
            label: 'Sugars, added',
            quantity: 127.58479999999999,
            unit: 'g'
          },
          PROCNT: { label: 'Protein', quantity: 6.920740392388444, unit: 'g' },
          CHOLE: {
            label: 'Cholesterol',
            quantity: 414.1473872476327,
            unit: 'mg'
          },
          NA: { label: 'Sodium', quantity: 128.69373878639567, unit: 'mg' },
          CA: { label: 'Calcium', quantity: 210.33402678410434, unit: 'mg' },
          MG: { label: 'Magnesium', quantity: 39.776926702355304, unit: 'mg' },
          K: { label: 'Potassium', quantity: 530.9461733763758, unit: 'mg' },
          FE: { label: 'Iron', quantity: 0.2215429132048161, unit: 'mg' },
          ZN: { label: 'Zinc', quantity: 0.8336913434322422, unit: 'mg' },
          P: { label: 'Phosphorus', quantity: 205.74047632731734, unit: 'mg' },
          VITA_RAE: {
            label: 'Vitamin A',
            quantity: 1242.4421617428982,
            unit: 'µg'
          },
          VITC: {
            label: 'Vitamin C',
            quantity: 1.8137841777268584,
            unit: 'mg'
          },
          THIA: {
            label: 'Thiamin (B1)',
            quantity: 0.15113060589584726,
            unit: 'mg'
          },
          RIBF: {
            label: 'Riboflavin (B2)',
            quantity: 0.8180052520703202,
            unit: 'mg'
          },
          NIA: {
            label: 'Niacin (B3)',
            quantity: 1.2861717240350834,
            unit: 'mg'
          },
          VITB6A: {
            label: 'Vitamin B6',
            quantity: 0.08590268480001118,
            unit: 'mg'
          },
          FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 24.10263538187369,
            unit: 'µg'
          },
          FOLFD: {
            label: 'Folate (food)',
            quantity: 24.10263538187369,
            unit: 'µg'
          },
          FOLAC: { label: 'Folic acid', quantity: 0.0, unit: 'µg' },
          VITB12: {
            label: 'Vitamin B12',
            quantity: 0.5441352533180576,
            unit: 'µg'
          },
          VITD: {
            label: 'Vitamin D',
            quantity: 2.1160815406813347,
            unit: 'µg'
          },
          TOCPHA: {
            label: 'Vitamin E',
            quantity: 3.2644057516359233,
            unit: 'mg'
          },
          VITK1: {
            label: 'Vitamin K',
            quantity: 10.274052657727978,
            unit: 'µg'
          },
          'Sugar.alcohol': { label: 'Sugar alcohol', quantity: 0.0, unit: 'g' },
          WATER: { label: 'Water', quantity: 774.0009753823333, unit: 'g' }
        },
        totalDaily: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 77.94256363123955,
            unit: '%'
          },
          FAT: { label: 'Fat', quantity: 172.26635646429727, unit: '%' },
          FASAT: { label: 'Saturated', quantity: 348.1881968826936, unit: '%' },
          CHOCDF: { label: 'Carbs', quantity: 45.674732142143306, unit: '%' },
          FIBTG: { label: 'Fiber', quantity: 0.0, unit: '%' },
          PROCNT: { label: 'Protein', quantity: 13.841480784776888, unit: '%' },
          CHOLE: {
            label: 'Cholesterol',
            quantity: 138.04912908254425,
            unit: '%'
          },
          NA: { label: 'Sodium', quantity: 5.362239116099819, unit: '%' },
          CA: { label: 'Calcium', quantity: 21.033402678410436, unit: '%' },
          MG: { label: 'Magnesium', quantity: 9.47069683389412, unit: '%' },
          K: { label: 'Potassium', quantity: 11.296727093114379, unit: '%' },
          FE: { label: 'Iron', quantity: 1.2307939622489783, unit: '%' },
          ZN: { label: 'Zinc', quantity: 7.579012213020383, unit: '%' },
          P: { label: 'Phosphorus', quantity: 29.391496618188192, unit: '%' },
          VITA_RAE: {
            label: 'Vitamin A',
            quantity: 138.04912908254425,
            unit: '%'
          },
          VITC: { label: 'Vitamin C', quantity: 2.0153157530298427, unit: '%' },
          THIA: {
            label: 'Thiamin (B1)',
            quantity: 12.594217157987273,
            unit: '%'
          },
          RIBF: {
            label: 'Riboflavin (B2)',
            quantity: 62.92348092848616,
            unit: '%'
          },
          NIA: { label: 'Niacin (B3)', quantity: 8.038573275219271, unit: '%' },
          VITB6A: {
            label: 'Vitamin B6',
            quantity: 6.6078988307700905,
            unit: '%'
          },
          FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 6.025658845468422,
            unit: '%'
          },
          VITB12: {
            label: 'Vitamin B12',
            quantity: 22.672302221585735,
            unit: '%'
          },
          VITD: { label: 'Vitamin D', quantity: 14.107210271208897, unit: '%' },
          TOCPHA: {
            label: 'Vitamin E',
            quantity: 21.762705010906153,
            unit: '%'
          },
          VITK1: { label: 'Vitamin K', quantity: 8.561710548106648, unit: '%' }
        },
        digest: [
          {
            label: 'Fat',
            tag: 'FAT',
            schemaOrgTag: 'fatContent',
            total: 111.97313170179322,
            hasRDI: true,
            daily: 172.26635646429727,
            unit: 'g',
            sub: [
              {
                label: 'Saturated',
                tag: 'FASAT',
                schemaOrgTag: 'saturatedFatContent',
                total: 69.63763937653871,
                hasRDI: true,
                daily: 348.1881968826936,
                unit: 'g'
              },
              {
                label: 'Trans',
                tag: 'FATRN',
                schemaOrgTag: 'transFatContent',
                total: 0.0,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Monounsaturated',
                tag: 'FAMS',
                schemaOrgTag: null,
                total: 32.39407676179306,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Polyunsaturated',
                tag: 'FAPU',
                schemaOrgTag: null,
                total: 4.159771137426354,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              }
            ]
          },
          {
            label: 'Carbs',
            tag: 'CHOCDF',
            schemaOrgTag: 'carbohydrateContent',
            total: 137.0241964264299,
            hasRDI: true,
            daily: 45.674732142143306,
            unit: 'g',
            sub: [
              {
                label: 'Carbs (net)',
                tag: 'CHOCDF.net',
                schemaOrgTag: null,
                total: 137.0241964264299,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Fiber',
                tag: 'FIBTG',
                schemaOrgTag: 'fiberContent',
                total: 0.0,
                hasRDI: true,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Sugars',
                tag: 'SUGAR',
                schemaOrgTag: 'sugarContent',
                total: 136.6513964264299,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Sugars, added',
                tag: 'SUGAR.added',
                schemaOrgTag: null,
                total: 127.58479999999999,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              }
            ]
          },
          {
            label: 'Protein',
            tag: 'PROCNT',
            schemaOrgTag: 'proteinContent',
            total: 6.920740392388444,
            hasRDI: true,
            daily: 13.841480784776888,
            unit: 'g'
          },
          {
            label: 'Cholesterol',
            tag: 'CHOLE',
            schemaOrgTag: 'cholesterolContent',
            total: 414.1473872476327,
            hasRDI: true,
            daily: 138.04912908254425,
            unit: 'mg'
          },
          {
            label: 'Sodium',
            tag: 'NA',
            schemaOrgTag: 'sodiumContent',
            total: 128.69373878639567,
            hasRDI: true,
            daily: 5.362239116099819,
            unit: 'mg'
          },
          {
            label: 'Calcium',
            tag: 'CA',
            schemaOrgTag: null,
            total: 210.33402678410434,
            hasRDI: true,
            daily: 21.033402678410436,
            unit: 'mg'
          },
          {
            label: 'Magnesium',
            tag: 'MG',
            schemaOrgTag: null,
            total: 39.776926702355304,
            hasRDI: true,
            daily: 9.47069683389412,
            unit: 'mg'
          },
          {
            label: 'Potassium',
            tag: 'K',
            schemaOrgTag: null,
            total: 530.9461733763758,
            hasRDI: true,
            daily: 11.296727093114379,
            unit: 'mg'
          },
          {
            label: 'Iron',
            tag: 'FE',
            schemaOrgTag: null,
            total: 0.2215429132048161,
            hasRDI: true,
            daily: 1.2307939622489783,
            unit: 'mg'
          },
          {
            label: 'Zinc',
            tag: 'ZN',
            schemaOrgTag: null,
            total: 0.8336913434322422,
            hasRDI: true,
            daily: 7.579012213020383,
            unit: 'mg'
          },
          {
            label: 'Phosphorus',
            tag: 'P',
            schemaOrgTag: null,
            total: 205.74047632731734,
            hasRDI: true,
            daily: 29.391496618188192,
            unit: 'mg'
          },
          {
            label: 'Vitamin A',
            tag: 'VITA_RAE',
            schemaOrgTag: null,
            total: 1242.4421617428982,
            hasRDI: true,
            daily: 138.04912908254425,
            unit: 'µg'
          },
          {
            label: 'Vitamin C',
            tag: 'VITC',
            schemaOrgTag: null,
            total: 1.8137841777268584,
            hasRDI: true,
            daily: 2.0153157530298427,
            unit: 'mg'
          },
          {
            label: 'Thiamin (B1)',
            tag: 'THIA',
            schemaOrgTag: null,
            total: 0.15113060589584726,
            hasRDI: true,
            daily: 12.594217157987273,
            unit: 'mg'
          },
          {
            label: 'Riboflavin (B2)',
            tag: 'RIBF',
            schemaOrgTag: null,
            total: 0.8180052520703202,
            hasRDI: true,
            daily: 62.92348092848616,
            unit: 'mg'
          },
          {
            label: 'Niacin (B3)',
            tag: 'NIA',
            schemaOrgTag: null,
            total: 1.2861717240350834,
            hasRDI: true,
            daily: 8.038573275219271,
            unit: 'mg'
          },
          {
            label: 'Vitamin B6',
            tag: 'VITB6A',
            schemaOrgTag: null,
            total: 0.08590268480001118,
            hasRDI: true,
            daily: 6.6078988307700905,
            unit: 'mg'
          },
          {
            label: 'Folate equivalent (total)',
            tag: 'FOLDFE',
            schemaOrgTag: null,
            total: 24.10263538187369,
            hasRDI: true,
            daily: 6.025658845468422,
            unit: 'µg'
          },
          {
            label: 'Folate (food)',
            tag: 'FOLFD',
            schemaOrgTag: null,
            total: 24.10263538187369,
            hasRDI: false,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Folic acid',
            tag: 'FOLAC',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: false,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Vitamin B12',
            tag: 'VITB12',
            schemaOrgTag: null,
            total: 0.5441352533180576,
            hasRDI: true,
            daily: 22.672302221585735,
            unit: 'µg'
          },
          {
            label: 'Vitamin D',
            tag: 'VITD',
            schemaOrgTag: null,
            total: 2.1160815406813347,
            hasRDI: true,
            daily: 14.107210271208897,
            unit: 'µg'
          },
          {
            label: 'Vitamin E',
            tag: 'TOCPHA',
            schemaOrgTag: null,
            total: 3.2644057516359233,
            hasRDI: true,
            daily: 21.762705010906153,
            unit: 'mg'
          },
          {
            label: 'Vitamin K',
            tag: 'VITK1',
            schemaOrgTag: null,
            total: 10.274052657727978,
            hasRDI: true,
            daily: 8.561710548106648,
            unit: 'µg'
          },
          {
            label: 'Sugar alcohols',
            tag: 'Sugar.alcohol',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: false,
            daily: 0.0,
            unit: 'g'
          },
          {
            label: 'Water',
            tag: 'WATER',
            schemaOrgTag: null,
            total: 774.0009753823333,
            hasRDI: false,
            daily: 0.0,
            unit: 'g'
          }
        ]
      },
      _links: {
        self: {
          title: 'Self',
          href: 'https://api.edamam.com/api/recipes/v2/ef05e990ec17b2dd8e8c0d2ce1375f0b?type=public&app_id=2a3177b2&app_key=5c61b3aea75a67ec7ced14be8a5c81e1'
        }
      }
    },
    {
      recipe: {
        uri: 'http://www.edamam.com/ontologies/edamam.owl#recipe_0ba0aef43c561ffe912a63107c4a5853',
        label: 'Coffee Liqueur',
        image:
          'https://edamam-product-images.s3.amazonaws.com/web-img/a75/a75e92ce64011ac5fbbeb7e367ed4bc7.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=53a4247b1e036f1ed3f323acf0ccc80354caf485687643947a215641251431dd',
        images: {
          THUMBNAIL: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/a75/a75e92ce64011ac5fbbeb7e367ed4bc7-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8c8ac7e276f0a2f947759de5b8b56961150a0bd2ec0a93be1707e307d43df1bf',
            width: 100,
            height: 100
          },
          SMALL: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/a75/a75e92ce64011ac5fbbeb7e367ed4bc7-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=fd478c25f2d7f4f5fc5b5549d8ac55605d10a437e3b40e89e18b4eabc28eccd0',
            width: 200,
            height: 200
          },
          REGULAR: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/a75/a75e92ce64011ac5fbbeb7e367ed4bc7.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=53a4247b1e036f1ed3f323acf0ccc80354caf485687643947a215641251431dd',
            width: 300,
            height: 300
          },
          LARGE: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/a75/a75e92ce64011ac5fbbeb7e367ed4bc7-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=76d9ceab2453c017fddbf3632bf8360f4acc5fe17af19376e5a8155ea176f9e1',
            width: 600,
            height: 600
          }
        },
        source: 'Delicious Days',
        url: 'http://www.deliciousdays.com/archives/2009/11/26/cooking-with-the-guys-part-two-homemade-coffee-liqueur/',
        shareAs: 'http://www.edamam.com/recipe/coffee-liqueur-0ba0aef43c561ffe912a63107c4a5853/coffee',
        yield: 4.0,
        dietLabels: ['Low-Fat', 'Low-Sodium'],
        healthLabels: [
          'Vegan',
          'Vegetarian',
          'Pescatarian',
          'Dairy-Free',
          'Gluten-Free',
          'Wheat-Free',
          'Egg-Free',
          'Peanut-Free',
          'Tree-Nut-Free',
          'Soy-Free',
          'Fish-Free',
          'Shellfish-Free',
          'Pork-Free',
          'Red-Meat-Free',
          'Crustacean-Free',
          'Celery-Free',
          'Mustard-Free',
          'Sesame-Free',
          'Lupine-Free',
          'Mollusk-Free',
          'No oil added',
          'Kosher',
          'Alcohol-Cocktail'
        ],
        cautions: ['Sulfites'],
        ingredientLines: [
          '150 g Brown rock sugar',
          '1 x Cinnamon Stick',
          '2 x star anise',
          '5 x Cloves',
          '5 x allspice berries',
          '25 x Coffee Beans',
          '500 ml Grappa'
        ],
        ingredients: [
          {
            text: '150 g Brown rock sugar',
            quantity: 150.0,
            measure: 'gram',
            food: 'Brown rock sugar',
            weight: 150.0,
            foodCategory: 'sugars',
            foodId: 'food_aodgtqwbmeu5f6bxeffn0art3bga',
            image: 'https://www.edamam.com/food-img/8c6/8c6662bd73900645c6385b51a95d9b03.jpg'
          },
          {
            text: '1 x Cinnamon Stick',
            quantity: 1.0,
            measure: '<unit>',
            food: 'Cinnamon Stick',
            weight: 2.6,
            foodCategory: 'Condiments and sauces',
            foodId: 'food_atjxtznauw5zabaixm24xa787onz',
            image: 'https://www.edamam.com/food-img/d4d/d4daa18b92c596a1c99c08537c38e65b.jpg'
          },
          {
            text: '2 x star anise',
            quantity: 2.0,
            measure: '<unit>',
            food: 'star anise',
            weight: 4.0,
            foodCategory: 'Condiments and sauces',
            foodId: 'food_beyvheuancih87bwyqk6yb4av11q',
            image: 'https://www.edamam.com/food-img/bea/bea10bb0afae1e498edadf0aa1be805e.jpg'
          },
          {
            text: '5 x Cloves',
            quantity: 5.0,
            measure: '<unit>',
            food: 'Cloves',
            weight: 0.75,
            foodCategory: 'Condiments and sauces',
            foodId: 'food_abb00nxbw761ggavcuto7b3mw1s0',
            image: 'https://www.edamam.com/food-img/8bc/8bc63f9742815a245d37e5f346674ca4.jpg'
          },
          {
            text: '5 x allspice berries',
            quantity: 5.0,
            measure: '<unit>',
            food: 'berries',
            weight: 6.800000000000001,
            foodCategory: 'fruit',
            foodId: 'food_bgkl0cuasoeomtbolalmcauhha54',
            image: 'https://www.edamam.com/food-img/f55/f55705a2a9ea9f7abf449a05fa968139.png'
          },
          {
            text: '25 x Coffee Beans',
            quantity: 25.0,
            measure: '<unit>',
            food: 'Coffee Beans',
            weight: 50.0,
            foodCategory: 'coffee and tea',
            foodId: 'food_b36idu0apr5kqtbcs7b7ua8spx6m',
            image: 'https://www.edamam.com/food-img/336/336e810373dd353a955a6896699b586e.jpg'
          },
          {
            text: '500 ml Grappa',
            quantity: 500.0,
            measure: 'milliliter',
            food: 'Grappa',
            weight: 470.0149155556177,
            foodCategory: 'liquors and cocktails',
            foodId: 'food_ajguqpia53yz3oah6w2frad3tz65',
            image: 'https://www.edamam.com/food-img/c7f/c7fcc63de96b349534aade3de3f9fa7d.jpg'
          }
        ],
        calories: 1858.0674549334767,
        totalWeight: 684.1649155556177,
        totalTime: 0.0,
        cuisineType: ['world'],
        mealType: ['lunch/dinner'],
        dishType: ['alcohol cocktail'],
        totalNutrients: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 1858.0674549334767,
            unit: 'kcal'
          },
          FAT: { label: 'Fat', quantity: 1.03818, unit: 'g' },
          FASAT: { label: 'Saturated', quantity: 0.162454, unit: 'g' },
          FATRN: { label: 'Trans', quantity: 0.001905, unit: 'g' },
          FAMS: { label: 'Monounsaturated', quantity: 0.4317395, unit: 'g' },
          FAPU: { label: 'Polyunsaturated', quantity: 0.262741, unit: 'g' },
          CHOCDF: { label: 'Carbs', quantity: 190.407935, unit: 'g' },
          'CHOCDF.net': {
            label: 'Carbohydrates (net)',
            quantity: 188.02588500000002,
            unit: 'g'
          },
          FIBTG: { label: 'Fiber', quantity: 2.3820499999999996, unit: 'g' },
          SUGAR: { label: 'Sugars', quantity: 146.28155, unit: 'g' },
          'SUGAR.added': {
            label: 'Sugars, added',
            quantity: 145.53,
            unit: 'g'
          },
          PROCNT: { label: 'Protein', quantity: 7.182835, unit: 'g' },
          CHOLE: { label: 'Cholesterol', quantity: 0.0, unit: 'mg' },
          NA: { label: 'Sodium', quantity: 68.24564915555618, unit: 'mg' },
          CA: { label: 'Calcium', quantity: 252.04, unit: 'mg' },
          MG: { label: 'Magnesium', quantity: 187.7105, unit: 'mg' },
          K: { label: 'Potassium', quantity: 2058.132298311112, unit: 'mg' },
          FE: { label: 'Iron', quantity: 5.260490966222248, unit: 'mg' },
          ZN: { label: 'Zinc', quantity: 0.6958659662222471, unit: 'mg' },
          P: { label: 'Phosphorus', quantity: 197.16059662222472, unit: 'mg' },
          VITA_RAE: { label: 'Vitamin A', quantity: 1.294, unit: 'µg' },
          VITC: {
            label: 'Vitamin C',
            quantity: 1.5998999999999999,
            unit: 'mg'
          },
          THIA: {
            label: 'Thiamin (B1)',
            quantity: 0.05007389493333706,
            unit: 'mg'
          },
          RIBF: {
            label: 'Riboflavin (B2)',
            quantity: 0.0729045966222247,
            unit: 'mg'
          },
          NIA: {
            label: 'Niacin (B3)',
            quantity: 14.50975793902223,
            unit: 'mg'
          },
          VITB6A: {
            label: 'Vitamin B6',
            quantity: 0.11727664915555618,
            unit: 'mg'
          },
          FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 2.6515,
            unit: 'µg'
          },
          FOLFD: { label: 'Folate (food)', quantity: 2.6515, unit: 'µg' },
          FOLAC: { label: 'Folic acid', quantity: 0.0, unit: 'µg' },
          VITB12: { label: 'Vitamin B12', quantity: 0.0, unit: 'µg' },
          VITD: { label: 'Vitamin D', quantity: 0.0, unit: 'µg' },
          TOCPHA: { label: 'Vitamin E', quantity: 0.16523, unit: 'mg' },
          VITK1: { label: 'Vitamin K', quantity: 4.1371, unit: 'µg' },
          'Sugar.alcohol': { label: 'Sugar alcohol', quantity: 0.0, unit: 'g' },
          WATER: { label: 'Water', quantity: 323.0469187600413, unit: 'g' }
        },
        totalDaily: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 92.90337274667384,
            unit: '%'
          },
          FAT: { label: 'Fat', quantity: 1.5972000000000002, unit: '%' },
          FASAT: { label: 'Saturated', quantity: 0.81227, unit: '%' },
          CHOCDF: { label: 'Carbs', quantity: 63.46931166666666, unit: '%' },
          FIBTG: { label: 'Fiber', quantity: 9.528199999999998, unit: '%' },
          PROCNT: { label: 'Protein', quantity: 14.36567, unit: '%' },
          CHOLE: { label: 'Cholesterol', quantity: 0.0, unit: '%' },
          NA: { label: 'Sodium', quantity: 2.843568714814841, unit: '%' },
          CA: { label: 'Calcium', quantity: 25.204, unit: '%' },
          MG: { label: 'Magnesium', quantity: 44.69297619047619, unit: '%' },
          K: { label: 'Potassium', quantity: 43.79004890023643, unit: '%' },
          FE: { label: 'Iron', quantity: 29.22494981234582, unit: '%' },
          ZN: { label: 'Zinc', quantity: 6.326054238384064, unit: '%' },
          P: { label: 'Phosphorus', quantity: 28.165799517460677, unit: '%' },
          VITA_RAE: {
            label: 'Vitamin A',
            quantity: 0.14377777777777778,
            unit: '%'
          },
          VITC: { label: 'Vitamin C', quantity: 1.7776666666666665, unit: '%' },
          THIA: {
            label: 'Thiamin (B1)',
            quantity: 4.172824577778089,
            unit: '%'
          },
          RIBF: {
            label: 'Riboflavin (B2)',
            quantity: 5.608045894017285,
            unit: '%'
          },
          NIA: { label: 'Niacin (B3)', quantity: 90.68598711888893, unit: '%' },
          VITB6A: {
            label: 'Vitamin B6',
            quantity: 9.021280704273552,
            unit: '%'
          },
          FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 0.662875,
            unit: '%'
          },
          VITB12: { label: 'Vitamin B12', quantity: 0.0, unit: '%' },
          VITD: { label: 'Vitamin D', quantity: 0.0, unit: '%' },
          TOCPHA: {
            label: 'Vitamin E',
            quantity: 1.1015333333333333,
            unit: '%'
          },
          VITK1: {
            label: 'Vitamin K',
            quantity: 3.4475833333333337,
            unit: '%'
          }
        },
        digest: [
          {
            label: 'Fat',
            tag: 'FAT',
            schemaOrgTag: 'fatContent',
            total: 1.03818,
            hasRDI: true,
            daily: 1.5972000000000002,
            unit: 'g',
            sub: [
              {
                label: 'Saturated',
                tag: 'FASAT',
                schemaOrgTag: 'saturatedFatContent',
                total: 0.162454,
                hasRDI: true,
                daily: 0.81227,
                unit: 'g'
              },
              {
                label: 'Trans',
                tag: 'FATRN',
                schemaOrgTag: 'transFatContent',
                total: 0.001905,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Monounsaturated',
                tag: 'FAMS',
                schemaOrgTag: null,
                total: 0.4317395,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Polyunsaturated',
                tag: 'FAPU',
                schemaOrgTag: null,
                total: 0.262741,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              }
            ]
          },
          {
            label: 'Carbs',
            tag: 'CHOCDF',
            schemaOrgTag: 'carbohydrateContent',
            total: 190.407935,
            hasRDI: true,
            daily: 63.46931166666666,
            unit: 'g',
            sub: [
              {
                label: 'Carbs (net)',
                tag: 'CHOCDF.net',
                schemaOrgTag: null,
                total: 188.02588500000002,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Fiber',
                tag: 'FIBTG',
                schemaOrgTag: 'fiberContent',
                total: 2.3820499999999996,
                hasRDI: true,
                daily: 9.528199999999998,
                unit: 'g'
              },
              {
                label: 'Sugars',
                tag: 'SUGAR',
                schemaOrgTag: 'sugarContent',
                total: 146.28155,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Sugars, added',
                tag: 'SUGAR.added',
                schemaOrgTag: null,
                total: 145.53,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              }
            ]
          },
          {
            label: 'Protein',
            tag: 'PROCNT',
            schemaOrgTag: 'proteinContent',
            total: 7.182835,
            hasRDI: true,
            daily: 14.36567,
            unit: 'g'
          },
          {
            label: 'Cholesterol',
            tag: 'CHOLE',
            schemaOrgTag: 'cholesterolContent',
            total: 0.0,
            hasRDI: true,
            daily: 0.0,
            unit: 'mg'
          },
          {
            label: 'Sodium',
            tag: 'NA',
            schemaOrgTag: 'sodiumContent',
            total: 68.24564915555618,
            hasRDI: true,
            daily: 2.843568714814841,
            unit: 'mg'
          },
          {
            label: 'Calcium',
            tag: 'CA',
            schemaOrgTag: null,
            total: 252.04,
            hasRDI: true,
            daily: 25.204,
            unit: 'mg'
          },
          {
            label: 'Magnesium',
            tag: 'MG',
            schemaOrgTag: null,
            total: 187.7105,
            hasRDI: true,
            daily: 44.69297619047619,
            unit: 'mg'
          },
          {
            label: 'Potassium',
            tag: 'K',
            schemaOrgTag: null,
            total: 2058.132298311112,
            hasRDI: true,
            daily: 43.79004890023643,
            unit: 'mg'
          },
          {
            label: 'Iron',
            tag: 'FE',
            schemaOrgTag: null,
            total: 5.260490966222248,
            hasRDI: true,
            daily: 29.22494981234582,
            unit: 'mg'
          },
          {
            label: 'Zinc',
            tag: 'ZN',
            schemaOrgTag: null,
            total: 0.6958659662222471,
            hasRDI: true,
            daily: 6.326054238384064,
            unit: 'mg'
          },
          {
            label: 'Phosphorus',
            tag: 'P',
            schemaOrgTag: null,
            total: 197.16059662222472,
            hasRDI: true,
            daily: 28.165799517460677,
            unit: 'mg'
          },
          {
            label: 'Vitamin A',
            tag: 'VITA_RAE',
            schemaOrgTag: null,
            total: 1.294,
            hasRDI: true,
            daily: 0.14377777777777778,
            unit: 'µg'
          },
          {
            label: 'Vitamin C',
            tag: 'VITC',
            schemaOrgTag: null,
            total: 1.5998999999999999,
            hasRDI: true,
            daily: 1.7776666666666665,
            unit: 'mg'
          },
          {
            label: 'Thiamin (B1)',
            tag: 'THIA',
            schemaOrgTag: null,
            total: 0.05007389493333706,
            hasRDI: true,
            daily: 4.172824577778089,
            unit: 'mg'
          },
          {
            label: 'Riboflavin (B2)',
            tag: 'RIBF',
            schemaOrgTag: null,
            total: 0.0729045966222247,
            hasRDI: true,
            daily: 5.608045894017285,
            unit: 'mg'
          },
          {
            label: 'Niacin (B3)',
            tag: 'NIA',
            schemaOrgTag: null,
            total: 14.50975793902223,
            hasRDI: true,
            daily: 90.68598711888893,
            unit: 'mg'
          },
          {
            label: 'Vitamin B6',
            tag: 'VITB6A',
            schemaOrgTag: null,
            total: 0.11727664915555618,
            hasRDI: true,
            daily: 9.021280704273552,
            unit: 'mg'
          },
          {
            label: 'Folate equivalent (total)',
            tag: 'FOLDFE',
            schemaOrgTag: null,
            total: 2.6515,
            hasRDI: true,
            daily: 0.662875,
            unit: 'µg'
          },
          {
            label: 'Folate (food)',
            tag: 'FOLFD',
            schemaOrgTag: null,
            total: 2.6515,
            hasRDI: false,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Folic acid',
            tag: 'FOLAC',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: false,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Vitamin B12',
            tag: 'VITB12',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: true,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Vitamin D',
            tag: 'VITD',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: true,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Vitamin E',
            tag: 'TOCPHA',
            schemaOrgTag: null,
            total: 0.16523,
            hasRDI: true,
            daily: 1.1015333333333333,
            unit: 'mg'
          },
          {
            label: 'Vitamin K',
            tag: 'VITK1',
            schemaOrgTag: null,
            total: 4.1371,
            hasRDI: true,
            daily: 3.4475833333333337,
            unit: 'µg'
          },
          {
            label: 'Sugar alcohols',
            tag: 'Sugar.alcohol',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: false,
            daily: 0.0,
            unit: 'g'
          },
          {
            label: 'Water',
            tag: 'WATER',
            schemaOrgTag: null,
            total: 323.0469187600413,
            hasRDI: false,
            daily: 0.0,
            unit: 'g'
          }
        ]
      },
      _links: {
        self: {
          title: 'Self',
          href: 'https://api.edamam.com/api/recipes/v2/0ba0aef43c561ffe912a63107c4a5853?type=public&app_id=2a3177b2&app_key=5c61b3aea75a67ec7ced14be8a5c81e1'
        }
      }
    },
    {
      recipe: {
        uri: 'http://www.edamam.com/ontologies/edamam.owl#recipe_8e4738b9d9d8b9c20f6d5f2c5788cdd9',
        label: 'Boozy Coffee Milkshakes',
        image:
          'https://edamam-product-images.s3.amazonaws.com/web-img/355/355c7eae6daf9a40592dbd1cd58fb25d.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e908fcb4407509d7182d64b0d5d24d526ad38ed86055035ec1ef167bb9d4e7d1',
        images: {
          THUMBNAIL: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/355/355c7eae6daf9a40592dbd1cd58fb25d-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d9c0190ff7661617bea5d033d4d2777c8a1a58de0faa59b6c128d3546b2f6e00',
            width: 100,
            height: 100
          },
          SMALL: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/355/355c7eae6daf9a40592dbd1cd58fb25d-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d5b83c40ed923060579106008c0c48d599b7c148461dffd5ced28b9a99e667a3',
            width: 200,
            height: 200
          },
          REGULAR: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/355/355c7eae6daf9a40592dbd1cd58fb25d.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=e908fcb4407509d7182d64b0d5d24d526ad38ed86055035ec1ef167bb9d4e7d1',
            width: 300,
            height: 300
          },
          LARGE: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/355/355c7eae6daf9a40592dbd1cd58fb25d-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=83f0113a14ee46e76e61bf61c93a8c550f84d4c75ae4ffb2eb3f3e26d5f001c2',
            width: 600,
            height: 600
          }
        },
        source: 'EatingWell',
        url: 'http://www.eatingwell.com/recipe/263564/boozy-coffee-milkshakes/',
        shareAs: 'http://www.edamam.com/recipe/boozy-coffee-milkshakes-8e4738b9d9d8b9c20f6d5f2c5788cdd9/coffee',
        yield: 2.0,
        dietLabels: ['Low-Sodium'],
        healthLabels: [
          'Kidney-Friendly',
          'Vegetarian',
          'Pescatarian',
          'Gluten-Free',
          'Wheat-Free',
          'Egg-Free',
          'Peanut-Free',
          'Tree-Nut-Free',
          'Soy-Free',
          'Fish-Free',
          'Shellfish-Free',
          'Pork-Free',
          'Red-Meat-Free',
          'Crustacean-Free',
          'Celery-Free',
          'Mustard-Free',
          'Sesame-Free',
          'Lupine-Free',
          'Mollusk-Free',
          'Kosher'
        ],
        cautions: ['Sulfites'],
        ingredientLines: [
          '1 cup coffee ice cream',
          '¼ cup low-fat milk',
          '1 ounce coffee liqueur, such as Kahlua',
          '2 teaspoons unsweetened cocoa powder'
        ],
        ingredients: [
          {
            text: '1 cup coffee ice cream',
            quantity: 1.0,
            measure: 'cup',
            food: 'ice cream',
            weight: 132.0,
            foodCategory: 'frozen treats',
            foodId: 'food_bsg87una16tr8waipd66na9drm1k',
            image: 'https://www.edamam.com/food-img/1be/1be43587dc55730fc761aedf4f3df090.jpg'
          },
          {
            text: '¼ cup low-fat milk',
            quantity: 0.25,
            measure: 'cup',
            food: 'low-fat milk',
            weight: 61.0,
            foodCategory: 'Milk',
            foodId: 'food_anmsfo1a7sxp0paea6rcsav5m5t0',
            image: 'https://www.edamam.com/food-img/007/0072c28f37f18088ff10e36d9e6d0ace.png'
          },
          {
            text: '1 ounce coffee liqueur, such as Kahlua',
            quantity: 1.0,
            measure: 'ounce',
            food: 'Kahlua',
            weight: 28.349523125,
            foodCategory: 'liquors and cocktails',
            foodId: 'food_byf2xfhbghlq5qadhyvztabfq665',
            image: 'https://www.edamam.com/food-img/625/6255aae740942e782ad588caa6aa86ca.jpg'
          },
          {
            text: '2 teaspoons unsweetened cocoa powder',
            quantity: 2.0,
            measure: 'teaspoon',
            food: 'unsweetened cocoa powder',
            weight: 3.5833333335150837,
            foodCategory: 'chocolate',
            foodId: 'food_afcmkjjaqwjkezbfz7htdb7mpkwz',
            image: 'https://www.edamam.com/food-img/89a/89af89595db3cf2c3007f2b064c5fef6.jpg'
          }
        ],
        calories: 402.28439770041444,
        totalWeight: 224.93285645851506,
        totalTime: 5.0,
        cuisineType: ['american'],
        mealType: ['teatime'],
        dishType: ['drinks'],
        totalNutrients: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 402.28439770041444,
            unit: 'kcal'
          },
          FAT: { label: 'Fat', quantity: 15.687665236066566, unit: 'g' },
          FASAT: { label: 'Saturated', quantity: 9.668155494527166, unit: 'g' },
          FATRN: { label: 'Trans', quantity: 0.0, unit: 'g' },
          FAMS: {
            label: 'Monounsaturated',
            quantity: 4.258045228429139,
            unit: 'g'
          },
          FAPU: {
            label: 'Polyunsaturated',
            quantity: 0.6635236659487165,
            unit: 'g'
          },
          CHOCDF: { label: 'Carbs', quantity: 49.53822682260523, unit: 'g' },
          'CHOCDF.net': {
            label: 'Carbohydrates (net)',
            quantity: 47.28839348920465,
            unit: 'g'
          },
          FIBTG: { label: 'Fiber', quantity: 2.2498333334005807, unit: 'g' },
          SUGAR: { label: 'Sugars', quantity: 42.10297569021152, unit: 'g' },
          'SUGAR.added': {
            label: 'Sugars, added',
            quantity: 28.0104,
            unit: 'g'
          },
          PROCNT: { label: 'Protein', quantity: 7.4063828564939564, unit: 'g' },
          CHOLE: { label: 'Cholesterol', quantity: 61.13, unit: 'mg' },
          NA: { label: 'Sodium', quantity: 135.46046185003817, unit: 'mg' },
          CA: { label: 'Calcium', quantity: 250.0801618981493, unit: 'mg' },
          MG: { label: 'Magnesium', quantity: 43.921319027990265, unit: 'mg' },
          K: { label: 'Potassium', quantity: 417.2948569402699, unit: 'mg' },
          FE: { label: 'Iron', quantity: 0.6507597139001906, unit: 'mg' },
          ZN: { label: 'Zinc', quantity: 1.4195298569498769, unit: 'mg' },
          P: { label: 'Phosphorus', quantity: 224.5526380555007, unit: 'mg' },
          VITA_RAE: {
            label: 'Vitamin A',
            quantity: 191.14000000000001,
            unit: 'µg'
          },
          VITC: { label: 'Vitamin C', quantity: 0.792, unit: 'mg' },
          THIA: {
            label: 'Thiamin (B1)',
            quantity: 0.07024898092514177,
            unit: 'mg'
          },
          RIBF: {
            label: 'Riboflavin (B2)',
            quantity: 0.44168777610877136,
            unit: 'mg'
          },
          NIA: {
            label: 'Niacin (B3)',
            quantity: 0.3289691466373046,
            unit: 'mg'
          },
          VITB6A: {
            label: 'Vitamin B6',
            quantity: 0.09015833333354781,
            unit: 'mg'
          },
          FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 10.796666666724827,
            unit: 'µg'
          },
          FOLFD: {
            label: 'Folate (food)',
            quantity: 10.796666666724827,
            unit: 'µg'
          },
          FOLAC: { label: 'Folic acid', quantity: 0.0, unit: 'µg' },
          VITB12: { label: 'Vitamin B12', quantity: 0.8015, unit: 'µg' },
          VITD: { label: 'Vitamin D', quantity: 0.996, unit: 'µg' },
          TOCPHA: {
            label: 'Vitamin E',
            quantity: 0.4056833333335151,
            unit: 'mg'
          },
          VITK1: {
            label: 'Vitamin K',
            quantity: 0.5465833333378771,
            unit: 'µg'
          },
          'Sugar.alcohol': { label: 'Sugar alcohol', quantity: 0.0, unit: 'g' },
          WATER: { label: 'Water', quantity: 144.26705216875547, unit: 'g' }
        },
        totalDaily: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 20.11421988502072,
            unit: '%'
          },
          FAT: { label: 'Fat', quantity: 24.134869593948565, unit: '%' },
          FASAT: { label: 'Saturated', quantity: 48.34077747263583, unit: '%' },
          CHOCDF: { label: 'Carbs', quantity: 16.51274227420174, unit: '%' },
          FIBTG: { label: 'Fiber', quantity: 8.999333333602323, unit: '%' },
          PROCNT: { label: 'Protein', quantity: 14.812765712987915, unit: '%' },
          CHOLE: {
            label: 'Cholesterol',
            quantity: 20.376666666666665,
            unit: '%'
          },
          NA: { label: 'Sodium', quantity: 5.6441859104182575, unit: '%' },
          CA: { label: 'Calcium', quantity: 25.00801618981493, unit: '%' },
          MG: { label: 'Magnesium', quantity: 10.457456911426254, unit: '%' },
          K: { label: 'Potassium', quantity: 8.87861397745255, unit: '%' },
          FE: { label: 'Iron', quantity: 3.615331743889948, unit: '%' },
          ZN: { label: 'Zinc', quantity: 12.904816881362517, unit: '%' },
          P: { label: 'Phosphorus', quantity: 32.07894829364295, unit: '%' },
          VITA_RAE: {
            label: 'Vitamin A',
            quantity: 21.23777777777778,
            unit: '%'
          },
          VITC: { label: 'Vitamin C', quantity: 0.88, unit: '%' },
          THIA: {
            label: 'Thiamin (B1)',
            quantity: 5.854081743761815,
            unit: '%'
          },
          RIBF: {
            label: 'Riboflavin (B2)',
            quantity: 33.97598277759779,
            unit: '%'
          },
          NIA: {
            label: 'Niacin (B3)',
            quantity: 2.0560571664831535,
            unit: '%'
          },
          VITB6A: {
            label: 'Vitamin B6',
            quantity: 6.935256410272908,
            unit: '%'
          },
          FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 2.6991666666812066,
            unit: '%'
          },
          VITB12: {
            label: 'Vitamin B12',
            quantity: 33.395833333333336,
            unit: '%'
          },
          VITD: { label: 'Vitamin D', quantity: 6.64, unit: '%' },
          TOCPHA: {
            label: 'Vitamin E',
            quantity: 2.7045555555567673,
            unit: '%'
          },
          VITK1: {
            label: 'Vitamin K',
            quantity: 0.45548611111489756,
            unit: '%'
          }
        },
        digest: [
          {
            label: 'Fat',
            tag: 'FAT',
            schemaOrgTag: 'fatContent',
            total: 15.687665236066566,
            hasRDI: true,
            daily: 24.134869593948565,
            unit: 'g',
            sub: [
              {
                label: 'Saturated',
                tag: 'FASAT',
                schemaOrgTag: 'saturatedFatContent',
                total: 9.668155494527166,
                hasRDI: true,
                daily: 48.34077747263583,
                unit: 'g'
              },
              {
                label: 'Trans',
                tag: 'FATRN',
                schemaOrgTag: 'transFatContent',
                total: 0.0,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Monounsaturated',
                tag: 'FAMS',
                schemaOrgTag: null,
                total: 4.258045228429139,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Polyunsaturated',
                tag: 'FAPU',
                schemaOrgTag: null,
                total: 0.6635236659487165,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              }
            ]
          },
          {
            label: 'Carbs',
            tag: 'CHOCDF',
            schemaOrgTag: 'carbohydrateContent',
            total: 49.53822682260523,
            hasRDI: true,
            daily: 16.51274227420174,
            unit: 'g',
            sub: [
              {
                label: 'Carbs (net)',
                tag: 'CHOCDF.net',
                schemaOrgTag: null,
                total: 47.28839348920465,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Fiber',
                tag: 'FIBTG',
                schemaOrgTag: 'fiberContent',
                total: 2.2498333334005807,
                hasRDI: true,
                daily: 8.999333333602323,
                unit: 'g'
              },
              {
                label: 'Sugars',
                tag: 'SUGAR',
                schemaOrgTag: 'sugarContent',
                total: 42.10297569021152,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Sugars, added',
                tag: 'SUGAR.added',
                schemaOrgTag: null,
                total: 28.0104,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              }
            ]
          },
          {
            label: 'Protein',
            tag: 'PROCNT',
            schemaOrgTag: 'proteinContent',
            total: 7.4063828564939564,
            hasRDI: true,
            daily: 14.812765712987915,
            unit: 'g'
          },
          {
            label: 'Cholesterol',
            tag: 'CHOLE',
            schemaOrgTag: 'cholesterolContent',
            total: 61.13,
            hasRDI: true,
            daily: 20.376666666666665,
            unit: 'mg'
          },
          {
            label: 'Sodium',
            tag: 'NA',
            schemaOrgTag: 'sodiumContent',
            total: 135.46046185003817,
            hasRDI: true,
            daily: 5.6441859104182575,
            unit: 'mg'
          },
          {
            label: 'Calcium',
            tag: 'CA',
            schemaOrgTag: null,
            total: 250.0801618981493,
            hasRDI: true,
            daily: 25.00801618981493,
            unit: 'mg'
          },
          {
            label: 'Magnesium',
            tag: 'MG',
            schemaOrgTag: null,
            total: 43.921319027990265,
            hasRDI: true,
            daily: 10.457456911426254,
            unit: 'mg'
          },
          {
            label: 'Potassium',
            tag: 'K',
            schemaOrgTag: null,
            total: 417.2948569402699,
            hasRDI: true,
            daily: 8.87861397745255,
            unit: 'mg'
          },
          {
            label: 'Iron',
            tag: 'FE',
            schemaOrgTag: null,
            total: 0.6507597139001906,
            hasRDI: true,
            daily: 3.615331743889948,
            unit: 'mg'
          },
          {
            label: 'Zinc',
            tag: 'ZN',
            schemaOrgTag: null,
            total: 1.4195298569498769,
            hasRDI: true,
            daily: 12.904816881362517,
            unit: 'mg'
          },
          {
            label: 'Phosphorus',
            tag: 'P',
            schemaOrgTag: null,
            total: 224.5526380555007,
            hasRDI: true,
            daily: 32.07894829364295,
            unit: 'mg'
          },
          {
            label: 'Vitamin A',
            tag: 'VITA_RAE',
            schemaOrgTag: null,
            total: 191.14000000000001,
            hasRDI: true,
            daily: 21.23777777777778,
            unit: 'µg'
          },
          {
            label: 'Vitamin C',
            tag: 'VITC',
            schemaOrgTag: null,
            total: 0.792,
            hasRDI: true,
            daily: 0.88,
            unit: 'mg'
          },
          {
            label: 'Thiamin (B1)',
            tag: 'THIA',
            schemaOrgTag: null,
            total: 0.07024898092514177,
            hasRDI: true,
            daily: 5.854081743761815,
            unit: 'mg'
          },
          {
            label: 'Riboflavin (B2)',
            tag: 'RIBF',
            schemaOrgTag: null,
            total: 0.44168777610877136,
            hasRDI: true,
            daily: 33.97598277759779,
            unit: 'mg'
          },
          {
            label: 'Niacin (B3)',
            tag: 'NIA',
            schemaOrgTag: null,
            total: 0.3289691466373046,
            hasRDI: true,
            daily: 2.0560571664831535,
            unit: 'mg'
          },
          {
            label: 'Vitamin B6',
            tag: 'VITB6A',
            schemaOrgTag: null,
            total: 0.09015833333354781,
            hasRDI: true,
            daily: 6.935256410272908,
            unit: 'mg'
          },
          {
            label: 'Folate equivalent (total)',
            tag: 'FOLDFE',
            schemaOrgTag: null,
            total: 10.796666666724827,
            hasRDI: true,
            daily: 2.6991666666812066,
            unit: 'µg'
          },
          {
            label: 'Folate (food)',
            tag: 'FOLFD',
            schemaOrgTag: null,
            total: 10.796666666724827,
            hasRDI: false,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Folic acid',
            tag: 'FOLAC',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: false,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Vitamin B12',
            tag: 'VITB12',
            schemaOrgTag: null,
            total: 0.8015,
            hasRDI: true,
            daily: 33.395833333333336,
            unit: 'µg'
          },
          {
            label: 'Vitamin D',
            tag: 'VITD',
            schemaOrgTag: null,
            total: 0.996,
            hasRDI: true,
            daily: 6.64,
            unit: 'µg'
          },
          {
            label: 'Vitamin E',
            tag: 'TOCPHA',
            schemaOrgTag: null,
            total: 0.4056833333335151,
            hasRDI: true,
            daily: 2.7045555555567673,
            unit: 'mg'
          },
          {
            label: 'Vitamin K',
            tag: 'VITK1',
            schemaOrgTag: null,
            total: 0.5465833333378771,
            hasRDI: true,
            daily: 0.45548611111489756,
            unit: 'µg'
          },
          {
            label: 'Sugar alcohols',
            tag: 'Sugar.alcohol',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: false,
            daily: 0.0,
            unit: 'g'
          },
          {
            label: 'Water',
            tag: 'WATER',
            schemaOrgTag: null,
            total: 144.26705216875547,
            hasRDI: false,
            daily: 0.0,
            unit: 'g'
          }
        ]
      },
      _links: {
        self: {
          title: 'Self',
          href: 'https://api.edamam.com/api/recipes/v2/8e4738b9d9d8b9c20f6d5f2c5788cdd9?type=public&app_id=2a3177b2&app_key=5c61b3aea75a67ec7ced14be8a5c81e1'
        }
      }
    },
    {
      recipe: {
        uri: 'http://www.edamam.com/ontologies/edamam.owl#recipe_d2d65d2daa0bd7a004f165f3f281eb6b',
        label: 'Mexican Coffee',
        image:
          'https://edamam-product-images.s3.amazonaws.com/web-img/874/8746fcf46072ae35d650c5a69831c1dd.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8e234cc42a1da8af3bddcae1618d04731d957232100d9e9f261244de338cab79',
        images: {
          THUMBNAIL: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/874/8746fcf46072ae35d650c5a69831c1dd-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b1448497f53d82837a232f7e356fab7778c9815988e6d667ece8c56aea9f2c62',
            width: 100,
            height: 100
          },
          SMALL: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/874/8746fcf46072ae35d650c5a69831c1dd-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=64d129d0e2ff46764890d10b2d9fe2a66c29960ee614e5118c9dde206b6ee9cb',
            width: 200,
            height: 200
          },
          REGULAR: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/874/8746fcf46072ae35d650c5a69831c1dd.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8e234cc42a1da8af3bddcae1618d04731d957232100d9e9f261244de338cab79',
            width: 300,
            height: 300
          }
        },
        source: 'PBS Food',
        url: 'http://www.pbs.org/food/recipes/mexican-coffee/',
        shareAs: 'http://www.edamam.com/recipe/mexican-coffee-d2d65d2daa0bd7a004f165f3f281eb6b/coffee',
        yield: 1.0,
        dietLabels: ['Low-Sodium'],
        healthLabels: [
          'Kidney-Friendly',
          'Vegetarian',
          'Pescatarian',
          'Gluten-Free',
          'Wheat-Free',
          'Egg-Free',
          'Peanut-Free',
          'Tree-Nut-Free',
          'Soy-Free',
          'Fish-Free',
          'Shellfish-Free',
          'Pork-Free',
          'Red-Meat-Free',
          'Crustacean-Free',
          'Celery-Free',
          'Mustard-Free',
          'Sesame-Free',
          'Lupine-Free',
          'Mollusk-Free',
          'Kosher',
          'Alcohol-Cocktail'
        ],
        cautions: ['Sulfites'],
        ingredientLines: [
          '½ oz tequila',
          '½ oz kahlua',
          '1 cup strong brewed coffee',
          '¼-1/3 cup melted vanilla ice cream'
        ],
        ingredients: [
          {
            text: '½ oz tequila',
            quantity: 0.5,
            measure: 'ounce',
            food: 'tequila',
            weight: 14.1747615625,
            foodCategory: 'liquors and cocktails',
            foodId: 'food_ajguqpia53yz3oah6w2frad3tz65',
            image: 'https://www.edamam.com/food-img/c7f/c7fcc63de96b349534aade3de3f9fa7d.jpg'
          },
          {
            text: '½ oz kahlua',
            quantity: 0.5,
            measure: 'ounce',
            food: 'kahlua',
            weight: 14.1747615625,
            foodCategory: 'liquors and cocktails',
            foodId: 'food_byf2xfhbghlq5qadhyvztabfq665',
            image: 'https://www.edamam.com/food-img/625/6255aae740942e782ad588caa6aa86ca.jpg'
          },
          {
            text: '1 cup strong brewed coffee',
            quantity: 1.0,
            measure: 'cup',
            food: 'coffee',
            weight: 237.0,
            foodCategory: 'coffee and tea',
            foodId: 'food_ax0a0yxbbe4hx0apiz1tla01s2w7',
            image: 'https://www.edamam.com/food-img/ee9/ee9566349cb84dfd9ddac1fdf8cbc907.jpg'
          },
          {
            text: '¼-1/3 cup melted vanilla ice cream',
            quantity: 0.29166666666666663,
            measure: 'cup',
            food: 'vanilla ice cream',
            weight: 38.49999999999999,
            foodCategory: 'frozen treats',
            foodId: 'food_bsg87una16tr8waipd66na9drm1k',
            image: 'https://www.edamam.com/food-img/1be/1be43587dc55730fc761aedf4f3df090.jpg'
          }
        ],
        calories: 162.435898059375,
        totalWeight: 303.849523125,
        totalTime: 22.0,
        cuisineType: ['world'],
        mealType: ['lunch/dinner'],
        dishType: ['alcohol cocktail'],
        totalNutrients: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 162.435898059375,
            unit: 'kcal'
          },
          FAT: { label: 'Fat', quantity: 4.3249242846875, unit: 'g' },
          FASAT: {
            label: 'Saturated',
            quantity: 2.6339152472562497,
            unit: 'g'
          },
          FATRN: { label: 'Trans', quantity: 0.0, unit: 'g' },
          FAMS: {
            label: 'Monounsaturated',
            quantity: 1.1817334475437498,
            unit: 'g'
          },
          FAPU: {
            label: 'Polyunsaturated',
            quantity: 0.19127349964062498,
            unit: 'g'
          },
          CHOCDF: { label: 'Carbs', quantity: 15.71978841125, unit: 'g' },
          'CHOCDF.net': {
            label: 'Carbohydrates (net)',
            quantity: 15.45028841125,
            unit: 'g'
          },
          FIBTG: { label: 'Fiber', quantity: 0.26949999999999996, unit: 'g' },
          SUGAR: { label: 'Sugars', quantity: 13.5986336784375, unit: 'g' },
          'SUGAR.added': {
            label: 'Sugars, added',
            quantity: 8.169699999999999,
            unit: 'g'
          },
          PROCNT: { label: 'Protein', quantity: 1.6460747615625, unit: 'g' },
          CHOLE: {
            label: 'Cholesterol',
            quantity: 16.939999999999998,
            unit: 'mg'
          },
          NA: { label: 'Sodium', quantity: 36.815728540624995, unit: 'mg' },
          CA: { label: 'Calcium', quantity: 54.161747615624996, unit: 'mg' },
          MG: { label: 'Magnesium', quantity: 12.925242846875001, unit: 'mg' },
          K: { label: 'Potassium', quantity: 197.28092370000002, unit: 'mg' },
          FE: { label: 'Iron', quantity: 0.0725247615625, unit: 'mg' },
          ZN: { label: 'Zinc', quantity: 0.32297233309374995, unit: 'mg' },
          P: { label: 'Phosphorus', quantity: 48.95247615625, unit: 'mg' },
          VITA_RAE: {
            label: 'Vitamin A',
            quantity: 45.42999999999999,
            unit: 'µg'
          },
          VITC: {
            label: 'Vitamin C',
            quantity: 0.23099999999999996,
            unit: 'mg'
          },
          THIA: {
            label: 'Thiamin (B1)',
            quantity: 0.05038247615625,
            unit: 'mg'
          },
          RIBF: {
            label: 'Riboflavin (B2)',
            quantity: 0.27478796185,
            unit: 'mg'
          },
          NIA: {
            label: 'Niacin (B3)',
            quantity: 0.519584375653125,
            unit: 'mg'
          },
          VITB6A: {
            label: 'Vitamin B6',
            quantity: 0.020991747615624997,
            unit: 'mg'
          },
          FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 6.665,
            unit: 'µg'
          },
          FOLFD: { label: 'Folate (food)', quantity: 6.665, unit: 'µg' },
          FOLAC: { label: 'Folic acid', quantity: 0.0, unit: 'µg' },
          VITB12: {
            label: 'Vitamin B12',
            quantity: 0.15014999999999998,
            unit: 'µg'
          },
          VITD: { label: 'Vitamin D', quantity: 0.077, unit: 'µg' },
          TOCPHA: { label: 'Vitamin E', quantity: 0.1392, unit: 'mg' },
          VITK1: { label: 'Vitamin K', quantity: 0.3525, unit: 'µg' },
          'Sugar.alcohol': { label: 'Sugar alcohol', quantity: 0.0, unit: 'g' },
          WATER: { label: 'Water', quantity: 272.873867285, unit: 'g' }
        },
        totalDaily: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 8.12179490296875,
            unit: '%'
          },
          FAT: { label: 'Fat', quantity: 6.65372966875, unit: '%' },
          FASAT: {
            label: 'Saturated',
            quantity: 13.169576236281248,
            unit: '%'
          },
          CHOCDF: { label: 'Carbs', quantity: 5.2399294704166675, unit: '%' },
          FIBTG: { label: 'Fiber', quantity: 1.0779999999999998, unit: '%' },
          PROCNT: { label: 'Protein', quantity: 3.2921495231249995, unit: '%' },
          CHOLE: {
            label: 'Cholesterol',
            quantity: 5.646666666666666,
            unit: '%'
          },
          NA: { label: 'Sodium', quantity: 1.5339886891927081, unit: '%' },
          CA: { label: 'Calcium', quantity: 5.4161747615625, unit: '%' },
          MG: { label: 'Magnesium', quantity: 3.0774387730654764, unit: '%' },
          K: { label: 'Potassium', quantity: 4.1974664617021284, unit: '%' },
          FE: { label: 'Iron', quantity: 0.4029153420138889, unit: '%' },
          ZN: { label: 'Zinc', quantity: 2.9361121190340906, unit: '%' },
          P: { label: 'Phosphorus', quantity: 6.993210879464287, unit: '%' },
          VITA_RAE: {
            label: 'Vitamin A',
            quantity: 5.047777777777776,
            unit: '%'
          },
          VITC: { label: 'Vitamin C', quantity: 0.2566666666666666, unit: '%' },
          THIA: { label: 'Thiamin (B1)', quantity: 4.1985396796875, unit: '%' },
          RIBF: {
            label: 'Riboflavin (B2)',
            quantity: 21.137535526923077,
            unit: '%'
          },
          NIA: {
            label: 'Niacin (B3)',
            quantity: 3.2474023478320313,
            unit: '%'
          },
          VITB6A: {
            label: 'Vitamin B6',
            quantity: 1.6147498165865384,
            unit: '%'
          },
          FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 1.66625,
            unit: '%'
          },
          VITB12: {
            label: 'Vitamin B12',
            quantity: 6.256249999999999,
            unit: '%'
          },
          VITD: { label: 'Vitamin D', quantity: 0.5133333333333333, unit: '%' },
          TOCPHA: {
            label: 'Vitamin E',
            quantity: 0.9279999999999998,
            unit: '%'
          },
          VITK1: { label: 'Vitamin K', quantity: 0.29375, unit: '%' }
        },
        digest: [
          {
            label: 'Fat',
            tag: 'FAT',
            schemaOrgTag: 'fatContent',
            total: 4.3249242846875,
            hasRDI: true,
            daily: 6.65372966875,
            unit: 'g',
            sub: [
              {
                label: 'Saturated',
                tag: 'FASAT',
                schemaOrgTag: 'saturatedFatContent',
                total: 2.6339152472562497,
                hasRDI: true,
                daily: 13.169576236281248,
                unit: 'g'
              },
              {
                label: 'Trans',
                tag: 'FATRN',
                schemaOrgTag: 'transFatContent',
                total: 0.0,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Monounsaturated',
                tag: 'FAMS',
                schemaOrgTag: null,
                total: 1.1817334475437498,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Polyunsaturated',
                tag: 'FAPU',
                schemaOrgTag: null,
                total: 0.19127349964062498,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              }
            ]
          },
          {
            label: 'Carbs',
            tag: 'CHOCDF',
            schemaOrgTag: 'carbohydrateContent',
            total: 15.71978841125,
            hasRDI: true,
            daily: 5.2399294704166675,
            unit: 'g',
            sub: [
              {
                label: 'Carbs (net)',
                tag: 'CHOCDF.net',
                schemaOrgTag: null,
                total: 15.45028841125,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Fiber',
                tag: 'FIBTG',
                schemaOrgTag: 'fiberContent',
                total: 0.26949999999999996,
                hasRDI: true,
                daily: 1.0779999999999998,
                unit: 'g'
              },
              {
                label: 'Sugars',
                tag: 'SUGAR',
                schemaOrgTag: 'sugarContent',
                total: 13.5986336784375,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Sugars, added',
                tag: 'SUGAR.added',
                schemaOrgTag: null,
                total: 8.169699999999999,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              }
            ]
          },
          {
            label: 'Protein',
            tag: 'PROCNT',
            schemaOrgTag: 'proteinContent',
            total: 1.6460747615625,
            hasRDI: true,
            daily: 3.2921495231249995,
            unit: 'g'
          },
          {
            label: 'Cholesterol',
            tag: 'CHOLE',
            schemaOrgTag: 'cholesterolContent',
            total: 16.939999999999998,
            hasRDI: true,
            daily: 5.646666666666666,
            unit: 'mg'
          },
          {
            label: 'Sodium',
            tag: 'NA',
            schemaOrgTag: 'sodiumContent',
            total: 36.815728540624995,
            hasRDI: true,
            daily: 1.5339886891927081,
            unit: 'mg'
          },
          {
            label: 'Calcium',
            tag: 'CA',
            schemaOrgTag: null,
            total: 54.161747615624996,
            hasRDI: true,
            daily: 5.4161747615625,
            unit: 'mg'
          },
          {
            label: 'Magnesium',
            tag: 'MG',
            schemaOrgTag: null,
            total: 12.925242846875001,
            hasRDI: true,
            daily: 3.0774387730654764,
            unit: 'mg'
          },
          {
            label: 'Potassium',
            tag: 'K',
            schemaOrgTag: null,
            total: 197.28092370000002,
            hasRDI: true,
            daily: 4.1974664617021284,
            unit: 'mg'
          },
          {
            label: 'Iron',
            tag: 'FE',
            schemaOrgTag: null,
            total: 0.0725247615625,
            hasRDI: true,
            daily: 0.4029153420138889,
            unit: 'mg'
          },
          {
            label: 'Zinc',
            tag: 'ZN',
            schemaOrgTag: null,
            total: 0.32297233309374995,
            hasRDI: true,
            daily: 2.9361121190340906,
            unit: 'mg'
          },
          {
            label: 'Phosphorus',
            tag: 'P',
            schemaOrgTag: null,
            total: 48.95247615625,
            hasRDI: true,
            daily: 6.993210879464287,
            unit: 'mg'
          },
          {
            label: 'Vitamin A',
            tag: 'VITA_RAE',
            schemaOrgTag: null,
            total: 45.42999999999999,
            hasRDI: true,
            daily: 5.047777777777776,
            unit: 'µg'
          },
          {
            label: 'Vitamin C',
            tag: 'VITC',
            schemaOrgTag: null,
            total: 0.23099999999999996,
            hasRDI: true,
            daily: 0.2566666666666666,
            unit: 'mg'
          },
          {
            label: 'Thiamin (B1)',
            tag: 'THIA',
            schemaOrgTag: null,
            total: 0.05038247615625,
            hasRDI: true,
            daily: 4.1985396796875,
            unit: 'mg'
          },
          {
            label: 'Riboflavin (B2)',
            tag: 'RIBF',
            schemaOrgTag: null,
            total: 0.27478796185,
            hasRDI: true,
            daily: 21.137535526923077,
            unit: 'mg'
          },
          {
            label: 'Niacin (B3)',
            tag: 'NIA',
            schemaOrgTag: null,
            total: 0.519584375653125,
            hasRDI: true,
            daily: 3.2474023478320313,
            unit: 'mg'
          },
          {
            label: 'Vitamin B6',
            tag: 'VITB6A',
            schemaOrgTag: null,
            total: 0.020991747615624997,
            hasRDI: true,
            daily: 1.6147498165865384,
            unit: 'mg'
          },
          {
            label: 'Folate equivalent (total)',
            tag: 'FOLDFE',
            schemaOrgTag: null,
            total: 6.665,
            hasRDI: true,
            daily: 1.66625,
            unit: 'µg'
          },
          {
            label: 'Folate (food)',
            tag: 'FOLFD',
            schemaOrgTag: null,
            total: 6.665,
            hasRDI: false,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Folic acid',
            tag: 'FOLAC',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: false,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Vitamin B12',
            tag: 'VITB12',
            schemaOrgTag: null,
            total: 0.15014999999999998,
            hasRDI: true,
            daily: 6.256249999999999,
            unit: 'µg'
          },
          {
            label: 'Vitamin D',
            tag: 'VITD',
            schemaOrgTag: null,
            total: 0.077,
            hasRDI: true,
            daily: 0.5133333333333333,
            unit: 'µg'
          },
          {
            label: 'Vitamin E',
            tag: 'TOCPHA',
            schemaOrgTag: null,
            total: 0.1392,
            hasRDI: true,
            daily: 0.9279999999999998,
            unit: 'mg'
          },
          {
            label: 'Vitamin K',
            tag: 'VITK1',
            schemaOrgTag: null,
            total: 0.3525,
            hasRDI: true,
            daily: 0.29375,
            unit: 'µg'
          },
          {
            label: 'Sugar alcohols',
            tag: 'Sugar.alcohol',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: false,
            daily: 0.0,
            unit: 'g'
          },
          {
            label: 'Water',
            tag: 'WATER',
            schemaOrgTag: null,
            total: 272.873867285,
            hasRDI: false,
            daily: 0.0,
            unit: 'g'
          }
        ]
      },
      _links: {
        self: {
          title: 'Self',
          href: 'https://api.edamam.com/api/recipes/v2/d2d65d2daa0bd7a004f165f3f281eb6b?type=public&app_id=2a3177b2&app_key=5c61b3aea75a67ec7ced14be8a5c81e1'
        }
      }
    },
    {
      recipe: {
        uri: 'http://www.edamam.com/ontologies/edamam.owl#recipe_1aaa0fdbd3e1c7460b543ea127cc515e',
        label: 'Coffee Cake (Literally)',
        image:
          'https://edamam-product-images.s3.amazonaws.com/web-img/2b8/2b87cb7f9596d17c10be487d72a9e28d.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3258fa49bbb3d5f8fb4a1046fca68a25a887ef3831b1f81e8b9035262c44c839',
        images: {
          THUMBNAIL: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/2b8/2b87cb7f9596d17c10be487d72a9e28d-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9a5d25afc6d19740c6ce3089ffee55b50395ef859a64ba626827dfb66115ca12',
            width: 100,
            height: 100
          },
          SMALL: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/2b8/2b87cb7f9596d17c10be487d72a9e28d-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=41c793b4fb8cae34ff6b116f90c6a9026516a55cce0614f6192341cd534f0dd0',
            width: 200,
            height: 200
          },
          REGULAR: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/2b8/2b87cb7f9596d17c10be487d72a9e28d.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3258fa49bbb3d5f8fb4a1046fca68a25a887ef3831b1f81e8b9035262c44c839',
            width: 300,
            height: 300
          },
          LARGE: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/2b8/2b87cb7f9596d17c10be487d72a9e28d-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=7b419ca982de09e397ffe0ab9fcfbb5352696c603956e87f5999c24cd16e3870',
            width: 600,
            height: 600
          }
        },
        source: 'Pioneer Woman',
        url: 'http://thepioneerwoman.com/cooking/2009/08/coffee-cake-literally/',
        shareAs: 'http://www.edamam.com/recipe/coffee-cake-literally-1aaa0fdbd3e1c7460b543ea127cc515e/coffee',
        yield: 12.0,
        dietLabels: [],
        healthLabels: [
          'Low Potassium',
          'Kidney-Friendly',
          'Vegetarian',
          'Pescatarian',
          'Peanut-Free',
          'Tree-Nut-Free',
          'Soy-Free',
          'Fish-Free',
          'Shellfish-Free',
          'Pork-Free',
          'Red-Meat-Free',
          'Crustacean-Free',
          'Celery-Free',
          'Mustard-Free',
          'Sesame-Free',
          'Lupine-Free',
          'Mollusk-Free',
          'Alcohol-Free',
          'Kosher'
        ],
        cautions: ['Sulfites'],
        ingredientLines: [
          '2 cups Flour',
          '2 cups Sugar',
          '1/4 tsp Salt',
          '2 sticks Butter',
          '3 tbsp Instant Coffee Crystals',
          '1/2 cup Buttermilk',
          '2 whole Eggs',
          '1 tsp Baking soda',
          '2 tsp Vanilla',
          '1 1/2 stick Butter',
          '1 lb Powdered Sugar',
          '2 tbsp Instant Coffee Crystals',
          '¼ teaspoons Salt',
          '4 tbsp Heavy Cream'
        ],
        ingredients: [
          {
            text: '2 cups Flour',
            quantity: 2.0,
            measure: 'cup',
            food: 'Flour',
            weight: 250.0,
            foodCategory: 'grains',
            foodId: 'food_ahebfs0a985an4aubqaebbipra58',
            image: 'https://www.edamam.com/food-img/b4c/b4c739e76a6f2172b7ad49d0aa41d5aa.jpg'
          },
          {
            text: '2 cups Sugar',
            quantity: 2.0,
            measure: 'cup',
            food: 'Sugar',
            weight: 400.0,
            foodCategory: 'sugars',
            foodId: 'food_axi2ijobrk819yb0adceobnhm1c2',
            image: 'https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg'
          },
          {
            text: '1/4 tsp Salt',
            quantity: 0.25,
            measure: 'teaspoon',
            food: 'Salt',
            weight: 1.5,
            foodCategory: 'Condiments and sauces',
            foodId: 'food_btxz81db72hwbra2pncvebzzzum9',
            image: 'https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg'
          },
          {
            text: '2 sticks Butter',
            quantity: 2.0,
            measure: 'stick',
            food: 'Butter',
            weight: 226.0,
            foodCategory: 'Dairy',
            foodId: 'food_awz3iefajbk1fwahq9logahmgltj',
            image: 'https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg'
          },
          {
            text: '3 tbsp Instant Coffee Crystals',
            quantity: 3.0,
            measure: 'tablespoon',
            food: 'Instant Coffee Crystals',
            weight: 8.999999999391349,
            foodCategory: 'coffee and tea',
            foodId: 'food_aof7z08ad0qgsta38run7arojif8',
            image: 'https://www.edamam.com/food-img/336/336e810373dd353a955a6896699b586e.jpg'
          },
          {
            text: '1/2 cup Buttermilk',
            quantity: 0.5,
            measure: 'cup',
            food: 'Buttermilk',
            weight: 122.5,
            foodCategory: 'Milk',
            foodId: 'food_axwuni1bjd81cybjn45rwb25o4jb',
            image: 'https://www.edamam.com/food-img/768/768bea3c8421a7ae987bc00c4a2b82e8.jpg'
          },
          {
            text: '2 whole Eggs',
            quantity: 2.0,
            measure: '<unit>',
            food: 'Eggs',
            weight: 86.0,
            foodCategory: 'Eggs',
            foodId: 'food_bhpradua77pk16aipcvzeayg732r',
            image: 'https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg'
          },
          {
            text: '1 tsp Baking soda',
            quantity: 1.0,
            measure: 'teaspoon',
            food: 'Baking soda',
            weight: 4.6,
            foodCategory: 'condiments and sauces',
            foodId: 'food_asa4cjoa3lmt8ibwdg0cpblheo69',
            image: 'https://www.edamam.com/food-img/7e5/7e55e4482cc2fde91f427fc568e6f5b8.jpeg'
          },
          {
            text: '2 tsp Vanilla',
            quantity: 2.0,
            measure: 'teaspoon',
            food: 'Vanilla',
            weight: 8.4,
            foodCategory: 'Condiments and sauces',
            foodId: 'food_bh1wvnqaw3q7ciascfoygaabax2a',
            image: 'https://www.edamam.com/food-img/90f/90f910b0bf82750d4f6528263e014cca.jpg'
          },
          {
            text: '1 1/2 stick Butter',
            quantity: 1.5,
            measure: 'stick',
            food: 'Butter',
            weight: 169.5,
            foodCategory: 'Dairy',
            foodId: 'food_awz3iefajbk1fwahq9logahmgltj',
            image: 'https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg'
          },
          {
            text: '1 lb Powdered Sugar',
            quantity: 1.0,
            measure: 'pound',
            food: 'Powdered Sugar',
            weight: 453.59237,
            foodCategory: 'sugars',
            foodId: 'food_b7rbtshahirxisbtyc77sbv8jdue',
            image: 'https://www.edamam.com/food-img/290/290624aa4c0e279551e462443e38bb40.jpg'
          },
          {
            text: '2 tbsp Instant Coffee Crystals',
            quantity: 2.0,
            measure: 'tablespoon',
            food: 'Instant Coffee Crystals',
            weight: 5.999999999594232,
            foodCategory: 'coffee and tea',
            foodId: 'food_aof7z08ad0qgsta38run7arojif8',
            image: 'https://www.edamam.com/food-img/336/336e810373dd353a955a6896699b586e.jpg'
          },
          {
            text: '¼ teaspoons Salt',
            quantity: 0.25,
            measure: 'teaspoon',
            food: 'Salt',
            weight: 1.5,
            foodCategory: 'Condiments and sauces',
            foodId: 'food_btxz81db72hwbra2pncvebzzzum9',
            image: 'https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg'
          },
          {
            text: '4 tbsp Heavy Cream',
            quantity: 4.0,
            measure: 'tablespoon',
            food: 'Heavy Cream',
            weight: 60.0,
            foodCategory: 'Dairy',
            foodId: 'food_bgtkr21b5v16mca246x9ebnaswyo',
            image: 'https://www.edamam.com/food-img/484/4848d71f6a14dd5076083f5e17925420.jpg'
          }
        ],
        calories: 7514.33131929642,
        totalWeight: 1798.5923699989855,
        totalTime: 0.0,
        cuisineType: ['central europe'],
        mealType: ['breakfast', 'lunch/dinner'],
        dishType: ['desserts'],
        totalNutrients: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 7514.33131929642,
            unit: 'kcal'
          },
          FAT: { label: 'Fat', quantity: 354.7766899999949, unit: 'g' },
          FASAT: {
            label: 'Saturated',
            quantity: 220.75718999999805,
            unit: 'g'
          },
          FATRN: { label: 'Trans', quantity: 12.99717, unit: 'g' },
          FAMS: {
            label: 'Monounsaturated',
            quantity: 93.23117499999958,
            unit: 'g'
          },
          FAPU: {
            label: 'Polyunsaturated',
            quantity: 15.605585999998016,
            unit: 'g'
          },
          CHOCDF: { label: 'Carbs', quantity: 1064.0149575482353, unit: 'g' },
          'CHOCDF.net': {
            label: 'Carbohydrates (net)',
            quantity: 1057.2649575482353,
            unit: 'g'
          },
          FIBTG: { label: 'Fiber', quantity: 6.75, unit: 'g' },
          SUGAR: { label: 'Sugars', quantity: 852.693547097, unit: 'g' },
          'SUGAR.added': {
            label: 'Sugars, added',
            quantity: 842.858697097,
            unit: 'g'
          },
          PROCNT: { label: 'Protein', quantity: 47.10813999987624, unit: 'g' },
          CHOLE: { label: 'Cholesterol', quantity: 1257.345, unit: 'mg' },
          NA: { label: 'Sodium', quantity: 2866.8528473996244, unit: 'mg' },
          CA: { label: 'Calcium', quantity: 393.0099236985697, unit: 'mg' },
          MG: { label: 'Magnesium', quantity: 140.9929999966828, unit: 'mg' },
          K: { label: 'Potassium', quantity: 1271.06884736414, unit: 'mg' },
          FE: { label: 'Iron', quantity: 5.741985421955264, unit: 'mg' },
          ZN: { label: 'Zinc', quantity: 4.01794923699645, unit: 'mg' },
          P: { label: 'Phosphorus', quantity: 727.3789999969264, unit: 'mg' },
          VITA_RAE: {
            label: 'Vitamin A',
            quantity: 3106.5699999999997,
            unit: 'µg'
          },
          VITC: { label: 'Vitamin C', quantity: 1.585, unit: 'mg' },
          THIA: {
            label: 'Thiamin (B1)',
            quantity: 0.41114899999991883,
            unit: 'mg'
          },
          RIBF: {
            label: 'Riboflavin (B2)',
            quantity: 1.0634025502992492,
            unit: 'mg'
          },
          NIA: {
            label: 'Niacin (B3)',
            quantity: 7.711709999714206,
            unit: 'mg'
          },
          VITB6A: {
            label: 'Vitamin B6',
            quantity: 0.33184899999970585,
            unit: 'mg'
          },
          FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 125.81,
            unit: 'µg'
          },
          FOLFD: { label: 'Folate (food)', quantity: 125.81, unit: 'µg' },
          FOLAC: { label: 'Folic acid', quantity: 0.0, unit: 'µg' },
          VITB12: {
            label: 'Vitamin B12',
            quantity: 1.8152500000000003,
            unit: 'µg'
          },
          VITD: { label: 'Vitamin D', quantity: 8.0725, unit: 'µg' },
          TOCPHA: {
            label: 'Vitamin E',
            quantity: 10.925849999999999,
            unit: 'mg'
          },
          VITK1: {
            label: 'Vitamin K',
            quantity: 31.02049999998072,
            unit: 'µg'
          },
          'Sugar.alcohol': { label: 'Sugar alcohol', quantity: 0.0, unit: 'g' },
          WATER: { label: 'Water', quantity: 317.2971324509685, unit: 'g' }
        },
        totalDaily: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 375.716565964821,
            unit: '%'
          },
          FAT: { label: 'Fat', quantity: 545.8102923076844, unit: '%' },
          FASAT: {
            label: 'Saturated',
            quantity: 1103.7859499999902,
            unit: '%'
          },
          CHOCDF: { label: 'Carbs', quantity: 354.67165251607844, unit: '%' },
          FIBTG: { label: 'Fiber', quantity: 27.0, unit: '%' },
          PROCNT: { label: 'Protein', quantity: 94.21627999975247, unit: '%' },
          CHOLE: { label: 'Cholesterol', quantity: 419.115, unit: '%' },
          NA: { label: 'Sodium', quantity: 119.45220197498435, unit: '%' },
          CA: { label: 'Calcium', quantity: 39.30099236985697, unit: '%' },
          MG: { label: 'Magnesium', quantity: 33.5697619039721, unit: '%' },
          K: { label: 'Potassium', quantity: 27.044018029024258, unit: '%' },
          FE: { label: 'Iron', quantity: 31.89991901086258, unit: '%' },
          ZN: { label: 'Zinc', quantity: 36.52681124542227, unit: '%' },
          P: { label: 'Phosphorus', quantity: 103.91128571384664, unit: '%' },
          VITA_RAE: {
            label: 'Vitamin A',
            quantity: 345.1744444444444,
            unit: '%'
          },
          VITC: { label: 'Vitamin C', quantity: 1.761111111111111, unit: '%' },
          THIA: {
            label: 'Thiamin (B1)',
            quantity: 34.2624166666599,
            unit: '%'
          },
          RIBF: {
            label: 'Riboflavin (B2)',
            quantity: 81.80019617686531,
            unit: '%'
          },
          NIA: {
            label: 'Niacin (B3)',
            quantity: 48.198187498213784,
            unit: '%'
          },
          VITB6A: {
            label: 'Vitamin B6',
            quantity: 25.526846153823524,
            unit: '%'
          },
          FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 31.4525,
            unit: '%'
          },
          VITB12: {
            label: 'Vitamin B12',
            quantity: 75.63541666666669,
            unit: '%'
          },
          VITD: { label: 'Vitamin D', quantity: 53.81666666666667, unit: '%' },
          TOCPHA: {
            label: 'Vitamin E',
            quantity: 72.83899999999998,
            unit: '%'
          },
          VITK1: { label: 'Vitamin K', quantity: 25.8504166666506, unit: '%' }
        },
        digest: [
          {
            label: 'Fat',
            tag: 'FAT',
            schemaOrgTag: 'fatContent',
            total: 354.7766899999949,
            hasRDI: true,
            daily: 545.8102923076844,
            unit: 'g',
            sub: [
              {
                label: 'Saturated',
                tag: 'FASAT',
                schemaOrgTag: 'saturatedFatContent',
                total: 220.75718999999805,
                hasRDI: true,
                daily: 1103.7859499999902,
                unit: 'g'
              },
              {
                label: 'Trans',
                tag: 'FATRN',
                schemaOrgTag: 'transFatContent',
                total: 12.99717,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Monounsaturated',
                tag: 'FAMS',
                schemaOrgTag: null,
                total: 93.23117499999958,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Polyunsaturated',
                tag: 'FAPU',
                schemaOrgTag: null,
                total: 15.605585999998016,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              }
            ]
          },
          {
            label: 'Carbs',
            tag: 'CHOCDF',
            schemaOrgTag: 'carbohydrateContent',
            total: 1064.0149575482353,
            hasRDI: true,
            daily: 354.67165251607844,
            unit: 'g',
            sub: [
              {
                label: 'Carbs (net)',
                tag: 'CHOCDF.net',
                schemaOrgTag: null,
                total: 1057.2649575482353,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Fiber',
                tag: 'FIBTG',
                schemaOrgTag: 'fiberContent',
                total: 6.75,
                hasRDI: true,
                daily: 27.0,
                unit: 'g'
              },
              {
                label: 'Sugars',
                tag: 'SUGAR',
                schemaOrgTag: 'sugarContent',
                total: 852.693547097,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Sugars, added',
                tag: 'SUGAR.added',
                schemaOrgTag: null,
                total: 842.858697097,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              }
            ]
          },
          {
            label: 'Protein',
            tag: 'PROCNT',
            schemaOrgTag: 'proteinContent',
            total: 47.10813999987624,
            hasRDI: true,
            daily: 94.21627999975247,
            unit: 'g'
          },
          {
            label: 'Cholesterol',
            tag: 'CHOLE',
            schemaOrgTag: 'cholesterolContent',
            total: 1257.345,
            hasRDI: true,
            daily: 419.115,
            unit: 'mg'
          },
          {
            label: 'Sodium',
            tag: 'NA',
            schemaOrgTag: 'sodiumContent',
            total: 2866.8528473996244,
            hasRDI: true,
            daily: 119.45220197498435,
            unit: 'mg'
          },
          {
            label: 'Calcium',
            tag: 'CA',
            schemaOrgTag: null,
            total: 393.0099236985697,
            hasRDI: true,
            daily: 39.30099236985697,
            unit: 'mg'
          },
          {
            label: 'Magnesium',
            tag: 'MG',
            schemaOrgTag: null,
            total: 140.9929999966828,
            hasRDI: true,
            daily: 33.5697619039721,
            unit: 'mg'
          },
          {
            label: 'Potassium',
            tag: 'K',
            schemaOrgTag: null,
            total: 1271.06884736414,
            hasRDI: true,
            daily: 27.044018029024258,
            unit: 'mg'
          },
          {
            label: 'Iron',
            tag: 'FE',
            schemaOrgTag: null,
            total: 5.741985421955264,
            hasRDI: true,
            daily: 31.89991901086258,
            unit: 'mg'
          },
          {
            label: 'Zinc',
            tag: 'ZN',
            schemaOrgTag: null,
            total: 4.01794923699645,
            hasRDI: true,
            daily: 36.52681124542227,
            unit: 'mg'
          },
          {
            label: 'Phosphorus',
            tag: 'P',
            schemaOrgTag: null,
            total: 727.3789999969264,
            hasRDI: true,
            daily: 103.91128571384664,
            unit: 'mg'
          },
          {
            label: 'Vitamin A',
            tag: 'VITA_RAE',
            schemaOrgTag: null,
            total: 3106.5699999999997,
            hasRDI: true,
            daily: 345.1744444444444,
            unit: 'µg'
          },
          {
            label: 'Vitamin C',
            tag: 'VITC',
            schemaOrgTag: null,
            total: 1.585,
            hasRDI: true,
            daily: 1.761111111111111,
            unit: 'mg'
          },
          {
            label: 'Thiamin (B1)',
            tag: 'THIA',
            schemaOrgTag: null,
            total: 0.41114899999991883,
            hasRDI: true,
            daily: 34.2624166666599,
            unit: 'mg'
          },
          {
            label: 'Riboflavin (B2)',
            tag: 'RIBF',
            schemaOrgTag: null,
            total: 1.0634025502992492,
            hasRDI: true,
            daily: 81.80019617686531,
            unit: 'mg'
          },
          {
            label: 'Niacin (B3)',
            tag: 'NIA',
            schemaOrgTag: null,
            total: 7.711709999714206,
            hasRDI: true,
            daily: 48.198187498213784,
            unit: 'mg'
          },
          {
            label: 'Vitamin B6',
            tag: 'VITB6A',
            schemaOrgTag: null,
            total: 0.33184899999970585,
            hasRDI: true,
            daily: 25.526846153823524,
            unit: 'mg'
          },
          {
            label: 'Folate equivalent (total)',
            tag: 'FOLDFE',
            schemaOrgTag: null,
            total: 125.81,
            hasRDI: true,
            daily: 31.4525,
            unit: 'µg'
          },
          {
            label: 'Folate (food)',
            tag: 'FOLFD',
            schemaOrgTag: null,
            total: 125.81,
            hasRDI: false,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Folic acid',
            tag: 'FOLAC',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: false,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Vitamin B12',
            tag: 'VITB12',
            schemaOrgTag: null,
            total: 1.8152500000000003,
            hasRDI: true,
            daily: 75.63541666666669,
            unit: 'µg'
          },
          {
            label: 'Vitamin D',
            tag: 'VITD',
            schemaOrgTag: null,
            total: 8.0725,
            hasRDI: true,
            daily: 53.81666666666667,
            unit: 'µg'
          },
          {
            label: 'Vitamin E',
            tag: 'TOCPHA',
            schemaOrgTag: null,
            total: 10.925849999999999,
            hasRDI: true,
            daily: 72.83899999999998,
            unit: 'mg'
          },
          {
            label: 'Vitamin K',
            tag: 'VITK1',
            schemaOrgTag: null,
            total: 31.02049999998072,
            hasRDI: true,
            daily: 25.8504166666506,
            unit: 'µg'
          },
          {
            label: 'Sugar alcohols',
            tag: 'Sugar.alcohol',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: false,
            daily: 0.0,
            unit: 'g'
          },
          {
            label: 'Water',
            tag: 'WATER',
            schemaOrgTag: null,
            total: 317.2971324509685,
            hasRDI: false,
            daily: 0.0,
            unit: 'g'
          }
        ]
      },
      _links: {
        self: {
          title: 'Self',
          href: 'https://api.edamam.com/api/recipes/v2/1aaa0fdbd3e1c7460b543ea127cc515e?type=public&app_id=2a3177b2&app_key=5c61b3aea75a67ec7ced14be8a5c81e1'
        }
      }
    },
    {
      recipe: {
        uri: 'http://www.edamam.com/ontologies/edamam.owl#recipe_e058f0e83a912b1da0bd37110bf91308',
        label: 'Coffee-Flavored Syrup',
        image:
          'https://edamam-product-images.s3.amazonaws.com/web-img/aaa/aaa8dc136577ca5d1dbe3506e3383e80.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3b88436599fe241ed9d156a241cf45a0d64c9363a90b628ac5302778b25a3260',
        images: {
          THUMBNAIL: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/aaa/aaa8dc136577ca5d1dbe3506e3383e80-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=9ad9848a7ccfaa13499f16f5c943f286b5de42dafccb53336847bf63fff98be3',
            width: 100,
            height: 100
          },
          SMALL: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/aaa/aaa8dc136577ca5d1dbe3506e3383e80-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=f3e5887f70d0f9061f8db5970a601f4513d56843b98f76a217f351b417da0791',
            width: 200,
            height: 200
          },
          REGULAR: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/aaa/aaa8dc136577ca5d1dbe3506e3383e80.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3b88436599fe241ed9d156a241cf45a0d64c9363a90b628ac5302778b25a3260',
            width: 300,
            height: 300
          }
        },
        source: 'Cookstr',
        url: 'http://www.cookstr.com/recipes/coffee-flavored-syrup',
        shareAs: 'http://www.edamam.com/recipe/coffee-flavored-syrup-e058f0e83a912b1da0bd37110bf91308/coffee',
        yield: 2.0,
        dietLabels: ['Low-Fat', 'Low-Sodium'],
        healthLabels: [
          'Low Potassium',
          'Kidney-Friendly',
          'Vegan',
          'Vegetarian',
          'Pescatarian',
          'Dairy-Free',
          'Gluten-Free',
          'Wheat-Free',
          'Egg-Free',
          'Peanut-Free',
          'Tree-Nut-Free',
          'Soy-Free',
          'Fish-Free',
          'Shellfish-Free',
          'Pork-Free',
          'Red-Meat-Free',
          'Crustacean-Free',
          'Celery-Free',
          'Mustard-Free',
          'Sesame-Free',
          'Lupine-Free',
          'Mollusk-Free',
          'No oil added',
          'Kosher',
          'Alcohol-Cocktail'
        ],
        cautions: [],
        ingredientLines: [
          '½ cup (125 mL) granulated sugar',
          '¼ cup (50 mL) water',
          '¼ cup (50 mL) coffee-flavored liqueur'
        ],
        ingredients: [
          {
            text: '½ cup (125 mL) granulated sugar',
            quantity: 125.0,
            measure: 'milliliter',
            food: 'granulated sugar',
            weight: 105.66882094325938,
            foodCategory: 'sugars',
            foodId: 'food_axi2ijobrk819yb0adceobnhm1c2',
            image: 'https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg'
          },
          {
            text: '¼ cup (50 mL) water',
            quantity: 50.0,
            measure: 'milliliter',
            food: 'water',
            weight: 50.0,
            foodCategory: 'water',
            foodId: 'food_a99vzubbk1ayrsad318rvbzr3dh0',
            image: 'https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg'
          },
          {
            text: '¼ cup (50 mL) coffee-flavored liqueur',
            quantity: 50.0,
            measure: 'milliliter',
            food: 'liqueur',
            weight: 58.83639950120681,
            foodCategory: 'liquors and cocktails',
            foodId: 'food_bp0j7rfap97183a6ix0nob71qqx0',
            image: 'https://www.edamam.com/food-img/625/6255aae740942e782ad588caa6aa86ca.jpg'
          }
        ],
        calories: 606.6286393744687,
        totalWeight: 214.5052204444662,
        totalTime: 15.0,
        cuisineType: ['world'],
        mealType: ['lunch/dinner'],
        dishType: ['alcohol cocktail'],
        totalNutrients: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 606.6286393744687,
            unit: 'kcal'
          },
          FAT: { label: 'Fat', quantity: 0.17650919850362043, unit: 'g' },
          FASAT: {
            label: 'Saturated',
            quantity: 0.06236658347127922,
            unit: 'g'
          },
          FATRN: { label: 'Trans', quantity: 0.0, unit: 'g' },
          FAMS: {
            label: 'Monounsaturated',
            quantity: 0.012944007890265499,
            unit: 'g'
          },
          FAPU: {
            label: 'Polyunsaturated',
            quantity: 0.06177821947626715,
            unit: 'g'
          },
          CHOCDF: { label: 'Carbs', quantity: 133.1831221456355, unit: 'g' },
          'CHOCDF.net': {
            label: 'Carbohydrates (net)',
            quantity: 133.1831221456355,
            unit: 'g'
          },
          FIBTG: { label: 'Fiber', quantity: 0.0, unit: 'g' },
          SUGAR: { label: 'Sugars', quantity: 127.99182431033506, unit: 'g' },
          'SUGAR.added': {
            label: 'Sugars, added',
            quantity: 105.45748330137286,
            unit: 'g'
          },
          PROCNT: {
            label: 'Protein',
            quantity: 0.05883639950120682,
            unit: 'g'
          },
          CHOLE: { label: 'Cholesterol', quantity: 0.0, unit: 'mg' },
          NA: { label: 'Sodium', quantity: 7.7636001695291394, unit: 'mg' },
          CA: { label: 'Calcium', quantity: 3.145052204444662, unit: 'mg' },
          MG: { label: 'Magnesium', quantity: 2.2650919850362046, unit: 'mg' },
          K: { label: 'Potassium', quantity: 19.76429626922723, unit: 'mg' },
          FE: { label: 'Iron', quantity: 0.08813625017235377, unit: 'mg' },
          ZN: { label: 'Zinc', quantity: 0.03321780194468798, unit: 'mg' },
          P: { label: 'Phosphorus', quantity: 3.530183970072409, unit: 'mg' },
          VITA_RAE: { label: 'Vitamin A', quantity: 0.0, unit: 'µg' },
          VITC: { label: 'Vitamin C', quantity: 0.0, unit: 'mg' },
          THIA: {
            label: 'Thiamin (B1)',
            quantity: 0.0023534559800482725,
            unit: 'mg'
          },
          RIBF: {
            label: 'Riboflavin (B2)',
            quantity: 0.0271374439193641,
            unit: 'mg'
          },
          NIA: {
            label: 'Niacin (B3)',
            quantity: 0.08472441528173781,
            unit: 'mg'
          },
          VITB6A: { label: 'Vitamin B6', quantity: 0.0, unit: 'mg' },
          FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 0.0,
            unit: 'µg'
          },
          FOLFD: { label: 'Folate (food)', quantity: 0.0, unit: 'µg' },
          FOLAC: { label: 'Folic acid', quantity: 0.0, unit: 'µg' },
          VITB12: { label: 'Vitamin B12', quantity: 0.0, unit: 'µg' },
          VITD: { label: 'Vitamin D', quantity: 0.0, unit: 'µg' },
          TOCPHA: { label: 'Vitamin E', quantity: 0.0, unit: 'mg' },
          VITK1: { label: 'Vitamin K', quantity: 0.0, unit: 'µg' },
          'Sugar.alcohol': { label: 'Sugar alcohol', quantity: 0.0, unit: 'g' },
          WATER: { label: 'Water', quantity: 68.21041760956277, unit: 'g' }
        },
        totalDaily: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 30.331431968723436,
            unit: '%'
          },
          FAT: { label: 'Fat', quantity: 0.271552613082493, unit: '%' },
          FASAT: {
            label: 'Saturated',
            quantity: 0.3118329173563961,
            unit: '%'
          },
          CHOCDF: { label: 'Carbs', quantity: 44.394374048545174, unit: '%' },
          FIBTG: { label: 'Fiber', quantity: 0.0, unit: '%' },
          PROCNT: {
            label: 'Protein',
            quantity: 0.11767279900241362,
            unit: '%'
          },
          CHOLE: { label: 'Cholesterol', quantity: 0.0, unit: '%' },
          NA: { label: 'Sodium', quantity: 0.32348334039704746, unit: '%' },
          CA: { label: 'Calcium', quantity: 0.3145052204444662, unit: '%' },
          MG: { label: 'Magnesium', quantity: 0.5393076154848107, unit: '%' },
          K: { label: 'Potassium', quantity: 0.4205169418984517, unit: '%' },
          FE: { label: 'Iron', quantity: 0.4896458342908543, unit: '%' },
          ZN: { label: 'Zinc', quantity: 0.30198001767898164, unit: '%' },
          P: { label: 'Phosphorus', quantity: 0.5043119957246299, unit: '%' },
          VITA_RAE: { label: 'Vitamin A', quantity: 0.0, unit: '%' },
          VITC: { label: 'Vitamin C', quantity: 0.0, unit: '%' },
          THIA: {
            label: 'Thiamin (B1)',
            quantity: 0.19612133167068938,
            unit: '%'
          },
          RIBF: {
            label: 'Riboflavin (B2)',
            quantity: 2.0874956861049307,
            unit: '%'
          },
          NIA: {
            label: 'Niacin (B3)',
            quantity: 0.5295275955108614,
            unit: '%'
          },
          VITB6A: { label: 'Vitamin B6', quantity: 0.0, unit: '%' },
          FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 0.0,
            unit: '%'
          },
          VITB12: { label: 'Vitamin B12', quantity: 0.0, unit: '%' },
          VITD: { label: 'Vitamin D', quantity: 0.0, unit: '%' },
          TOCPHA: { label: 'Vitamin E', quantity: 0.0, unit: '%' },
          VITK1: { label: 'Vitamin K', quantity: 0.0, unit: '%' }
        },
        digest: [
          {
            label: 'Fat',
            tag: 'FAT',
            schemaOrgTag: 'fatContent',
            total: 0.17650919850362043,
            hasRDI: true,
            daily: 0.271552613082493,
            unit: 'g',
            sub: [
              {
                label: 'Saturated',
                tag: 'FASAT',
                schemaOrgTag: 'saturatedFatContent',
                total: 0.06236658347127922,
                hasRDI: true,
                daily: 0.3118329173563961,
                unit: 'g'
              },
              {
                label: 'Trans',
                tag: 'FATRN',
                schemaOrgTag: 'transFatContent',
                total: 0.0,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Monounsaturated',
                tag: 'FAMS',
                schemaOrgTag: null,
                total: 0.012944007890265499,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Polyunsaturated',
                tag: 'FAPU',
                schemaOrgTag: null,
                total: 0.06177821947626715,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              }
            ]
          },
          {
            label: 'Carbs',
            tag: 'CHOCDF',
            schemaOrgTag: 'carbohydrateContent',
            total: 133.1831221456355,
            hasRDI: true,
            daily: 44.394374048545174,
            unit: 'g',
            sub: [
              {
                label: 'Carbs (net)',
                tag: 'CHOCDF.net',
                schemaOrgTag: null,
                total: 133.1831221456355,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Fiber',
                tag: 'FIBTG',
                schemaOrgTag: 'fiberContent',
                total: 0.0,
                hasRDI: true,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Sugars',
                tag: 'SUGAR',
                schemaOrgTag: 'sugarContent',
                total: 127.99182431033506,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Sugars, added',
                tag: 'SUGAR.added',
                schemaOrgTag: null,
                total: 105.45748330137286,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              }
            ]
          },
          {
            label: 'Protein',
            tag: 'PROCNT',
            schemaOrgTag: 'proteinContent',
            total: 0.05883639950120682,
            hasRDI: true,
            daily: 0.11767279900241362,
            unit: 'g'
          },
          {
            label: 'Cholesterol',
            tag: 'CHOLE',
            schemaOrgTag: 'cholesterolContent',
            total: 0.0,
            hasRDI: true,
            daily: 0.0,
            unit: 'mg'
          },
          {
            label: 'Sodium',
            tag: 'NA',
            schemaOrgTag: 'sodiumContent',
            total: 7.7636001695291394,
            hasRDI: true,
            daily: 0.32348334039704746,
            unit: 'mg'
          },
          {
            label: 'Calcium',
            tag: 'CA',
            schemaOrgTag: null,
            total: 3.145052204444662,
            hasRDI: true,
            daily: 0.3145052204444662,
            unit: 'mg'
          },
          {
            label: 'Magnesium',
            tag: 'MG',
            schemaOrgTag: null,
            total: 2.2650919850362046,
            hasRDI: true,
            daily: 0.5393076154848107,
            unit: 'mg'
          },
          {
            label: 'Potassium',
            tag: 'K',
            schemaOrgTag: null,
            total: 19.76429626922723,
            hasRDI: true,
            daily: 0.4205169418984517,
            unit: 'mg'
          },
          {
            label: 'Iron',
            tag: 'FE',
            schemaOrgTag: null,
            total: 0.08813625017235377,
            hasRDI: true,
            daily: 0.4896458342908543,
            unit: 'mg'
          },
          {
            label: 'Zinc',
            tag: 'ZN',
            schemaOrgTag: null,
            total: 0.03321780194468798,
            hasRDI: true,
            daily: 0.30198001767898164,
            unit: 'mg'
          },
          {
            label: 'Phosphorus',
            tag: 'P',
            schemaOrgTag: null,
            total: 3.530183970072409,
            hasRDI: true,
            daily: 0.5043119957246299,
            unit: 'mg'
          },
          {
            label: 'Vitamin A',
            tag: 'VITA_RAE',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: true,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Vitamin C',
            tag: 'VITC',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: true,
            daily: 0.0,
            unit: 'mg'
          },
          {
            label: 'Thiamin (B1)',
            tag: 'THIA',
            schemaOrgTag: null,
            total: 0.0023534559800482725,
            hasRDI: true,
            daily: 0.19612133167068938,
            unit: 'mg'
          },
          {
            label: 'Riboflavin (B2)',
            tag: 'RIBF',
            schemaOrgTag: null,
            total: 0.0271374439193641,
            hasRDI: true,
            daily: 2.0874956861049307,
            unit: 'mg'
          },
          {
            label: 'Niacin (B3)',
            tag: 'NIA',
            schemaOrgTag: null,
            total: 0.08472441528173781,
            hasRDI: true,
            daily: 0.5295275955108614,
            unit: 'mg'
          },
          {
            label: 'Vitamin B6',
            tag: 'VITB6A',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: true,
            daily: 0.0,
            unit: 'mg'
          },
          {
            label: 'Folate equivalent (total)',
            tag: 'FOLDFE',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: true,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Folate (food)',
            tag: 'FOLFD',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: false,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Folic acid',
            tag: 'FOLAC',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: false,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Vitamin B12',
            tag: 'VITB12',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: true,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Vitamin D',
            tag: 'VITD',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: true,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Vitamin E',
            tag: 'TOCPHA',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: true,
            daily: 0.0,
            unit: 'mg'
          },
          {
            label: 'Vitamin K',
            tag: 'VITK1',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: true,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Sugar alcohols',
            tag: 'Sugar.alcohol',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: false,
            daily: 0.0,
            unit: 'g'
          },
          {
            label: 'Water',
            tag: 'WATER',
            schemaOrgTag: null,
            total: 68.21041760956277,
            hasRDI: false,
            daily: 0.0,
            unit: 'g'
          }
        ]
      },
      _links: {
        self: {
          title: 'Self',
          href: 'https://api.edamam.com/api/recipes/v2/e058f0e83a912b1da0bd37110bf91308?type=public&app_id=2a3177b2&app_key=5c61b3aea75a67ec7ced14be8a5c81e1'
        }
      }
    },
    {
      recipe: {
        uri: 'http://www.edamam.com/ontologies/edamam.owl#recipe_e595ea25d81017c6d6c371129f94833a',
        label: 'Coffee',
        image:
          'https://edamam-product-images.s3.amazonaws.com/web-img/452/4522edf9970ad0a061b84a021f05c595.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=10a03c048de52f3e905c18c3fdfce04107fff4dc9362b76be7fb69b05d21d643',
        images: {
          THUMBNAIL: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/452/4522edf9970ad0a061b84a021f05c595-s.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=aae1c03fddb7143d11d8c2cd9c0a7aa818779622bf51f622727b84668f1ebf54',
            width: 100,
            height: 100
          },
          SMALL: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/452/4522edf9970ad0a061b84a021f05c595-m.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ac828bf6a2024d24713c9e7a643c5d3ef32b758bb33275d8cb8814732225cf0f',
            width: 200,
            height: 200
          },
          REGULAR: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/452/4522edf9970ad0a061b84a021f05c595.jpeg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=10a03c048de52f3e905c18c3fdfce04107fff4dc9362b76be7fb69b05d21d643',
            width: 300,
            height: 300
          }
        },
        source: 'Food Network',
        url: 'https://www.foodnetwork.com/recipes/alton-brown/coffee-recipe-1957649',
        shareAs: 'http://www.edamam.com/recipe/coffee-e595ea25d81017c6d6c371129f94833a/coffee',
        yield: 6.0,
        dietLabels: ['Low-Fat', 'Low-Sodium'],
        healthLabels: [
          'Sugar-Conscious',
          'Low Sugar',
          'Kidney-Friendly',
          'Keto-Friendly',
          'Vegan',
          'Vegetarian',
          'Pescatarian',
          'Paleo',
          'Dairy-Free',
          'Gluten-Free',
          'Wheat-Free',
          'Egg-Free',
          'Peanut-Free',
          'Tree-Nut-Free',
          'Soy-Free',
          'Fish-Free',
          'Shellfish-Free',
          'Pork-Free',
          'Red-Meat-Free',
          'Crustacean-Free',
          'Celery-Free',
          'Mustard-Free',
          'Sesame-Free',
          'Lupine-Free',
          'Mollusk-Free',
          'Alcohol-Free',
          'No oil added',
          'Sulfite-Free',
          'FODMAP-Free',
          'Kosher'
        ],
        cautions: ['Sulfites'],
        ingredientLines: [
          '36 ounces filtered water',
          '12 tablespoons freshly ground coffee',
          '1/4 teaspoon kosher salt'
        ],
        ingredients: [
          {
            text: '36 ounces filtered water',
            quantity: 36.0,
            measure: 'ounce',
            food: 'filtered water',
            weight: 1020.5828325,
            foodCategory: 'water',
            foodId: 'food_a8ya093b8xvmglaux4scabvvpj5n',
            image: 'https://www.edamam.com/food-img/23a/23ad491827f58ce949c582bbb13a9c12.jpg'
          },
          {
            text: '12 tablespoons freshly ground coffee',
            quantity: 12.0,
            measure: 'tablespoon',
            food: 'ground coffee',
            weight: 35.999999997565396,
            foodCategory: 'coffee and tea',
            foodId: 'food_aof7z08ad0qgsta38run7arojif8',
            image: 'https://www.edamam.com/food-img/336/336e810373dd353a955a6896699b586e.jpg'
          },
          {
            text: '1/4 teaspoon kosher salt',
            quantity: 0.25,
            measure: 'teaspoon',
            food: 'kosher salt',
            weight: 1.2135416667282188,
            foodCategory: 'Condiments and sauces',
            foodId: 'food_a1vgrj1bs8rd1majvmd9ubz8ttkg',
            image: 'https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg'
          }
        ],
        calories: 127.07999999140584,
        totalWeight: 1057.7963741642936,
        totalTime: 5.0,
        cuisineType: ['italian'],
        mealType: ['breakfast'],
        dishType: ['drinks'],
        totalNutrients: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 127.07999999140586,
            unit: 'kcal'
          },
          FAT: { label: 'Fat', quantity: 0.17999999998782698, unit: 'g' },
          FASAT: {
            label: 'Saturated',
            quantity: 0.07091999999520383,
            unit: 'g'
          },
          FATRN: { label: 'Trans', quantity: 0.0, unit: 'g' },
          FAMS: {
            label: 'Monounsaturated',
            quantity: 0.014759999999001815,
            unit: 'g'
          },
          FAPU: {
            label: 'Polyunsaturated',
            quantity: 0.07055999999522818,
            unit: 'g'
          },
          CHOCDF: { label: 'Carbs', quantity: 27.14399999816431, unit: 'g' },
          'CHOCDF.net': {
            label: 'Carbohydrates (net)',
            quantity: 27.14399999816431,
            unit: 'g'
          },
          FIBTG: { label: 'Fiber', quantity: 0.0, unit: 'g' },
          SUGAR: { label: 'Sugars', quantity: 0.0, unit: 'g' },
          'SUGAR.added': { label: 'Sugars, added', quantity: 0.0, unit: 'g' },
          PROCNT: { label: 'Protein', quantity: 4.391999999702978, unit: 'g' },
          CHOLE: { label: 'Cholesterol', quantity: 0.0, unit: 'mg' },
          NA: { label: 'Sodium', quantity: 504.07613583962234, unit: 'mg' },
          CA: { label: 'Calcium', quantity: 153.10953324658198, unit: 'mg' },
          MG: { label: 'Magnesium', quantity: 138.14379205870614, unit: 'mg' },
          K: { label: 'Potassium', quantity: 1272.697083247275, unit: 'mg' },
          FE: { label: 'Iron', quantity: 1.5916046873928371, unit: 'mg' },
          ZN: { label: 'Zinc', quantity: 0.12721354165820709, unit: 'mg' },
          P: { label: 'Phosphorus', quantity: 109.07999999262313, unit: 'mg' },
          VITA_RAE: { label: 'Vitamin A', quantity: 0.0, unit: 'µg' },
          VITC: { label: 'Vitamin C', quantity: 0.0, unit: 'mg' },
          THIA: {
            label: 'Thiamin (B1)',
            quantity: 0.002879999999805232,
            unit: 'mg'
          },
          RIBF: {
            label: 'Riboflavin (B2)',
            quantity: 0.02663999999819839,
            unit: 'mg'
          },
          NIA: {
            label: 'Niacin (B3)',
            quantity: 10.142279999314098,
            unit: 'mg'
          },
          VITB6A: {
            label: 'Vitamin B6',
            quantity: 0.010439999999293965,
            unit: 'mg'
          },
          FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 0.0,
            unit: 'µg'
          },
          FOLFD: { label: 'Folate (food)', quantity: 0.0, unit: 'µg' },
          FOLAC: { label: 'Folic acid', quantity: 0.0, unit: 'µg' },
          VITB12: { label: 'Vitamin B12', quantity: 0.0, unit: 'µg' },
          VITD: { label: 'Vitamin D', quantity: 0.0, unit: 'µg' },
          TOCPHA: { label: 'Vitamin E', quantity: 0.0, unit: 'mg' },
          VITK1: {
            label: 'Vitamin K',
            quantity: 0.6839999999537425,
            unit: 'µg'
          },
          'Sugar.alcohol': { label: 'Sugar alcohol', quantity: 0.0, unit: 'g' },
          WATER: { label: 'Water', quantity: 1021.4971430167581, unit: 'g' }
        },
        totalDaily: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 6.353999999570293,
            unit: '%'
          },
          FAT: { label: 'Fat', quantity: 0.2769230769043492, unit: '%' },
          FASAT: {
            label: 'Saturated',
            quantity: 0.35459999997601915,
            unit: '%'
          },
          CHOCDF: { label: 'Carbs', quantity: 9.047999999388104, unit: '%' },
          FIBTG: { label: 'Fiber', quantity: 0.0, unit: '%' },
          PROCNT: { label: 'Protein', quantity: 8.783999999405957, unit: '%' },
          CHOLE: { label: 'Cholesterol', quantity: 0.0, unit: '%' },
          NA: { label: 'Sodium', quantity: 21.003172326650933, unit: '%' },
          CA: { label: 'Calcium', quantity: 15.310953324658199, unit: '%' },
          MG: { label: 'Magnesium', quantity: 32.891379061596695, unit: '%' },
          K: { label: 'Potassium', quantity: 27.0786613456867, unit: '%' },
          FE: { label: 'Iron', quantity: 8.84224826329354, unit: '%' },
          ZN: { label: 'Zinc', quantity: 1.156486742347337, unit: '%' },
          P: { label: 'Phosphorus', quantity: 15.582857141803304, unit: '%' },
          VITA_RAE: { label: 'Vitamin A', quantity: 0.0, unit: '%' },
          VITC: { label: 'Vitamin C', quantity: 0.0, unit: '%' },
          THIA: {
            label: 'Thiamin (B1)',
            quantity: 0.2399999999837693,
            unit: '%'
          },
          RIBF: {
            label: 'Riboflavin (B2)',
            quantity: 2.049230769092184,
            unit: '%'
          },
          NIA: {
            label: 'Niacin (B3)',
            quantity: 63.389249995713115,
            unit: '%'
          },
          VITB6A: {
            label: 'Vitamin B6',
            quantity: 0.8030769230226127,
            unit: '%'
          },
          FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 0.0,
            unit: '%'
          },
          VITB12: { label: 'Vitamin B12', quantity: 0.0, unit: '%' },
          VITD: { label: 'Vitamin D', quantity: 0.0, unit: '%' },
          TOCPHA: { label: 'Vitamin E', quantity: 0.0, unit: '%' },
          VITK1: { label: 'Vitamin K', quantity: 0.569999999961452, unit: '%' }
        },
        digest: [
          {
            label: 'Fat',
            tag: 'FAT',
            schemaOrgTag: 'fatContent',
            total: 0.17999999998782698,
            hasRDI: true,
            daily: 0.2769230769043492,
            unit: 'g',
            sub: [
              {
                label: 'Saturated',
                tag: 'FASAT',
                schemaOrgTag: 'saturatedFatContent',
                total: 0.07091999999520383,
                hasRDI: true,
                daily: 0.35459999997601915,
                unit: 'g'
              },
              {
                label: 'Trans',
                tag: 'FATRN',
                schemaOrgTag: 'transFatContent',
                total: 0.0,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Monounsaturated',
                tag: 'FAMS',
                schemaOrgTag: null,
                total: 0.014759999999001815,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Polyunsaturated',
                tag: 'FAPU',
                schemaOrgTag: null,
                total: 0.07055999999522818,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              }
            ]
          },
          {
            label: 'Carbs',
            tag: 'CHOCDF',
            schemaOrgTag: 'carbohydrateContent',
            total: 27.14399999816431,
            hasRDI: true,
            daily: 9.047999999388104,
            unit: 'g',
            sub: [
              {
                label: 'Carbs (net)',
                tag: 'CHOCDF.net',
                schemaOrgTag: null,
                total: 27.14399999816431,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Fiber',
                tag: 'FIBTG',
                schemaOrgTag: 'fiberContent',
                total: 0.0,
                hasRDI: true,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Sugars',
                tag: 'SUGAR',
                schemaOrgTag: 'sugarContent',
                total: 0.0,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Sugars, added',
                tag: 'SUGAR.added',
                schemaOrgTag: null,
                total: 0.0,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              }
            ]
          },
          {
            label: 'Protein',
            tag: 'PROCNT',
            schemaOrgTag: 'proteinContent',
            total: 4.391999999702978,
            hasRDI: true,
            daily: 8.783999999405957,
            unit: 'g'
          },
          {
            label: 'Cholesterol',
            tag: 'CHOLE',
            schemaOrgTag: 'cholesterolContent',
            total: 0.0,
            hasRDI: true,
            daily: 0.0,
            unit: 'mg'
          },
          {
            label: 'Sodium',
            tag: 'NA',
            schemaOrgTag: 'sodiumContent',
            total: 504.07613583962234,
            hasRDI: true,
            daily: 21.003172326650933,
            unit: 'mg'
          },
          {
            label: 'Calcium',
            tag: 'CA',
            schemaOrgTag: null,
            total: 153.10953324658198,
            hasRDI: true,
            daily: 15.310953324658199,
            unit: 'mg'
          },
          {
            label: 'Magnesium',
            tag: 'MG',
            schemaOrgTag: null,
            total: 138.14379205870614,
            hasRDI: true,
            daily: 32.891379061596695,
            unit: 'mg'
          },
          {
            label: 'Potassium',
            tag: 'K',
            schemaOrgTag: null,
            total: 1272.697083247275,
            hasRDI: true,
            daily: 27.0786613456867,
            unit: 'mg'
          },
          {
            label: 'Iron',
            tag: 'FE',
            schemaOrgTag: null,
            total: 1.5916046873928371,
            hasRDI: true,
            daily: 8.84224826329354,
            unit: 'mg'
          },
          {
            label: 'Zinc',
            tag: 'ZN',
            schemaOrgTag: null,
            total: 0.12721354165820709,
            hasRDI: true,
            daily: 1.156486742347337,
            unit: 'mg'
          },
          {
            label: 'Phosphorus',
            tag: 'P',
            schemaOrgTag: null,
            total: 109.07999999262313,
            hasRDI: true,
            daily: 15.582857141803304,
            unit: 'mg'
          },
          {
            label: 'Vitamin A',
            tag: 'VITA_RAE',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: true,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Vitamin C',
            tag: 'VITC',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: true,
            daily: 0.0,
            unit: 'mg'
          },
          {
            label: 'Thiamin (B1)',
            tag: 'THIA',
            schemaOrgTag: null,
            total: 0.002879999999805232,
            hasRDI: true,
            daily: 0.2399999999837693,
            unit: 'mg'
          },
          {
            label: 'Riboflavin (B2)',
            tag: 'RIBF',
            schemaOrgTag: null,
            total: 0.02663999999819839,
            hasRDI: true,
            daily: 2.049230769092184,
            unit: 'mg'
          },
          {
            label: 'Niacin (B3)',
            tag: 'NIA',
            schemaOrgTag: null,
            total: 10.142279999314098,
            hasRDI: true,
            daily: 63.389249995713115,
            unit: 'mg'
          },
          {
            label: 'Vitamin B6',
            tag: 'VITB6A',
            schemaOrgTag: null,
            total: 0.010439999999293965,
            hasRDI: true,
            daily: 0.8030769230226127,
            unit: 'mg'
          },
          {
            label: 'Folate equivalent (total)',
            tag: 'FOLDFE',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: true,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Folate (food)',
            tag: 'FOLFD',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: false,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Folic acid',
            tag: 'FOLAC',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: false,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Vitamin B12',
            tag: 'VITB12',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: true,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Vitamin D',
            tag: 'VITD',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: true,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Vitamin E',
            tag: 'TOCPHA',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: true,
            daily: 0.0,
            unit: 'mg'
          },
          {
            label: 'Vitamin K',
            tag: 'VITK1',
            schemaOrgTag: null,
            total: 0.6839999999537425,
            hasRDI: true,
            daily: 0.569999999961452,
            unit: 'µg'
          },
          {
            label: 'Sugar alcohols',
            tag: 'Sugar.alcohol',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: false,
            daily: 0.0,
            unit: 'g'
          },
          {
            label: 'Water',
            tag: 'WATER',
            schemaOrgTag: null,
            total: 1021.4971430167581,
            hasRDI: false,
            daily: 0.0,
            unit: 'g'
          }
        ]
      },
      _links: {
        self: {
          title: 'Self',
          href: 'https://api.edamam.com/api/recipes/v2/e595ea25d81017c6d6c371129f94833a?type=public&app_id=2a3177b2&app_key=5c61b3aea75a67ec7ced14be8a5c81e1'
        }
      }
    },
    {
      recipe: {
        uri: 'http://www.edamam.com/ontologies/edamam.owl#recipe_c342e720f679cd098295ccb7baad655b',
        label: 'Iced Coffee',
        image:
          'https://edamam-product-images.s3.amazonaws.com/web-img/ff7/ff7ae227267ffe1ec1bcfe3267a0459b.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=49067b0060aa2daf482d9085a9c9e352d8a2b42824f7b65333e9b0e128c7f32d',
        images: {
          THUMBNAIL: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/ff7/ff7ae227267ffe1ec1bcfe3267a0459b-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6f70177a8a9c9d5219d8171a1cb45623d6041c9b0d7eccd1f7cd8ac258cc7c6b',
            width: 100,
            height: 100
          },
          SMALL: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/ff7/ff7ae227267ffe1ec1bcfe3267a0459b-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=8f8b71e1788886410c9376d8d76016b87544e5654305b3d7a67d7e8c89202df7',
            width: 200,
            height: 200
          },
          REGULAR: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/ff7/ff7ae227267ffe1ec1bcfe3267a0459b.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=49067b0060aa2daf482d9085a9c9e352d8a2b42824f7b65333e9b0e128c7f32d',
            width: 300,
            height: 300
          },
          LARGE: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/ff7/ff7ae227267ffe1ec1bcfe3267a0459b-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=b91ca0aefd44ace6c5aa2ac715c0a1fe13c17e31c1dc42a230e8404edc928d7c',
            width: 600,
            height: 600
          }
        },
        source: "Men's Health",
        url: 'https://www.menshealth.com/recipes/iced-coffee',
        shareAs: 'http://www.edamam.com/recipe/iced-coffee-c342e720f679cd098295ccb7baad655b/coffee',
        yield: 2.0,
        dietLabels: ['Low-Sodium'],
        healthLabels: [
          'Sugar-Conscious',
          'Low Sugar',
          'Low Potassium',
          'Kidney-Friendly',
          'Keto-Friendly',
          'Vegan',
          'Vegetarian',
          'Pescatarian',
          'Paleo',
          'Mediterranean',
          'Dairy-Free',
          'Gluten-Free',
          'Wheat-Free',
          'Egg-Free',
          'Peanut-Free',
          'Tree-Nut-Free',
          'Soy-Free',
          'Fish-Free',
          'Shellfish-Free',
          'Pork-Free',
          'Red-Meat-Free',
          'Crustacean-Free',
          'Celery-Free',
          'Mustard-Free',
          'Sesame-Free',
          'Lupine-Free',
          'Mollusk-Free',
          'Alcohol-Free',
          'No oil added',
          'Sulfite-Free',
          'FODMAP-Free',
          'Kosher',
          'Immuno-Supportive'
        ],
        cautions: ['Sulfites'],
        ingredientLines: ['2/3 cup coffee grounds', '3 cups cold water'],
        ingredients: [
          {
            text: '2/3 cup coffee grounds',
            quantity: 0.6666666666666666,
            measure: 'cup',
            food: 'coffee',
            weight: 158.0,
            foodCategory: 'coffee and tea',
            foodId: 'food_ax0a0yxbbe4hx0apiz1tla01s2w7',
            image: 'https://www.edamam.com/food-img/ee9/ee9566349cb84dfd9ddac1fdf8cbc907.jpg'
          },
          {
            text: '3 cups cold water',
            quantity: 3.0,
            measure: 'cup',
            food: 'water',
            weight: 711.0,
            foodCategory: 'water',
            foodId: 'food_a99vzubbk1ayrsad318rvbzr3dh0',
            image: 'https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg'
          }
        ],
        calories: 1.58,
        totalWeight: 869.0,
        totalTime: 5.0,
        cuisineType: ['middle eastern'],
        mealType: ['teatime'],
        dishType: ['drinks'],
        totalNutrients: {
          ENERC_KCAL: { label: 'Energy', quantity: 1.58, unit: 'kcal' },
          FAT: { label: 'Fat', quantity: 0.0316, unit: 'g' },
          FASAT: { label: 'Saturated', quantity: 0.00316, unit: 'g' },
          FATRN: { label: 'Trans', quantity: 0.0, unit: 'g' },
          FAMS: { label: 'Monounsaturated', quantity: 0.0237, unit: 'g' },
          FAPU: { label: 'Polyunsaturated', quantity: 0.00158, unit: 'g' },
          CHOCDF: { label: 'Carbs', quantity: 0.0, unit: 'g' },
          'CHOCDF.net': {
            label: 'Carbohydrates (net)',
            quantity: 0.0,
            unit: 'g'
          },
          FIBTG: { label: 'Fiber', quantity: 0.0, unit: 'g' },
          SUGAR: { label: 'Sugars', quantity: 0.0, unit: 'g' },
          'SUGAR.added': { label: 'Sugars, added', quantity: 0.0, unit: 'g' },
          PROCNT: { label: 'Protein', quantity: 0.1896, unit: 'g' },
          CHOLE: { label: 'Cholesterol', quantity: 0.0, unit: 'mg' },
          NA: { label: 'Sodium', quantity: 31.6, unit: 'mg' },
          CA: { label: 'Calcium', quantity: 24.490000000000002, unit: 'mg' },
          MG: { label: 'Magnesium', quantity: 11.850000000000001, unit: 'mg' },
          K: { label: 'Potassium', quantity: 77.42, unit: 'mg' },
          FE: { label: 'Iron', quantity: 0.0158, unit: 'mg' },
          ZN: { label: 'Zinc', quantity: 0.10270000000000001, unit: 'mg' },
          P: { label: 'Phosphorus', quantity: 4.74, unit: 'mg' },
          VITA_RAE: { label: 'Vitamin A', quantity: 0.0, unit: 'µg' },
          VITC: { label: 'Vitamin C', quantity: 0.0, unit: 'mg' },
          THIA: { label: 'Thiamin (B1)', quantity: 0.02212, unit: 'mg' },
          RIBF: { label: 'Riboflavin (B2)', quantity: 0.12008, unit: 'mg' },
          NIA: { label: 'Niacin (B3)', quantity: 0.30178, unit: 'mg' },
          VITB6A: { label: 'Vitamin B6', quantity: 0.00158, unit: 'mg' },
          FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 3.16,
            unit: 'µg'
          },
          FOLFD: { label: 'Folate (food)', quantity: 3.16, unit: 'µg' },
          FOLAC: { label: 'Folic acid', quantity: 0.0, unit: 'µg' },
          VITB12: { label: 'Vitamin B12', quantity: 0.0, unit: 'µg' },
          VITD: { label: 'Vitamin D', quantity: 0.0, unit: 'µg' },
          TOCPHA: { label: 'Vitamin E', quantity: 0.0158, unit: 'mg' },
          VITK1: {
            label: 'Vitamin K',
            quantity: 0.15800000000000003,
            unit: 'µg'
          },
          'Sugar.alcohol': { label: 'Sugar alcohol', quantity: 0.0, unit: 'g' },
          WATER: { label: 'Water', quantity: 867.3252000000001, unit: 'g' }
        },
        totalDaily: {
          ENERC_KCAL: { label: 'Energy', quantity: 0.079, unit: '%' },
          FAT: { label: 'Fat', quantity: 0.048615384615384616, unit: '%' },
          FASAT: { label: 'Saturated', quantity: 0.0158, unit: '%' },
          CHOCDF: { label: 'Carbs', quantity: 0.0, unit: '%' },
          FIBTG: { label: 'Fiber', quantity: 0.0, unit: '%' },
          PROCNT: {
            label: 'Protein',
            quantity: 0.37920000000000004,
            unit: '%'
          },
          CHOLE: { label: 'Cholesterol', quantity: 0.0, unit: '%' },
          NA: { label: 'Sodium', quantity: 1.3166666666666667, unit: '%' },
          CA: { label: 'Calcium', quantity: 2.449, unit: '%' },
          MG: { label: 'Magnesium', quantity: 2.821428571428572, unit: '%' },
          K: { label: 'Potassium', quantity: 1.6472340425531915, unit: '%' },
          FE: { label: 'Iron', quantity: 0.08777777777777779, unit: '%' },
          ZN: { label: 'Zinc', quantity: 0.9336363636363637, unit: '%' },
          P: { label: 'Phosphorus', quantity: 0.6771428571428572, unit: '%' },
          VITA_RAE: { label: 'Vitamin A', quantity: 0.0, unit: '%' },
          VITC: { label: 'Vitamin C', quantity: 0.0, unit: '%' },
          THIA: {
            label: 'Thiamin (B1)',
            quantity: 1.8433333333333335,
            unit: '%'
          },
          RIBF: {
            label: 'Riboflavin (B2)',
            quantity: 9.236923076923077,
            unit: '%'
          },
          NIA: { label: 'Niacin (B3)', quantity: 1.886125, unit: '%' },
          VITB6A: {
            label: 'Vitamin B6',
            quantity: 0.12153846153846154,
            unit: '%'
          },
          FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 0.79,
            unit: '%'
          },
          VITB12: { label: 'Vitamin B12', quantity: 0.0, unit: '%' },
          VITD: { label: 'Vitamin D', quantity: 0.0, unit: '%' },
          TOCPHA: {
            label: 'Vitamin E',
            quantity: 0.10533333333333333,
            unit: '%'
          },
          VITK1: {
            label: 'Vitamin K',
            quantity: 0.13166666666666668,
            unit: '%'
          }
        },
        digest: [
          {
            label: 'Fat',
            tag: 'FAT',
            schemaOrgTag: 'fatContent',
            total: 0.0316,
            hasRDI: true,
            daily: 0.048615384615384616,
            unit: 'g',
            sub: [
              {
                label: 'Saturated',
                tag: 'FASAT',
                schemaOrgTag: 'saturatedFatContent',
                total: 0.00316,
                hasRDI: true,
                daily: 0.0158,
                unit: 'g'
              },
              {
                label: 'Trans',
                tag: 'FATRN',
                schemaOrgTag: 'transFatContent',
                total: 0.0,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Monounsaturated',
                tag: 'FAMS',
                schemaOrgTag: null,
                total: 0.0237,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Polyunsaturated',
                tag: 'FAPU',
                schemaOrgTag: null,
                total: 0.00158,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              }
            ]
          },
          {
            label: 'Carbs',
            tag: 'CHOCDF',
            schemaOrgTag: 'carbohydrateContent',
            total: 0.0,
            hasRDI: true,
            daily: 0.0,
            unit: 'g',
            sub: [
              {
                label: 'Carbs (net)',
                tag: 'CHOCDF.net',
                schemaOrgTag: null,
                total: 0.0,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Fiber',
                tag: 'FIBTG',
                schemaOrgTag: 'fiberContent',
                total: 0.0,
                hasRDI: true,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Sugars',
                tag: 'SUGAR',
                schemaOrgTag: 'sugarContent',
                total: 0.0,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Sugars, added',
                tag: 'SUGAR.added',
                schemaOrgTag: null,
                total: 0.0,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              }
            ]
          },
          {
            label: 'Protein',
            tag: 'PROCNT',
            schemaOrgTag: 'proteinContent',
            total: 0.1896,
            hasRDI: true,
            daily: 0.37920000000000004,
            unit: 'g'
          },
          {
            label: 'Cholesterol',
            tag: 'CHOLE',
            schemaOrgTag: 'cholesterolContent',
            total: 0.0,
            hasRDI: true,
            daily: 0.0,
            unit: 'mg'
          },
          {
            label: 'Sodium',
            tag: 'NA',
            schemaOrgTag: 'sodiumContent',
            total: 31.6,
            hasRDI: true,
            daily: 1.3166666666666667,
            unit: 'mg'
          },
          {
            label: 'Calcium',
            tag: 'CA',
            schemaOrgTag: null,
            total: 24.490000000000002,
            hasRDI: true,
            daily: 2.449,
            unit: 'mg'
          },
          {
            label: 'Magnesium',
            tag: 'MG',
            schemaOrgTag: null,
            total: 11.850000000000001,
            hasRDI: true,
            daily: 2.821428571428572,
            unit: 'mg'
          },
          {
            label: 'Potassium',
            tag: 'K',
            schemaOrgTag: null,
            total: 77.42,
            hasRDI: true,
            daily: 1.6472340425531915,
            unit: 'mg'
          },
          {
            label: 'Iron',
            tag: 'FE',
            schemaOrgTag: null,
            total: 0.0158,
            hasRDI: true,
            daily: 0.08777777777777779,
            unit: 'mg'
          },
          {
            label: 'Zinc',
            tag: 'ZN',
            schemaOrgTag: null,
            total: 0.10270000000000001,
            hasRDI: true,
            daily: 0.9336363636363637,
            unit: 'mg'
          },
          {
            label: 'Phosphorus',
            tag: 'P',
            schemaOrgTag: null,
            total: 4.74,
            hasRDI: true,
            daily: 0.6771428571428572,
            unit: 'mg'
          },
          {
            label: 'Vitamin A',
            tag: 'VITA_RAE',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: true,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Vitamin C',
            tag: 'VITC',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: true,
            daily: 0.0,
            unit: 'mg'
          },
          {
            label: 'Thiamin (B1)',
            tag: 'THIA',
            schemaOrgTag: null,
            total: 0.02212,
            hasRDI: true,
            daily: 1.8433333333333335,
            unit: 'mg'
          },
          {
            label: 'Riboflavin (B2)',
            tag: 'RIBF',
            schemaOrgTag: null,
            total: 0.12008,
            hasRDI: true,
            daily: 9.236923076923077,
            unit: 'mg'
          },
          {
            label: 'Niacin (B3)',
            tag: 'NIA',
            schemaOrgTag: null,
            total: 0.30178,
            hasRDI: true,
            daily: 1.886125,
            unit: 'mg'
          },
          {
            label: 'Vitamin B6',
            tag: 'VITB6A',
            schemaOrgTag: null,
            total: 0.00158,
            hasRDI: true,
            daily: 0.12153846153846154,
            unit: 'mg'
          },
          {
            label: 'Folate equivalent (total)',
            tag: 'FOLDFE',
            schemaOrgTag: null,
            total: 3.16,
            hasRDI: true,
            daily: 0.79,
            unit: 'µg'
          },
          {
            label: 'Folate (food)',
            tag: 'FOLFD',
            schemaOrgTag: null,
            total: 3.16,
            hasRDI: false,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Folic acid',
            tag: 'FOLAC',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: false,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Vitamin B12',
            tag: 'VITB12',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: true,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Vitamin D',
            tag: 'VITD',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: true,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Vitamin E',
            tag: 'TOCPHA',
            schemaOrgTag: null,
            total: 0.0158,
            hasRDI: true,
            daily: 0.10533333333333333,
            unit: 'mg'
          },
          {
            label: 'Vitamin K',
            tag: 'VITK1',
            schemaOrgTag: null,
            total: 0.15800000000000003,
            hasRDI: true,
            daily: 0.13166666666666668,
            unit: 'µg'
          },
          {
            label: 'Sugar alcohols',
            tag: 'Sugar.alcohol',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: false,
            daily: 0.0,
            unit: 'g'
          },
          {
            label: 'Water',
            tag: 'WATER',
            schemaOrgTag: null,
            total: 867.3252000000001,
            hasRDI: false,
            daily: 0.0,
            unit: 'g'
          }
        ]
      },
      _links: {
        self: {
          title: 'Self',
          href: 'https://api.edamam.com/api/recipes/v2/c342e720f679cd098295ccb7baad655b?type=public&app_id=2a3177b2&app_key=5c61b3aea75a67ec7ced14be8a5c81e1'
        }
      }
    },
    {
      recipe: {
        uri: 'http://www.edamam.com/ontologies/edamam.owl#recipe_8dd9425e2e8be1a0aac13a41b4b7ed5c',
        label: 'Coffee Terrine',
        image:
          'https://edamam-product-images.s3.amazonaws.com/web-img/329/329da404a7de76844bf54852bff45a78.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d897807c70b71bf7dc466f19cb73a4e76fe98238e82acfa4ec49de83713931a3',
        images: {
          THUMBNAIL: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/329/329da404a7de76844bf54852bff45a78-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1d5a3ba1a23d7b10cf99badbd5d2b827332c33ffe6e356121c9716fe85265fb4',
            width: 100,
            height: 100
          },
          SMALL: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/329/329da404a7de76844bf54852bff45a78-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ab0583f6bc58b629df7e22416455bc7caf1c136cd07964cd6158ce9080a9db2a',
            width: 200,
            height: 200
          },
          REGULAR: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/329/329da404a7de76844bf54852bff45a78.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d897807c70b71bf7dc466f19cb73a4e76fe98238e82acfa4ec49de83713931a3',
            width: 300,
            height: 300
          }
        },
        source: 'Good Housekeeping',
        url: 'http://www.goodhousekeeping.com/food-recipes/a14601/coffee-terrine-recipe-wdy1013/',
        shareAs: 'http://www.edamam.com/recipe/coffee-terrine-8dd9425e2e8be1a0aac13a41b4b7ed5c/coffee',
        yield: 12.0,
        dietLabels: ['Low-Sodium'],
        healthLabels: [
          'Low Potassium',
          'Kidney-Friendly',
          'Vegetarian',
          'Pescatarian',
          'Peanut-Free',
          'Tree-Nut-Free',
          'Soy-Free',
          'Fish-Free',
          'Shellfish-Free',
          'Pork-Free',
          'Red-Meat-Free',
          'Crustacean-Free',
          'Celery-Free',
          'Mustard-Free',
          'Sesame-Free',
          'Lupine-Free',
          'Mollusk-Free',
          'Alcohol-Free',
          'Kosher'
        ],
        cautions: ['Sulfites'],
        ingredientLines: [
          '1 c. heavy cream',
          '1 container container coffee yogurt',
          '¼ c. sugar',
          '¼ c. freshly brewed coffee',
          '1 tsp. pure vanilla extract',
          '1 frozen pound cake',
          '½ c. semisweet chocolate chips',
          '2 tbsp. coffee beans'
        ],
        ingredients: [
          {
            text: '1 c. heavy cream',
            quantity: 1.0,
            measure: 'cup',
            food: 'heavy cream',
            weight: 238.0,
            foodCategory: 'Dairy',
            foodId: 'food_bgtkr21b5v16mca246x9ebnaswyo',
            image: 'https://www.edamam.com/food-img/484/4848d71f6a14dd5076083f5e17925420.jpg'
          },
          {
            text: '1 container container coffee yogurt',
            quantity: 1.0,
            measure: 'container',
            food: 'coffee yogurt',
            weight: 170.0,
            foodCategory: 'yogurt',
            foodId: 'food_a79ojfkbgdeekgblqmky9bunr8f6',
            image: 'https://www.edamam.com/food-img/933/933eb3791b3a2175e007f1607d56b7e2.jpg'
          },
          {
            text: '¼ c. sugar',
            quantity: 0.25,
            measure: 'cup',
            food: 'sugar',
            weight: 50.0,
            foodCategory: 'sugars',
            foodId: 'food_axi2ijobrk819yb0adceobnhm1c2',
            image: 'https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg'
          },
          {
            text: '¼ c. freshly brewed coffee',
            quantity: 0.25,
            measure: 'cup',
            food: 'coffee',
            weight: 59.25,
            foodCategory: 'coffee and tea',
            foodId: 'food_ax0a0yxbbe4hx0apiz1tla01s2w7',
            image: 'https://www.edamam.com/food-img/ee9/ee9566349cb84dfd9ddac1fdf8cbc907.jpg'
          },
          {
            text: '1 tsp. pure vanilla extract',
            quantity: 1.0,
            measure: 'teaspoon',
            food: 'vanilla extract',
            weight: 4.2,
            foodCategory: 'Condiments and sauces',
            foodId: 'food_bh1wvnqaw3q7ciascfoygaabax2a',
            image: 'https://www.edamam.com/food-img/90f/90f910b0bf82750d4f6528263e014cca.jpg'
          },
          {
            text: '1 frozen pound cake',
            quantity: 1.0,
            measure: '<unit>',
            food: 'pound cake',
            weight: 49.0,
            foodCategory: 'quick breads and pastries',
            foodId: 'food_a3pow6yblg3j8eav7vyyvadbeijd',
            image: 'https://www.edamam.com/food-img/8e7/8e7bdc6077d53235955dca584b2ba568.jpg'
          },
          {
            text: '½ c. semisweet chocolate chips',
            quantity: 0.5,
            measure: 'cup',
            food: 'semisweet chocolate chips',
            weight: 86.5,
            foodCategory: 'chocolate',
            foodId: 'food_beu5dozavhrqdpblca414a55qow3',
            image: 'https://www.edamam.com/food-img/0a1/0a1b6f30cb99e1842cac6167f6f424d7.jpg'
          },
          {
            text: '2 tbsp. coffee beans',
            quantity: 2.0,
            measure: 'tablespoon',
            food: 'coffee beans',
            weight: 5.999999999594232,
            foodCategory: 'coffee and tea',
            foodId: 'food_b36idu0apr5kqtbcs7b7ua8spx6m',
            image: 'https://www.edamam.com/food-img/336/336e810373dd353a955a6896699b586e.jpg'
          }
        ],
        calories: 1740.3384999985676,
        totalWeight: 662.9499999995943,
        totalTime: 260.0,
        cuisineType: ['central europe'],
        mealType: ['teatime'],
        dishType: ['desserts'],
        totalNutrients: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 1740.3384999985676,
            unit: 'kcal'
          },
          FAT: { label: 'Fat', quantity: 126.41976999999798, unit: 'g' },
          FASAT: { label: 'Saturated', quantity: 76.10392499999921, unit: 'g' },
          FATRN: { label: 'Trans', quantity: 0.09408, unit: 'g' },
          FAMS: {
            label: 'Monounsaturated',
            quantity: 37.06293749999983,
            unit: 'g'
          },
          FAPU: {
            label: 'Polyunsaturated',
            quantity: 5.9499404999992045,
            unit: 'g'
          },
          CHOCDF: { label: 'Carbs', quantity: 151.16459999969405, unit: 'g' },
          'CHOCDF.net': {
            label: 'Carbohydrates (net)',
            quantity: 145.76709999969404,
            unit: 'g'
          },
          FIBTG: { label: 'Fiber', quantity: 5.3975, unit: 'g' },
          SUGAR: { label: 'Sugars', quantity: 128.48239999999998, unit: 'g' },
          'SUGAR.added': {
            label: 'Sugars, added',
            quantity: 97.04249999999999,
            unit: 'g'
          },
          PROCNT: { label: 'Protein', quantity: 17.666619999950495, unit: 'g' },
          CHOLE: { label: 'Cholesterol', quantity: 380.5, unit: 'mg' },
          NA: { label: 'Sodium', quantity: 367.1679999998498, unit: 'mg' },
          CA: { label: 'Calcium', quantity: 421.7169999994278, unit: 'mg' },
          MG: { label: 'Magnesium', quantity: 162.35649999867314, unit: 'mg' },
          K: { label: 'Potassium', quantity: 1079.083499985656, unit: 'mg' },
          FE: { label: 'Iron', quantity: 3.889614999982105, unit: 'mg' },
          ZN: { label: 'Zinc', quantity: 3.2048699999985795, unit: 'mg' },
          P: { label: 'Phosphorus', quantity: 512.0494999987704, unit: 'mg' },
          VITA_RAE: {
            label: 'Vitamin A',
            quantity: 1058.3799999999999,
            unit: 'µg'
          },
          VITC: { label: 'Vitamin C', quantity: 2.278, unit: 'mg' },
          THIA: {
            label: 'Thiamin (B1)',
            quantity: 0.24324199999996754,
            unit: 'mg'
          },
          RIBF: {
            label: 'Riboflavin (B2)',
            quantity: 0.7660199999996996,
            unit: 'mg'
          },
          NIA: {
            label: 'Niacin (B3)',
            quantity: 3.202422499885683,
            unit: 'mg'
          },
          VITB6A: {
            label: 'Vitamin B6',
            quantity: 0.16761949999988232,
            unit: 'mg'
          },
          FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 59.33,
            unit: 'µg'
          },
          FOLFD: { label: 'Folate (food)', quantity: 47.57, unit: 'µg' },
          FOLAC: {
            label: 'Folic acid',
            quantity: 6.859999999999999,
            unit: 'µg'
          },
          VITB12: { label: 'Vitamin B12', quantity: 1.2338, unit: 'µg' },
          VITD: {
            label: 'Vitamin D',
            quantity: 2.2279999999999998,
            unit: 'µg'
          },
          TOCPHA: { label: 'Vitamin E', quantity: 3.174125, unit: 'mg' },
          VITK1: {
            label: 'Vitamin K',
            quantity: 13.80624999999229,
            unit: 'µg'
          },
          'Sugar.alcohol': { label: 'Sugar alcohol', quantity: 0.0, unit: 'g' },
          WATER: { label: 'Water', quantity: 361.3545349999875, unit: 'g' }
        },
        totalDaily: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 87.01692499992838,
            unit: '%'
          },
          FAT: { label: 'Fat', quantity: 194.49195384615075, unit: '%' },
          FASAT: {
            label: 'Saturated',
            quantity: 380.51962499999604,
            unit: '%'
          },
          CHOCDF: { label: 'Carbs', quantity: 50.38819999989802, unit: '%' },
          FIBTG: { label: 'Fiber', quantity: 21.59, unit: '%' },
          PROCNT: { label: 'Protein', quantity: 35.33323999990099, unit: '%' },
          CHOLE: {
            label: 'Cholesterol',
            quantity: 126.83333333333333,
            unit: '%'
          },
          NA: { label: 'Sodium', quantity: 15.298666666660411, unit: '%' },
          CA: { label: 'Calcium', quantity: 42.17169999994278, unit: '%' },
          MG: { label: 'Magnesium', quantity: 38.656309523493604, unit: '%' },
          K: { label: 'Potassium', quantity: 22.95922340395013, unit: '%' },
          FE: { label: 'Iron', quantity: 21.608972222122805, unit: '%' },
          ZN: { label: 'Zinc', quantity: 29.135181818168906, unit: '%' },
          P: { label: 'Phosphorus', quantity: 73.14992857125293, unit: '%' },
          VITA_RAE: {
            label: 'Vitamin A',
            quantity: 117.59777777777776,
            unit: '%'
          },
          VITC: { label: 'Vitamin C', quantity: 2.531111111111111, unit: '%' },
          THIA: {
            label: 'Thiamin (B1)',
            quantity: 20.27016666666396,
            unit: '%'
          },
          RIBF: {
            label: 'Riboflavin (B2)',
            quantity: 58.92461538459228,
            unit: '%'
          },
          NIA: {
            label: 'Niacin (B3)',
            quantity: 20.015140624285518,
            unit: '%'
          },
          VITB6A: {
            label: 'Vitamin B6',
            quantity: 12.89380769229864,
            unit: '%'
          },
          FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 14.8325,
            unit: '%'
          },
          VITB12: {
            label: 'Vitamin B12',
            quantity: 51.40833333333333,
            unit: '%'
          },
          VITD: { label: 'Vitamin D', quantity: 14.853333333333332, unit: '%' },
          TOCPHA: {
            label: 'Vitamin E',
            quantity: 21.160833333333336,
            unit: '%'
          },
          VITK1: {
            label: 'Vitamin K',
            quantity: 11.505208333326909,
            unit: '%'
          }
        },
        digest: [
          {
            label: 'Fat',
            tag: 'FAT',
            schemaOrgTag: 'fatContent',
            total: 126.41976999999798,
            hasRDI: true,
            daily: 194.49195384615075,
            unit: 'g',
            sub: [
              {
                label: 'Saturated',
                tag: 'FASAT',
                schemaOrgTag: 'saturatedFatContent',
                total: 76.10392499999921,
                hasRDI: true,
                daily: 380.51962499999604,
                unit: 'g'
              },
              {
                label: 'Trans',
                tag: 'FATRN',
                schemaOrgTag: 'transFatContent',
                total: 0.09408,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Monounsaturated',
                tag: 'FAMS',
                schemaOrgTag: null,
                total: 37.06293749999983,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Polyunsaturated',
                tag: 'FAPU',
                schemaOrgTag: null,
                total: 5.9499404999992045,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              }
            ]
          },
          {
            label: 'Carbs',
            tag: 'CHOCDF',
            schemaOrgTag: 'carbohydrateContent',
            total: 151.16459999969405,
            hasRDI: true,
            daily: 50.38819999989802,
            unit: 'g',
            sub: [
              {
                label: 'Carbs (net)',
                tag: 'CHOCDF.net',
                schemaOrgTag: null,
                total: 145.76709999969404,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Fiber',
                tag: 'FIBTG',
                schemaOrgTag: 'fiberContent',
                total: 5.3975,
                hasRDI: true,
                daily: 21.59,
                unit: 'g'
              },
              {
                label: 'Sugars',
                tag: 'SUGAR',
                schemaOrgTag: 'sugarContent',
                total: 128.48239999999998,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Sugars, added',
                tag: 'SUGAR.added',
                schemaOrgTag: null,
                total: 97.04249999999999,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              }
            ]
          },
          {
            label: 'Protein',
            tag: 'PROCNT',
            schemaOrgTag: 'proteinContent',
            total: 17.666619999950495,
            hasRDI: true,
            daily: 35.33323999990099,
            unit: 'g'
          },
          {
            label: 'Cholesterol',
            tag: 'CHOLE',
            schemaOrgTag: 'cholesterolContent',
            total: 380.5,
            hasRDI: true,
            daily: 126.83333333333333,
            unit: 'mg'
          },
          {
            label: 'Sodium',
            tag: 'NA',
            schemaOrgTag: 'sodiumContent',
            total: 367.1679999998498,
            hasRDI: true,
            daily: 15.298666666660411,
            unit: 'mg'
          },
          {
            label: 'Calcium',
            tag: 'CA',
            schemaOrgTag: null,
            total: 421.7169999994278,
            hasRDI: true,
            daily: 42.17169999994278,
            unit: 'mg'
          },
          {
            label: 'Magnesium',
            tag: 'MG',
            schemaOrgTag: null,
            total: 162.35649999867314,
            hasRDI: true,
            daily: 38.656309523493604,
            unit: 'mg'
          },
          {
            label: 'Potassium',
            tag: 'K',
            schemaOrgTag: null,
            total: 1079.083499985656,
            hasRDI: true,
            daily: 22.95922340395013,
            unit: 'mg'
          },
          {
            label: 'Iron',
            tag: 'FE',
            schemaOrgTag: null,
            total: 3.889614999982105,
            hasRDI: true,
            daily: 21.608972222122805,
            unit: 'mg'
          },
          {
            label: 'Zinc',
            tag: 'ZN',
            schemaOrgTag: null,
            total: 3.2048699999985795,
            hasRDI: true,
            daily: 29.135181818168906,
            unit: 'mg'
          },
          {
            label: 'Phosphorus',
            tag: 'P',
            schemaOrgTag: null,
            total: 512.0494999987704,
            hasRDI: true,
            daily: 73.14992857125293,
            unit: 'mg'
          },
          {
            label: 'Vitamin A',
            tag: 'VITA_RAE',
            schemaOrgTag: null,
            total: 1058.3799999999999,
            hasRDI: true,
            daily: 117.59777777777776,
            unit: 'µg'
          },
          {
            label: 'Vitamin C',
            tag: 'VITC',
            schemaOrgTag: null,
            total: 2.278,
            hasRDI: true,
            daily: 2.531111111111111,
            unit: 'mg'
          },
          {
            label: 'Thiamin (B1)',
            tag: 'THIA',
            schemaOrgTag: null,
            total: 0.24324199999996754,
            hasRDI: true,
            daily: 20.27016666666396,
            unit: 'mg'
          },
          {
            label: 'Riboflavin (B2)',
            tag: 'RIBF',
            schemaOrgTag: null,
            total: 0.7660199999996996,
            hasRDI: true,
            daily: 58.92461538459228,
            unit: 'mg'
          },
          {
            label: 'Niacin (B3)',
            tag: 'NIA',
            schemaOrgTag: null,
            total: 3.202422499885683,
            hasRDI: true,
            daily: 20.015140624285518,
            unit: 'mg'
          },
          {
            label: 'Vitamin B6',
            tag: 'VITB6A',
            schemaOrgTag: null,
            total: 0.16761949999988232,
            hasRDI: true,
            daily: 12.89380769229864,
            unit: 'mg'
          },
          {
            label: 'Folate equivalent (total)',
            tag: 'FOLDFE',
            schemaOrgTag: null,
            total: 59.33,
            hasRDI: true,
            daily: 14.8325,
            unit: 'µg'
          },
          {
            label: 'Folate (food)',
            tag: 'FOLFD',
            schemaOrgTag: null,
            total: 47.57,
            hasRDI: false,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Folic acid',
            tag: 'FOLAC',
            schemaOrgTag: null,
            total: 6.859999999999999,
            hasRDI: false,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Vitamin B12',
            tag: 'VITB12',
            schemaOrgTag: null,
            total: 1.2338,
            hasRDI: true,
            daily: 51.40833333333333,
            unit: 'µg'
          },
          {
            label: 'Vitamin D',
            tag: 'VITD',
            schemaOrgTag: null,
            total: 2.2279999999999998,
            hasRDI: true,
            daily: 14.853333333333332,
            unit: 'µg'
          },
          {
            label: 'Vitamin E',
            tag: 'TOCPHA',
            schemaOrgTag: null,
            total: 3.174125,
            hasRDI: true,
            daily: 21.160833333333336,
            unit: 'mg'
          },
          {
            label: 'Vitamin K',
            tag: 'VITK1',
            schemaOrgTag: null,
            total: 13.80624999999229,
            hasRDI: true,
            daily: 11.505208333326909,
            unit: 'µg'
          },
          {
            label: 'Sugar alcohols',
            tag: 'Sugar.alcohol',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: false,
            daily: 0.0,
            unit: 'g'
          },
          {
            label: 'Water',
            tag: 'WATER',
            schemaOrgTag: null,
            total: 361.3545349999875,
            hasRDI: false,
            daily: 0.0,
            unit: 'g'
          }
        ]
      },
      _links: {
        self: {
          title: 'Self',
          href: 'https://api.edamam.com/api/recipes/v2/8dd9425e2e8be1a0aac13a41b4b7ed5c?type=public&app_id=2a3177b2&app_key=5c61b3aea75a67ec7ced14be8a5c81e1'
        }
      }
    },
    {
      recipe: {
        uri: 'http://www.edamam.com/ontologies/edamam.owl#recipe_e04773099bbe6835aef6315103bf5095',
        label: 'Coffee Crème Caramel',
        image:
          'https://edamam-product-images.s3.amazonaws.com/web-img/d36/d3612583227a67555b16959e5bb4b6af.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d14c1501b53a4e5ea5a071f3cb319e11543fde5273752d38caf086861e06178b',
        images: {
          THUMBNAIL: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/d36/d3612583227a67555b16959e5bb4b6af-s.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=3a567a1cf01f4f394cfec480e8b3359e6e36f73921b0cb0778ef0b3555027f36',
            width: 100,
            height: 100
          },
          SMALL: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/d36/d3612583227a67555b16959e5bb4b6af-m.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=ac18047080061610e349be11e5d02203e47582f380f03c0c9bb410f676f3c2fb',
            width: 200,
            height: 200
          },
          REGULAR: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/d36/d3612583227a67555b16959e5bb4b6af.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=d14c1501b53a4e5ea5a071f3cb319e11543fde5273752d38caf086861e06178b',
            width: 300,
            height: 300
          },
          LARGE: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/d36/d3612583227a67555b16959e5bb4b6af-l.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=266e9ec8ffd81499241a304bde619d9fce4a35986105971404378ed8f7fcddda',
            width: 600,
            height: 600
          }
        },
        source: 'Donna Hay',
        url: 'http://www.donnahay.com.au/recipes/sweets/puddings-cream/coffee-creme-caramel',
        shareAs: 'http://www.edamam.com/recipe/coffee-cr%C3%A8me-caramel-e04773099bbe6835aef6315103bf5095/coffee',
        yield: 14.0,
        dietLabels: ['Low-Sodium'],
        healthLabels: [
          'Low Potassium',
          'Kidney-Friendly',
          'Vegetarian',
          'Pescatarian',
          'Gluten-Free',
          'Wheat-Free',
          'Peanut-Free',
          'Tree-Nut-Free',
          'Soy-Free',
          'Fish-Free',
          'Shellfish-Free',
          'Pork-Free',
          'Red-Meat-Free',
          'Crustacean-Free',
          'Celery-Free',
          'Mustard-Free',
          'Sesame-Free',
          'Lupine-Free',
          'Mollusk-Free',
          'No oil added',
          'Kosher'
        ],
        cautions: ['Sulfites'],
        ingredientLines: [
          '1 ⅓ cup (295g) caster (superfine) sugar',
          '⅔ cups (160ml) water',
          '1 ½ cup (375ml) milk',
          '1 ½ cup (375ml) single (pouring) cream',
          '¼ cup (60ml) espresso coffee',
          '2 tablespoons coffee-flavoured liqueur',
          '4 eggs, plus 8 egg yolks, extra',
          '⅔ cups caster (superfine) sugar, extra',
          '1 tablespoon vanilla extract'
        ],
        ingredients: [
          {
            text: '1 ⅓ cup (295g) caster (superfine) sugar',
            quantity: 295.0,
            measure: 'gram',
            food: 'sugar',
            weight: 295.0,
            foodCategory: 'sugars',
            foodId: 'food_axi2ijobrk819yb0adceobnhm1c2',
            image: 'https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg'
          },
          {
            text: '⅔ cups (160ml) water',
            quantity: 160.0,
            measure: 'milliliter',
            food: 'water',
            weight: 160.0,
            foodCategory: 'water',
            foodId: 'food_a99vzubbk1ayrsad318rvbzr3dh0',
            image: 'https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg'
          },
          {
            text: '1 ½ cup (375ml) milk',
            quantity: 375.0,
            measure: 'milliliter',
            food: 'milk',
            weight: 386.7478846523293,
            foodCategory: 'Milk',
            foodId: 'food_b49rs1kaw0jktabzkg2vvanvvsis',
            image: 'https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg'
          },
          {
            text: '1 ½ cup (375ml) single (pouring) cream',
            quantity: 1.5,
            measure: 'cup',
            food: 'cream',
            weight: 357.0,
            foodCategory: 'Dairy',
            foodId: 'food_bvhbvd7bwy6a7wamfrmvmbmen1sz',
            image: 'https://www.edamam.com/food-img/484/4848d71f6a14dd5076083f5e17925420.jpg'
          },
          {
            text: '¼ cup (60ml) espresso coffee',
            quantity: 60.0,
            measure: 'milliliter',
            food: 'coffee',
            weight: 60.05370431847317,
            foodCategory: 'coffee and tea',
            foodId: 'food_ax0a0yxbbe4hx0apiz1tla01s2w7',
            image: 'https://www.edamam.com/food-img/ee9/ee9566349cb84dfd9ddac1fdf8cbc907.jpg'
          },
          {
            text: '2 tablespoons coffee-flavoured liqueur',
            quantity: 2.0,
            measure: 'tablespoon',
            food: 'liqueur',
            weight: 34.79999999941163,
            foodCategory: 'liquors and cocktails',
            foodId: 'food_bp0j7rfap97183a6ix0nob71qqx0',
            image: 'https://www.edamam.com/food-img/625/6255aae740942e782ad588caa6aa86ca.jpg'
          },
          {
            text: '4 eggs, plus 8 egg yolks, extra',
            quantity: 4.0,
            measure: '<unit>',
            food: 'eggs',
            weight: 172.0,
            foodCategory: 'Eggs',
            foodId: 'food_bhpradua77pk16aipcvzeayg732r',
            image: 'https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg'
          },
          {
            text: '4 eggs, plus 8 egg yolks, extra',
            quantity: 8.0,
            measure: '<unit>',
            food: 'egg yolks',
            weight: 107.73333333333333,
            foodCategory: 'Eggs',
            foodId: 'food_awlnigdb6qm6i1biwv7rlalfg2ni',
            image: 'https://www.edamam.com/food-img/e3f/e3f697887aec0e8ecf09a9ca8ef3944a.jpg'
          },
          {
            text: '⅔ cups caster (superfine) sugar, extra',
            quantity: 0.6666666666666666,
            measure: 'cup',
            food: 'sugar',
            weight: 133.33333333333331,
            foodCategory: 'sugars',
            foodId: 'food_axi2ijobrk819yb0adceobnhm1c2',
            image: 'https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg'
          },
          {
            text: '1 tablespoon vanilla extract',
            quantity: 1.0,
            measure: 'tablespoon',
            food: 'vanilla extract',
            weight: 13.0,
            foodCategory: 'Condiments and sauces',
            foodId: 'food_bh1wvnqaw3q7ciascfoygaabax2a',
            image: 'https://www.edamam.com/food-img/90f/90f910b0bf82750d4f6528263e014cca.jpg'
          }
        ],
        calories: 3873.0460800124624,
        totalWeight: 1719.6682556368808,
        totalTime: 0.0,
        cuisineType: ['french'],
        mealType: ['teatime'],
        dishType: ['desserts'],
        totalNutrients: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 3873.0460800124624,
            unit: 'kcal'
          },
          FAT: { label: 'Fat', quantity: 189.73314365872935, unit: 'g' },
          FASAT: {
            label: 'Saturated',
            quantity: 105.14280778951839,
            unit: 'g'
          },
          FATRN: { label: 'Trans', quantity: 0.06536, unit: 'g' },
          FAMS: {
            label: 'Monounsaturated',
            quantity: 60.244875545691215,
            unit: 'g'
          },
          FAPU: {
            label: 'Polyunsaturated',
            quantity: 13.513028245447943,
            unit: 'g'
          },
          CHOCDF: { label: 'Carbs', quantity: 479.80879179636986, unit: 'g' },
          'CHOCDF.net': {
            label: 'Carbohydrates (net)',
            quantity: 479.80879179636986,
            unit: 'g'
          },
          FIBTG: { label: 'Fiber', quantity: 0.0, unit: 'g' },
          SUGAR: { label: 'Sugars', quantity: 473.18034150805056, unit: 'g' },
          'SUGAR.added': {
            label: 'Sugars, added',
            quantity: 427.4766666666667,
            unit: 'g'
          },
          PROCNT: { label: 'Protein', quantity: 58.30542947839662, unit: 'g' },
          CHOLE: {
            label: 'Cholesterol',
            quantity: 2336.5114551318998,
            unit: 'mg'
          },
          NA: { label: 'Sodium', quantity: 613.7519978201574, unit: 'mg' },
          CA: { label: 'Calcium', quantity: 916.433517076829, unit: 'mg' },
          MG: { label: 'Magnesium', quantity: 95.69706626143613, unit: 'mg' },
          K: { label: 'Potassium', quantity: 1200.71952285695, unit: 'mg' },
          FE: { label: 'Iron', quantity: 6.43089640249386, unit: 'mg' },
          ZN: { label: 'Zinc', quantity: 7.044317914077136, unit: 'mg' },
          P: { label: 'Phosphorus', quantity: 1311.5978342374756, unit: 'mg' },
          VITA_RAE: {
            label: 'Vitamin A',
            quantity: 2330.838026940072,
            unit: 'µg'
          },
          VITC: { label: 'Vitamin C', quantity: 2.142, unit: 'mg' },
          THIA: {
            label: 'Thiamin (B1)',
            quantity: 0.526084212211301,
            unit: 'mg'
          },
          RIBF: {
            label: 'Riboflavin (B2)',
            quantity: 2.5447260736777393,
            unit: 'mg'
          },
          NIA: {
            label: 'Niacin (B3)',
            quantity: 0.8583561925880095,
            unit: 'mg'
          },
          VITB6A: {
            label: 'Vitamin B6',
            quantity: 0.9054964421846899,
            unit: 'mg'
          },
          FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 272.9491349856526,
            unit: 'µg'
          },
          FOLFD: {
            label: 'Folate (food)',
            quantity: 272.9491349856526,
            unit: 'µg'
          },
          FOLAC: { label: 'Folic acid', quantity: 0.0, unit: 'µg' },
          VITB12: {
            label: 'Vitamin B12',
            quantity: 6.014565480935483,
            unit: 'µg'
          },
          VITD: {
            label: 'Vitamin D',
            quantity: 16.784322500480283,
            unit: 'µg'
          },
          TOCPHA: {
            label: 'Vitamin E',
            quantity: 8.646448889688479,
            unit: 'mg'
          },
          VITK1: {
            label: 'Vitamin K',
            quantity: 13.914430691608796,
            unit: 'µg'
          },
          'Sugar.alcohol': { label: 'Sugar alcohol', quantity: 0.0, unit: 'g' },
          WATER: { label: 'Water', quantity: 971.4353607993794, unit: 'g' }
        },
        totalDaily: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 193.6523040006231,
            unit: '%'
          },
          FAT: { label: 'Fat', quantity: 291.89714409035287, unit: '%' },
          FASAT: { label: 'Saturated', quantity: 525.7140389475919, unit: '%' },
          CHOCDF: { label: 'Carbs', quantity: 159.93626393212327, unit: '%' },
          FIBTG: { label: 'Fiber', quantity: 0.0, unit: '%' },
          PROCNT: { label: 'Protein', quantity: 116.61085895679324, unit: '%' },
          CHOLE: {
            label: 'Cholesterol',
            quantity: 778.8371517106333,
            unit: '%'
          },
          NA: { label: 'Sodium', quantity: 25.572999909173227, unit: '%' },
          CA: { label: 'Calcium', quantity: 91.6433517076829, unit: '%' },
          MG: { label: 'Magnesium', quantity: 22.785015776532415, unit: '%' },
          K: { label: 'Potassium', quantity: 25.547223890573406, unit: '%' },
          FE: { label: 'Iron', quantity: 35.727202236077, unit: '%' },
          ZN: { label: 'Zinc', quantity: 64.0392537643376, unit: '%' },
          P: { label: 'Phosphorus', quantity: 187.3711191767822, unit: '%' },
          VITA_RAE: {
            label: 'Vitamin A',
            quantity: 258.9820029933413,
            unit: '%'
          },
          VITC: { label: 'Vitamin C', quantity: 2.38, unit: '%' },
          THIA: {
            label: 'Thiamin (B1)',
            quantity: 43.84035101760842,
            unit: '%'
          },
          RIBF: {
            label: 'Riboflavin (B2)',
            quantity: 195.74815951367225,
            unit: '%'
          },
          NIA: { label: 'Niacin (B3)', quantity: 5.36472620367506, unit: '%' },
          VITB6A: {
            label: 'Vitamin B6',
            quantity: 69.65357247574538,
            unit: '%'
          },
          FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 68.23728374641315,
            unit: '%'
          },
          VITB12: {
            label: 'Vitamin B12',
            quantity: 250.60689503897845,
            unit: '%'
          },
          VITD: { label: 'Vitamin D', quantity: 111.89548333653521, unit: '%' },
          TOCPHA: { label: 'Vitamin E', quantity: 57.6429925979232, unit: '%' },
          VITK1: {
            label: 'Vitamin K',
            quantity: 11.595358909673996,
            unit: '%'
          }
        },
        digest: [
          {
            label: 'Fat',
            tag: 'FAT',
            schemaOrgTag: 'fatContent',
            total: 189.73314365872935,
            hasRDI: true,
            daily: 291.89714409035287,
            unit: 'g',
            sub: [
              {
                label: 'Saturated',
                tag: 'FASAT',
                schemaOrgTag: 'saturatedFatContent',
                total: 105.14280778951839,
                hasRDI: true,
                daily: 525.7140389475919,
                unit: 'g'
              },
              {
                label: 'Trans',
                tag: 'FATRN',
                schemaOrgTag: 'transFatContent',
                total: 0.06536,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Monounsaturated',
                tag: 'FAMS',
                schemaOrgTag: null,
                total: 60.244875545691215,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Polyunsaturated',
                tag: 'FAPU',
                schemaOrgTag: null,
                total: 13.513028245447943,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              }
            ]
          },
          {
            label: 'Carbs',
            tag: 'CHOCDF',
            schemaOrgTag: 'carbohydrateContent',
            total: 479.80879179636986,
            hasRDI: true,
            daily: 159.93626393212327,
            unit: 'g',
            sub: [
              {
                label: 'Carbs (net)',
                tag: 'CHOCDF.net',
                schemaOrgTag: null,
                total: 479.80879179636986,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Fiber',
                tag: 'FIBTG',
                schemaOrgTag: 'fiberContent',
                total: 0.0,
                hasRDI: true,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Sugars',
                tag: 'SUGAR',
                schemaOrgTag: 'sugarContent',
                total: 473.18034150805056,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Sugars, added',
                tag: 'SUGAR.added',
                schemaOrgTag: null,
                total: 427.4766666666667,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              }
            ]
          },
          {
            label: 'Protein',
            tag: 'PROCNT',
            schemaOrgTag: 'proteinContent',
            total: 58.30542947839662,
            hasRDI: true,
            daily: 116.61085895679324,
            unit: 'g'
          },
          {
            label: 'Cholesterol',
            tag: 'CHOLE',
            schemaOrgTag: 'cholesterolContent',
            total: 2336.5114551318998,
            hasRDI: true,
            daily: 778.8371517106333,
            unit: 'mg'
          },
          {
            label: 'Sodium',
            tag: 'NA',
            schemaOrgTag: 'sodiumContent',
            total: 613.7519978201574,
            hasRDI: true,
            daily: 25.572999909173227,
            unit: 'mg'
          },
          {
            label: 'Calcium',
            tag: 'CA',
            schemaOrgTag: null,
            total: 916.433517076829,
            hasRDI: true,
            daily: 91.6433517076829,
            unit: 'mg'
          },
          {
            label: 'Magnesium',
            tag: 'MG',
            schemaOrgTag: null,
            total: 95.69706626143613,
            hasRDI: true,
            daily: 22.785015776532415,
            unit: 'mg'
          },
          {
            label: 'Potassium',
            tag: 'K',
            schemaOrgTag: null,
            total: 1200.71952285695,
            hasRDI: true,
            daily: 25.547223890573406,
            unit: 'mg'
          },
          {
            label: 'Iron',
            tag: 'FE',
            schemaOrgTag: null,
            total: 6.43089640249386,
            hasRDI: true,
            daily: 35.727202236077,
            unit: 'mg'
          },
          {
            label: 'Zinc',
            tag: 'ZN',
            schemaOrgTag: null,
            total: 7.044317914077136,
            hasRDI: true,
            daily: 64.0392537643376,
            unit: 'mg'
          },
          {
            label: 'Phosphorus',
            tag: 'P',
            schemaOrgTag: null,
            total: 1311.5978342374756,
            hasRDI: true,
            daily: 187.3711191767822,
            unit: 'mg'
          },
          {
            label: 'Vitamin A',
            tag: 'VITA_RAE',
            schemaOrgTag: null,
            total: 2330.838026940072,
            hasRDI: true,
            daily: 258.9820029933413,
            unit: 'µg'
          },
          {
            label: 'Vitamin C',
            tag: 'VITC',
            schemaOrgTag: null,
            total: 2.142,
            hasRDI: true,
            daily: 2.38,
            unit: 'mg'
          },
          {
            label: 'Thiamin (B1)',
            tag: 'THIA',
            schemaOrgTag: null,
            total: 0.526084212211301,
            hasRDI: true,
            daily: 43.84035101760842,
            unit: 'mg'
          },
          {
            label: 'Riboflavin (B2)',
            tag: 'RIBF',
            schemaOrgTag: null,
            total: 2.5447260736777393,
            hasRDI: true,
            daily: 195.74815951367225,
            unit: 'mg'
          },
          {
            label: 'Niacin (B3)',
            tag: 'NIA',
            schemaOrgTag: null,
            total: 0.8583561925880095,
            hasRDI: true,
            daily: 5.36472620367506,
            unit: 'mg'
          },
          {
            label: 'Vitamin B6',
            tag: 'VITB6A',
            schemaOrgTag: null,
            total: 0.9054964421846899,
            hasRDI: true,
            daily: 69.65357247574538,
            unit: 'mg'
          },
          {
            label: 'Folate equivalent (total)',
            tag: 'FOLDFE',
            schemaOrgTag: null,
            total: 272.9491349856526,
            hasRDI: true,
            daily: 68.23728374641315,
            unit: 'µg'
          },
          {
            label: 'Folate (food)',
            tag: 'FOLFD',
            schemaOrgTag: null,
            total: 272.9491349856526,
            hasRDI: false,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Folic acid',
            tag: 'FOLAC',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: false,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Vitamin B12',
            tag: 'VITB12',
            schemaOrgTag: null,
            total: 6.014565480935483,
            hasRDI: true,
            daily: 250.60689503897845,
            unit: 'µg'
          },
          {
            label: 'Vitamin D',
            tag: 'VITD',
            schemaOrgTag: null,
            total: 16.784322500480283,
            hasRDI: true,
            daily: 111.89548333653521,
            unit: 'µg'
          },
          {
            label: 'Vitamin E',
            tag: 'TOCPHA',
            schemaOrgTag: null,
            total: 8.646448889688479,
            hasRDI: true,
            daily: 57.6429925979232,
            unit: 'mg'
          },
          {
            label: 'Vitamin K',
            tag: 'VITK1',
            schemaOrgTag: null,
            total: 13.914430691608796,
            hasRDI: true,
            daily: 11.595358909673996,
            unit: 'µg'
          },
          {
            label: 'Sugar alcohols',
            tag: 'Sugar.alcohol',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: false,
            daily: 0.0,
            unit: 'g'
          },
          {
            label: 'Water',
            tag: 'WATER',
            schemaOrgTag: null,
            total: 971.4353607993794,
            hasRDI: false,
            daily: 0.0,
            unit: 'g'
          }
        ]
      },
      _links: {
        self: {
          title: 'Self',
          href: 'https://api.edamam.com/api/recipes/v2/e04773099bbe6835aef6315103bf5095?type=public&app_id=2a3177b2&app_key=5c61b3aea75a67ec7ced14be8a5c81e1'
        }
      }
    },
    {
      recipe: {
        uri: 'http://www.edamam.com/ontologies/edamam.owl#recipe_dbe22d6bc70f25a6fb5a3536d2987a65',
        label: 'Turkish coffee',
        image:
          'https://edamam-product-images.s3.amazonaws.com/web-img/3b6/3b6b712fae7205ac0760bfd12812002a.JPG?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=4d682a2aedc4db5c2ebd732aaab676bebd7e4c5aed67a208c73bcbcbe23c8d2d',
        images: {
          THUMBNAIL: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/3b6/3b6b712fae7205ac0760bfd12812002a-s.JPG?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=29759d3e1507e74cdb3ce76cc3855fab1b7efe8188f94dd35f5a6ec3edf03e9f',
            width: 100,
            height: 100
          },
          SMALL: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/3b6/3b6b712fae7205ac0760bfd12812002a-m.JPG?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=32240affaf4c771f9a2fa23156f03d6e8fe04727449f78d6941db5484a9622f0',
            width: 200,
            height: 200
          },
          REGULAR: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/3b6/3b6b712fae7205ac0760bfd12812002a.JPG?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c5772b164aec90ae94ac049ced71d960b001de87359bba82a08699b4f905f8a2',
            width: 300,
            height: 300
          },
          LARGE: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/3b6/3b6b712fae7205ac0760bfd12812002a-l.JPG?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=24926e7895c5475bd91ac7270b24c03e6ffaf72a0f7892520af8766614d5797a',
            width: 600,
            height: 600
          }
        },
        source: 'Food52',
        url: 'https://food52.com/recipes/37437-turkish-coffee',
        shareAs: 'http://www.edamam.com/recipe/turkish-coffee-dbe22d6bc70f25a6fb5a3536d2987a65/coffee',
        yield: 6.0,
        dietLabels: ['Low-Fat', 'Low-Sodium'],
        healthLabels: [
          'Sugar-Conscious',
          'Low Potassium',
          'Kidney-Friendly',
          'Keto-Friendly',
          'Vegan',
          'Vegetarian',
          'Pescatarian',
          'Dairy-Free',
          'Gluten-Free',
          'Wheat-Free',
          'Egg-Free',
          'Peanut-Free',
          'Tree-Nut-Free',
          'Soy-Free',
          'Fish-Free',
          'Shellfish-Free',
          'Pork-Free',
          'Red-Meat-Free',
          'Crustacean-Free',
          'Celery-Free',
          'Mustard-Free',
          'Sesame-Free',
          'Lupine-Free',
          'Mollusk-Free',
          'Alcohol-Free',
          'No oil added',
          'FODMAP-Free',
          'Kosher'
        ],
        cautions: ['Sulfites'],
        ingredientLines: [
          '2 cups water',
          '1 hipping tsp sugar ( or more, optional )',
          '5 hipping tsp of Turkish coffee (extra fine ground coffee powder consistency)'
        ],
        ingredients: [
          {
            text: '2 cups water',
            quantity: 2.0,
            measure: 'cup',
            food: 'water',
            weight: 474.0,
            foodCategory: 'water',
            foodId: 'food_a99vzubbk1ayrsad318rvbzr3dh0',
            image: 'https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg'
          },
          {
            text: '1 hipping tsp sugar ( or more, optional )',
            quantity: 1.0,
            measure: 'teaspoon',
            food: 'sugar',
            weight: 4.2,
            foodCategory: 'sugars',
            foodId: 'food_axi2ijobrk819yb0adceobnhm1c2',
            image: 'https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg'
          },
          {
            text: '5 hipping tsp of Turkish coffee (extra fine ground coffee powder consistency)',
            quantity: 5.0,
            measure: 'teaspoon',
            food: 'coffee',
            weight: 24.666666667917788,
            foodCategory: 'coffee and tea',
            foodId: 'food_ax0a0yxbbe4hx0apiz1tla01s2w7',
            image: 'https://www.edamam.com/food-img/ee9/ee9566349cb84dfd9ddac1fdf8cbc907.jpg'
          }
        ],
        calories: 16.50066666667918,
        totalWeight: 502.8666666679178,
        totalTime: 0.0,
        cuisineType: ['middle eastern'],
        mealType: ['lunch/dinner'],
        dishType: ['condiments and sauces'],
        totalNutrients: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 16.50066666667918,
            unit: 'kcal'
          },
          FAT: { label: 'Fat', quantity: 0.004933333333583558, unit: 'g' },
          FASAT: {
            label: 'Saturated',
            quantity: 4.933333333583558e-4,
            unit: 'g'
          },
          FATRN: { label: 'Trans', quantity: 0.0, unit: 'g' },
          FAMS: {
            label: 'Monounsaturated',
            quantity: 0.0037000000001876678,
            unit: 'g'
          },
          FAPU: {
            label: 'Polyunsaturated',
            quantity: 2.466666666791779e-4,
            unit: 'g'
          },
          CHOCDF: { label: 'Carbs', quantity: 4.19916, unit: 'g' },
          'CHOCDF.net': {
            label: 'Carbohydrates (net)',
            quantity: 4.19916,
            unit: 'g'
          },
          FIBTG: { label: 'Fiber', quantity: 0.0, unit: 'g' },
          SUGAR: { label: 'Sugars', quantity: 4.1916, unit: 'g' },
          'SUGAR.added': {
            label: 'Sugars, added',
            quantity: 4.1916,
            unit: 'g'
          },
          PROCNT: {
            label: 'Protein',
            quantity: 0.029600000001501342,
            unit: 'g'
          },
          CHOLE: { label: 'Cholesterol', quantity: 0.0, unit: 'mg' },
          NA: { label: 'Sodium', quantity: 19.495333333358356, unit: 'mg' },
          CA: { label: 'Calcium', quantity: 14.755333333358358, unit: 'mg' },
          MG: { label: 'Magnesium', quantity: 5.480000000037534, unit: 'mg' },
          K: { label: 'Potassium', quantity: 12.170666667279717, unit: 'mg' },
          FE: { label: 'Iron', quantity: 0.004566666666791779, unit: 'mg' },
          ZN: { label: 'Zinc', quantity: 0.05275333333358356, unit: 'mg' },
          P: { label: 'Phosphorus', quantity: 0.7400000000375336, unit: 'mg' },
          VITA_RAE: { label: 'Vitamin A', quantity: 0.0, unit: 'µg' },
          VITC: { label: 'Vitamin C', quantity: 0.0, unit: 'mg' },
          THIA: {
            label: 'Thiamin (B1)',
            quantity: 0.00345333333350849,
            unit: 'mg'
          },
          RIBF: {
            label: 'Riboflavin (B2)',
            quantity: 0.01954466666761752,
            unit: 'mg'
          },
          NIA: {
            label: 'Niacin (B3)',
            quantity: 0.04711333333572297,
            unit: 'mg'
          },
          VITB6A: {
            label: 'Vitamin B6',
            quantity: 2.466666666791779e-4,
            unit: 'mg'
          },
          FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 0.4933333333583557,
            unit: 'µg'
          },
          FOLFD: {
            label: 'Folate (food)',
            quantity: 0.4933333333583557,
            unit: 'µg'
          },
          FOLAC: { label: 'Folic acid', quantity: 0.0, unit: 'µg' },
          VITB12: { label: 'Vitamin B12', quantity: 0.0, unit: 'µg' },
          VITD: { label: 'Vitamin D', quantity: 0.0, unit: 'µg' },
          TOCPHA: {
            label: 'Vitamin E',
            quantity: 0.002466666666791779,
            unit: 'mg'
          },
          VITK1: {
            label: 'Vitamin K',
            quantity: 0.024666666667917794,
            unit: 'µg'
          },
          'Sugar.alcohol': { label: 'Sugar alcohol', quantity: 0.0, unit: 'g' },
          WATER: { label: 'Water', quantity: 498.0430400012435, unit: 'g' }
        },
        totalDaily: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 0.825033333333959,
            unit: '%'
          },
          FAT: { label: 'Fat', quantity: 0.007589743590128551, unit: '%' },
          FASAT: {
            label: 'Saturated',
            quantity: 0.0024666666667917786,
            unit: '%'
          },
          CHOCDF: { label: 'Carbs', quantity: 1.39972, unit: '%' },
          FIBTG: { label: 'Fiber', quantity: 0.0, unit: '%' },
          PROCNT: {
            label: 'Protein',
            quantity: 0.059200000003002684,
            unit: '%'
          },
          CHOLE: { label: 'Cholesterol', quantity: 0.0, unit: '%' },
          NA: { label: 'Sodium', quantity: 0.8123055555565981, unit: '%' },
          CA: { label: 'Calcium', quantity: 1.4755333333358358, unit: '%' },
          MG: { label: 'Magnesium', quantity: 1.3047619047708414, unit: '%' },
          K: { label: 'Potassium', quantity: 0.25895035462297267, unit: '%' },
          FE: { label: 'Iron', quantity: 0.025370370371065442, unit: '%' },
          ZN: { label: 'Zinc', quantity: 0.47957575757803234, unit: '%' },
          P: { label: 'Phosphorus', quantity: 0.10571428571964765, unit: '%' },
          VITA_RAE: { label: 'Vitamin A', quantity: 0.0, unit: '%' },
          VITC: { label: 'Vitamin C', quantity: 0.0, unit: '%' },
          THIA: {
            label: 'Thiamin (B1)',
            quantity: 0.28777777779237423,
            unit: '%'
          },
          RIBF: {
            label: 'Riboflavin (B2)',
            quantity: 1.5034358975090398,
            unit: '%'
          },
          NIA: {
            label: 'Niacin (B3)',
            quantity: 0.29445833334826854,
            unit: '%'
          },
          VITB6A: {
            label: 'Vitamin B6',
            quantity: 0.018974358975321376,
            unit: '%'
          },
          FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 0.12333333333958892,
            unit: '%'
          },
          VITB12: { label: 'Vitamin B12', quantity: 0.0, unit: '%' },
          VITD: { label: 'Vitamin D', quantity: 0.0, unit: '%' },
          TOCPHA: {
            label: 'Vitamin E',
            quantity: 0.01644444444527853,
            unit: '%'
          },
          VITK1: {
            label: 'Vitamin K',
            quantity: 0.020555555556598163,
            unit: '%'
          }
        },
        digest: [
          {
            label: 'Fat',
            tag: 'FAT',
            schemaOrgTag: 'fatContent',
            total: 0.004933333333583558,
            hasRDI: true,
            daily: 0.007589743590128551,
            unit: 'g',
            sub: [
              {
                label: 'Saturated',
                tag: 'FASAT',
                schemaOrgTag: 'saturatedFatContent',
                total: 4.933333333583558e-4,
                hasRDI: true,
                daily: 0.0024666666667917786,
                unit: 'g'
              },
              {
                label: 'Trans',
                tag: 'FATRN',
                schemaOrgTag: 'transFatContent',
                total: 0.0,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Monounsaturated',
                tag: 'FAMS',
                schemaOrgTag: null,
                total: 0.0037000000001876678,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Polyunsaturated',
                tag: 'FAPU',
                schemaOrgTag: null,
                total: 2.466666666791779e-4,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              }
            ]
          },
          {
            label: 'Carbs',
            tag: 'CHOCDF',
            schemaOrgTag: 'carbohydrateContent',
            total: 4.19916,
            hasRDI: true,
            daily: 1.39972,
            unit: 'g',
            sub: [
              {
                label: 'Carbs (net)',
                tag: 'CHOCDF.net',
                schemaOrgTag: null,
                total: 4.19916,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Fiber',
                tag: 'FIBTG',
                schemaOrgTag: 'fiberContent',
                total: 0.0,
                hasRDI: true,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Sugars',
                tag: 'SUGAR',
                schemaOrgTag: 'sugarContent',
                total: 4.1916,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Sugars, added',
                tag: 'SUGAR.added',
                schemaOrgTag: null,
                total: 4.1916,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              }
            ]
          },
          {
            label: 'Protein',
            tag: 'PROCNT',
            schemaOrgTag: 'proteinContent',
            total: 0.029600000001501342,
            hasRDI: true,
            daily: 0.059200000003002684,
            unit: 'g'
          },
          {
            label: 'Cholesterol',
            tag: 'CHOLE',
            schemaOrgTag: 'cholesterolContent',
            total: 0.0,
            hasRDI: true,
            daily: 0.0,
            unit: 'mg'
          },
          {
            label: 'Sodium',
            tag: 'NA',
            schemaOrgTag: 'sodiumContent',
            total: 19.495333333358356,
            hasRDI: true,
            daily: 0.8123055555565981,
            unit: 'mg'
          },
          {
            label: 'Calcium',
            tag: 'CA',
            schemaOrgTag: null,
            total: 14.755333333358358,
            hasRDI: true,
            daily: 1.4755333333358358,
            unit: 'mg'
          },
          {
            label: 'Magnesium',
            tag: 'MG',
            schemaOrgTag: null,
            total: 5.480000000037534,
            hasRDI: true,
            daily: 1.3047619047708414,
            unit: 'mg'
          },
          {
            label: 'Potassium',
            tag: 'K',
            schemaOrgTag: null,
            total: 12.170666667279717,
            hasRDI: true,
            daily: 0.25895035462297267,
            unit: 'mg'
          },
          {
            label: 'Iron',
            tag: 'FE',
            schemaOrgTag: null,
            total: 0.004566666666791779,
            hasRDI: true,
            daily: 0.025370370371065442,
            unit: 'mg'
          },
          {
            label: 'Zinc',
            tag: 'ZN',
            schemaOrgTag: null,
            total: 0.05275333333358356,
            hasRDI: true,
            daily: 0.47957575757803234,
            unit: 'mg'
          },
          {
            label: 'Phosphorus',
            tag: 'P',
            schemaOrgTag: null,
            total: 0.7400000000375336,
            hasRDI: true,
            daily: 0.10571428571964765,
            unit: 'mg'
          },
          {
            label: 'Vitamin A',
            tag: 'VITA_RAE',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: true,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Vitamin C',
            tag: 'VITC',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: true,
            daily: 0.0,
            unit: 'mg'
          },
          {
            label: 'Thiamin (B1)',
            tag: 'THIA',
            schemaOrgTag: null,
            total: 0.00345333333350849,
            hasRDI: true,
            daily: 0.28777777779237423,
            unit: 'mg'
          },
          {
            label: 'Riboflavin (B2)',
            tag: 'RIBF',
            schemaOrgTag: null,
            total: 0.01954466666761752,
            hasRDI: true,
            daily: 1.5034358975090398,
            unit: 'mg'
          },
          {
            label: 'Niacin (B3)',
            tag: 'NIA',
            schemaOrgTag: null,
            total: 0.04711333333572297,
            hasRDI: true,
            daily: 0.29445833334826854,
            unit: 'mg'
          },
          {
            label: 'Vitamin B6',
            tag: 'VITB6A',
            schemaOrgTag: null,
            total: 2.466666666791779e-4,
            hasRDI: true,
            daily: 0.018974358975321376,
            unit: 'mg'
          },
          {
            label: 'Folate equivalent (total)',
            tag: 'FOLDFE',
            schemaOrgTag: null,
            total: 0.4933333333583557,
            hasRDI: true,
            daily: 0.12333333333958892,
            unit: 'µg'
          },
          {
            label: 'Folate (food)',
            tag: 'FOLFD',
            schemaOrgTag: null,
            total: 0.4933333333583557,
            hasRDI: false,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Folic acid',
            tag: 'FOLAC',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: false,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Vitamin B12',
            tag: 'VITB12',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: true,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Vitamin D',
            tag: 'VITD',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: true,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Vitamin E',
            tag: 'TOCPHA',
            schemaOrgTag: null,
            total: 0.002466666666791779,
            hasRDI: true,
            daily: 0.01644444444527853,
            unit: 'mg'
          },
          {
            label: 'Vitamin K',
            tag: 'VITK1',
            schemaOrgTag: null,
            total: 0.024666666667917794,
            hasRDI: true,
            daily: 0.020555555556598163,
            unit: 'µg'
          },
          {
            label: 'Sugar alcohols',
            tag: 'Sugar.alcohol',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: false,
            daily: 0.0,
            unit: 'g'
          },
          {
            label: 'Water',
            tag: 'WATER',
            schemaOrgTag: null,
            total: 498.0430400012435,
            hasRDI: false,
            daily: 0.0,
            unit: 'g'
          }
        ]
      },
      _links: {
        self: {
          title: 'Self',
          href: 'https://api.edamam.com/api/recipes/v2/dbe22d6bc70f25a6fb5a3536d2987a65?type=public&app_id=2a3177b2&app_key=5c61b3aea75a67ec7ced14be8a5c81e1'
        }
      }
    },
    {
      recipe: {
        uri: 'http://www.edamam.com/ontologies/edamam.owl#recipe_054235b58bd0ff615ea2d017ab1307ec',
        label: 'Boozy Whipped Coffee',
        image:
          'https://edamam-product-images.s3.amazonaws.com/web-img/785/7857f3644a6fea3f2423138c392a7d51?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1829a7b031d689662961b2501b60b76fd07f7083d76373943a51c375ab5baaf1',
        images: {
          THUMBNAIL: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/785/7857f3644a6fea3f2423138c392a7d51-s?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=44b118a40a435bcb02aa6500e984c06cd091d86c627190873ccaac4fc1b41974',
            width: 100,
            height: 100
          },
          SMALL: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/785/7857f3644a6fea3f2423138c392a7d51-m?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=42638c4eba6bff93dab5ff690252bd198fdc2e05739642043d0a2ef2fed9d36b',
            width: 200,
            height: 200
          },
          REGULAR: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/785/7857f3644a6fea3f2423138c392a7d51?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3599&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=15969a97eb4bc0cd1a3475cfb2ae0f65ca6b3da7a5523bd57559aabe562f7fb3',
            width: 300,
            height: 300
          },
          LARGE: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/785/7857f3644a6fea3f2423138c392a7d51-l?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=1842388de6c113d41e4bb6d7042f2785bdc33eac58b544ade55301b50377c992',
            width: 600,
            height: 600
          }
        },
        source: 'My Recipes',
        url: 'https://www.myrecipes.com/recipe/boozy-whipped-coffee',
        shareAs: 'http://www.edamam.com/recipe/boozy-whipped-coffee-054235b58bd0ff615ea2d017ab1307ec/coffee',
        yield: 12.0,
        dietLabels: ['Low-Fat', 'Low-Sodium'],
        healthLabels: [
          'Low Potassium',
          'Kidney-Friendly',
          'Vegan',
          'Vegetarian',
          'Pescatarian',
          'Dairy-Free',
          'Gluten-Free',
          'Wheat-Free',
          'Egg-Free',
          'Peanut-Free',
          'Tree-Nut-Free',
          'Soy-Free',
          'Fish-Free',
          'Shellfish-Free',
          'Pork-Free',
          'Red-Meat-Free',
          'Crustacean-Free',
          'Celery-Free',
          'Mustard-Free',
          'Sesame-Free',
          'Lupine-Free',
          'Mollusk-Free',
          'No oil added',
          'Kosher'
        ],
        cautions: ['Sulfites'],
        ingredientLines: [
          '1 cup granulated sugar',
          '1/3 cup instant coffee granules',
          '1/3 cup cold water',
          '1/3 cup (2 2/3 oz.) coffee liqueur (such as Kahlúa)'
        ],
        ingredients: [
          {
            text: '1 cup granulated sugar',
            quantity: 1.0,
            measure: 'cup',
            food: 'granulated sugar',
            weight: 200.0,
            foodCategory: 'sugars',
            foodId: 'food_axi2ijobrk819yb0adceobnhm1c2',
            image: 'https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg'
          },
          {
            text: '1/3 cup instant coffee granules',
            quantity: 0.3333333333333333,
            measure: 'cup',
            food: 'instant coffee',
            weight: 15.999999999188462,
            foodCategory: 'coffee and tea',
            foodId: 'food_aof7z08ad0qgsta38run7arojif8',
            image: 'https://www.edamam.com/food-img/336/336e810373dd353a955a6896699b586e.jpg'
          },
          {
            text: '1/3 cup cold water',
            quantity: 0.3333333333333333,
            measure: 'cup',
            food: 'water',
            weight: 79.0,
            foodCategory: 'water',
            foodId: 'food_a99vzubbk1ayrsad318rvbzr3dh0',
            image: 'https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg'
          },
          {
            text: '1/3 cup (2 2/3 oz.) coffee liqueur (such as Kahlúa)',
            quantity: 2.6666666666666665,
            measure: 'ounce',
            food: 'coffee liqueur',
            weight: 75.59872833333333,
            foodCategory: 'liquors and cocktails',
            foodId: 'food_byf2xfhbghlq5qadhyvztabfq665',
            image: 'https://www.edamam.com/food-img/625/6255aae740942e782ad588caa6aa86ca.jpg'
          }
        ],
        calories: 1084.4917271971353,
        totalWeight: 370.59872833252183,
        totalTime: 10.0,
        cuisineType: ['british'],
        mealType: ['teatime'],
        dishType: ['desserts'],
        totalNutrients: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 1084.4917271971353,
            unit: 'kcal'
          },
          FAT: { label: 'Fat', quantity: 0.3067961849959423, unit: 'g' },
          FASAT: {
            label: 'Saturated',
            quantity: 0.11165465203173458,
            unit: 'g'
          },
          FATRN: { label: 'Trans', quantity: 0.0, unit: 'g' },
          FAMS: {
            label: 'Monounsaturated',
            quantity: 0.0231917202330006,
            unit: 'g'
          },
          FAPU: {
            label: 'Polyunsaturated',
            quantity: 0.11073866474840938,
            unit: 'g'
          },
          CHOCDF: { label: 'Carbs', quantity: 247.40420485938807, unit: 'g' },
          'CHOCDF.net': {
            label: 'Carbohydrates (net)',
            quantity: 247.40420485938807,
            unit: 'g'
          },
          FIBTG: { label: 'Fiber', quantity: 0.0, unit: 'g' },
          SUGAR: { label: 'Sugars', quantity: 228.55431295166665, unit: 'g' },
          'SUGAR.added': { label: 'Sugars, added', quantity: 199.6, unit: 'g' },
          PROCNT: { label: 'Protein', quantity: 2.027598728234326, unit: 'g' },
          CHOLE: { label: 'Cholesterol', quantity: 0.0, unit: 'mg' },
          NA: { label: 'Sodium', quantity: 17.127898266366397, unit: 'mg' },
          CA: { label: 'Calcium', quantity: 27.685987282189068, unit: 'mg' },
          MG: { label: 'Magnesium', quantity: 55.37796184734627, unit: 'mg' },
          K: { label: 'Potassium', quantity: 592.2796184713121, unit: 'mg' },
          FE: { label: 'Iron', quantity: 0.8509592369642112, unit: 'mg' },
          ZN: { label: 'Zinc', quantity: 0.1065796184971596, unit: 'mg' },
          P: { label: 'Phosphorus', quantity: 53.01592369754104, unit: 'mg' },
          VITA_RAE: { label: 'Vitamin A', quantity: 0.0, unit: 'µg' },
          VITC: { label: 'Vitamin C', quantity: 0.0, unit: 'mg' },
          THIA: {
            label: 'Thiamin (B1)',
            quantity: 0.00430394913326841,
            unit: 'mg'
          },
          RIBF: {
            label: 'Riboflavin (B2)',
            quantity: 0.05891184739939946,
            unit: 'mg'
          },
          NIA: {
            label: 'Niacin (B3)',
            quantity: 4.616542168571366,
            unit: 'mg'
          },
          VITB6A: {
            label: 'Vitamin B6',
            quantity: 0.004639999999764654,
            unit: 'mg'
          },
          FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 0.0,
            unit: 'µg'
          },
          FOLFD: { label: 'Folate (food)', quantity: 0.0, unit: 'µg' },
          FOLAC: { label: 'Folic acid', quantity: 0.0, unit: 'µg' },
          VITB12: { label: 'Vitamin B12', quantity: 0.0, unit: 'µg' },
          VITD: { label: 'Vitamin D', quantity: 0.0, unit: 'µg' },
          TOCPHA: { label: 'Vitamin E', quantity: 0.0, unit: 'mg' },
          VITK1: {
            label: 'Vitamin K',
            quantity: 0.30399999998458077,
            unit: 'µg'
          },
          'Sugar.alcohol': { label: 'Sugar alcohol', quantity: 0.0, unit: 'g' },
          WATER: { label: 'Water', quantity: 102.8926057833082, unit: 'g' }
        },
        totalDaily: {
          ENERC_KCAL: {
            label: 'Energy',
            quantity: 54.224586359856765,
            unit: '%'
          },
          FAT: { label: 'Fat', quantity: 0.4719941307629882, unit: '%' },
          FASAT: {
            label: 'Saturated',
            quantity: 0.5582732601586728,
            unit: '%'
          },
          CHOCDF: { label: 'Carbs', quantity: 82.4680682864627, unit: '%' },
          FIBTG: { label: 'Fiber', quantity: 0.0, unit: '%' },
          PROCNT: { label: 'Protein', quantity: 4.055197456468652, unit: '%' },
          CHOLE: { label: 'Cholesterol', quantity: 0.0, unit: '%' },
          NA: { label: 'Sodium', quantity: 0.7136624277652666, unit: '%' },
          CA: { label: 'Calcium', quantity: 2.768598728218907, unit: '%' },
          MG: { label: 'Magnesium', quantity: 13.185229011272922, unit: '%' },
          K: { label: 'Potassium', quantity: 12.601694010027918, unit: '%' },
          FE: { label: 'Iron', quantity: 4.7275513164678395, unit: '%' },
          ZN: { label: 'Zinc', quantity: 0.9689056227014509, unit: '%' },
          P: { label: 'Phosphorus', quantity: 7.573703385363006, unit: '%' },
          VITA_RAE: { label: 'Vitamin A', quantity: 0.0, unit: '%' },
          VITC: { label: 'Vitamin C', quantity: 0.0, unit: '%' },
          THIA: {
            label: 'Thiamin (B1)',
            quantity: 0.3586624277723675,
            unit: '%'
          },
          RIBF: {
            label: 'Riboflavin (B2)',
            quantity: 4.531680569184574,
            unit: '%'
          },
          NIA: {
            label: 'Niacin (B3)',
            quantity: 28.853388553571037,
            unit: '%'
          },
          VITB6A: {
            label: 'Vitamin B6',
            quantity: 0.35692307690497344,
            unit: '%'
          },
          FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 0.0,
            unit: '%'
          },
          VITB12: { label: 'Vitamin B12', quantity: 0.0, unit: '%' },
          VITD: { label: 'Vitamin D', quantity: 0.0, unit: '%' },
          TOCPHA: { label: 'Vitamin E', quantity: 0.0, unit: '%' },
          VITK1: {
            label: 'Vitamin K',
            quantity: 0.25333333332048397,
            unit: '%'
          }
        },
        digest: [
          {
            label: 'Fat',
            tag: 'FAT',
            schemaOrgTag: 'fatContent',
            total: 0.3067961849959423,
            hasRDI: true,
            daily: 0.4719941307629882,
            unit: 'g',
            sub: [
              {
                label: 'Saturated',
                tag: 'FASAT',
                schemaOrgTag: 'saturatedFatContent',
                total: 0.11165465203173458,
                hasRDI: true,
                daily: 0.5582732601586728,
                unit: 'g'
              },
              {
                label: 'Trans',
                tag: 'FATRN',
                schemaOrgTag: 'transFatContent',
                total: 0.0,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Monounsaturated',
                tag: 'FAMS',
                schemaOrgTag: null,
                total: 0.0231917202330006,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Polyunsaturated',
                tag: 'FAPU',
                schemaOrgTag: null,
                total: 0.11073866474840938,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              }
            ]
          },
          {
            label: 'Carbs',
            tag: 'CHOCDF',
            schemaOrgTag: 'carbohydrateContent',
            total: 247.40420485938807,
            hasRDI: true,
            daily: 82.4680682864627,
            unit: 'g',
            sub: [
              {
                label: 'Carbs (net)',
                tag: 'CHOCDF.net',
                schemaOrgTag: null,
                total: 247.40420485938807,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Fiber',
                tag: 'FIBTG',
                schemaOrgTag: 'fiberContent',
                total: 0.0,
                hasRDI: true,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Sugars',
                tag: 'SUGAR',
                schemaOrgTag: 'sugarContent',
                total: 228.55431295166665,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Sugars, added',
                tag: 'SUGAR.added',
                schemaOrgTag: null,
                total: 199.6,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              }
            ]
          },
          {
            label: 'Protein',
            tag: 'PROCNT',
            schemaOrgTag: 'proteinContent',
            total: 2.027598728234326,
            hasRDI: true,
            daily: 4.055197456468652,
            unit: 'g'
          },
          {
            label: 'Cholesterol',
            tag: 'CHOLE',
            schemaOrgTag: 'cholesterolContent',
            total: 0.0,
            hasRDI: true,
            daily: 0.0,
            unit: 'mg'
          },
          {
            label: 'Sodium',
            tag: 'NA',
            schemaOrgTag: 'sodiumContent',
            total: 17.127898266366397,
            hasRDI: true,
            daily: 0.7136624277652666,
            unit: 'mg'
          },
          {
            label: 'Calcium',
            tag: 'CA',
            schemaOrgTag: null,
            total: 27.685987282189068,
            hasRDI: true,
            daily: 2.768598728218907,
            unit: 'mg'
          },
          {
            label: 'Magnesium',
            tag: 'MG',
            schemaOrgTag: null,
            total: 55.37796184734627,
            hasRDI: true,
            daily: 13.185229011272922,
            unit: 'mg'
          },
          {
            label: 'Potassium',
            tag: 'K',
            schemaOrgTag: null,
            total: 592.2796184713121,
            hasRDI: true,
            daily: 12.601694010027918,
            unit: 'mg'
          },
          {
            label: 'Iron',
            tag: 'FE',
            schemaOrgTag: null,
            total: 0.8509592369642112,
            hasRDI: true,
            daily: 4.7275513164678395,
            unit: 'mg'
          },
          {
            label: 'Zinc',
            tag: 'ZN',
            schemaOrgTag: null,
            total: 0.1065796184971596,
            hasRDI: true,
            daily: 0.9689056227014509,
            unit: 'mg'
          },
          {
            label: 'Phosphorus',
            tag: 'P',
            schemaOrgTag: null,
            total: 53.01592369754104,
            hasRDI: true,
            daily: 7.573703385363006,
            unit: 'mg'
          },
          {
            label: 'Vitamin A',
            tag: 'VITA_RAE',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: true,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Vitamin C',
            tag: 'VITC',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: true,
            daily: 0.0,
            unit: 'mg'
          },
          {
            label: 'Thiamin (B1)',
            tag: 'THIA',
            schemaOrgTag: null,
            total: 0.00430394913326841,
            hasRDI: true,
            daily: 0.3586624277723675,
            unit: 'mg'
          },
          {
            label: 'Riboflavin (B2)',
            tag: 'RIBF',
            schemaOrgTag: null,
            total: 0.05891184739939946,
            hasRDI: true,
            daily: 4.531680569184574,
            unit: 'mg'
          },
          {
            label: 'Niacin (B3)',
            tag: 'NIA',
            schemaOrgTag: null,
            total: 4.616542168571366,
            hasRDI: true,
            daily: 28.853388553571037,
            unit: 'mg'
          },
          {
            label: 'Vitamin B6',
            tag: 'VITB6A',
            schemaOrgTag: null,
            total: 0.004639999999764654,
            hasRDI: true,
            daily: 0.35692307690497344,
            unit: 'mg'
          },
          {
            label: 'Folate equivalent (total)',
            tag: 'FOLDFE',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: true,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Folate (food)',
            tag: 'FOLFD',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: false,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Folic acid',
            tag: 'FOLAC',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: false,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Vitamin B12',
            tag: 'VITB12',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: true,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Vitamin D',
            tag: 'VITD',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: true,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Vitamin E',
            tag: 'TOCPHA',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: true,
            daily: 0.0,
            unit: 'mg'
          },
          {
            label: 'Vitamin K',
            tag: 'VITK1',
            schemaOrgTag: null,
            total: 0.30399999998458077,
            hasRDI: true,
            daily: 0.25333333332048397,
            unit: 'µg'
          },
          {
            label: 'Sugar alcohols',
            tag: 'Sugar.alcohol',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: false,
            daily: 0.0,
            unit: 'g'
          },
          {
            label: 'Water',
            tag: 'WATER',
            schemaOrgTag: null,
            total: 102.8926057833082,
            hasRDI: false,
            daily: 0.0,
            unit: 'g'
          }
        ]
      },
      _links: {
        self: {
          title: 'Self',
          href: 'https://api.edamam.com/api/recipes/v2/054235b58bd0ff615ea2d017ab1307ec?type=public&app_id=2a3177b2&app_key=5c61b3aea75a67ec7ced14be8a5c81e1'
        }
      }
    },
    {
      recipe: {
        uri: 'http://www.edamam.com/ontologies/edamam.owl#recipe_1a391a86af3297a2d912d9654ca8f12c',
        label: 'Coffee Thins',
        image:
          'https://edamam-product-images.s3.amazonaws.com/web-img/095/095787ba0a3f58af51d9d46fb16861d1.JPG?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=dfaa9d993e9303db9e28426d8a2da111f438c9cddb5275a4c929011f64e3b6bc',
        images: {
          THUMBNAIL: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/095/095787ba0a3f58af51d9d46fb16861d1-s.JPG?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=590768e4aac929254540123a52b91c2bcb51eef8bef1e9989bd295d288e41927',
            width: 100,
            height: 100
          },
          SMALL: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/095/095787ba0a3f58af51d9d46fb16861d1-m.JPG?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=2de866a048a4cd38116bab6059bf2a72acfd70f7e3075614900c542c2ea9a69f',
            width: 200,
            height: 200
          },
          REGULAR: {
            url: 'https://edamam-product-images.s3.amazonaws.com/web-img/095/095787ba0a3f58af51d9d46fb16861d1.JPG?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLWVhc3QtMSJIMEYCIQCvv3upSbH2F9zJAvxOQ3qlazOZRtyxn4IumkEZ%2BqPRvwIhAP3%2BPQCQJlmn86ofepFH1eFzmS1TucKTsFMhC5i%2BEEyHKrkFCFwQABoMMTg3MDE3MTUwOTg2IgxHl3K2eQBH9T4%2Fh3oqlgW3nDgd9GSl%2BYjn8ai%2FlX3M93zFDyTCJ%2FbJE%2FkS4xRIR97%2BOegZgN2ZnXzR0ioNY0P1HEfLg%2FfjnXwDFmE5JhPZcOBvAIQ6jaW6Hr6KW8jOnUm1VQ83PgdydSzNffZkwSUSuXiiTQn326AwmE2qHQkrXhWzFJ8pb7iEgkCZXKYIg2GE8Edz4sOfqI6ibzIhPdGytJKSz80Q96kUc7Z3zuvIQshGbtW9XzAeur2AHbuMmeTon9ULkfC3Zh8Bym3EsugRUfgKW6GigzBOhAkfKEyojqLwFKfgH8%2FqJlTjWOqhbz35dIfxoxH3F4DVCTnkMcbVWh0YFa899yuThYV71lqi%2FGLefUqHqnmyUuB1hFWDGpiRMRt5GHnwsBAhiLwUZ0W07BAid%2FNUVkROKY6w5Jk9RDO1E%2Byk6ziGwSoOh45uw1WLcHp7AvqyxflVl7uHzdBMPNPidmrN6GEaAZJ7sXpllxlFlat7sUdghNVdtYi3a1Yle6h3%2B9bbnY3jmnWBMBGtY44Jz5nqGNk8mCXFe%2Bq4OR4iAHBDxZLtRQpOY8hddFyfsfaFOVTX2zVeYSoLVKyi9bHPwAUsxKeOTQRn4PlqZBqpihldUvCH46b8SAjoENZtbBnd%2FZF9P7JavjkCfxl3k34DxkMxcYmkvusO2isPTnb%2FJ%2BT7EACf%2FYh4Miogkma1%2BMdUqicaf2f%2BAl3Ineny4dwrq0DZLJR3ZQ6%2BmrmRmKwDm%2FtqloNL71HhmxW886UorPX%2Bvpaq34eg2nLyWVvppg7FxjM21X%2BEw9Yg1s52mm3Ap4bX6P0LVbp5dscrmMDiTsmPfG2VASSgIosyV8rxktqIKnFAOqVl5%2Bv3N%2BAhZuUrgSZFnAHjqDEo9yOALaYNY%2Bpl9jCA7PmhBjqwAV9isutheWxwG5BY9VhKece%2B3qkOWDDc81nTztC6hg3lveKy%2Bdm3Weoa%2FP9ogYgvfEh9TFnBG6Xpvcxks%2B38D5pxaDEpBDKmc5GIA14SIFM6sTeCbH2jZtkwdyA3PmAQluRxDGbEd2m7KB%2FQJWewlKFwsWq9fLbplxZzBlsD5PNgANlk9r5Em2v0Y26q5agMmr7EdjosnLVTj7okX505lJFhAAm0BlA6d9vvPSzYnXn2&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230418T114334Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMFY6XWEI%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=dfaa9d993e9303db9e28426d8a2da111f438c9cddb5275a4c929011f64e3b6bc',
            width: 300,
            height: 300
          }
        },
        source: 'Serious Eats',
        url: 'http://www.seriouseats.com/recipes/2011/07/coffee-thins-cookie-recipe.html',
        shareAs: 'http://www.edamam.com/recipe/coffee-thins-1a391a86af3297a2d912d9654ca8f12c/coffee',
        yield: 24.0,
        dietLabels: ['Low-Sodium'],
        healthLabels: [
          'Low Potassium',
          'Kidney-Friendly',
          'Vegetarian',
          'Pescatarian',
          'Egg-Free',
          'Peanut-Free',
          'Soy-Free',
          'Fish-Free',
          'Shellfish-Free',
          'Pork-Free',
          'Red-Meat-Free',
          'Crustacean-Free',
          'Celery-Free',
          'Mustard-Free',
          'Sesame-Free',
          'Lupine-Free',
          'Mollusk-Free',
          'Alcohol-Free',
          'Kosher'
        ],
        cautions: ['Sulfites'],
        ingredientLines: [
          '1 cup roughly chopped walnuts',
          '2 cups all purpose flour',
          '1/2 teaspoon salt',
          '1 cup sugar',
          '4 teaspoons ground coffee',
          '2 tablespoons cocoa powder',
          '12 tablespoons unsalted butter, cut into 1/2 inch dice',
          '2 teaspoons vanilla extract',
          '2 tablespoons milk',
          'About 2 dozen whole coffee beans, for decoration'
        ],
        ingredients: [
          {
            text: '1 cup roughly chopped walnuts',
            quantity: 1.0,
            measure: 'cup',
            food: 'walnuts',
            weight: 117.0,
            foodCategory: 'plant-based protein',
            foodId: 'food_acqkmojaw4fltga9jad8mb85u9z2',
            image: 'https://www.edamam.com/food-img/624/6243d320d94b15ebaece2634cc5b40c5.jpg'
          },
          {
            text: '2 cups all purpose flour',
            quantity: 2.0,
            measure: 'cup',
            food: 'all purpose flour',
            weight: 250.0,
            foodCategory: 'grains',
            foodId: 'food_ar3x97tbq9o9p6b6gzwj0am0c81l',
            image: 'https://www.edamam.com/food-img/368/368077bbcab62f862a8c766a56ea5dd1.jpg'
          },
          {
            text: '1/2 teaspoon salt',
            quantity: 0.5,
            measure: 'teaspoon',
            food: 'salt',
            weight: 3.0,
            foodCategory: 'Condiments and sauces',
            foodId: 'food_btxz81db72hwbra2pncvebzzzum9',
            image: 'https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg'
          },
          {
            text: '1 cup sugar',
            quantity: 1.0,
            measure: 'cup',
            food: 'sugar',
            weight: 200.0,
            foodCategory: 'sugars',
            foodId: 'food_axi2ijobrk819yb0adceobnhm1c2',
            image: 'https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg'
          },
          {
            text: '4 teaspoons ground coffee',
            quantity: 4.0,
            measure: 'teaspoon',
            food: 'ground coffee',
            weight: 4.0,
            foodCategory: 'coffee and tea',
            foodId: 'food_aof7z08ad0qgsta38run7arojif8',
            image: 'https://www.edamam.com/food-img/336/336e810373dd353a955a6896699b586e.jpg'
          },
          {
            text: '2 tablespoons cocoa powder',
            quantity: 2.0,
            measure: 'tablespoon',
            food: 'cocoa',
            weight: 10.8,
            foodCategory: 'chocolate',
            foodId: 'food_afcmkjjaqwjkezbfz7htdb7mpkwz',
            image: 'https://www.edamam.com/food-img/89a/89af89595db3cf2c3007f2b064c5fef6.jpg'
          },
          {
            text: '12 tablespoons unsalted butter, cut into 1/2 inch dice',
            quantity: 12.0,
            measure: 'tablespoon',
            food: 'unsalted butter',
            weight: 170.39999999999998,
            foodCategory: 'Dairy',
            foodId: 'food_awz3iefajbk1fwahq9logahmgltj',
            image: 'https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg'
          },
          {
            text: '2 teaspoons vanilla extract',
            quantity: 2.0,
            measure: 'teaspoon',
            food: 'vanilla extract',
            weight: 8.4,
            foodCategory: 'Condiments and sauces',
            foodId: 'food_bh1wvnqaw3q7ciascfoygaabax2a',
            image: 'https://www.edamam.com/food-img/90f/90f910b0bf82750d4f6528263e014cca.jpg'
          },
          {
            text: '2 tablespoons milk',
            quantity: 2.0,
            measure: 'tablespoon',
            food: 'milk',
            weight: 30.0,
            foodCategory: 'Milk',
            foodId: 'food_b49rs1kaw0jktabzkg2vvanvvsis',
            image: 'https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg'
          },
          {
            text: 'About 2 dozen whole coffee beans, for decoration',
            quantity: 24.0,
            measure: '<unit>',
            food: 'coffee beans',
            weight: 48.0,
            foodCategory: 'coffee and tea',
            foodId: 'food_b36idu0apr5kqtbcs7b7ua8spx6m',
            image: 'https://www.edamam.com/food-img/336/336e810373dd353a955a6896699b586e.jpg'
          }
        ],
        calories: 3921.6239999999993,
        totalWeight: 841.5999999999999,
        totalTime: 65.0,
        cuisineType: ['american'],
        mealType: ['teatime'],
        dishType: ['biscuits and cookies'],
        totalNutrients: {
          ENERC_KCAL: { label: 'Energy', quantity: 3921.624, unit: 'kcal' },
          FAT: { label: 'Fat', quantity: 219.67677999999995, unit: 'g' },
          FASAT: { label: 'Saturated', quantity: 96.62033199999999, unit: 'g' },
          FATRN: { label: 'Trans', quantity: 5.585711999999999, unit: 'g' },
          FAMS: { label: 'Monounsaturated', quantity: 47.248214, unit: 'g' },
          FAPU: {
            label: 'Polyunsaturated',
            quantity: 61.61962799999999,
            unit: 'g'
          },
          CHOCDF: { label: 'Carbs', quantity: 454.84173999999996, unit: 'g' },
          'CHOCDF.net': {
            label: 'Carbohydrates (net)',
            quantity: 436.25674000000004,
            unit: 'g'
          },
          FIBTG: { label: 'Fiber', quantity: 18.585, unit: 'g' },
          SUGAR: { label: 'Sugars', quantity: 206.19754, unit: 'g' },
          'SUGAR.added': { label: 'Sugars, added', quantity: 199.6, unit: 'g' },
          PROCNT: { label: 'Protein', quantity: 54.503339999999994, unit: 'g' },
          CHOLE: {
            label: 'Cholesterol',
            quantity: 369.35999999999996,
            unit: 'mg'
          },
          NA: { label: 'Sodium', quantity: 1225.988, unit: 'mg' },
          CA: { label: 'Calcium', quantity: 317.74399999999997, unit: 'mg' },
          MG: { label: 'Magnesium', quantity: 471.23800000000006, unit: 'mg' },
          K: { label: 'Potassium', quantity: 2883.43, unit: 'mg' },
          FE: { label: 'Iron', quantity: 18.957839999999997, unit: 'mg' },
          ZN: { label: 'Zinc', quantity: 6.5793800000000005, unit: 'mg' },
          P: { label: 'Phosphorus', quantity: 978.252, unit: 'mg' },
          VITA_RAE: {
            label: 'Vitamin A',
            quantity: 1180.5059999999999,
            unit: 'µg'
          },
          VITC: { label: 'Vitamin C', quantity: 1.521, unit: 'mg' },
          THIA: {
            label: 'Thiamin (B1)',
            quantity: 2.3972979999999997,
            unit: 'mg'
          },
          RIBF: {
            label: 'Riboflavin (B2)',
            quantity: 1.6296240000000002,
            unit: 'mg'
          },
          NIA: {
            label: 'Niacin (B3)',
            quantity: 31.096157999999996,
            unit: 'mg'
          },
          VITB6A: {
            label: 'Vitamin B6',
            quantity: 0.7842100000000001,
            unit: 'mg'
          },
          FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 852.2279999999998,
            unit: 'µg'
          },
          FOLFD: { label: 'Folate (food)', quantity: 197.228, unit: 'µg' },
          FOLAC: { label: 'Folic acid', quantity: 385.0, unit: 'µg' },
          VITB12: {
            label: 'Vitamin B12',
            quantity: 0.42467999999999995,
            unit: 'µg'
          },
          VITD: {
            label: 'Vitamin D',
            quantity: 2.9459999999999997,
            unit: 'µg'
          },
          TOCPHA: {
            label: 'Vitamin E',
            quantity: 5.379079999999999,
            unit: 'mg'
          },
          VITK1: {
            label: 'Vitamin K',
            quantity: 17.184999999999995,
            unit: 'µg'
          },
          'Sugar.alcohol': { label: 'Sugar alcohol', quantity: 0.0, unit: 'g' },
          WATER: { label: 'Water', quantity: 97.96937999999999, unit: 'g' }
        },
        totalDaily: {
          ENERC_KCAL: { label: 'Energy', quantity: 196.0812, unit: '%' },
          FAT: { label: 'Fat', quantity: 337.96427692307685, unit: '%' },
          FASAT: { label: 'Saturated', quantity: 483.10166, unit: '%' },
          CHOCDF: { label: 'Carbs', quantity: 151.61391333333333, unit: '%' },
          FIBTG: { label: 'Fiber', quantity: 74.34, unit: '%' },
          PROCNT: { label: 'Protein', quantity: 109.00668, unit: '%' },
          CHOLE: {
            label: 'Cholesterol',
            quantity: 123.11999999999998,
            unit: '%'
          },
          NA: { label: 'Sodium', quantity: 51.08283333333333, unit: '%' },
          CA: { label: 'Calcium', quantity: 31.774399999999996, unit: '%' },
          MG: { label: 'Magnesium', quantity: 112.19952380952381, unit: '%' },
          K: { label: 'Potassium', quantity: 61.34957446808511, unit: '%' },
          FE: { label: 'Iron', quantity: 105.32133333333331, unit: '%' },
          ZN: { label: 'Zinc', quantity: 59.812545454545464, unit: '%' },
          P: { label: 'Phosphorus', quantity: 139.75028571428572, unit: '%' },
          VITA_RAE: {
            label: 'Vitamin A',
            quantity: 131.16733333333332,
            unit: '%'
          },
          VITC: { label: 'Vitamin C', quantity: 1.69, unit: '%' },
          THIA: {
            label: 'Thiamin (B1)',
            quantity: 199.77483333333333,
            unit: '%'
          },
          RIBF: {
            label: 'Riboflavin (B2)',
            quantity: 125.35569230769232,
            unit: '%'
          },
          NIA: {
            label: 'Niacin (B3)',
            quantity: 194.35098749999997,
            unit: '%'
          },
          VITB6A: {
            label: 'Vitamin B6',
            quantity: 60.323846153846155,
            unit: '%'
          },
          FOLDFE: {
            label: 'Folate equivalent (total)',
            quantity: 213.05699999999996,
            unit: '%'
          },
          VITB12: { label: 'Vitamin B12', quantity: 17.695, unit: '%' },
          VITD: { label: 'Vitamin D', quantity: 19.639999999999997, unit: '%' },
          TOCPHA: {
            label: 'Vitamin E',
            quantity: 35.86053333333333,
            unit: '%'
          },
          VITK1: { label: 'Vitamin K', quantity: 14.32083333333333, unit: '%' }
        },
        digest: [
          {
            label: 'Fat',
            tag: 'FAT',
            schemaOrgTag: 'fatContent',
            total: 219.67677999999995,
            hasRDI: true,
            daily: 337.96427692307685,
            unit: 'g',
            sub: [
              {
                label: 'Saturated',
                tag: 'FASAT',
                schemaOrgTag: 'saturatedFatContent',
                total: 96.62033199999999,
                hasRDI: true,
                daily: 483.10166,
                unit: 'g'
              },
              {
                label: 'Trans',
                tag: 'FATRN',
                schemaOrgTag: 'transFatContent',
                total: 5.585711999999999,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Monounsaturated',
                tag: 'FAMS',
                schemaOrgTag: null,
                total: 47.248214,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Polyunsaturated',
                tag: 'FAPU',
                schemaOrgTag: null,
                total: 61.61962799999999,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              }
            ]
          },
          {
            label: 'Carbs',
            tag: 'CHOCDF',
            schemaOrgTag: 'carbohydrateContent',
            total: 454.84173999999996,
            hasRDI: true,
            daily: 151.61391333333333,
            unit: 'g',
            sub: [
              {
                label: 'Carbs (net)',
                tag: 'CHOCDF.net',
                schemaOrgTag: null,
                total: 436.25674000000004,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Fiber',
                tag: 'FIBTG',
                schemaOrgTag: 'fiberContent',
                total: 18.585,
                hasRDI: true,
                daily: 74.34,
                unit: 'g'
              },
              {
                label: 'Sugars',
                tag: 'SUGAR',
                schemaOrgTag: 'sugarContent',
                total: 206.19754,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              },
              {
                label: 'Sugars, added',
                tag: 'SUGAR.added',
                schemaOrgTag: null,
                total: 199.6,
                hasRDI: false,
                daily: 0.0,
                unit: 'g'
              }
            ]
          },
          {
            label: 'Protein',
            tag: 'PROCNT',
            schemaOrgTag: 'proteinContent',
            total: 54.503339999999994,
            hasRDI: true,
            daily: 109.00668,
            unit: 'g'
          },
          {
            label: 'Cholesterol',
            tag: 'CHOLE',
            schemaOrgTag: 'cholesterolContent',
            total: 369.35999999999996,
            hasRDI: true,
            daily: 123.11999999999998,
            unit: 'mg'
          },
          {
            label: 'Sodium',
            tag: 'NA',
            schemaOrgTag: 'sodiumContent',
            total: 1225.988,
            hasRDI: true,
            daily: 51.08283333333333,
            unit: 'mg'
          },
          {
            label: 'Calcium',
            tag: 'CA',
            schemaOrgTag: null,
            total: 317.74399999999997,
            hasRDI: true,
            daily: 31.774399999999996,
            unit: 'mg'
          },
          {
            label: 'Magnesium',
            tag: 'MG',
            schemaOrgTag: null,
            total: 471.23800000000006,
            hasRDI: true,
            daily: 112.19952380952381,
            unit: 'mg'
          },
          {
            label: 'Potassium',
            tag: 'K',
            schemaOrgTag: null,
            total: 2883.43,
            hasRDI: true,
            daily: 61.34957446808511,
            unit: 'mg'
          },
          {
            label: 'Iron',
            tag: 'FE',
            schemaOrgTag: null,
            total: 18.957839999999997,
            hasRDI: true,
            daily: 105.32133333333331,
            unit: 'mg'
          },
          {
            label: 'Zinc',
            tag: 'ZN',
            schemaOrgTag: null,
            total: 6.5793800000000005,
            hasRDI: true,
            daily: 59.812545454545464,
            unit: 'mg'
          },
          {
            label: 'Phosphorus',
            tag: 'P',
            schemaOrgTag: null,
            total: 978.252,
            hasRDI: true,
            daily: 139.75028571428572,
            unit: 'mg'
          },
          {
            label: 'Vitamin A',
            tag: 'VITA_RAE',
            schemaOrgTag: null,
            total: 1180.5059999999999,
            hasRDI: true,
            daily: 131.16733333333332,
            unit: 'µg'
          },
          {
            label: 'Vitamin C',
            tag: 'VITC',
            schemaOrgTag: null,
            total: 1.521,
            hasRDI: true,
            daily: 1.69,
            unit: 'mg'
          },
          {
            label: 'Thiamin (B1)',
            tag: 'THIA',
            schemaOrgTag: null,
            total: 2.3972979999999997,
            hasRDI: true,
            daily: 199.77483333333333,
            unit: 'mg'
          },
          {
            label: 'Riboflavin (B2)',
            tag: 'RIBF',
            schemaOrgTag: null,
            total: 1.6296240000000002,
            hasRDI: true,
            daily: 125.35569230769232,
            unit: 'mg'
          },
          {
            label: 'Niacin (B3)',
            tag: 'NIA',
            schemaOrgTag: null,
            total: 31.096157999999996,
            hasRDI: true,
            daily: 194.35098749999997,
            unit: 'mg'
          },
          {
            label: 'Vitamin B6',
            tag: 'VITB6A',
            schemaOrgTag: null,
            total: 0.7842100000000001,
            hasRDI: true,
            daily: 60.323846153846155,
            unit: 'mg'
          },
          {
            label: 'Folate equivalent (total)',
            tag: 'FOLDFE',
            schemaOrgTag: null,
            total: 852.2279999999998,
            hasRDI: true,
            daily: 213.05699999999996,
            unit: 'µg'
          },
          {
            label: 'Folate (food)',
            tag: 'FOLFD',
            schemaOrgTag: null,
            total: 197.228,
            hasRDI: false,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Folic acid',
            tag: 'FOLAC',
            schemaOrgTag: null,
            total: 385.0,
            hasRDI: false,
            daily: 0.0,
            unit: 'µg'
          },
          {
            label: 'Vitamin B12',
            tag: 'VITB12',
            schemaOrgTag: null,
            total: 0.42467999999999995,
            hasRDI: true,
            daily: 17.695,
            unit: 'µg'
          },
          {
            label: 'Vitamin D',
            tag: 'VITD',
            schemaOrgTag: null,
            total: 2.9459999999999997,
            hasRDI: true,
            daily: 19.639999999999997,
            unit: 'µg'
          },
          {
            label: 'Vitamin E',
            tag: 'TOCPHA',
            schemaOrgTag: null,
            total: 5.379079999999999,
            hasRDI: true,
            daily: 35.86053333333333,
            unit: 'mg'
          },
          {
            label: 'Vitamin K',
            tag: 'VITK1',
            schemaOrgTag: null,
            total: 17.184999999999995,
            hasRDI: true,
            daily: 14.32083333333333,
            unit: 'µg'
          },
          {
            label: 'Sugar alcohols',
            tag: 'Sugar.alcohol',
            schemaOrgTag: null,
            total: 0.0,
            hasRDI: false,
            daily: 0.0,
            unit: 'g'
          },
          {
            label: 'Water',
            tag: 'WATER',
            schemaOrgTag: null,
            total: 97.96937999999999,
            hasRDI: false,
            daily: 0.0,
            unit: 'g'
          }
        ]
      },
      _links: {
        self: {
          title: 'Self',
          href: 'https://api.edamam.com/api/recipes/v2/1a391a86af3297a2d912d9654ca8f12c?type=public&app_id=2a3177b2&app_key=5c61b3aea75a67ec7ced14be8a5c81e1'
        }
      }
    }
  ]
};
