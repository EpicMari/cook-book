import React, { useContext } from "react";
import AppContext from "../../context";
import { listTypes } from "../../helpers/listTypes";

import { Title, Img, LinkStyled, Button } from "./RecipesListItem.styles";

const RecipesListItem = ({
  item: { id, title, image, servings, readyInMinutes, isInFav },
  listType,
}) => {
  const context = useContext(AppContext);
  const { baseImgUrl, addToFavRecipes, deleteFromFavRecipes } = context;
  return (
    <>
      <LinkStyled
        to={{
          pathname: `/recipe/${title.replace(/\s/g, "")}`,
          state: {
            image: `${baseImgUrl}${image}`,
            title,
            servings,
            readyInMinutes,
          },
        }}
      >
        <Img src={`${baseImgUrl}${image}`} alt={title} />
      </LinkStyled>
      <Title>{title}</Title>

      {listType === listTypes.favRecipes ? (
        <Button onClick={() => deleteFromFavRecipes(id)}>
          Delete from fav
        </Button>
      ) : (
        <Button disabled={isInFav} onClick={() => addToFavRecipes(id)}>
          {isInFav ? "In favorites" : "Add to fav"}
        </Button>
      )}
    </>
  );
};

export default RecipesListItem;
