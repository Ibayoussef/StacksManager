import { useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import Searchbar from "./components/Searchbar/Searchbar";
import { Flex } from "./components/Flex/Flex";
import Dropdown from "./components/Dropdown/Dropdown";
import Container from "./components/Container/Container";
import Toolbar from "./components/Toolbar/Toolbar";
function App() {
  const { stacks } = useSelector((state: any) => state.stacks);
  const { components } = useSelector((state: any) => state.components);
  useEffect(() => {
    console.log(stacks);
    console.log(components);
  }, [stacks]);
  return (
    <>
      <Navbar />
      <Container>
        <Flex direction="row" justify="space-between" align="center">
          <Searchbar />
          <Toolbar />
        </Flex>

        <Dropdown />
      </Container>
    </>
  );
}

export default App;
