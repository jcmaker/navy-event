import React from "react";
import { useState, useEffect } from "react";
import db from "../fbManager";

function MainRedTeam() {
  const [bringRedLineUp, setBringRedLineUp] = useState([]);
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

  return (
    <div className="main-red-team">
      <h1>RED</h1>
      <div className="main-red-team-box">
        <div className="main-line-up">
          <h4>선발</h4>
          {bringRedLineUp.map((doc) => (
            <div className="main-user-list">
              <span>{doc.userId !== null ? doc.userId : "플레이어"}</span>
            </div>
          ))}
        </div>
        <div className="cross"></div>
        <div className="main-waiter">
          <h4>대기</h4>
          {bringRedWaiter.map((doc) => (
            <div className="main-user-list">
              <span>{doc.userId !== null ? doc.userId : "플레이어"}</span>
            </div>
          ))}
          <span className="anyOneRed">+ 아무나</span>
        </div>
      </div>
    </div>
  );
}

export default MainRedTeam;
