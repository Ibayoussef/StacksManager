import { jsx as _jsx } from "react/jsx-runtime";
export const Flex = ({ direction, justify, gap, className, testid, textAlign, align, children, }) => {
    return (_jsx("div", { className: className, "data-testid": testid, style: {
            display: "flex",
            flexWrap: "wrap",
            flexDirection: direction,
            justifyContent: justify,
            alignItems: align,
            textAlign: textAlign,
            gap: gap,
        }, children: children }));
};
