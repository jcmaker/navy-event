import MapSection from "../components/MapSection";
import RedTeam from "../components/RedTeam";
import BlueTeam from "../components/BlueTeam";
import EventDate from "../components/EventDate";
import "../style/Admin.css";
import { useEffect, useState } from "react";
import db from "../fbManager";

function Admin() {
  const [redName, setRedName] = useState("");
  const [blueName, setBlueName] = useState("");

  const [bringRedName, setBringRedName] = useState([]);
  const [bringBlueName, setBringBlueName] = useState([]);

  useEffect(() => {
    db.collection("blueTeam")
      .onSnapshot((snapshot) => {
        setBringBlueName(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            teamId: doc.teamId,
            ...doc.data(),
          }))
        );
      });
    db.collection("redTeam")
      .onSnapshot((snapshot) => {
        setBringRedName(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            teamId: doc.teamId,
            ...doc.data(),
          }))
        );
      });
  }, []);


  const uploadRedName = (e) => {
    e.preventDefault();
    db.collection("redTeam").add({
      teamId: redName,
    });
    setRedName("");
  };
  const uploadBlueName = (e) => {
    e.preventDefault();
    db.collection("blueTeam").add({
      teamId: blueName,
    });
    setBlueName("");
  };

  return (
    <>
      <div className="admin">
        <EventDate />
        <div className="team-name">
          <div className="di-fl-row mgn-4">
          {bringRedName.map((doc) => (
            <div className="user-list">
              <span className="red-name">{doc.teamId}</span>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  db.collection("redTeam").doc(doc.id).delete();
                }}
              >
                삭제
              </button>
            </div>
          ))}
          {bringBlueName.map((doc) => (
            <div className="user-list">
              <span className="blue-name">{doc.teamId}</span>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  db.collection("blueTeam").doc(doc.id).delete();
                }}
              >
                삭제
              </button>
            </div>
          ))}
          </div>
          <form>
            <input type="text" className="red-name form-input mgn-125-top-btm" placeholder="RED-TEAM-NAME" value={redName} required onChange={(e) => {
              setRedName(e.target.value);
            }} />
            {bringRedName.length >= 1 ? "" : <button disabled={!redName.trim()} onClick={uploadRedName}>추가</button> }
            <input type="text" className="blue-name form-input mgn-125-top-btm" placeholder="BLUE-TEAM-NAME" value={blueName} required onChange={(e) => {
              setBlueName(e.target.value);
            }}/>
            {bringBlueName.length >= 1 ? "" : <button disabled={!blueName.trim()} onClick={uploadBlueName}>추가</button> }
            
          </form>
        </div>
        <div className="admin--team-select">
          <RedTeam />
          <BlueTeam />
        </div>
        <br />
        <MapSection />
      </div>
    </>
  );
}

export default Admin;
