import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { filterStacks } from "./slices/stacksSlice";
import { usePaginate } from "./hooks/usePaginate";
import Navbar from "./components/Navbar/Navbar";
import Searchbar from "./components/Searchbar/Searchbar";
import Dropdown from "./components/Dropdown/Dropdown";
import Container from "./components/Container/Container";
import Toolbar from "./components/Toolbar/Toolbar";
import Pagination from "./components/Pagination/Pagination";
import Loading from "./components/Loading/Loading";
import video from "./assets/no-result.mp4";
import { Flex } from "./components/Flex/Flex";
function App() {
    const dispatch = useDispatch();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(0);
    const { stacks, searchValue, searchResult, status, filters } = useSelector((state) => state.stacks);
    const { author, shared, inactive, created } = filters;
    const { status: componentsStatus } = useSelector((state) => state.stacks);
    const filteringCondition = author ||
        shared ||
        inactive ||
        searchValue ||
        created.startDate ||
        created.endDate;
    const displayedData = filteringCondition ? searchResult : stacks;
    const paginatedData = usePaginate(displayedData);
    useEffect(() => {
        setLoading(true);
        setTimeout(() => setLoading(false), 1000);
    }, []);
    useEffect(() => {
        if (status === "failed" || componentsStatus === "failed") {
            toast.error("Oops! Something went wrong please refresh the page");
        }
        if (paginatedData.length === 1) {
            setPage(0);
        }
        setData(paginatedData);
    }, [displayedData, status]);
    useEffect(() => {
        dispatch(filterStacks());
    }, [filters]);
    return (_jsxs(_Fragment, { children: [loading && _jsx(Loading, {}), _jsx(ToastContainer, { position: "top-right", autoClose: 5000, hideProgressBar: false, newestOnTop: false, closeOnClick: true, rtl: false, pauseOnFocusLoss: true, draggable: false, pauseOnHover: true, theme: "light" }), _jsx(Navbar, {}), _jsxs(Container, { children: [_jsxs(Flex, { direction: "row", className: "toolbar-container", justify: "space-between", align: "center", children: [_jsx(Searchbar, {}), _jsx(Toolbar, {})] }), _jsx(Flex, { direction: "column", children: data &&
                            data[page]?.map((stack) => (_jsx(Dropdown, { stack: stack }, stack.id))) }), data.length > 0 && (_jsx(Flex, { justify: "center", children: _jsx(Pagination, { page: { state: page, action: setPage }, pagesNumber: usePaginate(displayedData) }) })), data.length === 0 && _jsx("video", { autoPlay: true, loop: true, src: video })] })] }));
}
export default App;
