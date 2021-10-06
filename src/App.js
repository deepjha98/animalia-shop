import React from "react";
import "scss/main.scss";
import { Route, Switch, Redirect } from "react-router";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth, createUserProfileDocument } from "utils/firebase";
////////////////////////////////////////////////////////////
// COMPONENTS
import HomePage from "views/HomePage";
import ShopPage from "views/shop";
import Header from "components/header/header";
import SignInAndSignUp from "views/auth-page";
import CheckOutPage from "views/checkout";

//SELECTORS
import { selectCurrentUser } from "redux/selectors";

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
    console.log(this.props.currentUser);
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
          <Route exact path="/checkout" component={CheckOutPage} />
          <Route
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndSignUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

////////////////////////////////////////////////////////////
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
