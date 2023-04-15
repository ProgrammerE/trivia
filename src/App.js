import React from 'react';
import './App.css';

function callTriviaApi() {
  fetch('https://opentdb.com/api.php?amount=1&type=multiple')
    .then(res => res)
    .then(res => alert(res.text()))
    .then(alert('callTriviaApi'))
    //.then(json => alert(JSON.stringify(json)))
}

function callRaddyApi() {
  fetch('https://odd-teal-hummingbird-gear.cyclic.app/books', { method: 'GET', mode: 'no-cors' })
    .then(res => res)
    .then(res => alert(res.text()))
    .then(alert('callRaddyApi'))
  console.log('hello')
    //.then(json => alert(JSON.stringify(json)))
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>hello call 0804</h1>
        <button onClick={callTriviaApi}>Call trivia API</button>
        <button onClick={callRaddyApi}>Call raddy API</button>
      </header>

      <p>text</p>

    </div>
  );
}

export default App;

