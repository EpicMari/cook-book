import React, { useContext } from "react";
import AppContext from "../../context";
import { StyledInput } from "./SearchFavRecipes.styles";

const SearchFavRecipes = () => {
  const context = useContext(AppContext);

  const { searchFavRecipe, handleSearchFavRecipeChange } = context;

  return (
    <StyledInput
      type="search"
      placeholder="Search fav recipe..."
      value={searchFavRecipe}
      onChange={handleSearchFavRecipeChange}
    />
  );
};

export default SearchFavRecipes;
