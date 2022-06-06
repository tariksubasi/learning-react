import * as actionTypes from "./actionTypes";

export const setAppBackground = (bgColor) => {
  return {
    type: actionTypes.SET_APP_BACKGROUND,
    payload: bgColor,
  };
};
export const addRandomProduct = (productObject) => {
  return {
    type: actionTypes.ADD_RANDOM_PRODUCT,
    payload: productObject,
  };
};
