import { Button, Group, Text } from "@mantine/core";
import { useCounter } from "@mantine/hooks";

const UseCounter = () => {
  const [count, handlers] = useCounter(99, { min: 0, max: 100 });
  const {increment, decrement, set, reset} = handlers
  return (
    <>
      <Text>Count: {count}</Text>
      <Group position="center">
        <Button onClick={increment}>Increment</Button>
        <Button onClick={decrement}>Decrement</Button>
        <Button onClick={reset}>Reset</Button>
        <Button onClick={() => set(5)}>Set 5</Button>
      </Group>
    </>
  );
};

export default UseCounter;
