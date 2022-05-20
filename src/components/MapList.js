import React, { useState, useEffect } from "react";
import db from "../fbManager";
import firebase from "firebase";

function MapList() {
  const [speedMap, setSpeedMap] = useState("");
  const [itemMap, setItemMap] = useState("");

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

  const uploadSpeedMap = (e) => {
    e.preventDefault();
    db.collection("speedMap").add({
      mapId: speedMap,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      mapPick: false,
      mapBan: false,
      mapStick: false,
      optionClass1: "",
      optionClass2: "",

      optionClass4: "",
    });
    setSpeedMap("");
  };
  const uploadItemMap = (e) => {
    e.preventDefault();
    db.collection("itemMap").add({
      mapId: itemMap,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      mapPick: false,
      mapBan: false,
      mapStick: false,

      optionClass3: "",
    });
    setItemMap("");
  };
  return (
    <div className="map-list">
      <h4>맵 목록</h4>
      <div className="map-speed">
        <h4>speed</h4>
        {getSpeedMap.map((doc) => (
          // <blueUser userId={doc.userId} docId={doc.id} />
          <div className="speed-list">
            <span>{doc.mapId}</span>
            <button
              onClick={(e) => {
                e.preventDefault();
                db.collection("speedMap").doc(doc.id).delete();
              }}
            >
              삭제
            </button>
          </div>
        ))}

        <form className="map-form">
          <input
            type="text"
            className="form-input"
            placeholder="스피드맵 입력하기"
            value={speedMap}
            onChange={(e) => {
              setSpeedMap(e.target.value);
            }}
            required
          />
          <button onClick={uploadSpeedMap}>추가하기</button>
        </form>
      </div>

      <div className="cross"></div>
      <div className="map-item">
        <h4>item</h4>
        {getItemMap.map((doc) => (
          // <blueUser userId={doc.userId} docId={doc.id} />
          <div className="item-list">
            <span>{doc.mapId}</span>
            <button
              onClick={(e) => {
                e.preventDefault();
                db.collection("itemMap").doc(doc.id).delete();
              }}
            >
              삭제
            </button>
          </div>
        ))}

        <form className="map-form">
          <input
            type="text"
            className="form-input"
            placeholder="아이템맵 입력하기"
            value={itemMap}
            onChange={(e) => {
              setItemMap(e.target.value);
            }}
            required
          />
          <button onClick={uploadItemMap}>추가하기</button>
        </form>
      </div>
    </div>
  );
}

export default MapList;
