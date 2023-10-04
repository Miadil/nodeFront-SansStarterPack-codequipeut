import { useState } from "react";

import "./singUp.css";

function SingUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleForm = (e) => {
    e.preventDefault();
  };
  return (
    <div className="singUpGlobal">
      <h2>sing&apos;up</h2>
      <form className="singUpFormGlobal" onSubmit={handleForm}>
        <div className="singUpDivInputG">
          <label htmlFor="text" className="singUpLabel">
            Name :
          </label>
          <input
            type="name"
            onChange={(e) => setName(e.target.value)}
            placeholder="name: Lord Of Chicken"
            value={name}
          />
        </div>
        <div className="singUpDivInputG">
          <label htmlFor="email" className="singUpLabel">
            Email :
          </label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email: poulet@gmail.com"
            value={email}
          />
        </div>
        <div className="singUpDivInputG">
          <label htmlFor="password :" className="singUpLabel">
            Password :
          </label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password "
            value={password}
          />
        </div>
        <button type="submit">S&apos;inscrire</button>
      </form>
    </div>
  );
}

export default SingUp;
