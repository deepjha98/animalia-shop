import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
//////////////////////////////////////////////////////////
// SELECTORS
import { selectCartItems, selectCartTotal } from "redux/selectors";

// COMPONENTS
import CheckoutItem from "components/cart/checkout-item";
import StripeButton from "components/stripe-button/stripe-button";

export const CheckOutPage = ({ cartItems, cartTotal }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">
        <span>TOTAL : Rs.{cartTotal}</span>
      </div>
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 -exp 01/20 - CVV:123
      </div>
      <StripeButton price={cartTotal}></StripeButton>
    </div>
  );
};

//////////////////////////////////////////////////////////
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CheckOutPage);
