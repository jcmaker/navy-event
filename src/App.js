import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./screens/Main";
import Admin from "./screens/Admin";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="the-admin-path" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
