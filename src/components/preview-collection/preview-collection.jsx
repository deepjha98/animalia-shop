import { getByTitle } from "@testing-library/dom";
import React from "react";
import CollectionItem from "components/preview-collection/collection-item/collection-item";
////////////////////////////////////
const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < 4)
          .map(({ id, ...itemProps }) => (
            <CollectionItem key={id} {...itemProps}></CollectionItem>
          ))}
      </div>
    </div>
  );
};

/////////////////////////////////////////////
export default CollectionPreview;
