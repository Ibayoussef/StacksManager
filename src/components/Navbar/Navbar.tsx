import React from "react";
import reactLogo from "../../assets/logo.png";

const Navbar: React.FC = () => {
  return (
    <div className="nav">
      <img
        onClick={() => window.location.reload()}
        className="logo"
        src={reactLogo}
        alt="logo"
      />
    </div>
  );
};

export default Navbar;
