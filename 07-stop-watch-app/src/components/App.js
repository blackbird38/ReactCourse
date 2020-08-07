import React, { useState, useEffect } from 'react';
import Timer from './Timer';
import Controls from './Controls';
import LapTimeList from './LapTimeList';

import './App.css';

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);
  const [timeList, setTimeList] = useState([]);

  let timerRef = null;

  useEffect(() => {
    console.log(isRunning, timerRef);
    if (isRunning) {
      timerRef = setInterval(() => {
        setTime((time) => time + 1000);
      }, 100);
    } else {
      clearInterval(timerRef);
    }
    return () => clearInterval(timerRef);
  }, [isRunning]);

  useEffect(() => {
    //console.log('time', time);
  }, [time]);

  const start = () => {
    setIsRunning(true);
  };

  const stop = () => {
    setIsRunning(false);
  };

  const reset = () => {
    setIsRunning(false);
    setTime(0);
    setTimeList([]);
  };
  const addLapTime = () => {
    setTimeList([...timeList, time]);
  };

  return (
    <div className="App">
      <h1>Stopwatch App</h1>

      <Timer time={time} />

      <Controls
        isRunning={isRunning}
        start={() => start()}
        stop={() => stop()}
        reset={() => reset()}
        addLapTime={() => addLapTime()}
      />

      <LapTimeList timeList={timeList} />
    </div>
  );
}

export default App;
