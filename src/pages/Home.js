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
      <h1>Welcome to eFiche!</h1>
      <button onClick={redirectLogin}>Log in</button>
      <button onClick={redirectSignup}>Sign up</button>
    </div>
  );
};

export default Home;
