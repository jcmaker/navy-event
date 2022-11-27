import React, { useEffect, useState } from "react";
import db from "../fbManager";
import "../style/SingleAdmin.css";
import firebase from "firebase";
import AdminSinglePlayer from "../components/AdminSinglePlayer";

function SingleAdmin() {
  const [matchDate, setMatchDate] = useState("");
  const [matchTime, setMatchTime] = useState("");
  const [matchGroup, setMatchGroup] = useState("");
  const [matchPlayer, setMatchPlayer] = useState("");

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

  const createGroup = (e) => {
    e.preventDefault();
    db.collection("single").add({
      matchDate,
      matchTime,
      matchGroup,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setMatchGroup("");
  };

  return (
    <div className="singleAdmin">
      <div className="single-test">
        {getMatchInfo.map((doc) => (
          <div className="single-card">
            <div className="single-info">
              <div className="sg-hd">
                <h2>{doc.matchGroup}조</h2>
                <button
                  className="single-card-del"
                  onClick={(e) => {
                    e.preventDefault();
                    db.collection("single").doc(doc.id).delete();
                  }}
                >
                  경기 삭제
                </button>
              </div>
              <span>{doc.matchDate}</span>
              <span>{doc.matchTime}</span>
              <br />
              <br />
              <AdminSinglePlayer docID={doc} />
            </div>
            {/* Length 8로 제한  */}
            <div className="single-player-form">
              <form>
                <input
                  type="text"
                  placeholder="선수 이름"
                  onChange={(e) => {
                    e.preventDefault();
                    setMatchPlayer(e.target.value);
                  }}
                />
                <button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    db.collection("single")
                      .doc(doc.id)
                      .collection("player")
                      .add({
                        matchPlayer,
                        timestamp:
                          firebase.firestore.FieldValue.serverTimestamp(),
                      });
                    setMatchPlayer(" ");
                  }}
                >
                  추가
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
      <div className="ad-single-footer">
        <div className="add-single">
          <form className="form-single">
            <input
              type="date"
              onChange={(e) => {
                e.preventDefault();
                setMatchDate(e.target.value);
              }}
              required
            />
            {""}
            <input
              type="time"
              onChange={(e) => {
                e.preventDefault();
                setMatchTime(e.target.value);
              }}
              required
            />
            <input
              type="text"
              className="single-text"
              placeholder="조 이름"
              onChange={(e) => {
                e.preventDefault();
                setMatchGroup(e.target.value);
              }}
              required
            />
            <button type="submit" className="add-group" onClick={createGroup}>
              그룹 추가
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SingleAdmin;
