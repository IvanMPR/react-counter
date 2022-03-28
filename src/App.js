// import logo from "./logo.svg";
import React from "react";
import Title from "./components/Title";
import Counter from "./components/Counter";

function App() {
  let counter = 0;

  const increaseCount = function () {
    const counterDisplay = document.querySelector(".counter");
    counter++;
    counterDisplay.textContent = counter;
    console.log(counter);
  };

  const resetCount = function () {
    const counterDisplay = document.querySelector(".counter");
    counter = 0;
    counterDisplay.textContent = counter;
    console.log(counter);
  };

  const decreaseCount = function () {
    const counterDisplay = document.querySelector(".counter");
    if (!counter > 0) return;
    counter--;
    counterDisplay.textContent = counter;
    console.log(counter);
  };

  return (
    <div>
      <Title />
      <Counter
        count={counter}
        increaseCount={increaseCount}
        decreaseCount={decreaseCount}
        resetCount={resetCount}
      />
    </div>
  );
}

export default App;
