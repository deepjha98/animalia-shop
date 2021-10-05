import { combineReducers } from "redux";

import user from "redux/user/reducer";

const reducers = combineReducers({
  user,
});

export default reducers;
