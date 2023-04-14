import React, { useState, useEffect } from "react";

import "./App.css";

function getData() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=1&type=multiple")
    .then(res => await res.text())
    .then(data => setData(data))
    console.log(data);
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

