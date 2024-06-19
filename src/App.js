import './App.css';
import { useEffect, useState } from "react";
import React from "react";
import Leftbox from "./Leftbox";
import Image from "./Image";
import Rightbox from "./Rightbox";
import imgLogo from "./img/FFI_logo.png";
import Buttons from "./Buttons";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
