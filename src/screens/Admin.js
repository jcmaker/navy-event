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
      redWin: "none-win",
    });
    setRedName("");
  };
  const uploadBlueName = (e) => {
    e.preventDefault();
    db.collection("blueTeam").add({
      teamId: blueName,
      blueWin: "none-win",
    });
    setBlueName("");
  };

  return (
    <>
      <div className="admin">
        <div className="admtomn">
      <span className="goback"
        onClick={() => {
          window.open("https://navy-event.web.app", "_self");
        }}>MAIN</span>
        </div>
        <EventDate />
        <div className="team-name">
          <div className="mgn-4 wd-80 team-name-sec">
          {bringRedName.map((doc) => (
            <div className="team-name-list wd-80">
              <span className="red-name" onClick={(e) => {
              e.preventDefault();
              db.collection("redTeam").doc(doc.id).set(
                {
                  redWin: "none-win",
                },
                { merge: true }
              );
            }}>{doc.teamId}</span>
            <div className="team-name-btn">
            <button className="red-name" onClick={(e) => {
              e.preventDefault();
              db.collection("redTeam").doc(doc.id).set(
                {
                  redWin: "red-win",
                },
                { merge: true }
              );
            }}>승리</button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  db.collection("redTeam").doc(doc.id).delete();
                }}
              >
                삭제
              </button>
            </div>
            </div>
          ))}
          {bringBlueName.map((doc) => (
            <div className="team-name-list wd-80">
              <span className="blue-name" onClick={(e) => {
              e.preventDefault();
              db.collection("blueTeam").doc(doc.id).set(
                {
                  blueWin: "none-win",
                },
                { merge: true }
              );
            }}>{doc.teamId}</span>
            <div className="team-name-btn">
            <button className="blue-name" onClick={(e) => {
              e.preventDefault();
              db.collection("blueTeam").doc(doc.id).set(
                {
                  blueWin: "blue-win",
                },
                { merge: true }
              );
            }}>승리</button>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  db.collection("blueTeam").doc(doc.id).delete();
                }}
              >
                삭제
              </button>
            </div>
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
          <div>
          </div>
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
