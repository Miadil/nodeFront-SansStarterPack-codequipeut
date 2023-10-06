import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/authContext";
import movieAPI from "../services/movieAPI";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useAuthContext();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    movieAPI
      .post("/api/auth/login", { email, password })
      .then((res) => {
        setUser(res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate("/movies");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="LoginGlobal">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="LoginFormGlobal">
        <div className="loginDivInputG">
          <label htmlFor="email" className="loginLabel">
            Email :
          </label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email: poulet@gmail.com"
            value={email}
          />
        </div>
        <div className="loginDivInputG">
          <label htmlFor="password :" className="loginLabel">
            Password :
          </label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password "
            value={password}
          />
        </div>
        <button type="submit">Connexion</button>
      </form>
    </div>
  );
}

export default Login;
