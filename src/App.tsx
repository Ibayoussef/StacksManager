import { useSelector } from "react-redux";
import Navbar from "./components/Navbar/Navbar";
import Searchbar from "./components/Searchbar/Searchbar";
import { Flex } from "./components/Flex/Flex";
import Dropdown from "./components/Dropdown/Dropdown";
import Container from "./components/Container/Container";
import Toolbar from "./components/Toolbar/Toolbar";
import { Stack } from "./Enums/Stack";
function App() {
  const { stacks } = useSelector((state: any) => state.stacks);

  return (
    <>
      <Navbar />
      <Container>
        <Flex direction="row" justify="space-between" align="center">
          <Searchbar />
          <Toolbar />
        </Flex>
        <Flex direction="column" gap={24}>
          {stacks.map((stack: Stack) => (
            <Dropdown key={stack.id} stack={stack} />
          ))}
        </Flex>
      </Container>
    </>
  );
}

export default App;
