import React from "react";
import { useState, useEffect } from "react";
import db from "../fbManager";
import firebase from "firebase";

function RedTeam() {
  const [redLineUp, setRedLineUp] = useState("");
  const [bringRedLineUp, setBringRedLineUp] = useState([]);

  const [redWaiter, setRedWaiter] = useState("");
  const [bringRedWaiter, setBringRedWaiter] = useState([]);

  useEffect(() => {
    db.collection("redLineUp")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setBringRedLineUp(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            userId: doc.userId,
            ...doc.data(),
          }))
        );
      });
    db.collection("redWaiter")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setBringRedWaiter(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            userId: doc.userId,
            ...doc.data(),
          }))
        );
      });
  }, []);

  const uploadRedLineUp = (e) => {
    e.preventDefault();
    db.collection("redLineUp").add({
      userId: redLineUp,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setRedLineUp("");
  };
  const uploadRedWaiter = (e) => {
    e.preventDefault();
    db.collection("redWaiter").add({
      userId: redWaiter,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setRedWaiter("");
  };
  return (
    <div className="red-team">
      <h4>red</h4>
      <div className="red-team-box">
        <div className="line-up">
          <h4>선발</h4>
          {bringRedLineUp.map((doc) => (
            <div className="user-list">
              <span>{doc.userId}</span>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  db.collection("redLineUp").doc(doc.id).delete();
                }}
              >
                삭제
              </button>
            </div>
          ))}

          <form className="admin-form">
            <input
              type="text"
              className="form-input"
              placeholder="선발자 닉네임"
              value={redLineUp}
              onChange={(e) => {
                setRedLineUp(e.target.value);
              }}
              required
            />
            <button onClick={uploadRedLineUp}>추가</button>
          </form>
        </div>
        <div className="cross"></div>
        <div className="waiter">
          <h4>대기</h4>
          {bringRedWaiter.map((doc) => (
            <div className="user-list">
              <span>{doc.userId}</span>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  db.collection("redWaiter").doc(doc.id).delete();
                }}
              >
                삭제
              </button>
            </div>
          ))}

          <form className="admin-form">
            <input
              type="text"
              className="form-input"
              placeholder="대기자 닉네임"
              value={redWaiter}
              onChange={(e) => {
                setRedWaiter(e.target.value);
              }}
            />
            <button onClick={uploadRedWaiter}>추가</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RedTeam;
