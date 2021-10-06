import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
//////////////////////////////////////
import { ReactComponent as ShoppingIcon } from "resources/svg/shopping-bag.svg";

import { selectCartItemsCount } from "redux/selectors";

// ACTIONS
import { toggleCartHidden } from "redux/actions";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  console.log(itemCount);
  return (
    <div onClick={toggleCartHidden} className="cart-icon">
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

//////////////////////////////////////
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
