import React from "react";
import MainRedTeam from "../components/MainRedTeam";
import MainBlueTeam from "../components/MainBlueTeam";
import MainMapList from "../components/MainMapList";
import MainSetOne from "../components/MainSetOne";
import MainSetTwo from "../components/MainSetTwo";
import MainSetThree from "../components/MainSetThree";
import MainSetFour from "../components/MainSetFour";
import Footer from "./Footer";
import MainEventDate from "../components/MainEventDate";

function Main() {
  return (
    <div className="main">
      <div className="first-section">
        <div className="logo">
          <img alt="logo" src="./images/emblem.png" />
        </div>
        <div className="main-team-section">
          <MainRedTeam />
          <MainBlueTeam />
        </div>
      </div>
      <MainEventDate />
      <div className="main-map-section">
        <MainMapList />
        <MainSetOne />
        <MainSetTwo />
        <MainSetThree />
        <MainSetFour />
      </div>
      <Footer />
    </div>
  );
}

export default Main;
