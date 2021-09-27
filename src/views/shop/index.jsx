import React, { useState } from "react";
import SHOP_DATA from "constants/shop-data";
import CollectionPreview from "components/preview-collection/preview-collection";
////////////////////////////////////////////////////////
const ShopPage = ({}) => {
  const [collections, setCollections] = useState(SHOP_DATA);

  return (
    <div className="shop-page">
      {collections.map(({ id, ...collection }) => (
        <CollectionPreview key={id} {...collection} />
      ))}
    </div>
  );
};
////////////////////////////////////////////////////////
export default ShopPage;
