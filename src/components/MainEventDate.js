import React, { useState, useEffect } from "react";
import db from "../fbManager";
import MainDateCalc from "./MainDateCalc";
function MainEventDate() {
  const [getDateValue, setGetDateValue] = useState([]);

  useEffect(() => {
    db.collection("eventDate")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setGetDateValue(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            dateValue: doc.dateValue,
            time: doc.time,
            ...doc.data(),
          }))
        );
      });
  }, []);

  return (
    <div className="main-event-date">
      테스트 진행중
      {getDateValue.map((doc) => (
        <MainDateCalc
          date={doc.dateValue}
          id={doc.id}
          clocktime={doc.timeValue}
        />
      ))}
    </div>
  );
}

export default MainEventDate;
