import React, { useState, useEffect } from "react";
import db from "../fbManager";

function SetOne() {
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
        // <blueUser userId={doc.userId} docId={doc.id} />
        <div className="set-list">
          <span
            className={doc.optionClass1}
            onClick={(e) => {
              e.preventDefault();
              db.collection("speedMap").doc(doc.id).set(
                {
                  mapPick: false,
                  mapBan: false,
                  mapStick: false,
                  optionClass1: "",
                },
                { merge: true }
              );
            }}
          >
            {doc.mapId}
          </span>
          <button
            onClick={(e) => {
              e.preventDefault();

              // setOptionClass("");
              db.collection("speedMap").doc(doc.id).set(
                {
                  mapPick: true,
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

              // setOptionClass("");
              db.collection("speedMap").doc(doc.id).set(
                {
                  mapBan: true,
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

              // setOptionClass("");
              db.collection("speedMap").doc(doc.id).set(
                {
                  mapStick: true,
                  optionClass1: "stick",
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

export default SetOne;
