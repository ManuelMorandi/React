import React from "react";
import './App.css';
import Accordion from "./components/Accordion";

function App() {
  return (
    <div className="App">
      <Accordion title="Primer titulo" content="Primer relleno" />
      <Accordion title="Segundo titulo" content="Segundo relleno" />
    </div>
  );
}

export default App;