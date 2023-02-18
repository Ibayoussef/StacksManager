import { useSelector } from "react-redux";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Searchbar from "./components/Searchbar/Searchbar";
import { Flex } from "./components/Flex/Flex";
import Dropdown from "./components/Dropdown/Dropdown";
import Container from "./components/Container/Container";
import Toolbar from "./components/Toolbar/Toolbar";
import { Stack } from "./Enums/Stack";
import { usePaginate } from "./hooks/usePaginate";
import Pagination from "./components/Pagination/Pagination";
function App() {
  const { stacks, searchValue, searchResult } = useSelector(
    (state: any) => state.stacks
  );
  const [page, setPage] = useState<number>(0);
  const displayedData = searchValue ? searchResult : stacks;
  return (
    <>
      <Navbar />
      <Container>
        <Flex direction="row" justify="space-between" align="center">
          <Searchbar />
          <Toolbar />
        </Flex>
        <Flex direction="column" gap={24}>
          {usePaginate(displayedData)[page].map((stack: Stack) => (
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
