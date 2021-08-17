import React from 'react'
import { useState } from "react";
import "../Assets/Css/App.css";
import questions from "../Assets/Constants/questions";
import Timer from "../Components/Timer";


const Home = () => {
    const [showInfo, setshowInfo] = useState(false);
  const [showQuiz, setshowQuiz] = useState(false);
  const [currentNumber, setcurrentNumber] = useState(1);
  const [score, setScore] = useState(0);
  const [optionSelected, setoptionSelected] = useState(false);
  const [showResult, setshowResult] = useState(false);
 

  const showQuestions = () => {
    setshowInfo(false);
    setshowQuiz(true);
  };

  const callback = (time) => {
    if (!time && currentNumber < 5) {
      setcurrentNumber(currentNumber + 1);
      setoptionSelected(false);
    } else {
      setshowQuiz(false);
      setshowResult(true);
    }
  };
    return (
        <div>
            <div>
      <div className="start_btn">
        <button onClick={(e) => setshowInfo(true)}>Start Quiz</button>
      </div>
      <div></div>
      {showInfo ? (
        <div className="info_box activeInfo">
          <div className="info-title">
            <span>Some Rules of this Quiz</span>
          </div>
          <div className="info-list">
            <div className="info">
              1. You will have only <span>15 seconds</span> per each question.
            </div>
            <div className="info">
              2. Once you select your answer, it can't be undone.
            </div>
            <div className="info">
              3. You can't select any option once time goes off.
            </div>
            <div className="info">
              4. You can't exit from the Quiz while you're playing.
            </div>

            {/* <div className="info">
              5. You'll get points on the basis of your correct answers.
            </div> */}
          </div>
          <div className="buttons">
            <button onClick={() => setshowInfo(false)} className="quit">
              Exit Quiz
            </button>
            <button
              onClick={() => {
                showQuestions();
              }}
              className="restart"
            >
              Continue
            </button>
          </div>
        </div>
      ) : null}

      {showQuiz ? (
        <div className="quiz_box activeQuiz">
          {questions.map((x, key) =>
            x.numb === currentNumber ? (
              <>
                <header>
                  <div className="title">Quiz Application</div>
                  <Timer
                    seconds={15}
                    parentCallback={(time) => callback(time)}
                  />
                </header>
                <section>
                  <div className="que_text">
                    <span>
                      {x.numb}. {x.question}
                    </span>
                  </div>
                  <div className="option_list">
                    {x.options.map((a, key) => (
                      <div
                        className="option"
                        style={{
                          background:
                            optionSelected === a ? "#7204b3" : "aliceblue",
                          color: optionSelected === a ? "#fff" : "black",
                          fontWeight: optionSelected === a ? "bold" : "normal",
                        }}
                        onClick={() => setoptionSelected(a)}
                      >
                        <span>{a}</span>
                      </div>
                    ))}
                  </div>
                </section>
                <footer>
                  <div className="total_que">
                    <span>
                      {x.numb} of {questions.length} Questions
                    </span>
                  </div>
                  {/* {optionSelected ? ( */}
                  <button
                    disabled={!optionSelected}
                    onClick={() => {
                      if (currentNumber < 5) {
                        setcurrentNumber(currentNumber + 1);
                        setoptionSelected(false);
                        setScore(
                          x.answer === optionSelected ? score + 1 : score
                        );
                      } else {
                        setScore(
                          x.answer === optionSelected ? score + 1 : score
                        );
                        setshowQuiz(false);
                        setshowResult(true);
                      }
                    }}
                    className="next_btn show"
                  >
                    {currentNumber === 5 ? "Finish" : "Next que"}
                  </button>
                  {/* ) : null} */}
                </footer>
              </>
            ) : null
          )}
        </div>
      ) : null}

      {showResult ? (
        <div className="result_box activeResult">
          <div className="icon">
            <i className="fas fa-crown"></i>
          </div>
          <div className="complete_text">You've completed the Quiz!</div>
          <div className="score_text">
            <span>
              and congrats! 🎉, You got <p>{score}</p> out of {questions.length}
            </span>
          </div>
          <div className="buttons">
            <button
              onClick={() => {
                setshowInfo(true);
                setshowQuiz(false);
                setoptionSelected(false);
                setScore(0);
                setcurrentNumber(1);
                setshowResult(false);
              }}
              className="restart"
            >
              Replay Quiz
            </button>
            <button
              onClick={() => {
                setshowInfo(false);
                setcurrentNumber(1);
                setoptionSelected(false);
                setScore(0);
                setshowQuiz(false);
                setshowResult(false);
              }}
              className="quit"
            >
              Quit Quiz
            </button>
          </div>
        </div>
      ) : null}
    </div>
        </div>
    )
}

export default Home
