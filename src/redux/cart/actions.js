import { CartActionTypes } from "redux/actions";

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

export const addItemToCart = (product) => ({
  type: CartActionTypes.ADD_ITEM_TO_CART,
  payload: product,
});

export const removeItemFromCart = (item) => ({
  type: CartActionTypes.REMOVE_ITEM_FROM_CART,
  payload: item,
});

export const decreaseItem = (item) => ({
  /*  THIS REMOVE ITEM IS FOR DECREASING THE ITEM IN THE CART\
      AND EXECUTE
  */
  type: CartActionTypes.DECREASE_ITEM,
  payload: item,
});
