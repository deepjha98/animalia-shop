import React, { useState, useEffect } from "react";
import "scss/main.scss";
import { Route, Switch } from "react-router";
import { connect } from "react-redux";

import { auth, createUserProfileDocument } from "utils/firebase";
////////////////////////////////////////////////////////////
import HomePage from "views/HomePage";
import ShopPage from "views/shop";
import Header from "components/header/header";
import SignInAndSignUp from "views/auth-page";

// DISPATCHER FUNCTIONS
import { setCurrentUser } from "redux/actions";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

////////////////////////////////////////////////////////////
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(null, mapDispatchToProps)(App);
