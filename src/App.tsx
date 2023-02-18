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
function App() {
  const dispatch = useDispatch();
  const [data, setData] = useState<any>([]);
  const { stacks, searchValue, searchResult, loading, filters } = useSelector(
    (state: any) => state.stacks
  );
  const { author, shared, inactive, created } = filters;
  const [page, setPage] = useState<number>(0);
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
    setData(paginatedData);
    console.log(paginatedData);
  }, [displayedData, loading]);
  useEffect(() => {
    dispatch(filterStacks());
  }, [filters]);
  return (
    <>
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
        <Flex justify="center">
          <Pagination
            page={{ state: page, action: setPage }}
            pagesNumber={usePaginate(displayedData)}
          />
        </Flex>
      </Container>
    </>
  );
}

export default App;
