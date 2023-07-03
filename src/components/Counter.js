import React from "react";

export default function Counter(props) {
  return (
    <div className="btn-container">
      <span className="counter">{props.counter}</span>
      <button onClick={props.onIncreaseCount}>Increase</button>
      <button onClick={props.onResetCount}>Reset</button>
      <button onClick={props.onDecreaseCount}>Decrease</button>
    </div>
  );
}
