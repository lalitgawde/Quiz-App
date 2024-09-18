import React, { useState } from "react";
import { useCallback } from "react";
import questions from "../questions";
import Question from "./Question";
import QuizCompleted from "./QuizCompleted";

function Quiz(props) {
  const [userAnswered, setUserAnswered] = useState([]);
  const [answeredState, setAnsweredState] = useState("");
  const activeQuestion =
    answeredState === "" ? userAnswered.length : userAnswered.length - 1;

  const onRestart = () => {
    setAnsweredState("");
    setUserAnswered([]);
  };

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(answer) {
      if (answer !== null) {
        setAnsweredState("answered");
        setTimeout(() => {
          if (answer === questions[activeQuestion].answers[0]) {
            setAnsweredState("Correct");
          } else {
            setAnsweredState("Wrong");
          }

          setTimeout(() => {
            setAnsweredState("");
          }, 2000);
        }, 1000);
      } else {
        setAnsweredState("");
      }
      setUserAnswered((prevAnswers) => {
        return [...prevAnswers, answer];
      });
    },
    [activeQuestion]
  );

  const handleSkipAnswer = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  if (activeQuestion === questions.length) {
    return <QuizCompleted userAnswered={userAnswered} onRestart={onRestart} />;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestion}
        answers={questions[activeQuestion].answers}
        answeredState={answeredState}
        questionText={questions[activeQuestion].text}
        selectedAnswer={userAnswered[activeQuestion]}
        handleSelectAnswer={handleSelectAnswer}
        handleSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}

export default Quiz;
