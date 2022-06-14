import React from "react";
import { useState, useEffect } from "react";
import db from "../fbManager";
import firebase from "firebase";

function BlueTeam() {
  const [blueLineUp, setBlueLineUp] = useState("");
  const [bringBlueLineUp, setBringBlueLineUp] = useState([]);
  const [blueWaiter, setBlueWaiter] = useState("");
  const [bringBlueWaiter, setBringBlueWaiter] = useState([]);

  useEffect(() => {
    db.collection("blueLineUp")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setBringBlueLineUp(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            userId: doc.userId,
            ...doc.data(),
          }))
        );
      });
    db.collection("blueWaiter")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setBringBlueWaiter(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            userId: doc.userId,
            ...doc.data(),
          }))
        );
      });
  }, []);

  const uploadBlueLineUp = (e) => {
    e.preventDefault();
    db.collection("blueLineUp").add({
      userId: blueLineUp,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setBlueLineUp("");
  };
  const uploadBlueWaiter = (e) => {
    e.preventDefault();
    db.collection("blueWaiter").add({
      userId: blueWaiter,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setBlueWaiter("");
  };
  return (
    <div className="blue-team">
      <h4>blue</h4>
      <div className="blue-team-box">
        <div className="line-up">
          <h4>선발</h4>
          {bringBlueLineUp.map((doc) => (
            <div className="user-list">
              <span>{doc.userId}</span>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  db.collection("blueLineUp").doc(doc.id).delete();
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
              value={blueLineUp}
              onChange={(e) => {
                setBlueLineUp(e.target.value);
              }}
              required
            />
            <button onClick={uploadBlueLineUp}>추가하기</button>
          </form>
        </div>
        <div className="cross"></div>
        <div className="waiter">
          <h4>대기</h4>
          {bringBlueWaiter.map((doc) => (
            <div className="user-list">
              <span>{doc.userId}</span>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  db.collection("blueWaiter").doc(doc.id).delete();
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
              value={blueWaiter}
              onChange={(e) => {
                setBlueWaiter(e.target.value);
              }}
            />
            <button onClick={uploadBlueWaiter}>추가하기</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BlueTeam;
