import React from "react";
import { useHistory } from "react-router";

const Home = () => {
  const history = useHistory();
  const redirectLogin = () => {
    history.push("/login");
  };
  const redirectSignup = () => {
    history.push("/signup");
  };
  return (
    <div className="home">
      <p className="home-header">Welcome to eFiche!</p>
      <button onClick={redirectLogin} className="login-button">
        Log in
      </button>
      <button onClick={redirectSignup} className="signup-button">
        Sign up
      </button>
    </div>
  );
};

export default Home;
