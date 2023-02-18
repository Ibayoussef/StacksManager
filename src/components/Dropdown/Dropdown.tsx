import React, { useState } from "react";
import Header from "./Header/Header";
import Content from "./Content/Content";
import { Stack } from "../../Enums/Stack";
import { getComponentsNumber } from "../../hooks/getComponentsNumber";
import { extractComponentsIDs } from "../../hooks/extractComponentsIDs";
interface DropdownProps {
  stack: Stack;
}

const Dropdown: React.FC<DropdownProps> = ({ stack }) => {
  const [collapse, setCollapse] = useState(true);
  const { name, is_shared, components, id, created, user, project } = stack;
  const componentsNumber = getComponentsNumber(components);
  const componentsIDs = extractComponentsIDs(components);
  return (
    <div className="dropdown">
      <Header
        collapse={{ state: collapse, action: setCollapse }}
        name={name}
        isShared={is_shared}
        componentsNumber={componentsNumber}
        components={componentsIDs}
      />
      <Content
        collapse={collapse}
        id={id}
        created={created}
        user={user}
        project={project}
      />
    </div>
  );
};

export default Dropdown;
