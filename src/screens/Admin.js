import MapSection from "../components/MapSection";
import RedTeam from "../components/RedTeam";
import BlueTeam from "../components/BlueTeam";

function Admin() {
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
