import React from 'react';
import './App.css';

function callTriviaApi() {
  fetch('https://opentdb.com/api.php?amount=1&type=multiple')
    .then(res => res)
    .then(res => alert(res))
    .then(alert('callTriviaApi'))
    //.then(json => alert(JSON.stringify(json)))
}

function callRaddyApi() {
  fetch('https://odd-teal-hummingbird-gear.cyclic.app/')
    .then(res => res)
    .then(res => alert(res))
    .then(alert('callRaddyApi'))
    //.then(json => alert(JSON.stringify(json)))
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>hello call 2018</h1>
        <button onClick={callTriviaApi}>Call trivia API</button>
        <button onClick={callRaddyApi}>Call raddy API</button>
      </header>

      <p>console log</p>

    </div>
  );
}

export default App;

