import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [question, setQuestion] = useState("");

  const fetchQuestion = () => {
    setQuestion("");
    
    axios
      .get("https://opentdb.com/api.php?amount=1&type=multiple")
      .then((response) => {
        setQuestion(response);
      });
      
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
    <div
      className="App"
      style={{
        backgroundImage: `url("https://source.unsplash.com/random/1600x1200/?abstract")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <header className="App-header">
        <h1>{decodeHtml(response)}</h1>
        <h1>{JSON.stringify(response)}</h1>

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
