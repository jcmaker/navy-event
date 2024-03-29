import React, { useState, useEffect } from "react";
import db from "../fbManager";

function SetThree() {
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
    <div className="set-one">
      <h4>set 3</h4>
      {getItemMap.map((doc) => (
        <div className="set-list">
          <span
            onClick={(e) => {
              e.preventDefault();
              db.collection("itemMap").doc(doc.id).set(
                {
                  optionClass3: "",
                },
                { merge: true }
              );
            }}
            className={doc.optionClass3}
          >
            {doc.mapId}
          </span>
          <div className="set-list-btn">
            <button
              style={{ backgroundColor: "#0575e6", color: "#fff" }}
              onClick={(e) => {
                e.preventDefault();
                db.collection("itemMap").doc(doc.id).set(
                  {
                    optionClass3: "pick-blue",
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
                db.collection("itemMap").doc(doc.id).set(
                  {
                    optionClass3: "pick-red",
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
                db.collection("itemMap").doc(doc.id).set(
                  {
                    optionClass3: "ban",
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
                db.collection("itemMap").doc(doc.id).set(
                  {
                    optionClass3: "fix",
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

export default SetThree;
