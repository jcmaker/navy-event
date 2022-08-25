import React from "react";
import { useState, useEffect } from "react";
import db from "../fbManager";

function MainBlueTeam({teamName}) {
  const [bringBlueLineUp, setBringBlueLineUp] = useState([]);
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
  return (
    <div className="main-blue-team di-fl-col">
      {teamName.map((doc) => (
        <h1>{doc.teamId}</h1>
      ))}
      <div className="main-blue-team-box">
        <div className="main-line-up di-fl-col">
          <h4>선발</h4>
          {bringBlueLineUp.map((doc) => (
            <div className="main-user-list">
              <span>{doc.userId}</span>
            </div>
          ))}
        </div>
        <div className="cross"></div>
        <div className="main-waiter di-fl-col">
          <h4>대기</h4>
          {bringBlueWaiter.map((doc) => (
            <div className="main-user-list">
              <span>{doc.userId}</span>
            </div>
          ))}
          {/* <span className="anyOneBlue">+ 아무나</span> */}
        </div>
      </div>
    </div>
  );
}

export default MainBlueTeam;
