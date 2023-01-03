import { Center } from "@mantine/core";
import UseCounter from "./components/UseCounter";

function App() {

  return (
    <div>
      <Center sx={{ width: "100vw", height: "100vh" }}>
        <UseCounter/>
      </Center>
    </div>
  );
}

export default App;
