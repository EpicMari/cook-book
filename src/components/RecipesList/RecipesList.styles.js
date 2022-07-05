import styled from "styled-components";

export const ListItem = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  @media (min-width: 639px) {
    flex-direction: row;
    justify-content: space-evenly;
    flex-wrap: wrap;
    max-width: 1920px;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.brown};
  margin: 20px 20px;
  height: 450px;
  width: 300px;
  border-radius: 5px;
  box-shadow: 0 0 5px black;
`;

export const Button = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  margin-bottom: 20px;
  padding: 10px 20px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.darkBrown};
  transition: 0.3s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.colors.pink};
  }

  @media (min-width: 679px) {
    font-size: ${({ theme }) => theme.fontSizes.s};
  }
`;
