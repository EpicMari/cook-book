import React, { useContext } from "react";
import RecipesList from "../components/RecipesList/RecipesList";
import SearchRecipeForm from "../components/SearchRecipeForm/SearchRecipeForm";
import AppContext from "../context";
import { listTypes } from "../helpers/listTypes";
import { Button } from "../components/RecipesList/RecipesList.styles";

const Home = () => {
  const context = useContext(AppContext);
  const { recipeType, getFiveMoreRecipes, getFiveLessRecipes, recipes } =
    context;
  return (
    <>
      <SearchRecipeForm />
      <RecipesList recipesArray={recipes} listType={listTypes.recipes} />
      {context.recipes.length > 0 && (
        <Button onClick={getFiveMoreRecipes}>Get 5 more {recipeType}s </Button>
      )}
      {context.recipes.length > 10 && (
        <Button onClick={getFiveLessRecipes}>Get 5 less {recipeType}s </Button>
      )}
    </>
  );
};

export default Home;
