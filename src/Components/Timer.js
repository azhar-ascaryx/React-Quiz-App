import React, { useEffect } from "react";
import { useState } from "react";



export default function Timer({ seconds, parentCallback }) {
  const [time, settime] = useState(seconds);

  useEffect(() => {
    let intervalId;
    if (!time) return parentCallback(time) ;

    intervalId = setInterval(() => {
      settime(time - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [time]);
  return (
    <div className="timer">
      <div className="time_left_txt">{time===0 ? "Time Off":"Time Left"}</div>
      <div className="timer_sec">{time}</div>
    </div>
  );
}
