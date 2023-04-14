import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=1&type=multiple")
      .then((res) => res.json())
      .then((data) => setMessage(data));
  }, []);

  return (
    <div className="App">
      <h1>now avec trivia link</h1>
      <h1>{message}</h1>
    </div>
  );
}

export default App
