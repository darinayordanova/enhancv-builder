import types from "./Mistakes.types";

const INITIAL_STATE = {
};

const MistakesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.CHANGE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default MistakesReducer;
