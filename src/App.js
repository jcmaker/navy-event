import "./style/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./screens/Main";
import Admin from "./screens/Admin";
import NoMatchScreen from "./screens/NoMatchScreen";
import { WavyContainer, WavyLink } from "react-wavy-transitions";
import Single from "./screens/Single";
import SingleAdmin from "./screens/SingleAdmin";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <WavyContainer />
        <Routes>
          {/* <Route exact path="/" element={<Main />} /> */}
          <Route exact path="/team" element={<Main />} />
          <Route exact path="/single" element={<Single />} />
          <Route path="*" element={<NoMatchScreen />} />
        <Route
          path="/"
          element={
            <>
            <div className="home">
              <WavyLink to="/team" color="#3586ff">
                TEAM
              </WavyLink>
              <WavyLink to="/single" color="#3586ff">
                SINGLE
              </WavyLink>
            </div>
            </>
          }
        >
        </Route>
          <Route
            exact
            path={process.env.REACT_APP_ADMIN_LINK}
            element={<Admin />}
          />
          <Route
            exact
            path={process.env.REACT_APP_SINGLE_ADMIN_LINK}
            element={<SingleAdmin />}
          />
          <Route path="*" element={<NoMatchScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
