import React, { useState } from "react";
import { useEffect } from "react";
import db from "../fbManager";

function AdminSinglePlayer({ docID }) {
  const [getPlayerInfo, setGetPlayerInfo] = useState([]);
  useEffect(() => {
    db.collection("single")
      .doc(docID?.id)
      .collection("player")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setGetPlayerInfo(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            matchPlayer: doc.matchPlayer,
            ...doc.data(),
          }))
        );
      });
  }, [docID?.id]);

  return (
    <div className="ad-sg-pl">
      {getPlayerInfo.map((doc) => (
        <div className="plr-line">
          <span>{doc.matchPlayer}</span>
          <button
            onClick={(e) => {
              e.preventDefault();
              db.collection("single")
                .doc(docID?.id)
                .collection("player")
                .doc(doc.id)
                .delete();
            }}
          >
            삭제
          </button>
        </div>
      ))}
    </div>
  );
}

export default AdminSinglePlayer;
