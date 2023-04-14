import React from 'react';
import './App.css';

function callApi() {
  fetch('https://opentdb.com/api.php?amount=1&type=multiple')
    .then(data => res.json())
    .then(json => alert(JSON.stringify(json)))
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={callApi}>Call API</button>
      </header>
    </div>
  );
}

export default App;

