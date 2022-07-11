import React, { useState, useEffect } from "react";

function MainDateCalc({ date, timetime }) {
  const [time, setTime] = useState("");
  const [dayTime, setDayTime] = useState("");
  const [hourTime, setHourTime] = useState("");
  const [minuteTime, setMinuteTime] = useState("");
  const [secondTime, setSecondTime] = useState("");

  useEffect(() => {
    //   내전 일정 받고 new Date에 넣기
    let countDownDate = new Date(date + "," + timetime).getTime();
    let x = setInterval(() => {
      let now = new Date().getTime();

      let distance = countDownDate - now;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setDayTime(days);
      setHourTime(hours);
      setMinuteTime(minutes);
      setSecondTime(seconds);

      if (distance < 0) {
        clearInterval(x);
        setTime("🏁 내전 진행됨 🏁");
        setDayTime("0");
        setHourTime("0");
        setMinuteTime("0");
        setSecondTime("0");
      } else {
        setTime("🏁 내전까지 🏁");
      }
    }, 1000);
  }, []);
  return (
    <div className="date-calc">
      <span>{time}</span>
      <div className="date-calc-time">
        <div className="media-countdown-box">
          <span className="media-countdown-time">
            {dayTime < 10 ? `0${dayTime}` : dayTime}
          </span>
          <span className="media-countdown-span">Days</span>
        </div>
        <div className="media-countdown-box">
          <span className="media-countdown-time">
            {hourTime < 10 ? `0${hourTime}` : hourTime}
          </span>
          <span className="media-countdown-span">Hr</span>
        </div>
        <div className="media-countdown-box">
          <span className="media-countdown-time">
            {minuteTime < 10 ? `0${minuteTime}` : minuteTime}
          </span>
          <span className="media-countdown-span">Min</span>
        </div>
        <div className="media-countdown-box">
          <span className="media-countdown-time">
            {secondTime < 10 ? `0${secondTime}` : secondTime}
          </span>
          <span className="media-countdown-span">sec</span>
        </div>
      </div>
    </div>
  );
}

export default MainDateCalc;
