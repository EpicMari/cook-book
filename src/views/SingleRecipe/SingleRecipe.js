import React from "react";
import {
  Description,
  Img,
  Servings,
  Time,
  Title,
  Wrapper,
  WrapperContents,
} from "./SingleRecipes.styles";

const SingleRecipe = ({
  location: {
    state: { title, image, servings, readyInMinutes },
  },
}) => {
  return (
    <Wrapper>
      <Img src={image} alt={title} />
      <WrapperContents>
        <Title>{title}</Title>
        <Time>{readyInMinutes} min.</Time>
        <Servings>servings: {servings}</Servings>
        <Description>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
          corrupti cum debitis quas hic, repellat exercitationem ex quis
          architecto, provident est illum incidunt labore. Est, eius autem, nam
          asperiores accusantium delectus culpa, numquam ipsum voluptas nemo
          temporibus pariatur reprehenderit? Distinctio!
        </Description>
      </WrapperContents>
    </Wrapper>
  );
};

export default SingleRecipe;
