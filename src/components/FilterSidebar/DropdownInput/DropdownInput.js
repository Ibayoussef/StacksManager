import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, storeFilters } from "../../../slices/stacksSlice";
const DropdownInput = () => {
    const dispatch = useDispatch();
    const { users, filters } = useSelector((state) => state.stacks);
    const { author } = filters;
    const [checked, setChecked] = useState(false);
    const dropdownRef = useRef(null);
    useEffect(() => {
        dispatch(getUsers());
        const handleClickOutside = (event) => {
            if (dropdownRef.current &&
                !dropdownRef.current.contains(event.target)) {
                setChecked(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [checked]);
    const handleSelect = (option) => {
        dispatch(storeFilters({ ...filters, author: option }));
        setChecked(false);
    };
    return (_jsx("div", { className: "dropdowninput", "data-testid": "dropdown", ref: dropdownRef, children: _jsxs("div", { className: "dropdown", children: [_jsx("input", { type: "checkbox", id: "dropdown", checked: checked, onChange: (e) => setChecked(e.target.checked) }), _jsxs("label", { className: "dropdown__face", children: [_jsx("div", { className: "dropdown__text", children: author ? author.slice(0, 6) : "Select an author" }), _jsx("div", { className: "dropdown__arrow" })] }), _jsx("ul", { className: "dropdown__items", "data-testid": "listbox", children: users.map((user) => (_jsx("li", { onClick: () => handleSelect(user), children: user.slice(0, 6) }, user))) })] }) }));
};
export default DropdownInput;
