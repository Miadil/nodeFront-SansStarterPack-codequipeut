import { Link, NavLink, useNavigate } from "react-router-dom";
import movieAPI from "../services/movieAPI";

import "./Header.css";

function Header() {
  const navigate = useNavigate();

  const handleDisconnect = () => {
    movieAPI.get("/api/auth/logout").then(() => {
      navigate("/");
    });
  };
  return (
    <nav>
      <Link to="/" className="title">
        Website
      </Link>

      <ul className="">
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/singup">Sing&apos;up</NavLink>
        </li>
        <li>
          <button className="headLogoutBtn" onClick={handleDisconnect}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
