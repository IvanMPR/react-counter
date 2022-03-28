import React from "react";
import logo from "../logo.svg";

export default function Title() {
  return (
    <h1>
      <span>
        <img className="react-logo" src={logo} alt=""></img>
      </span>
      React Counter
    </h1>
  );
}
