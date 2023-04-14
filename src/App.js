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
  fetch('https://odd-teal-hummingbird-gear.cyclic.app/books')
    .then(res => res)
    .then(res => alert(res))
    .then(alert('callRaddyApi'))
    //.then(json => alert(JSON.stringify(json)))
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>hello call 2008</h1>
        <button onClick={callTriviaApi}>Call trivia API</button>
        <button onClick={callRaddyApi}>Call trivia API</button>
      </header>
    </div>
  );
}

export default App;

