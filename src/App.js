import './App.css';
import { useEffect, useState } from "react";
import React from "react";
import Leftbox from "./Leftbox";
import Image from "./Image";
import Rightbox from "./Rightbox";
import imgLogo from "./img/FFI_logo.png";
import Buttons from "./Buttons";

function App() {
  function App(props) {
    const [characters, setCharacters] = useState(false);
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      fetch("https://www.moogleapi.com/api/v1/characters")
        .then((response) => response.json())
        .then((result) => setCharacters(result));
    }, []);
  };
}

export default App;
