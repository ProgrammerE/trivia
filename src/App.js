import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';

function callTriviaApi() {
  fetch('https://opentdb.com/api.php?amount=1&type=multiple')
    .then(res => res.arrayBuffer())
    .then(res => alert(res))
    .then(alert('callTriviaApi'))
    //.then(json => alert(JSON.stringify(json)))
}

function callRaddyApi() {
  fetch('https://odd-teal-hummingbird-gear.cyclic.app/books', { method: 'GET', mode: 'no-cors' })
    .then((res) => res.arrayBuffer)
    .then((res) => alert(res))
    .then(alert('callRaddyApi'))
  console.log('hello')
    //.then(json => alert(JSON.stringify(json)))
}

function App() {
  
  //------------------------------------------------------------
  const [question, setQuestion] = useState("");
  
  const fetchQuestion = () => {
    setQuestion("");
    
    axios
      .get("https://opentdb.com/api.php?amount=1&type=multiple")
      .then((response) => {
        let returnQuestion = response.data;
        setQuestion(returnQuestion);
                          }
      )
  
  }
            
  useEffect(() => {
    fetchQuestion();
  }, []);
  
  
  //---------------------------------------------------------------------------
  
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>hello call 0926</h1>
        <button onClick={callTriviaApi}>Call trivia API</button>
        <button onClick={callRaddyApi}>Call raddy API</button>
        <h1>{{JSON.stringify(question)}}</h1>
      </header>

      <p>text</p>

    </div>
  );
}

export default App;

