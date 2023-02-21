import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { Flex } from "../Flex/Flex";
import FilterSidebar from "../FilterSidebar/FilterSidebar";
import { toast } from "react-toastify";
import { FilterIcon, AddIcon } from "./Icons";
const Toolbar = () => {
    const [sidebarActive, setSidebarActive] = useState(false);
    const notify = () => toast.error("Sorry this feature is not yet available, we are working on it");
    return (_jsxs(Flex, { className: "toolbar", direction: "row", align: "center", justify: "flex-end", gap: 27, children: [_jsx(FilterSidebar, { sidebarActive: { state: sidebarActive, action: setSidebarActive } }), _jsx(FilterIcon, { setSidebarActive: setSidebarActive }), _jsx(AddIcon, { handleClick: () => notify() })] }));
};
export default Toolbar;
