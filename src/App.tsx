import { useStore } from "./store";

function App() {
  const count = useStore((state) => state.count);
  const increaseCount = useStore((state) => state.increaseCount);
  const decreaseCount = useStore((state) => state.decreaseCount);
  const resetCount = useStore((state) => state.resetCount);
  const increaseByValue = useStore((state) => state.increaseByValue);

  return (
    <>
      <button onClick={() => increaseCount()}>Increase</button>
      <button onClick={() => decreaseCount()}>Decrease</button>
      <button onClick={() => resetCount()}>Reset</button>
      <button onClick={() => increaseByValue(5)}>Increase By Value</button>
      <p>{count}</p>
    </>
  )
}

export default App
