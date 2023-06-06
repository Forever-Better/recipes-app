'use client';

import FilterBar from './FilterBar';
import HeaderBlock from './HeaderBlock';
import RecipeList from './RecipeList';
import Search from './Search';

export default function HomeScreen() {
  return (
    <div>
      <HeaderBlock />
      <FilterBar />
      <Search />
      <RecipeList />
    </div>
  );
}
