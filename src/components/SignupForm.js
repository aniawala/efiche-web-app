import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/index";

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await api.post("/users/signup", {
        username,
        email,
        password,
      });
      setMessage("Your account has been successfully created");
    } catch (err) {
      if (err.response.status === 409 || err.response.status === 422)
        setError(err.response.data.message);
      else setError("Something went wrong. Please try again");
    }
  };

  return (
    <div>
      <form onSubmit={handleSignup}>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          type="text"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        <button type="submit">SIGN UP</button>
      </form>
      <p>{error}</p>
      <p>{message}</p>
      <p>
        Already have an account? <Link to="/login">Log in!</Link>
      </p>
    </div>
  );
};

export default SignupForm;
