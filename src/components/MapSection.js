import React from "react";
import MapList from "./MapList";
import SetOne from "./SetOne";
import SetTwo from "./SetTwo";
import SetThree from "./SetThree";
import SetFour from "./SetFour";

function MapSection() {
  return (
    <div className="map-section">
      <MapList />
      <SetOne />
      <SetTwo />
      <SetThree />
      <SetFour />
      <br />
      <div className="admin-footer">
        <span>
          맵 자동완성 기능이 있습니다. "고가" 치면 "빌리지 고가" 뜹니다.
        </span>

        <span>
          맵 권장 갯수는 '초록'색이 뜨고, 부족하거나 많으면 '빨간'색이 뜹니다.
        </span>
        <span>컴퓨터로 관리하시는 분들을 위해 UI 개선 했습니다.</span>
        <span>밴픽 활용 안하신다면 '블루' 픽을 이용해주세요</span>
      </div>
    </div>
  );
}

export default MapSection;
