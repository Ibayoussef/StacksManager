import React, { useState } from "react";
import Header from "./Header/Header";
import Content from "./Content/Content";
const Dropdown: React.FC = () => {
  const [collapse, setCollapse] = useState(false);
  return (
    <div className="dropdown">
      <Header collapse={{ state: collapse, action: setCollapse }} />
      <Content collapse={collapse} />
    </div>
  );
};

export default Dropdown;
