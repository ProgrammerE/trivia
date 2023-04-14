import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://odd-teal-hummingbird-gear.cyclic.app/books")
      .then((res) => res.json())
      .then((data) => setMessage(data));
  }, []);

  return (
    <div className="App">
      <h1>Get This</h1>
      <h1>{message}</h1>
    </div>
  );
}

export default App
