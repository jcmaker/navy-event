import React, { useState, useEffect } from "react";
import db from "../fbManager";

function MainSetFour() {
  const [getSpeedMap, setGetSpeedMap] = useState([]);

  useEffect(() => {
    db.collection("speedMap")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setGetSpeedMap(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            mapId: doc.mapId,
            optionClass: doc.optionClass4,
            ...doc.data(),
          }))
        );
      });
  }, []);

  return (
    <div className="main-set-one">
      <h2>set 4</h2>
      <div className="main-set-grid">
        {getSpeedMap.map((doc) => (
          // <blueUser userId={doc.userId} docId={doc.id} />
          <div className="main-set-one-list">
            <span
              className={
                doc.optionClass4 === "" ? "none-option" : doc.optionClass4
              }
            >
              {doc.mapId}
            </span>
          </div>
        ))}
      </div>
      <div className="cross"></div>
    </div>
  );
}

export default MainSetFour;
