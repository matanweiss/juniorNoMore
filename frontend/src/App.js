import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/NavBar";
import FirstLogin from "./pages/FirstLogin";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import 'react-toastify/dist/ReactToastify.css';
import Explore from "./pages/Explore";
import Job from "./pages/Job";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/first-login" element={<FirstLogin />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/job/:id" element={<Job />} />
      </Routes>
      <ToastContainer position="top-center" autoClose={3000} rtl={true} />
    </>
  );
}

export default App;
