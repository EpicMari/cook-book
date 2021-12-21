import React, { useContext } from "react";
import AppContext from "../../context";

const SearchFavRecipes = () => {
  const context = useContext(AppContext);

  const { searchFavRecipe, handleSearchFavRecipeChange } = context;

  return (
    <input
      type="search"
      placeholder="Search fav recipe..."
      value={searchFavRecipe}
      onChange={handleSearchFavRecipeChange}
    />
  );
};

export default SearchFavRecipes;
