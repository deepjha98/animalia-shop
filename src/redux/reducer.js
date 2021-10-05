import { combineReducers } from "redux";

import user from "redux/user/reducer";
import cart from "redux/cart/reducers";

const reducers = combineReducers({
  user,
  cart,
});

export default reducers;
