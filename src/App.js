import React, { Component } from "react";
import axios from "axios";
import Router from "./routing/Router";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "./themes/mainTheme";
import { GlobalStyle } from "./globalStyles/GlobalStyles";
import "./globalStyles/fonts.css";
import { Wrapper } from "./App.styles";
import AppContext from "./context";
import {
  getFavRecipesFromLocalStorage,
  getBaseImgUrlToLocalStorage,
} from "./helpers/localStorageGetters";
import NotificationAddToFav from "./components/Modal/NotificationAddToFav";

class App extends Component {
  state = {
    recipes: [],
    baseImgUrl: getBaseImgUrlToLocalStorage(),
    isActive: false,
    favRecipes: getFavRecipesFromLocalStorage(),
    staticFavRecipes: getFavRecipesFromLocalStorage(),
    recipeType: "",
    offset: 0,
    notification: false,
    searchFavRecipe: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.favRecipes !== this.state.favRecipes) {
      if (this.state.searchFavRecipe.length === 0) {
        this.setFavRecipesToLocalStorage();
      }
    }
    if (prevState.baseImgUrl !== this.state.baseImgUrl) {
      this.setBaseImgUrlToLocalStorage();
    }

    if (prevState.favRecipes !== this.state.favRecipes) {
      this.checkFavRecipesList(this.state.recipes);
    }

    if (prevState.searchFavRecipe !== this.state.searchFavRecipe) {
      this.filterFavRecipesByName();
    }
  }

  setFavRecipesToLocalStorage = () => {
    localStorage.setItem("favRecipes", JSON.stringify(this.state.favRecipes));
  };

  setBaseImgUrlToLocalStorage = () => {
    localStorage.setItem("baseImgUrl", JSON.stringify(this.state.baseImgUrl));
  };

  filterFavRecipesByName = () => {
    const { searchFavRecipe, staticFavRecipes } = this.state;
    if (searchFavRecipe.length !== 0) {
      const filteredFavRecipes = staticFavRecipes.filter(
        (recipe) =>
          recipe.title.toLowerCase().slice(0, searchFavRecipe.length) ===
          searchFavRecipe.toLowerCase()
      );

      this.setState({
        favRecipes: [...filteredFavRecipes],
      });
    } else {
      this.setState({
        favRecipes: [...staticFavRecipes],
      });
    }
  };

  handleSearchFavRecipeChange = (e) => {
    this.setState({
      searchFavRecipe: e.target.value,
    });
  };

  getFiveMoreRecipes = () => {
    const { recipeType, offset, recipes } = this.state;
    axios
      .get(
        `https://api.spoonacular.com/recipes/search?apiKey=${process.env.REACT_APP_API_KEY}&query=${recipeType}&number=5&offset=${offset}`
      )
      .then((res) => {
        const recipeArray = [...recipes, ...res.data.results];
        this.checkFavRecipesList(recipeArray);
        this.setState({
          offset: recipes.length + 5,
        });
      })
      .catch((err) => console.log(err));
  };

  getFiveLessRecipes = () => {
    const { recipes, offset } = this.state;
    const newRecipes = recipes.filter((recipe, index) => {
      return index < recipes.length - 5;
    });
    this.setState({
      recipes: newRecipes,
      offset: offset - 5,
    });
  };

  checkFavRecipesList = (recipeArray) => {
    const recipes = recipeArray.map((recipe) => {
      let isIn = false;

      this.state.favRecipes.forEach((favRecipe) => {
        if (favRecipe.id === recipe.id) {
          isIn = true;
        }
      });

      return {
        ...recipe,
        isInFav: isIn,
      };
    });

    this.setState({
      recipes,
    });
  };

  getRecipes = (e) => {
    e.preventDefault();

    const recipeName = e.target.recipeName.value;
    const recipeNumber = e.target.recipeNumber.value;

    axios
      .get(
        `https://api.spoonacular.com/recipes/search?apiKey=${process.env.REACT_APP_API_KEY}&query=${recipeName}&number=${recipeNumber}`
      )
      .then((res) => {
        this.checkFavRecipesList(res.data.results);
        this.setState({
          baseImgUrl: res.data.baseUri,
          recipeType: recipeName,
          offset: recipeNumber,
        });
      })
      .catch((err) => console.log(err));

    e.target.reset();
  };

  handleToggle = () =>
    this.setState((prevState) => ({
      isActive: !prevState.isActive,
    }));

  changeOnFalse = () =>
    this.state.isActive && this.setState({ isActive: false });

  addToFavRecipes = (recipeId) => {
    const selectedRecipe = this.state.recipes.find(
      (recipe) => recipe.id === recipeId
    );

    let isRecipeInFav;

    this.state.favRecipes.forEach((recipe) => {
      if (recipe.id === recipeId) {
        isRecipeInFav = true;
      }
    });

    const closeModal = () =>
      setTimeout(() => {
        this.setState({
          notification: false,
        });
      }, 3000);

    if (isRecipeInFav) {
      this.setState({
        favRecipes: [...new Set([...this.state.favRecipes])],
        notification: false,
      });
    } else {
      this.setState({
        favRecipes: [...new Set([...this.state.favRecipes, selectedRecipe])],
        notification: true,
      });
      closeModal();
    }

    // this.getFavRecipesFromLocalStorage();
  };

  deleteFromFavRecipes = (recipeId) => {
    const selectedRecipe = this.state.favRecipes.filter(
      (recipe) => recipe.id !== recipeId
    );

    this.setState({ favRecipes: selectedRecipe, buttonToggle: false });
  };

  render() {
    const {
      recipes,
      baseImgUrl,
      favRecipes,
      isActive,
      recipeType,
      notification,
      searchFavRecipe,
    } = this.state;
    return (
      <AppContext.Provider
        value={{
          recipes,
          baseImgUrl,
          favRecipes,
          isActive,
          recipeType,
          searchFavRecipe,
          changeOnFalse: this.changeOnFalse,
          handleToggle: this.handleToggle,
          getRecipes: this.getRecipes,
          addToFavRecipes: this.addToFavRecipes,
          deleteFromFavRecipes: this.deleteFromFavRecipes,
          setFavRecipesToLocalStorage: this.setFavRecipesToLocalStorage,
          getFiveMoreRecipes: this.getFiveMoreRecipes,
          getFiveLessRecipes: this.getFiveLessRecipes,
          handleSearchFavRecipeChange: this.handleSearchFavRecipeChange,
        }}
      >
        <ThemeProvider theme={mainTheme}>
          <Wrapper>
            <GlobalStyle />
            {notification && <NotificationAddToFav />}
            <Router />
          </Wrapper>
        </ThemeProvider>
      </AppContext.Provider>
    );
  }
}

export default App;
