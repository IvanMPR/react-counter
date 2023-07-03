// import logo from "./logo.svg";
import React from "react";
import { useState } from "react";
import Title from "./components/Title";
import Counter from "./components/Counter";

function App() {
  const [counter, setCounter] = useState(0);

  const increaseCount = function () {
    setCounter(() => counter + 1);
  };
  const decreaseCount = function () {
    setCounter(() => (counter > 0 ? counter - 1 : 0));
  };

  const resetCount = function () {
    setCounter(0);
  };

  return (
    <div>
      <Title />
      <Counter
        counter={counter}
        onIncreaseCount={increaseCount}
        onDecreaseCount={decreaseCount}
        onResetCount={resetCount}
      />
    </div>
  );
}

export default App;
