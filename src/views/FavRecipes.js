import React, { useContext } from "react";
import RecipesList from "../components/RecipesList/RecipesList";
import SearchFavRecipes from "../components/SearchFavRecipes/SearchFavRecipes";
import AppContext from "../context";
import { listTypes } from "../helpers/listTypes";

const FavRecipes = () => {
  const context = useContext(AppContext);
  const { favRecipes } = context;
  return (
    <>
      <SearchFavRecipes />
      <RecipesList recipesArray={favRecipes} listType={listTypes.favRecipes} />
    </>
  );
};

export default FavRecipes;
