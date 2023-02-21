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
      <div className="ocean">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
    </div>
  );
};

export default Navbar;
