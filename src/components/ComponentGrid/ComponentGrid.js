import { jsx as _jsx } from "react/jsx-runtime";
import { Flex } from "../Flex/Flex";
import ComponentCard from "./ComponentCard/ComponentCard";
import { useSelector } from "react-redux";
const Grid = ({ id }) => {
    const { filteredComponents } = useSelector((state) => state.components);
    return (_jsx(Flex, { direction: "row", gap: 26, testid: "component-grid", justify: "center", className: "grid", align: "flex-start", children: filteredComponents[id] &&
            filteredComponents[id].map((component) => (_jsx(ComponentCard, { component: component }, component.id))) }));
};
export default Grid;
