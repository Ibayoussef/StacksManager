import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import Header from "./Header/Header";
import Content from "./Content/Content";
import { getComponentsNumber } from "../../hooks/getComponentsNumber";
import { extractComponentsIDs } from "../../hooks/extractComponentsIDs";
const Dropdown = ({ stack }) => {
    const [collapse, setCollapse] = useState(true);
    const { name, is_shared, components, id, created, user, project } = stack;
    const componentsNumber = getComponentsNumber(components);
    const componentsIDs = extractComponentsIDs(components);
    return (_jsxs("div", { className: "dropdown", children: [_jsx(Header, { collapse: { state: collapse, action: setCollapse }, name: name, id: id, isShared: is_shared, componentsNumber: componentsNumber, components: componentsIDs }), _jsx(Content, { collapse: collapse, id: id, created: created, user: user, project: project })] }));
};
export default Dropdown;
