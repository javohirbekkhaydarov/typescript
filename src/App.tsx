import React from "react";
import Parent from "./components/Parent";
import "./App.css";
import GuesList from "./components/GuesList";
import UseSearch from "./components/UseSearch";
import EventComponent from "./components/EventComponent";
function App() {
  return (
    <div className="App">
      <UseSearch />
      <EventComponent />
    </div>
  );
}

export default App;
