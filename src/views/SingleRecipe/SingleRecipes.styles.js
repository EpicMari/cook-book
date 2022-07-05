import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  margin: 110px 0 20px 0;
  width: 90%;
  max-width: 1000px;
  background: ${({ theme }) => theme.colors.pink};
  box-shadow: 7px 7px 17px -2px #000000;

  @media (min-width: 650px) {
    flex-direction: row;
    height: 500px;

    & img {
      border-radius: 5px 0 0 5px;
      height: 100%;
      width: 50%;
    }
  }
`;

export const WrapperContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Img = styled.img`
  width: 100%;
  /* max-width: 1000px; */
  height: 300px;
  border-radius: 5px 5px 0 0;
  object-fit: cover;
`;

export const Title = styled.h2`
  margin-top: 20px;
  width: 90%;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.s};
`;

export const Time = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  margin: 20px 0 5px;
`;
export const Servings = styled.h5`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  margin-bottom: 20px;
`;
export const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  text-align: center;
  margin-bottom: 20px;
  width: 90%;
  max-width: 800px;
`;
