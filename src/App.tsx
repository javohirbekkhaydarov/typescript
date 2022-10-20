import React from "react";
import Parent from "./components/Parent";
import "./App.css";
import GuesList from "./components/GuesList";
function App() {
  return (
    <div className="App">
      <Parent />
      <GuesList  />
    </div>
  );
}

export default App;
