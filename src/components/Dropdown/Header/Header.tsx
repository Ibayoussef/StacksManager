import React from "react";
import Typography from "../../Typography/Typography";
import StatusPill from "../../StatusPill/StatusPill";
import box from "../../../assets/box.svg";
import arrow from "../../../assets/collapse.svg";

interface ICollapse {
  state: boolean;
  action: React.Dispatch<React.SetStateAction<boolean>>;
}
interface HeaderProps {
  collapse: ICollapse;
}

const Header: React.FC<HeaderProps> = ({ collapse }) => {
  const { state, action } = collapse;
  return (
    <div className="header">
      <div className="header__title">
        <Typography bold fontSize={32}>
          kubeflow_gitflow_stack
        </Typography>
        <StatusPill isShared />
      </div>
      <div className="header__components">
        <img src={box} alt="box" />
        <Typography fontSize={32}>3 Components</Typography>
      </div>
      <img
        className={`header__button--${state ? "collapsed" : "collapse"}`}
        onClick={() => action(!state)}
        src={arrow}
        alt="arrow"
      />
    </div>
  );
};

export default Header;
