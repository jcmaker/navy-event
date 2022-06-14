import React, { useState, useEffect } from "react";
import db from "../fbManager";

function MainSetTwo() {
  const [getSpeedMap, setGetSpeedMap] = useState([]);

  useEffect(() => {
    db.collection("speedMap")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setGetSpeedMap(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            mapId: doc.mapId,
            optionClass: doc.optionClass2,
            ...doc.data(),
          }))
        );
      });
  }, []);

  return (
    <div className="main-set-one">
      <h2>set 2</h2>
      <div className="main-set-grid">
        {getSpeedMap.map((doc) => (
          <div className="main-set-one-list">
            <span
              className={
                doc.optionClass2 === "" ? "none-option" : doc.optionClass2
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

export default MainSetTwo;
