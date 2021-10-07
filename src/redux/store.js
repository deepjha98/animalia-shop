import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import reducers from "redux/reducer";
import logger from "redux-logger";

// MIDDLEWARES
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, thunk, logger];

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);

//PERSIST STORE
export const persistor = persistStore(store);

// CONFIGURE STORE
export function configureStore() {
  window.STORE = store;
  if (module.hot) {
    module.hot.accept(reducers, () => {
      const nextRootReducer = require(reducers);
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
