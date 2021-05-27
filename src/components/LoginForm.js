import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import api from "../api/index";
import { setUserSession } from "./utils/Common";

const LoginForm = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/users/login", {
        username,
        password,
      });
      setUserSession(response.data.accessToken, response.data.user);
      history.push("/dashboard");
    } catch (err) {
      if (err.response.status === 400)
        setErrorMessage(err.response.data.message);
      else {
        console.log(process.env.REACT_APP_API_URL);
        setErrorMessage("Something went wrong. Please try again");
      }
    }
  };
  return (
    <div className="login-panel">
      <form className="login-form" onSubmit={handleLogin}>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          type="text"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        <button type="submit">LOG IN</button>
      </form>
      <p className="login-error-msg">{errorMessage}</p>
      <p className="login-nav">
        Don't have account?{" "}
        <Link to="/signup" className="link">
          Sign up!
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
