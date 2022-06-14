import React, { useState, useEffect } from "react";
import db from "../fbManager";

function MainMapList() {
  const [getSpeedMap, setGetSpeedMap] = useState([]);
  const [getItemMap, setGetItemMap] = useState([]);

  useEffect(() => {
    db.collection("speedMap")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setGetSpeedMap(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            mapId: doc.mapId,
            ...doc.data(),
          }))
        );
      });
    db.collection("itemMap")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) => {
        setGetItemMap(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            mapId: doc.mapId,
            ...doc.data(),
          }))
        );
      });
  }, []);

  return (
    <div className="main-map-list">
      <div className="main-map-speed">
        <h2>speed</h2>
        {getSpeedMap.map((doc) => (
          <div className="main-speed-list">
            <span>{doc.mapId}</span>
          </div>
        ))}
      </div>

      <div className="main-map-item">
        <h2>item</h2>
        {getItemMap.map((doc) => (
          <div className="main-item-list">
            <span>{doc.mapId}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainMapList;
