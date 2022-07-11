import MapSection from "../components/MapSection";
import RedTeam from "../components/RedTeam";
import BlueTeam from "../components/BlueTeam";
import EventDate from "../components/EventDate";

function Admin() {
  return (
    <>
      <div className="admin">
        <EventDate />
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
