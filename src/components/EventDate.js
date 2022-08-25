import React, { useState, useEffect } from "react";
import db from "../fbManager";
import firebase from "firebase";
import DateCalc from "./DateCalc";
function EventDate() {
  const [timeValue, setTimeValue] = useState("");
  const [dateValue, setDateValue] = useState("");
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

  const uploadDate = (e) => {
    e.preventDefault();
    db.collection("eventDate").add({
      dateValue,
      timeValue,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setDateValue("");
    setTimeValue("");
  };

  return (
    <div className="event-date">
      <form className="event-date-form">
        <input
          type="date"
          onChange={(e) => {
            e.preventDefault();
            setDateValue(e.target.value);
          }}
          required
        />
        {""}
        <input
          type="time"
          onChange={(e) => {
            e.preventDefault();
            setTimeValue(e.target.value);
          }}
          required
        />
        <button disabled={!dateValue.trim() || !timeValue.trim()} onClick={uploadDate}>추가</button>
      </form>
      {getDateValue.map((doc) => (
        <DateCalc date={doc.dateValue} id={doc.id} timetime={doc.timeValue} />
      ))}
    </div>
  );
}

export default EventDate;
