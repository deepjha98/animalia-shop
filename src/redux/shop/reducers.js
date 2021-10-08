import { ShopActionTypes } from "redux/actions";

const INITIAL_STATE = {
  data: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.UPDATE_COLLECTIONS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
