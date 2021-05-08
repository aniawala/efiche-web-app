import React from "react";
import ReturnButton from "../components/utils/ReturnButton";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <div className="login">
      <ReturnButton />
      <h1>eFiche</h1>
      <LoginForm />
    </div>
  );
};

export default Login;
