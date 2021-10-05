import { CartActionTypes } from "redux/actions";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItemToCart = (product) => ({
  type: CartActionTypes.ADD_ITEM_TO_CART,
  payload: product,
});

export const removeItemFromCart = (id) => ({
  type: CartActionTypes.REMOVE_ITEM_FROM_CART,
  payload: id,
});
