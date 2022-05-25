import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./screens/Main";
import Admin from "./screens/Admin";
import NoMatchScreen from "./screens/NoMatchScreen";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="the-admin-path" element={<Admin />} />
          <Route path="*" element={<NoMatchScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
