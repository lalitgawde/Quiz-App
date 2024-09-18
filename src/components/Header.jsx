import React from "react";
import Quizlogo from "../assets/quiz-logo.png";

function Header(props) {
  return (
    <header>
      <img src={Quizlogo} alt="Quiz logo" />
      <h1>React Quiz App</h1>
    </header>
  );
}

export default Header;
