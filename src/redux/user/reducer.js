import { UserActionTypes } from "redux/actions";

const INITIAL_STATE = {
  currentUser: null,
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };

    default:
      return state;
  }
};
export default user;
