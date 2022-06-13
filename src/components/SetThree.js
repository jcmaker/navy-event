import React, { useState, useEffect } from "react";
import db from "../fbManager";

function SetThree() {
  const [getItemMap, setGetItemMap] = useState([]);

  // const [optionClass, setOptionClass] = useState("");
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
        // <blueUser userId={doc.userId} docId={doc.id} />
        <div className="set-list">
          <span
            onClick={(e) => {
              e.preventDefault();
              db.collection("itemMap").doc(doc.id).set(
                {
                  mapPick: false,
                  mapBan: false,
                  mapStick: false,
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

                // setOptionClass("pick");
                db.collection("itemMap").doc(doc.id).set(
                  {
                    mapPick: true,
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

                // setOptionClass("ban");
                db.collection("itemMap").doc(doc.id).set(
                  {
                    mapBan: true,
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

                // setOptionClass("stick");
                db.collection("itemMap").doc(doc.id).set(
                  {
                    mapStick: true,
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
