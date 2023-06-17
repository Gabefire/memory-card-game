import React from "react";

const ScoreBoard = ({ currentScore, bestScore }) => {
  return (
    <>
      <div id="currentScore">Current Score: {currentScore}</div>
      <div id="bestScore">Best Score: {bestScore}</div>
    </>
  );
};

export default ScoreBoard;
