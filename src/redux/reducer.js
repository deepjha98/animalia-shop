import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import user from "redux/user/reducer";
import cart from "redux/cart/reducers";
import directory from "redux/directory/reducers";
import shopData from "redux/shop/reducers";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  user,
  cart,
  directory,
  shopData,
});

export default persistReducer(persistConfig, rootReducer);
