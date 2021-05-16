import React from "react";

const Result=({score,playAgain})=>
(
  <div className="score-board">
  <div className="Score"> You scored {score}/ 5 correct ansers!</div>

  <button className="playBtn" onClick={playAgain}>
    Play again!
    </button>
  </div>
);

export default Result;