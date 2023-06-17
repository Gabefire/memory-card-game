import "./style/App.css";
import Card from "./components/cards";
import ScoreBoard from "./components/scoreboard";
import React, { useState } from "react";

const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [currentStreakArray, setCurrentStreakArray] = useState([]);

  const keepScore = (text) => {
    if (currentStreakArray.includes(text)) {
      setCurrentStreakArray([]);
      if (currentScore > bestScore) {
        setBestScore(currentScore);
      }
      setCurrentScore(0);
    } else {
      setCurrentStreakArray((currentStreakArray) => [
        ...currentStreakArray,
        text,
      ]);
      setCurrentScore((currentScore) => currentScore + 1);
    }
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Runescape Memory Card Game</h1>
        <ScoreBoard currentScore={currentScore} bestScore={bestScore} />
      </div>
      <div className="cards">
        <Card keepScore={keepScore} />
      </div>
    </div>
  );
};

export default App;
