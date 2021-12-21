export const getFavRecipesFromLocalStorage = () => {
  let localStorageFavRecipes;

  if (localStorage.getItem("favRecipes")) {
    localStorageFavRecipes = JSON.parse(localStorage.getItem("favRecipes"));
  } else {
    localStorageFavRecipes = [];
  }
  return localStorageFavRecipes;
};

export const getBaseImgUrlToLocalStorage = () => {
  let localStorageBaseImgUrl;

  if (localStorage.getItem("baseImgUrl")) {
    localStorageBaseImgUrl = JSON.parse(localStorage.getItem("baseImgUrl"));
  } else {
    localStorageBaseImgUrl = "";
  }
  return localStorageBaseImgUrl;
};

export const getDisabledButtonToLocalStorage = () => {
  let localStorageButtonToggle;

  if (localStorage.getItem("buttonToggle")) {
    localStorageButtonToggle = JSON.parse(localStorage.getItem("buttonToggle"));
  }

  return localStorageButtonToggle;
};
