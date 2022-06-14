import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./screens/Main";
import Admin from "./screens/Admin";
import NoMatchScreen from "./screens/NoMatchScreen";

function App() {
  console.log(process.env.REACT_APP_ADMIN_LINK);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route
            exact
            path={process.env.REACT_APP_ADMIN_LINK}
            element={<Admin />}
          />
          <Route path="*" element={<NoMatchScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
