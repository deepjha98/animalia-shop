import React from "react";
import { connect } from "react-redux";
///////////////////////////////////////////////////////////////////////////////////
// ACTIONS
import { removeItemFromCart, addItemToCart, decreaseItem } from "redux/actions";

const CheckoutItem = ({ cartItem, removeItem, decreaseItem, addItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => decreaseItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => removeItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

///////////////////////////////////////////////////////////////////////////////////
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  removeItem: (item) => dispatch(removeItemFromCart(item)),
  addItem: (item) => dispatch(addItemToCart(item)),
  decreaseItem: (item) => dispatch(decreaseItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutItem);
