import * as actionTypes from "../actions/actionTypes";
import { setAppBackground } from "./reducer-functions";

export const initialState = {
  controllerBackground: "#ffffff",
  appName: "default",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_APP_BACKGROUND:
      return setAppBackground(state, action);

    default:
      return state;
  }
}

export default reducer;
