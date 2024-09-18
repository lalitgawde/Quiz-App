import React, { useState } from "react";
import { useEffect } from "react";

function QuizTimer({ timerOut, onTimeOut, mode }) {
  const [remainingTime, setRemainingTime] = useState(timerOut);

  useEffect(() => {
    console.log("timeout");
    const timer = setTimeout(() => {
      onTimeOut();
      setRemainingTime(timerOut);
    }, timerOut);

    return () => {
      clearTimeout(timer);
    };
  }, [timerOut, onTimeOut]);

  useEffect(() => {
    console.log("interval");
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <progress
      id="question-time"
      max={timerOut}
      value={remainingTime}
      className={mode}
    />
  );
}

export default QuizTimer;
