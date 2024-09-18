import React, { useState } from "react";
import QuizTrophy from "../assets/quiz-complete.png";
import Summary from "./Summary";

function QuizCompleted({ userAnswered, onRestart }) {
  const [showSummary, setShowSummary] = useState(false);
  return (
    <div id="summary">
      <img src={QuizTrophy} alt="Trophy Achieve" />
      <h2>Quiz Completed</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          marginTop: "15px",
        }}
      >
        <button
          onClick={() => {
            setShowSummary((showSummary) => !showSummary);
          }}
        >
          {showSummary ? "Cancel" : "Review Quiz"}
        </button>
        <button
          onClick={() => {
            onRestart();
          }}
        >
          Restart Quiz
        </button>
      </div>
      {showSummary && <Summary userAnswers={userAnswered} />}
    </div>
  );
}

export default QuizCompleted;
