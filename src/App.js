import React from "react";
import "scss/main.scss";
import { Route, Switch } from "react-router";
////////////////////////////////////////////////////////////
import HomePage from "views/HomePage";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

////////////////////////////////////////////////////////////
export default App;
