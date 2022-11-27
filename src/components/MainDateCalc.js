import React, { useState, useEffect } from "react";

function MainDateCalc({ date, clocktime }) {
  const [time, setTime] = useState("");
  const [dayTime, setDayTime] = useState("");
  const [hourTime, setHourTime] = useState("");
  const [minuteTime, setMinuteTime] = useState("");
  const [secondTime, setSecondTime] = useState("");

  useEffect(() => {
    //   내전 일정 받고 new Date에 넣기
    let countDownDate = new Date(date + "," + clocktime).getTime();
    let x = setInterval(() => {
      //UTC+9를 해야 한국시간에 맞음
      var now = new Date();
      var nowUTC = new Date(
        now.getUTCFullYear(),
        now.getUTCMonth(),
        now.getUTCDate(),
        now.getUTCHours() + 9,
        now.getUTCMinutes(),
        now.getUTCSeconds()
      );
      var distance = countDownDate - nowUTC;

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
        setTime(<div className="di-fl-row algn-cntr"><h3>리그 진행됨</h3> <img src="./images/dash.gif" alt="timer" className="dash-img"/></div>);
        setDayTime("0");
        setHourTime("0");
        setMinuteTime("0");
        setSecondTime("0");
        clearInterval(x);
      } else {
        setTime(<div className="di-fl-row algn-cntr"><h3>리그까지</h3> <img src="./images/timer.gif" alt="timer" className="time-img"/></div>);
      }
    }, 1000);
  });
  return (
    <div className="main-date-calc">
      <span>{time}</span>
      <div className="di-fl-row algn-cntr" style={{color: '#fefefe'}}>
      <span className="mgn-4">{date} /</span>
      <span>{clocktime}</span>
      </div>
      <div className="date-calc-time">
        <div className="media-countdown-box">
          <span className="media-countdown-time">
            {dayTime < 10 ? `${dayTime === 1 ? "00" : `0${dayTime}`}` : dayTime}
          </span>
          <span className="media-countdown-span">Days</span>
        </div>
        <div className="media-countdown-box">
          <span className="media-countdown-time">
            {hourTime < 10
              ? `${dayTime === 1 ? hourTime + 24 : `0${hourTime}`}`
              : `${dayTime === 1 ? hourTime + 24 : hourTime}`}
          </span>
          <span className="media-countdown-span">Hours</span>
        </div>
        <div className="media-countdown-box">
          <span className="media-countdown-time">
            {minuteTime < 10 ? `0${minuteTime}` : minuteTime}
          </span>
          <span className="media-countdown-span">Minutes</span>
        </div>
        <div className="media-countdown-box">
          <span className="media-countdown-time">
            {secondTime < 10 ? `0${secondTime}` : secondTime}
          </span>
          <span className="media-countdown-span">Seconds</span>
        </div>
      </div>
    </div>
  );
}

export default MainDateCalc;
