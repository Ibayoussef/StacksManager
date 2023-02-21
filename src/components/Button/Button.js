import { jsx as _jsx } from "react/jsx-runtime";
const Button = ({ fontSize, onClick, children }) => {
    return (_jsx("div", { style: {
            fontSize: `${fontSize}rem`,
        }, onClick: () => onClick(), className: "button", children: children }));
};
export default Button;
