import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SingUp from "./pages/SingUp";
import MovieList from "./pages/MovieList";
import Header from "./components/Header";
import { useAuthContext } from "./contexts/authContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const { user } = useAuthContext();
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singup" element={<SingUp />} />
        <Route element={<ProtectedRoute user={user} />}>
          <Route path="/movies" element={<MovieList />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
