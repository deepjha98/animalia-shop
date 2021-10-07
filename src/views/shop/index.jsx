import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router";
////////////////////////////////////////////////////////
// SELECTORS
//COMPONETS
import CollectionOverview from "components/collections-overview/collection-overview";
import Collection from "views/collection";

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionOverview} />
      <Route
        exact
        path={`${match.path}/:collectionId`}
        component={Collection}
      />
    </div>
  );
};

////////////////////////////////////////////////////////
const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps)(ShopPage);
