import React, { useState, useEffect } from "react";
import db from "../fbManager";

function SetTwo() {
  const [getSpeedMap, setGetSpeedMap] = useState([]);

  // const [optionClass, setOptionClass] = useState("");
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
    <div className="set-one">
      <h4>set 2</h4>

      {getSpeedMap.map((doc) => (
        // <blueUser userId={doc.userId} docId={doc.id} />
        <div className="set-list">
          <span
            onClick={(e) => {
              e.preventDefault();
              db.collection("speedMap").doc(doc.id).set(
                {
                  mapPick: false,
                  mapBan: false,
                  mapStick: false,
                  optionClass2: "",
                },
                { merge: true }
              );
            }}
            className={doc.optionClass2}
          >
            {doc.mapId}
          </span>
          <div className="set-list-btn">
            <button
              onClick={(e) => {
                e.preventDefault();

                // setOptionClass("");
                db.collection("speedMap").doc(doc.id).set(
                  {
                    mapPick: true,
                    optionClass2: "pick",
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
                db.collection("speedMap").doc(doc.id).set(
                  {
                    mapBan: true,
                    optionClass2: "ban",
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
                db.collection("speedMap").doc(doc.id).set(
                  {
                    mapStick: true,
                    optionClass2: "stick",
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

export default SetTwo;
