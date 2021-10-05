import createSagaMiddleware from "redux-saga";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducers from "redux/reducer";
import logger from "redux-logger";

// MIDDLEWARES
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, thunk, logger];

// CONFIGURE STORE
export function configureStore(initialState) {
  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  window.STORE = store;
  if (module.hot) {
    module.hot.accept(reducers, () => {
      const nextRootReducer = require(reducers);
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
