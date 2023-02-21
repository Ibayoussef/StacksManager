import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Typography from "../../Typography/Typography";
import StatusPill from "../../StatusPill/StatusPill";
import box from "../../../assets/box.svg";
import arrow from "../../../assets/collapse.svg";
import { useDispatch } from "react-redux";
import { filterComponents } from "../../../slices/componentsSlice";
const Header = ({ collapse, name, id, isShared, componentsNumber, components, }) => {
    const dispatch = useDispatch();
    const { state, action } = collapse;
    const handleCollapse = () => {
        dispatch(filterComponents({ components: components, id: id }));
        action(!state);
    };
    return (_jsxs("div", { className: "header", "data-testid": "header", children: [_jsxs("div", { className: "header__title", children: [_jsx(Typography, { textOverflow: true, bold: true, fontSize: 2, children: name }), _jsx(StatusPill, { isShared: isShared })] }), _jsxs("div", { className: "header__components", children: [_jsx("img", { src: box, alt: "box" }), _jsxs(Typography, { fontSize: 2, children: [componentsNumber, " Components"] })] }), _jsx("img", { className: `header__button--${state ? "collapsed" : "collapse"}`, onClick: handleCollapse, src: arrow, alt: "arrow" })] }));
};
export default Header;
