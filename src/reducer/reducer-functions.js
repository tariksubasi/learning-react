import { produce } from "immer";

export const setAppBackground = (state, action) => {
  return produce(state, (draftState) => {
    draftState.controllerBackground = action.payload;
  });
};
