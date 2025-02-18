import { useState } from "react";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Submit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <h2>Login</h2>
      <form onSubmit={Submit}>
        <input
          type="email "
          placeholder="Enter Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <p>
          i dont have an account!{" "}
          <Link to="/signup">
            <span>sign up</span>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
