import React from "react";
import "../style/scoreboard.css";

const ScoreBoard = ({ currentScore, bestScore }) => {
  return (
    <div className="scores">
      <div id="currentScore">Current Score: {currentScore}</div>
      <div id="bestScore">Best Score: {bestScore}</div>
    </div>
  );
};

export default ScoreBoard;
