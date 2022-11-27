import React from "react";
import MapList from "./MapList";
import SetOne from "./SetOne";
import SetTwo from "./SetTwo";
import SetThree from "./SetThree";
import SetFour from "./SetFour";
import Ace from "./Ace";

function MapSection() {
  return (
    <div className="map-section">
      <MapList />
      <SetOne />
      <SetTwo />
      <SetThree />
      <SetFour />
      <Ace />
      <br />
      <div className="admin-footer">
        <span>1. 내전 날짜 설정</span>
        <span>2. 팀 명</span>
        <span>2. 선수 명단</span>
        <span>3. 맵 리스트</span>
        <span>4. 맵 밴픽</span>
        <br />
        <span>-날짜 설정에 오류가 생긴다면 새로고침 후 이용해주세요</span>
        <span>
          -맵 리스트 권장 갯수는 '초록'색, 권장 갯수보다 적거나 많으면
          '빨간'색이 뜹니다
        </span>
        <span>-맵 갯수에는 제한을 두지 않았지만 너무 넘지는 말아주세요</span>
        <span>-밴픽을 이용 안하신다면 '블루' 픽을 이용해주세요</span>
      </div>
    </div>
  );
}

export default MapSection;
