import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routes } from "../routes";
import NavbarTemplate from "../templates/NavbarTemplate";
import FavRecipes from "../views/FavRecipes";
import Home from "../views/Home";
import SingleRecipe from "../views/SingleRecipe/SingleRecipe";

const Router = () => {
  return (
    <BrowserRouter>
      <NavbarTemplate>
        <Switch>
          <Route exact path={routes.home} component={Home} />
          <Route path={routes.favRecipes} component={FavRecipes} />
          <Route path={routes.singleRecipe} component={SingleRecipe} />
        </Switch>
      </NavbarTemplate>
    </BrowserRouter>
  );
};

export default Router;
