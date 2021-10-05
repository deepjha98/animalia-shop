import { SET_CURRENT_USER } from "redux/actions";

const INITIAL_STATE = {
  currentUser: null,
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};
export default user;
