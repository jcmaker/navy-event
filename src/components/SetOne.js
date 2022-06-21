import React, { useState, useEffect } from "react";
import db from "../fbManager";

function SetOne() {
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
    <div className="set-one">
      <h4>set 1</h4>
      {getSpeedMap.map((doc) => (
        <div className="set-list">
          <span
            className={doc.optionClass1}
            onClick={(e) => {
              e.preventDefault();
              db.collection("speedMap").doc(doc.id).set(
                {
                  optionClass1: "",
                },
                { merge: true }
              );
            }}
          >
            {doc.mapId}
          </span>
          <div className="set-list-btn">
            <button
              onClick={(e) => {
                e.preventDefault();
                db.collection("speedMap").doc(doc.id).set(
                  {
                    optionClass1: "pick",
                  },
                  { merge: true }
                );
              }}
            >
              PICK
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                db.collection("speedMap").doc(doc.id).set(
                  {
                    optionClass1: "ban",
                  },
                  { merge: true }
                );
              }}
            >
              BAN
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                db.collection("speedMap").doc(doc.id).set(
                  {
                    optionClass1: "stick",
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
export default SetOne;
