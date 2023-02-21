import { jsx as _jsx } from "react/jsx-runtime";
/**
 * There is two variations of typography in the web app
 * bold and regular
 * @param {boolean} {bold} adds boldness to the typography
 * @param {number} {fontSize} specifies the font size
 * @param {ReactNode} {children} specifies the text that will be rendered
 * @return {JSX.Element} Typography
 */
const Typography = ({ children, bold, fontSize, textOverflow, card, }) => {
    return (_jsx("div", { style: {
            fontWeight: bold ? 700 : 400,
            fontSize: `${fontSize && fontSize > 2 ? fontSize + "px" : fontSize + "rem"}`,
            color: "#252525",
            textOverflow: textOverflow ? "ellipsis" : "",
            overflow: textOverflow ? "hidden" : "",
            width: card ? "150px" : textOverflow ? "fit-content" : "",
        }, children: children }));
};
export default Typography;
