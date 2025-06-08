import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Tracks from "./pages/Track/Track";

function App() {
  return (
    <>
      {
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/track/:albumId" element={<Tracks />} />
        </Routes>
      }
    </>
  );
}

export default App;
