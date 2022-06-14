import React, { useState, useEffect } from "react";
import db from "../fbManager";

function MainSetThree() {
  const [getItemMap, setGetItemMap] = useState([]);

  useEffect(() => {
    db.collection("itemMap")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setGetItemMap(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            mapId: doc.mapId,
            optionClass: doc.optionClass3,
            ...doc.data(),
          }))
        );
      });
  }, []);

  return (
    <div className="main-set-one">
      <h2>set 3</h2>
      <div className="main-set-grid">
        {getItemMap.map((doc) => (
          <div className="main-set-one-list">
            <span
              className={
                doc.optionClass3 === "" ? "none-option" : doc.optionClass3
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

export default MainSetThree;
