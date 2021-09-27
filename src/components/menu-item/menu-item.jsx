import React from "react";
import PropTypes from "prop-types";
////////////////////////////////////////////////////////////////

// THIS IS THE MENU ITEM COMPONENT
export const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div className={`menu-item ${size ? size : ""}`}>
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className="background-image"
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle"> SHOP NOW</span>
      </div>
    </div>
  );
};

// >>>>>>>>>>PROP-TYPES<<<<<<<<<<<<<<
MenuItem.protoTypes = {
  title: PropTypes.string.isRequired,
  shopLink: PropTypes.string,
  imageUrl: PropTypes.string,
};
// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
////////////////////////////////////////////////////////////////
