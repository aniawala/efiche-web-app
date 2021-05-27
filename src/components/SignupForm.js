import React, { useState } from "react";
import { Link } from "react-router-dom";
import api from "../api/index";

const SignupForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await api.post("/users/signup", {
        username,
        email,
        password,
      });
      setErrorMessage(null);
      setSuccessMessage("Your account has been successfully created");
    } catch (err) {
      if (err.response.status === 409 || err.response.status === 422)
        setErrorMessage(err.response.data.message);
      else setErrorMessage("Something went wrong. Please try again");
    }
  };

  return (
    <div className="signup-panel">
      <form className="signup-form" onSubmit={handleSignup}>
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
      <p className="signup-error-msg">{errorMessage}</p>
      <p className="signup-success-msg">{successMessage}</p>
      <p className="signup-nav">
        Already have an account?{" "}
        <Link to="/login" className="link">
          Log in!
        </Link>
      </p>
    </div>
  );
};

export default SignupForm;
