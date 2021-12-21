import React, { useContext } from "react";
import AppContext from "../../context";
import { Form } from "./SearchRecipeForm.styles";

const SearchRecipeForm = () => {
  const context = useContext(AppContext);
  return (
    <Form onSubmit={context.getRecipes}>
      <input type="search" placeholder="search recipe" name="recipeName" />
      <label htmlFor="recipeNumber">Choose number of recipe: </label>
      <select name="recipeNumber" id="recipeNumber">
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
      </select>
      <button type="submit">Search</button>
    </Form>
  );
};

export default SearchRecipeForm;

/*

 <input type="text" />
      <input type="number" />
      <input type="password" />
      <input type="email" />
      <input type="range" />
      <input type="file" />
      <input type="date" />
      <input type="checkbox" />
*/
