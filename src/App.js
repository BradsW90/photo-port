import React from "react";
import About from "./components/About";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav></Nav>
        <main>
          <About></About>
        </main>
      </header>
    </div>
  );
}

export default App;
