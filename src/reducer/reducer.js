import * as actionTypes from "../actions/actionTypes";

export const initialState = {
  controllerBackground: "#ffffff",
  appName: "default",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_APP_BACKGROUND:
      return { ...initialState, controllerBackground: action.payload };

    default:
      return state;
  }
}

export default reducer;
