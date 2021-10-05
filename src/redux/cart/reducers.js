import { CartActionTypes } from "redux/actions";
// UTILS FUNCTION
import { addItemToCart } from "utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cart = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return { ...state, hidden: !state.hidden };
    case CartActionTypes.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cart;
