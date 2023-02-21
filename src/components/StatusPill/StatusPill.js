import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from "react";
import { Flex } from "../Flex/Flex";
const StatusPill = ({ isShared }) => {
    const status = useMemo(() => (isShared ? "Shared" : "Inactive"), [isShared]);
    return (_jsxs(Flex, { direction: "row", align: "center", className: `pill ${status.toLowerCase()}`, children: [_jsx("div", { className: "circle" }), _jsx("div", { className: "status", children: status })] }));
};
export default StatusPill;
