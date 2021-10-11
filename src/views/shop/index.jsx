import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router";
import { createStructuredSelector } from "reselect";
////////////////////////////////////////////////////////

//COMPONENTS
import CollectionsOverviewContainer from "components/collections-overview/collection-overview-container";
import Collection from "views/collection";
import { fetchCollectionsStartAsync } from "redux/shop/actions";

// HOC
import WithSpinner from "components/with-spinner/with-spinner";
// const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
// const CollectionWithSpinner = WithSpinner(Collection);

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }
  render() {
    const { match, isCollectionFetching, isCollectionLoaded } = this.props;

    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          exact
          path={`${match.path}/:collectionId`}
          component={Collection}
        />
      </div>
    );
  }
}
////////////////////////////////////////////////////////
const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
