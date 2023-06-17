import React, { useState } from "react";

const ScoreBoard = ({ currentScore, bestScore }) => {
  return (
    <>
      <div id="currentScore">{currentScore}</div>
      <div id="bestScore">{bestScore}</div>
    </>
  );
};

export default ScoreBoard;
