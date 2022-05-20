import React, { useState, useEffect } from "react";
import db from "../fbManager";

function SetFour() {
  const [getSpeedMap, setGetSpeedMap] = useState([]);

  const [optionClass, setOptionClass] = useState("");
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
                  optionClass4: "",
                },
                { merge: true }
              );
            }}
            className={doc.optionClass4}
          >
            {doc.mapId}
          </span>
          <button
            onClick={(e) => {
              e.preventDefault();

              // setOptionClass("pick");
              db.collection("speedMap").doc(doc.id).set(
                {
                  mapPick: true,
                  optionClass4: "pick",
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
                  optionClass4: "ban",
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
                  optionClass4: "stick",
                },
                { merge: true }
              );
            }}
          >
            고정
          </button>
        </div>
      ))}
    </div>
  );
}

export default SetFour;
