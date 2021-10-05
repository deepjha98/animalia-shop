import React from "react";
import { connect } from "react-redux";
//////////////////////////////////////
import { ReactComponent as ShoppingIcon } from "resources/svg/shopping-bag.svg";

// ACTIONS
import { toggleCartHidden } from "redux/actions";

const CartIcon = ({ toggleCartHidden }) => {
  return (
    <div onClick={toggleCartHidden} className="cart-icon">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

//////////////////////////////////////
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
