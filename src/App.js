import React from "react";
import "./App.css";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=1&type=multiple")
      .then((res) => res.json())
      .then((data) => setData(data));
      console.log(data);
      console.log("HELLO");
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        
        <p>{!data ? "Loading..." : data}</p>
      </header>
    </div>
  );
}

export default App;
