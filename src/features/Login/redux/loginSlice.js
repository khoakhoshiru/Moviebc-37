import produce from "immer";
import actions from "./type";

const inititalState = {
  profile: null,
};

const reducer = (state = inititalState, { type, payload }) => {
  return produce(state, draft => {
    switch (type) {
      case actions.SET_PROFILE:
        draft.profile = payload;
        break;
      default:
        break;
    }
  });
};
export default reducer;
