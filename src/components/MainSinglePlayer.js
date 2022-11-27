import React, { useEffect, useState } from "react";
import db from "../fbManager";

function MainSinglePlayer({ docID }) {
  const [getPlayerInfo, setGetPlayerInfo] = useState([]);
  const randomImg = [
    "dao.png",
    "mandu.png",
    "marid.png",
    "bazzi.png",
    "sonic.png",
  ];

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
    <div className="sg-pl-grd">
      {getPlayerInfo.map((doc) => (
        <div className="sg-pl-grd-card">
          <img
            src={`./images/${
              randomImg[Math.floor(Math.random() * randomImg.length)]
            }`}
            alt="prof"
          />
          <span className="nato">{doc.matchPlayer}</span>
        </div>
      ))}
    </div>
  );
}

export default MainSinglePlayer;
