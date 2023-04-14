import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [question, setQuestion] = useState("");

  const fetchQuestion = () => {
    setQuestion("");
    
    
  };

  useEffect(() => {
    fetchQuestion();
  }, []);

  const decodeHtml = (html) => {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{decodeHtml(question)}</h1>
        <h1>{JSON.stringify(question)}</h1>

        <br />
        <br />
        <button className="Button" onClick={fetchQuestion}>
          Ask me another!
        </button>
      </header>
    </div>
  );
}

export default App;

