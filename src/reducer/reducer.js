import * as actionTypes from "../actions/actionTypes";
import { setAppBackground, addRandomProduct } from "./reducer-functions";

export const initialState = {
  controllerBackground: "#ffffff",
  appName: "default",
  products: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_APP_BACKGROUND:
      return setAppBackground(state, action);
    case actionTypes.ADD_RANDOM_PRODUCT:
      return addRandomProduct(state, action);

    default:
      return state;
  }
}

export default reducer;
