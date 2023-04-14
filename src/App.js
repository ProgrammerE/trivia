import React from 'react';
import './App.css';

function callApi() {
  fetch('https://odd-teal-hummingbird-gear.cyclic.app/books')
    .then(res => res)
    .then(text => alert(text))
    //.then(json => alert(JSON.stringify(json)))
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>hello call raddyjustres1955</h1>
        <button onClick={callApi}>Call API</button>
      </header>
    </div>
  );
}

export default App;

