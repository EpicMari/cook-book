import React, { useContext } from "react";
import AppContext from "../../context";
import { Form, StyledInput, StyledSelect } from "./SearchRecipeForm.styles";

const SearchRecipeForm = () => {
  const context = useContext(AppContext);
  return (
    <Form onSubmit={context.getRecipes}>
      <StyledInput
        type="search"
        placeholder="Search recipe"
        name="recipeName"
      />
      <label htmlFor="recipeNumber">Choose number of recipe: </label>
      <StyledSelect name="recipeNumber" id="recipeNumber">
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
      </StyledSelect>
      <button type="submit">Search</button>
    </Form>
  );
};

export default SearchRecipeForm;
