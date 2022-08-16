import "./App.css";
import {
  Box,
  Flex,
  Heading,
  Input,
  Button,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

function App() {
  const { toggleColorMode } = useColorMode();
  const backgroundMode = useColorModeValue("gray.100", "gray.700");
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center">
      <Flex
        flexDirection="column"
        p={12}
        backgroundColor={backgroundMode}
        borderRadius={6}
      >
        <Heading>Log</Heading>
        <Input type="text" placeholder="Username" variant="filled"></Input>
        <Input type="password" placeholder="*******" variant="filled"></Input>
        <Button colorScheme="teal">Login</Button>
        <Button onClick={toggleColorMode}>Toggle color mode</Button>
      </Flex>
    </Flex>
  );
}

export default App;
