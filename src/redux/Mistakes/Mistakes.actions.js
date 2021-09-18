import types from "./Mistakes.types";

export const change = (obj) => ({
  type: types.CHANGE,
  payload: obj,
});

