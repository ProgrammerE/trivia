import React from 'react';
import './App.css';

function callApi() {
  fetch('https://opentdb.com/api.php?amount=1&type=multiple')
    .then(res => res)
    .then(res => alert(res))
    .then(alert('wtf'))
    //.then(json => alert(JSON.stringify(json)))
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>hello call triviaalertres2003</h1>
        <button onClick={callApi}>Call API</button>
      </header>
    </div>
  );
}

export default App;

