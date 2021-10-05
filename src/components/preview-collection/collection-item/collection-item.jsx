import React from "react";
import { connect } from "react-redux";
/////////////////////////////////////////
// ACTIONS
import { addItemToCart } from "redux/actions";

// COMPONENTS
import CustomButton from "components/custom-button/custom-button";

const CollectionItem = ({ item, addItem }) => {
  const { id, name, price, imageUrl } = item;

  return (
    <div className="collection-item">
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        ADD TO CART
      </CustomButton>
    </div>
  );
};
/////////////////////////////////////////
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItemToCart(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);
