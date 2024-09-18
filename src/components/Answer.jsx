import React from "react";

function Answer({ answeredState, onSelect, answers, selectedAnswer }) {
  const sortedArray = [...answers];
  sortedArray.sort((a, b) => {
    return a.length > b.length ? -1 : 1;
  });

  return (
    <ul id="answers">
      {sortedArray.map((answer, index) => {
        let cssClass = "";
        const isSelected = selectedAnswer === answer;
        if (answeredState === "answered" && isSelected) {
          cssClass = "selected";
        }
        if (answeredState === "Correct" && isSelected) {
          cssClass = "correct";
        }
        if (answeredState === "Wrong" && isSelected) {
          cssClass = "wrong";
        }
        return (
          <li key={index} className="answer">
            <button
              onClick={() => onSelect(answer)}
              className={cssClass}
              disabled={answeredState !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default Answer;
