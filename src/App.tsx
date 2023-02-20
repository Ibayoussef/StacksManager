import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Searchbar from "./components/Searchbar/Searchbar";
import { Flex } from "./components/Flex/Flex";
import Dropdown from "./components/Dropdown/Dropdown";
import Container from "./components/Container/Container";
import Toolbar from "./components/Toolbar/Toolbar";
import { Stack } from "./Enums/Stack";
import { usePaginate } from "./hooks/usePaginate";
import Pagination from "./components/Pagination/Pagination";
import { filterStacks } from "./slices/stacksSlice";
import video from "./assets/no-result.mp4";
import Loading from "./components/Loading/Loading";
import { ToastContainer, toast } from "react-toastify";
function App() {
  const dispatch = useDispatch();
  const [data, setData] = useState<any>([]);
  const notify = () =>
    toast.error("Oops! Something went wrong please refresh the page");
  const [loading, setLoading] = useState(false);
  const { stacks, searchValue, searchResult, status, filters } =
    useSelector((state: any) => state.stacks);
  const { status: componentsStatus } = useSelector(
    (state: any) => state.stacks
  );
  const { author, shared, inactive, created } = filters;
  const [page, setPage] = useState<number>(0);
  window.onerror = () => notify();
  const filteringCondition =
    author ||
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
      notify();
    }
    if (paginatedData.length === 1) {
      setPage(0);
    }
    setData(paginatedData);
  }, [displayedData, status]);
  useEffect(() => {
    dispatch(filterStacks());
  }, [filters]);
  return (
    <>
      {loading && <Loading />}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="light"
      />

      <Navbar />
      <Container>
        <Flex direction="row" justify="space-between" align="center">
          <Searchbar />
          <Toolbar />
        </Flex>
        <Flex direction="column">
          {data &&
            data[page]?.map((stack: Stack) => (
              <Dropdown key={stack.id} stack={stack} />
            ))}
        </Flex>
        {data.length > 0 && (
          <Flex justify="center">
            <Pagination
              page={{ state: page, action: setPage }}
              pagesNumber={usePaginate(displayedData)}
            />
          </Flex>
        )}
        {data.length === 0 && <video autoPlay loop src={video} />}
      </Container>
    </>
  );
}

export default App;
