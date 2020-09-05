import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [selected, setSelected] = useState("");

  const fetchQuestion = () => {
    setQuestion("");
    setOptions([]);
    setCorrectAnswer("");
    setSelected("");

    axios
      .get("https://opentdb.com/api.php?amount=1&type=multiple")
      .then((response) => {
        let returnQuestion = response.data.results[0];
        setQuestion(returnQuestion.question);
        setOptions([
          ...returnQuestion.incorrect_answers,
          returnQuestion.correct_answer,
        ]);
        setCorrectAnswer(returnQuestion.correct_answer);
      });
  };

  useEffect(() => {
    fetchQuestion();
  }, []);

  const handleSelection = (event) => {
    setSelected(event.target.value);
  };

  const decodeHtml = (html) => {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
  };

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url("https://source.unsplash.com/random/1600x1200/?abstract")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <header className="App-header">
        <h1>{decodeHtml(question)}</h1>

        <div className="OptionsArea">
          {options.map((item) => {
            return (
              <div>
                <input
                  type="radio"
                  key={item}
                  value={item}
                  name="options"
                  onChange={handleSelection}
                />
                {decodeHtml(item)}
                <br />
              </div>
            );
          })}
        </div>

        {correctAnswer && selected && correctAnswer === selected && (
          <div className="CorrectAnswer">
            <h1>Bingo!</h1>
          </div>
        )}
        {correctAnswer && selected && correctAnswer !== selected && (
          <div className="IncorrectAnswer">
            <h1>Not quite right!</h1>
          </div>
        )}
        <br />
        <br />
        <button className="Button" onClick={fetchQuestion}>
          Ask me another!
        </button>
      </header>
    </div>
  );
}

export default App;
