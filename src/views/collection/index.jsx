import React from "react";
import { connect } from "react-redux";
//////////////////////////////////////////////////////
// COMPONENTS
import CollectionItem from "components/preview-collection/collection-item/collection-item";

// SELECTORS
import { selectCollection } from "redux/selectors";

export const Collection = ({ match, collection }) => {
  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

//////////////////////////////////////////////////////
const mapStateToProps = (state, ownProps) => {
  return {
    collection: selectCollection(ownProps.match.params.collectionId)(state),
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Collection);
