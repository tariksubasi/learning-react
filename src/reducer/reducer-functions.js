import { produce } from "immer";

export const setAppBackground = (state, action) => {
  return produce(state, (draftState) => {
    draftState.controllerBackground = action.payload;
  });
};
export const addRandomProduct = (state, action) => {
  return produce(state, (draftState) => {
    draftState.products.push(action.payload);
  });
};
