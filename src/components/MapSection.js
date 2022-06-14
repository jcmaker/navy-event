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
    </div>
  );
}

export default MapSection;
