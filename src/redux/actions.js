/* USER ACTIONS CONSTANTS */
export const UserActionTypes = { SET_CURRENT_USER: "SET_CURRENT_USER" };

// CART ACTION TYPES
export const CartActionTypes = {
  TOGGLE_CART_HIDDEN: "TOGGLE_CART_HIDDEN",
};

// EXPORTING THE ACTIONS OF EACH FOLDER
export * from "./user/actions";
export * from "./cart/actions";
