import React from "react";

const GameControls = ({ onStart, onReset }) => {
  return (
    <div>
      <button onClick={onStart}>Start</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default GameControls;
