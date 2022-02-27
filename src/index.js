import React from "react";
import ReactDOM from "react-dom";
import { Component } from "react";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Thanks for the visit!</h1>
      <h2>CURRENTLY UNDER CONSTRUCTION WHILE IN DEVELOPMENT</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
