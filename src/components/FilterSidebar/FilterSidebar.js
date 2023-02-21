import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Flex } from "../Flex/Flex";
import Typography from "../Typography/Typography";
import close from "../../assets/close.svg";
import DropdownInput from "./DropdownInput/DropdownInput";
import Checkbox from "./Checkbox/Checkbox";
import { DateRange } from "react-date-range";
import { useDispatch, useSelector } from "react-redux";
import { storeFilters } from "../../slices/stacksSlice";
import Button from "../Button/Button";
const FilterSidebar = ({ sidebarActive }) => {
    const { state, action } = sidebarActive;
    const { filters } = useSelector((state) => state.stacks);
    const dispatch = useDispatch();
    const range = filters.created.endDate
        ? [
            {
                startDate: new Date(filters.created.startDate),
                endDate: new Date(filters.created.endDate),
                key: "selection",
            },
        ]
        : [
            {
                startDate: new Date(),
                endDate: new Date(),
                key: "selection",
            },
        ];
    return (_jsxs("div", { "data-testid": "filter-sidebar", className: `filtersidebar ${state ? " active" : ""}`, children: [_jsxs(Flex, { direction: "row", justify: "space-between", className: "filtersidebar__header", align: "center", children: [_jsx(Typography, { bold: true, fontSize: 2, children: "Filters" }), _jsx("img", { src: close, alt: "close", onClick: () => action(false) })] }), _jsxs(Flex, { direction: "column", align: "flex-start", justify: "center", gap: 18, className: "filtersidebar__filter-list", children: [_jsx(Typography, { fontSize: 1.5, children: "Author" }), _jsx(DropdownInput, {}), _jsxs(Flex, { direction: "row", align: "center", gap: 19, children: [_jsx(Typography, { fontSize: 1.5, children: "Shared" }), _jsx(Checkbox, { isShared: true })] }), _jsxs(Flex, { direction: "row", align: "center", gap: 19, children: [_jsx(Typography, { fontSize: 1.5, children: "Inactive" }), _jsx(Checkbox, {})] }), _jsx(Typography, { fontSize: 1.5, children: "Created at" }), _jsx(DateRange, { editableDateInputs: true, onChange: (item) => {
                            dispatch(storeFilters({
                                ...filters,
                                created: {
                                    startDate: new Date(item.selection.startDate).getTime(),
                                    endDate: new Date(item.selection.endDate).getTime(),
                                },
                            }));
                        }, moveRangeOnFirstSelection: false, ranges: range }), _jsx(Button, { onClick: () => dispatch(storeFilters({
                            author: "",
                            shared: false,
                            inactive: false,
                            created: { startDate: "", endDate: "" },
                        })), fontSize: 1, children: "Clear Filters" })] })] }));
};
export default FilterSidebar;
