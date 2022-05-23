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
import User from "./pages/User";
import { QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";

const queryClient = new QueryClient();

function App() {

  const queryClient = new QueryClient();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/first-login" element={<FirstLogin />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/job/:id" element={<Job />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
      <ToastContainer position="top-center" autoClose={3000} rtl={true} />
    </QueryClientProvider>
  );
}

export default App;
