import React from "react";
import Typography from "../../Typography/Typography";
import StatusPill from "../../StatusPill/StatusPill";
import box from "../../../assets/box.svg";
import arrow from "../../../assets/collapse.svg";
import { useDispatch } from "react-redux";
import { filterComponents } from "../../../slices/componentsSlice";
interface ICollapse {
  state: boolean;
  action: React.Dispatch<React.SetStateAction<boolean>>;
}
interface HeaderProps {
  collapse: ICollapse;
  name: string;
  isShared: boolean;
  componentsNumber: number;
  components: any;
  id: string;
}

const Header: React.FC<HeaderProps> = ({
  collapse,
  name,
  id,
  isShared,
  componentsNumber,
  components,
}) => {
  const dispatch = useDispatch();
  const { state, action } = collapse;

  const handleCollapse = () => {
    dispatch(filterComponents({ components: components, id: id }));

    action(!state);
  };
  return (
    <div className="header" data-testid="header">
      <div className="header__title">
        <Typography textOverflow bold fontSize={2}>
          {name}
        </Typography>
        <StatusPill isShared={isShared} />
      </div>
      <div className="header__components">
        <img src={box} alt="box" />
        <Typography fontSize={2}>{componentsNumber} Components</Typography>
      </div>
      <img
        className={`header__button--${state ? "collapsed" : "collapse"}`}
        onClick={handleCollapse}
        src={arrow}
        alt="arrow"
      />
    </div>
  );
};

export default Header;
