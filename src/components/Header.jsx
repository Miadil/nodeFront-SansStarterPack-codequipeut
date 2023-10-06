import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/authContext";
import movieAPI from "../services/movieAPI";

import "./Header.css";

function Header() {
  const navigate = useNavigate();
  const { user, setUser } = useAuthContext();

  const handleDisconnect = () => {
    movieAPI.get("/api/auth/logout").then(() => {
      localStorage.clear();
      setUser(null);
      navigate("/");
    });
  };

  return (
    <nav>
      <Link to="/" className="title">
        Website
      </Link>

      <ul className="">
        {user ? (
          <>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>

            <li>
              <button className="headLogoutBtn" onClick={handleDisconnect}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/singup">Sing&apos;up</NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Header;
