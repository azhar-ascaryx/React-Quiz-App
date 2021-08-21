import React from "react";

const Intro = () => {
  return (
    <div>
      <div className="info_box activeInfo">
        <div className="info-title">
          <span>Some Introducion before the QUIZ</span>
        </div>
        <div className="info-list">
          <div className="info">1. You can appear this test only once.</div>
          <div className="info">
            2. To appear for the test, you need to verify your Phone number.
          </div>
          <div className="info">
            3. If any error occours, refresh the page and login again.
          </div>
        </div>
        <div className="buttons">
        <button className="quit" onClick ={() => {
            window.location.replace("/signin")
        }}>Next</button></div>
      </div>
    </div>
  );
};

export default Intro;
