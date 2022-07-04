import React, { useState, useEffect } from "react";
import db from "../fbManager";

function MainSetOne() {
  const [getSpeedMap, setGetSpeedMap] = useState([]);

  useEffect(() => {
    db.collection("speedMap")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setGetSpeedMap(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            mapId: doc.mapId,
            optionClass: doc.optionClass1,
            ...doc.data(),
          }))
        );
      });
  }, []);

  return (
    <div className="main-set-one">
      <h2>SET 1</h2>
      <br />
      <div className="main-set-grid">
        {getSpeedMap.map((doc) => (
          <div className="main-set-one-list">
            <span
              className={
                doc.optionClass1 === "" ? "none-option" : doc.optionClass1
              }
            >
              {doc.mapId}
            </span>
          </div>
        ))}
      </div>
      <br />
      <div className="cross"></div>
    </div>
  );
}

export default MainSetOne;
