import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState({});

  const getData = () => {
    setData("");
    
    
  };

  useEffect(() => {
    getData();
  }, []);

  const decodeHtml = (html) => {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

  return (
    <div>
      <header className="App-header">
        <h1>Get bonked</h1>
        <h1>{decodeHtml(data)}</h1>
        <h1>{JSON.stringify(data)}</h1>


        <br />
        <br />
        <button className="Button" onClick={getData}>
          Ask me another!
        </button>
      </header>
    </div>
  );
}

export default App;

