import React from "react";
import reactLogo from "../../assets/logo.png";

const Navbar: React.FC = () => {
  return (
    <div className="nav">
      <img className="logo" src={reactLogo} alt="logo" />
    </div>
  );
};

export default Navbar;