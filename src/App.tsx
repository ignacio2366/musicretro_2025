import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Logiin/Logn";

function App() {
  return (
    <>
      {
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      }
    </>
  );
}

export default App;
