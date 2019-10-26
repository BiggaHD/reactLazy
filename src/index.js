import React from "react";
import ReactDOM from "react-dom";
import LazySuspense from "./LazySuspense/LazySuspense";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Lazy Suspense</h1>
      <LazySuspense />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
