import React, { useContext } from "react";
import AppContext from "../../context";
import RecipesListItem from "../RecipesListItem/RecipesListItem";
import { Item, ListItem, Button } from "./RecipesList.styles";

const RecipesList = ({ recipesArray, listType }) => {
  // const context = useContext(AppContext);

  // const { recipeType, getFiveMoreRecipes, getFiveLessRecipes } = context;

  return (
    <>
      <ListItem>
        {recipesArray.map((item) => (
          <Item key={item.id}>
            <RecipesListItem item={item} listType={listType} />
          </Item>
        ))}
      </ListItem>

      {/* {recipesArray.length > 0 && (
        <Button onClick={getFiveMoreRecipes}>Get 5 more {recipeType}s </Button>
      )}
      {recipesArray.length > 10 && (
        <Button onClick={getFiveLessRecipes}>Get 5 less {recipeType}s </Button>
      )} */}
    </>
  );
};

export default RecipesList;
