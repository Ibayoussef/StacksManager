import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const Pagination = ({ page, pagesNumber }) => {
    const { state, action } = page;
    const disablePrev = state === 0;
    const disableNext = state + 1 === pagesNumber.length;
    const handleNext = () => {
        if (disableNext) {
            return;
        }
        else {
            action(state + 1);
        }
    };
    const handlePrev = () => {
        if (disablePrev) {
            return;
        }
        else {
            action(state - 1);
        }
    };
    return (_jsxs("div", { className: "pagination", children: [_jsx("p", { className: `prev ${disablePrev ? "disabled" : null}`, onClick: handlePrev, children: "Prev" }), _jsx("div", { className: "numbers", children: pagesNumber.map((pageNumber, index) => (_jsx("p", { onClick: () => action(index), className: `number ${state === index ? "active" : ""}`, children: index + 1 }, pageNumber[0].id))) }), _jsx("p", { className: `next ${disableNext ? "disabled" : null}`, onClick: handleNext, children: "Next" })] }));
};
export default Pagination;
