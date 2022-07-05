import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkStyled = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.s};
  text-align: center;
  word-wrap: break-word;
  margin-top: 20px;
  width: 80%;

  @media (min-width: 679px) {
    font-size: ${({ theme }) => theme.fontSizes.m};
  }
`;

export const Img = styled.img`
  border-radius: 5px 5px 0 0;
  height: 200px;
  width: 300px;
  object-fit: cover;
`;

export const Button = styled.button`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  margin-bottom: 20px;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  transition: 0.3s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.colors.pink};
  }

  @media (min-width: 679px) {
    font-size: ${({ theme }) => theme.fontSizes.s};
  }
`;
