import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import MenuItem from "components/menu-item/menu-item";

///////////////////////////////////////////////////////
// Selectors
import { selectDirectorySections } from "redux/selectors";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, title, imageUrl, linkUrl, size }) => (
        <MenuItem
          title={title}
          imageUrl={imageUrl}
          key={id}
          linkUrl={linkUrl}
          size={size}
        />
      ))}
    </div>
  );
};
///////////////////////////////////////////////////////
const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});

export default connect(mapStateToProps)(Directory);
