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
      optionClass3: "",
    });
    setItemMap("");
  };

  const speedMapArr = [
    "빌리지 고가",
    "빌리지 남산",
    "빌리지 운명의 다리",
    "비치 해변 드라이브",
    "빌리지 익스트림 경기장",
    "빌리지 붐힐터널",
    "빌리지 만리장성",
    "월드 두바이",
    "월드 리오 다운힐",
    "월드 뉴욕 대질주",
    "월드 이탈리아 피사의 사탑",
    "도검 야외 수련관",
    "쥐라기 공룡 결투장",
    "메카닉 잊혀진 도시의 중심부",
    "브로디 비밀의 연구소",
    "신화 신들의 세계",
    "차이나 서안 병마용",
    "차이나 황산",
    "차이나 골목길 대질주",
    "해적 로비 절벽의 전투",
    "해적 숨겨진 보물",
    "님프 바다 신전의 비밀",
    "포레스트 지그제그",
    "사막 빙글빙글 공사장",
    "대저택 은밀한 지하실",
    "아이스 갈라진 빙산",
    "황금문명 비밀장치의 위협",
    "황금문명 오르에트 황금좌표",
    "네모 산타의 비밀공간",
    "동화 이상한 나라의 문",
    "노르테유 익스프레스",
    "광산 꼬불꼬불 다운힐",
    "팩토리 미완성 5구역",
    "공동묘지 마왕의 초대",
  ];

  const itemMapArr = [
    "아이스 상어섬의 무덤",
    "아이스 신나는 하프파이프",
    "노르테유 행성 저멀리",
    "노르테유 부스터존 점령작전",
    "노르테유 붕붕 점프",
    "노르테유 허공의 갈림길",
    "포레스트 행복한 팬더마을",
    "포레스트 폭포속으로",
    "1920 수상한 증기공장",
    "월드 파리 드라이브",
    "월드 그리스의 휴일",
    "네모 네모난 마을",
    "네모 장난감 선물공장",
    "사막 피라미드 모험",
    "사막 울렁울렁",
    "비치 수상비행장",
    "공동묘지 유령의 계곡",
    "차이나 빙등 축제",
    "빌리지 시계탑",
    "동화 프레티온 목마",
  ];

  return (
    <div className="map-list">
      <h4>맵 목록</h4>
      <div className="map-speed">
        <div>
          <h4>speed</h4>
          <span
            className={
              getSpeedMap.length > 21 || getSpeedMap.length <= 7
                ? "warn"
                : "fine"
            }
          >
            {getSpeedMap.length} / 20
          </span>
        </div>
        {getSpeedMap.map((doc) => (
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
            list="speed-map"
          />
          <datalist id="speed-map">
            {speedMapArr.map((x) => (
              <option value={x} />
            ))}
          </datalist>
          <button onClick={uploadSpeedMap}>추가</button>
        </form>
      </div>

      <div className="cross"></div>
      <div className="map-item">
        <div>
          <h4>item</h4>
          <span
            className={
              getItemMap.length > 16 || getItemMap.length <= 7 ? "warn" : "fine"
            }
          >
            {getItemMap.length} / 16
          </span>
        </div>
        {getItemMap.map((doc) => (
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
            list="item-map"
          />
          <datalist id="item-map">
            {itemMapArr.map((x) => (
              <option value={x} />
            ))}
          </datalist>
          <button onClick={uploadItemMap}>추가</button>
        </form>
      </div>
    </div>
  );
}

export default MapList;
