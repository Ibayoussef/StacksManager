import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import search from "../../assets/search.svg";
import { useDispatch } from "react-redux";
import { searchStack, filterStacks } from "../../slices/stacksSlice";
/**
Searchbar component
@returns {JSX.Element} Searchbar component
*/
const Searchbar = () => {
    const dispatch = useDispatch();
    /**
      Handles search input change
      @param {ChangeEvent<HTMLInputElement>} e - Input change event object
      @returns {void}
      */
    const handleSearch = (e) => {
        const { value } = e.target;
        dispatch(searchStack(value));
        dispatch(filterStacks());
    };
    return (_jsxs("div", { className: "input-container", children: [_jsx("img", { className: "input-container__searchicon", src: search, alt: "search" }), _jsx("input", { type: "text", onChange: handleSearch, className: "input-container__searchinput", placeholder: "Search by Name or ID..." })] }));
};
export default Searchbar;
