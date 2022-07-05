import React from "react";
import RecipesListItem from "../RecipesListItem/RecipesListItem";
import { Item, ListItem } from "./RecipesList.styles";

const RecipesList = ({ recipesArray, listType }) => {
  return (
    <>
      <ListItem>
        {recipesArray.map((item) => (
          <Item key={item.id}>
            <RecipesListItem item={item} listType={listType} />
          </Item>
        ))}
      </ListItem>
    </>
  );
};

export default RecipesList;
