import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Typography from "../Typography/Typography";
import { Flex } from "../Flex/Flex";
import { sliceID } from "../../hooks/useSliceID";
import { useFormatDate } from "../../hooks/useFormatDate";
import { toast } from "react-toastify";
import Button from "../Button/Button";
const StackInfo = ({ id, user, created, project, }) => {
    const notify = () => toast.error("Sorry this feature is not yet available, we are working on it");
    return (_jsxs(Flex, { direction: "column", testid: "stack-info", className: "stackinfo", gap: 24, children: [_jsxs(Flex, { direction: "column", gap: 10, children: [_jsx(Typography, { bold: true, fontSize: 16, children: "UUID" }), _jsx(Typography, { fontSize: 16, children: id })] }), _jsxs(Flex, { direction: "row", justify: "space-between", className: "rowtocolumn", align: "center", children: [_jsxs(Flex, { direction: "column", gap: 10, children: [_jsx(Typography, { bold: true, fontSize: 16, children: "Created at" }), _jsx(Typography, { fontSize: 16, children: useFormatDate(created) })] }), _jsxs(Flex, { direction: "column", gap: 10, children: [_jsx(Typography, { bold: true, fontSize: 16, children: "Author" }), _jsx(Typography, { fontSize: 16, children: sliceID(user) })] })] }), _jsxs(Flex, { direction: "column", gap: 10, children: [_jsx(Typography, { bold: true, fontSize: 16, children: "Project" }), _jsx(Typography, { fontSize: 16, children: sliceID(project) })] }), _jsx(Flex, { justify: "flex-end", className: "button-container", children: _jsx(Button, { onClick: () => notify(), fontSize: 1, children: "Delete" }) })] }));
};
export default StackInfo;
