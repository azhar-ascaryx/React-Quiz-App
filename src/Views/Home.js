import React from "react";
import { useState } from "react";
import "../Assets/Css/App.css";
import questions from "../Assets/Constants/questions";
import Timer from "../Components/Timer";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

const Home = () => {
  const [showInfo, setshowInfo] = useState(false);
  const [showQuiz, setshowQuiz] = useState(false);
  const [currentNumber, setcurrentNumber] = useState(1);
  const [score, setScore] = useState(0);
  const [optionSelected, setoptionSelected] = useState(false);
  const [showResult, setshowResult] = useState(false);

  const handle = useFullScreenHandle();

  /*const [quiz, setQuiz] = useState({
    showInfo: false,
    showQuiz: false,
    currentNumber: 1,
    score: 0,
    optionSelected: false,
    showResult: false,
  });
  
  setQuiz((a) => {
    return { ...a, showInfo: false };
  });
    //
    setQuiz((a) => {
      return { ...a, showInfo: true };
    });
  */

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
      <FullScreen  className="first" handle={handle}>
        <div>
          <div className="start_btn">
            <button
              onClick={() => {
                handle.enter();
                setshowInfo(true);
              }}
            >
              Start Quiz
            </button>
          </div>
          <div></div>
          {showInfo ? (
            <div className="info_box activeInfo">
              <div className="info-title">
                <span>Some Rules of this Quiz</span>
              </div>
              <div className="info-list">
                <div className="info">
                  1. Candidate will have only <span>15 seconds</span> per each
                  question.
                </div>
                <div className="info">
                  2. Candidate will not be allowed to revisit/edit already
                  answered questions.
                </div>
                <div className="info">
                  3. Next question button will be enabled on selecting any
                  option.
                </div>
                <div className="info">
                  4. Candidate can't exit from the Quiz while you're playing.
                </div>

                {/* <div className="info">
              5. You'll get points on the basis of your correct answers.
            </div> */}
              </div>
              <div className="buttons">
                <button
                  onClick={() => {
                    window.location.replace("/");
                  }}
                  className="quit"
                >
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
                  <div key={key}>
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
                            key={key}
                            className="option"
                            style={{
                              background:
                                optionSelected === a ? "#7204b3" : "aliceblue",
                              color: optionSelected === a ? "#fff" : "black",
                              fontWeight:
                                optionSelected === a ? "bold" : "normal",
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
                      <button style={{opacity:!optionSelected ? 0.5 : 1}}
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
                    </footer>
                  </div>
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
                  and congrats! 🎉, You got <p>{score}</p> out of{" "}
                  {questions.length}
                </span>
              </div>
              <div className="buttons">
                <button
                  onClick={() => {
                    // setshowInfo(true);
                    // setshowQuiz(false);
                    // setoptionSelected(false);
                    // setScore(0);
                    // setcurrentNumber(1);
                    // setshowResult(false);
                    window.location.replace("/");
                  }}
                  className="restart"
                >
                  Replay Quiz
                </button>
                <button
                  onClick={() => {
                    // setshowInfo(false);
                    // setcurrentNumber(1);
                    // setoptionSelected(false);
                    // setScore(0);
                    // setshowQuiz(false);
                    // setshowResult(false);
                    window.location.replace("/");
                  }}
                  className="quit"
                >
                  Quit Quiz
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </FullScreen>
    </div>
  );
};

export default Home;
