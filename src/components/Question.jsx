import React from "react";
import Answer from "./Answer";
import QuizTimer from "./QuizTimer";

function Question({
  questionText,
  handleSelectAnswer,
  handleSkipAnswer,
  answers,
  answeredState,
  selectedAnswer,
}) {
  let timer = 10000;
  if (answeredState === "answered") {
    timer = 1000;
  }
  if (answeredState === "Correct" || answeredState === "Wrong") {
    timer = 2000;
  }
  return (
    <div id="question">
      <QuizTimer
        key={timer}
        timerOut={timer}
        onTimeOut={answeredState === "" ? handleSkipAnswer : null}
        mode={answeredState}
      />
      <h2>{questionText}</h2>
      <Answer
        answers={answers}
        answeredState={answeredState}
        onSelect={handleSelectAnswer}
        selectedAnswer={selectedAnswer}
      />
    </div>
  );
}

export default Question;
