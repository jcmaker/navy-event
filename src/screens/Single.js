import React, { useEffect, useState } from "react";
import MainSinglePlayer from "../components/MainSinglePlayer";
import db from "../fbManager";
import "../style/Single.css";
import SingleFooter from "./SingleFooter";

function Single() {
  const [getMatchInfo, setGetMatchInfo] = useState([]);

  useEffect(() => {
    db.collection("single")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setGetMatchInfo(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            matchDate: doc.matchDate,
            matchTime: doc.matchTime,
            matchGroup: doc.matchGroup,
            ...doc.data(),
          }))
        );
      });
  }, []);

  return (
    <div className="single">
      {/* header */}
      <div className="sg-header">
        <h1>SINGLE</h1>
        <img src="./images/flag.png" alt="flag" />
      </div>
      {/* body "cards" */}
      {getMatchInfo.map((doc) => (
        <div className="main-sg-card">
          <div className="sg-hd">
            <div className="sg-info">
              <span>{doc.matchDate}</span>
              <span>{doc.matchTime}</span>
            </div>
            <a
              className="club-link"
              href="https://open.kakao.com/o/gt4C7LJc"
              target="_blank"
              rel="noreferrer"
            >
              해군 CLUB ➤
            </a>
          </div>
          <div className="sg-group">
            <div></div>
            <span>{doc.matchGroup} 조</span>
            <div></div>
          </div>
          <div className="sg-player-grid">
            <MainSinglePlayer docID={doc} />
          </div>
        </div>
      ))}
      {/* footer */}
      <SingleFooter />
    </div>
  );
}

export default Single;
