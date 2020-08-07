import React from 'react';

const Controls = ({ isRunning, start, stop, reset, addLapTime }) => {
  return (
    <div className="Controls">
      {!isRunning ? <button onClick={start}>Start</button> : null}

      {isRunning ? <button onClick={stop}>Stop</button> : null}

      <button onClick={reset} disabled={isRunning}>
        Reset
      </button>

      <button onClick={addLapTime} disabled={!isRunning}>
        Lap Time
      </button>
    </div>
  );
};

export default Controls;
