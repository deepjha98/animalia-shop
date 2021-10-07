import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";

import App from "./App";

import { Provider } from "react-redux";
// Redux store data adding
import { configureStore, persistor } from "redux/store";

ReactDOM.render(
  <Provider store={configureStore()}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
