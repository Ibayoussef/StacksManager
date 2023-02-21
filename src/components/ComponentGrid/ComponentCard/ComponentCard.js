import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Flex } from "../../Flex/Flex";
import Typography from "../../Typography/Typography";
import StatusPill from "../../StatusPill/StatusPill";
import copy from "../../../assets/copy.svg";
import { sliceID } from "../../../hooks/useSliceID";
import { useFormatDate } from "../../../hooks/useFormatDate";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
const ComponentCard = ({ component }) => {
    const [copied, setCopied] = useState(false);
    const { type, name, flavor, created, user, configuration, is_shared } = component;
    useEffect(() => {
        if (copied) {
            toast.success(() => "Configuration Copied");
            setCopied(false);
        }
    }, [copied]);
    return (_jsxs(Flex, { direction: "column", className: "card", gap: 10, children: [_jsxs(Flex, { direction: "row", justify: "space-between", align: "center", children: [_jsx(Typography, { bold: true, textOverflow: true, card: true, fontSize: 21, children: name }), _jsx(StatusPill, { isShared: is_shared })] }), _jsxs(Flex, { direction: "row", justify: "space-between", className: "rowtocolumn", align: "center", children: [_jsxs(Flex, { direction: "column", gap: 0, children: [_jsx(Typography, { bold: true, fontSize: 16, children: "type" }), _jsx(Typography, { textOverflow: true, fontSize: 16, children: type })] }), _jsxs(Flex, { direction: "column", gap: 0, className: "adjustalign", textAlign: "right", children: [_jsx(Typography, { bold: true, fontSize: 16, children: "Created at" }), _jsx(Typography, { fontSize: 16, children: useFormatDate(created) })] })] }), _jsxs(Flex, { direction: "row", justify: "space-between", align: "center", children: [_jsxs(Flex, { direction: "column", gap: 0, children: [_jsx(Typography, { bold: true, fontSize: 16, children: "flavor" }), _jsx(Typography, { fontSize: 16, children: flavor })] }), _jsxs(Flex, { direction: "column", gap: 0, textAlign: "right", children: [_jsx(Typography, { bold: true, fontSize: 16, children: "author" }), _jsx(Typography, { fontSize: 16, children: sliceID(user) })] })] }), _jsxs(Flex, { direction: "row", justify: "flex-start", gap: 11, align: "center", children: [_jsx(Typography, { fontSize: 18, children: JSON.stringify(configuration) !== "{}"
                            ? "Copy Configuration"
                            : "Configuration not available" }), JSON.stringify(configuration) !== "{}" && (_jsx(CopyToClipboard, { text: JSON.stringify(configuration), onCopy: () => {
                            setCopied(true);
                        }, children: _jsx("img", { src: copy, alt: "copy" }) }))] })] }));
};
export default ComponentCard;
