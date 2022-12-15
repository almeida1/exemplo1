import "./App.css";
import React from "react";
import Loop1 from "./componentes/Loop1";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="http://www.fateczl.edu.br"
          target="_blank"
          rel="noopener noreferrer"
        >
          Centro Paula Souza
        </a>
        <Loop1 />
      </header>
    </div>
  );
}

export default App;
