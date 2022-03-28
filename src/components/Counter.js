import React from "react";

export default function Counter(props) {
  return (
    <div className="btn-container">
      <span className="counter">0</span>
      <button className="inc" onClick={props.increaseCount}>
        Increase
      </button>
      <button className="reset" onClick={props.resetCount}>
        Reset
      </button>
      <button className="dec" onClick={props.decreaseCount}>
        Decrease
      </button>
    </div>
  );
}
