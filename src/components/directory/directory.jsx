import React, { useState } from "react";

import menuItems from "constants/menu-items.json";
import MenuItem from "components/menu-item/menu-item";

///////////////////////////////////////////////////////
const Directory = () => {
  const [sections, setSections] = useState(menuItems);

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
export default Directory;
