import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

////////////////////////////////////////////////////////////////////////////
//COMPONENTS
import CollectionPreview from "components/preview-collection/preview-collection";

// SELECTORS
import { selectCollectionsForPreview } from "redux/selectors";

export const CollectionOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...collection }) => (
        <CollectionPreview key={id} {...collection} />
      ))}
    </div>
  );
};

////////////////////////////////////////////////////////////////////////////
const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CollectionOverview);
