import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavBarStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 0;
  left: 0;
  height: 80px;
  background: ${({ theme }) => theme.colors.darkBrown};
  box-shadow: 0 0 3px black;
  width: 100%;
`;

export const ButtonHamburger = styled.button`
  position: relative;
  align-self: flex-end;
  height: 80px;
  width: 80px;
  background: transparent;
  border: none;
  transition: 0.3s 0.1s ease-in-out;

  &.active {
    background-color: transparent;
  }

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const SpanHamburgerInner = styled.span`
  position: absolute;
  width: 50px;
  height: 6px;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.white};
  transform: translate(-50%, -50%);
  transition: background-color 0.1s 0.2s ease-in-out;

  &::after,
  &::before {
    content: "";
    position: absolute;
    width: 50px;
    height: 6px;
    border-radius: 5px;
    background: ${({ theme }) => theme.colors.white};
    left: 0;
    transform: translateX(-50%);
    transition: transform 0.2s 0.2s ease-in-out;
  }

  &::after {
    transform: translateY(-15px);
  }
  &::before {
    transform: translateY(15px);
  }

  ${ButtonHamburger}.active & {
    background-color: transparent;
  }

  ${ButtonHamburger}.active &::after {
    transform: rotate(45deg);
  }
  ${ButtonHamburger}.active &::before {
    transform: rotate(-45deg);
  }
`;

export const Navigation = styled.div`
  overflow: hidden;
  height: 0;
  position: fixed;
  z-index: 3;
  top: 80px;
  width: 100%;
  background: ${({ theme }) => theme.colors.darkBrown};
  transition: height 0.3s 0.3s ease-in-out;

  &.active {
    height: 100vh;
  }

  @media (min-width: 1024px) {
    transition: none;
    display: flex;
    justify-content: flex-end;
    top: 40px;
    overflow: visible;
  }
`;

export const NavigationList = styled.ul`
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: flex-end;
    align-content: center;
  }
`;

export const NavigationItem = styled.li`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.s};
  margin-bottom: 20px;
  padding: 0 30px;

  &:first-child {
    margin-top: 20px;
  }

  @media (min-width: 1024px) {
    margin-right: 20px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
`;
