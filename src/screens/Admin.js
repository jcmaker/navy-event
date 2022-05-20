// // import React, { useState, useEffect } from "react";
// import db from "../fbManager";
// import UserList from "../components/UserList";
import MapSection from "../components/MapSection";
import RedTeam from "../components/RedTeam";
import BlueTeam from "../components/BlueTeam";

function Admin() {
  // const [blueLineUp, setBlueLineUp] = useState("");

  // const [bringBlueLineUp, setBringBlueLineUp] = useState([]);

  // const [blueWaiter, setBlueWaiter] = useState("");

  // const [bringBlueWaiter, setBringBlueWaiter] = useState([]);

  //   const [userNum, setUserNum] = useState("");

  return (
    <>
      <div className="admin">
        <h2>팀 선발</h2>
        <div className="admin--team-select">
          <RedTeam />
          <BlueTeam />
        </div>
        <h2>맵</h2>
        <MapSection />
      </div>
    </>
  );
}

export default Admin;
