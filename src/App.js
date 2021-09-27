import React from "react";
import "scss/main.scss";
import { Route, Switch } from "react-router";
////////////////////////////////////////////////////////////
import HomePage from "views/HomePage";
import ShopPage from "views/shop";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

////////////////////////////////////////////////////////////
export default App;
