import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import FirstLogin from "./pages/FirstLogin";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/first-login" element={<FirstLogin />} />
      </Routes>
    </>
  );
}

export default App;
