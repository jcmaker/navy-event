import React, { useState, useEffect } from "react";
import db from "../fbManager";

function SetFour() {
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
    <div className="set-one">
      <h4>set 4</h4>

      {getSpeedMap.map((doc) => (
        <div className="set-list">
          <span
            onClick={(e) => {
              e.preventDefault();
              db.collection("speedMap").doc(doc.id).set(
                {
                  optionClass4: "",
                },
                { merge: true }
              );
            }}
            className={doc.optionClass4}
          >
            {doc.mapId}
          </span>
          <div className="set-list-btn">
            <button
              style={{ backgroundColor: "#0575e6", color: "#fff" }}
              onClick={(e) => {
                e.preventDefault();
                db.collection("speedMap").doc(doc.id).set(
                  {
                    optionClass4: "pick-blue",
                  },
                  { merge: true }
                );
              }}
            >
              픽
            </button>
            <button
              style={{ backgroundColor: "#ff416c", color: "#fff" }}
              onClick={(e) => {
                e.preventDefault();
                db.collection("speedMap").doc(doc.id).set(
                  {
                    optionClass4: "pick-red",
                  },
                  { merge: true }
                );
              }}
            >
              픽
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                db.collection("speedMap").doc(doc.id).set(
                  {
                    optionClass4: "ban",
                  },
                  { merge: true }
                );
              }}
            >
              벤
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                db.collection("speedMap").doc(doc.id).set(
                  {
                    optionClass4: "fix",
                  },
                  { merge: true }
                );
              }}
            >
              고정
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SetFour;
