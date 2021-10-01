import React, { useState, useEffect } from "react";
import "scss/main.scss";
import { Route, Switch } from "react-router";

import { auth } from "utils/firebase";
////////////////////////////////////////////////////////////
import HomePage from "views/HomePage";
import ShopPage from "views/shop";
import Header from "components/header/header";
import SignInAndSignUp from "views/auth-page";

function App() {
  // Fireabse user
  const [currentUser, setCurrentUser] = useState(null);
  let unsubscribeFromAuth = null;
  useEffect(() => {
    unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
    return () => {
      unsubscribeFromAuth();
    };
  });

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInAndSignUp} />
      </Switch>
    </div>
  );
}

////////////////////////////////////////////////////////////
export default App;
