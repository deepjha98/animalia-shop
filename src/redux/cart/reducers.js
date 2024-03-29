import { CartActionTypes } from "redux/actions";
// UTILS FUNCTION
import { addItemToCart, decreaseItemCart } from "utils";

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
    case CartActionTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case CartActionTypes.DECREASE_ITEM:
      return {
        ...state,
        cartItems: decreaseItemCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default cart;
