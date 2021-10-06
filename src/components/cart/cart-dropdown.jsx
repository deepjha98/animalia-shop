import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router";
// //////////////////////////////////////
import { toggleCartHidden } from "redux/actions";

//SELECTORS
import { selectCartItems } from "redux/selectors";

// COMPONENTS
import CustomButton from "components/custom-button/custom-button.jsx";
import CartItem from "./cart-item";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

// //////////////////////////////////////
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

const mapDispatchToProps = {};

export default withRouter(connect(mapStateToProps)(CartDropdown));
