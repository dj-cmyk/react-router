import React from "react";
import './App.css';
import VendingMachine from "./VendingMachine";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
        <NavBar />
        <VendingMachine />
    </div>
  );
}

export default App;
