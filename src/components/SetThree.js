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
              onClick={(e) => {
                e.preventDefault();
                db.collection("itemMap").doc(doc.id).set(
                  {
                    optionClass3: "pick",
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
                db.collection("itemMap").doc(doc.id).set(
                  {
                    optionClass3: "ban",
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
                db.collection("itemMap").doc(doc.id).set(
                  {
                    optionClass3: "stick",
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
