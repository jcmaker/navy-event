import MapSection from "../components/MapSection";
import RedTeam from "../components/RedTeam";
import BlueTeam from "../components/BlueTeam";

function Admin() {
  return (
    <>
      <div className="admin">
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
