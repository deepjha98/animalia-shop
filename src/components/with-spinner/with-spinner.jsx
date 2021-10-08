import React from "react";

/////////////////////////////////////////////////////////
//STYLED COMPONENTS
import {
  SpinnerContainer,
  SpinnerOverlay,
} from "components/with-spinner/with-spinner-styled";

const WithSpinner =
  (WrappedComponent) =>
  ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };

/////////////////////////////////////////////////////////
export default WithSpinner;
