import React, { useContext } from "react";
import AppContext from "../../context";

import { routes } from "../../routes";
import {
  ButtonHamburger,
  NavBarStyled,
  Navigation,
  NavigationItem,
  NavigationList,
  SpanHamburgerInner,
  NavLinkStyled,
} from "../NavBar/NavBar.styles";

const NavBar = () => {
  const context = useContext(AppContext);
  const { handleToggle, isActive, changeOnFalse } = context;
  return (
    <>
      <NavBarStyled>
        <ButtonHamburger
          className={isActive ? "active" : null}
          onClick={handleToggle}
        >
          <SpanHamburgerInner></SpanHamburgerInner>
        </ButtonHamburger>
      </NavBarStyled>
      <Navigation className={isActive ? "active" : null}>
        <NavigationList>
          <NavLinkStyled to={routes.home} onClick={changeOnFalse}>
            <NavigationItem>Home</NavigationItem>
          </NavLinkStyled>
          <NavLinkStyled to={routes.favRecipes} onClick={changeOnFalse}>
            <NavigationItem>Favorites</NavigationItem>
          </NavLinkStyled>
        </NavigationList>
      </Navigation>
    </>
  );
};

export default NavBar;
