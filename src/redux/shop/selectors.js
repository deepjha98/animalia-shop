import { createSelector } from "reselect";

const COLLECTION_ID_MAP = {
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

const selectShopData = (state) => state.shopData;

export const selectShopDataSelectors = createSelector(
  [selectShopData],
  (shopData) => shopData.data
);

export const selectCollectionsForPreview = createSelector(
  [selectShopDataSelectors],
  (data) => (data ? Object.keys(data).map((key) => data[key]) : [])
);

export const selectCollection = (collectionUrlParam) =>
  createSelector([selectShopDataSelectors], (data) =>
    data ? data[collectionUrlParam] : null
  );

export const selectIsCollectionFetching = createSelector(
  [selectShopData],
  (shopData) => shopData.isFetching
);

export const selectIsCollectionsLoaded = createSelector(
  [selectShopData],
  (shopData) => !!shopData.data
);
