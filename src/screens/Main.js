import React, { useState } from "react";
import MainRedTeam from "../components/MainRedTeam";
import MainBlueTeam from "../components/MainBlueTeam";
import MainMapList from "../components/MainMapList";
import MainSetOne from "../components/MainSetOne";
import MainSetTwo from "../components/MainSetTwo";
import MainSetThree from "../components/MainSetThree";
import MainSetFour from "../components/MainSetFour";
import Footer from "./Footer";
import MainEventDate from "../components/MainEventDate";
import MainAce from "../components/MainAce";
import db from "../fbManager";
import { useEffect } from "react";

function Main() {
  const [bringRedTeam, setBringRedTeam] = useState([]);
  const [bringBlueTeam, setBringBlueTeam] = useState([]);

  useEffect(() => {
    db.collection("redTeam")
      .onSnapshot((snapshot) => {
        setBringRedTeam(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            teamId: doc.teamId,
            ...doc.data(),
          }))
        );
      });
    db.collection("blueTeam")
      .onSnapshot((snapshot) => {
        setBringBlueTeam(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            teamId: doc.teamId,
            ...doc.data(),
          }))
        );
      });
  }, []);

  return (
    <div className="main di-fl-col">
      <div className="first-section di-fl-col">
        <div className="logo">
          <img alt="logo" src="./images/navy_emblem.png" />
        </div>
        <div className="main-team-section">
          <MainRedTeam teamName={bringRedTeam}/>
          <MainBlueTeam teamName={bringBlueTeam}/>
        </div>
      </div>
      <MainEventDate />
      <div className="main-map-section">
        <MainMapList />
        <MainSetOne />
        <MainSetTwo />
        <MainSetThree />
        <MainSetFour />
        <MainAce />
      </div>
      <Footer />
    </div>
  );
}

export default Main;
