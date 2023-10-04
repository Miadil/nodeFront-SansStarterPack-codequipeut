import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import MovieList from "./pages/MovieList";
import Login from "./pages/Login";
import SingUp from "./pages/SingUp";

import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<SingUp />} />
        <Route path="/movies" element={<MovieList />} />
      </Routes>
    </>
  );
}

export default App;
