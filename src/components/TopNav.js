import React from "react";
import { useHistory } from "react-router-dom";
import logoutImg from "../assets/img/logout.png";
import { removeUserSession } from "./utils/Common";

const TopNav = () => {
  const history = useHistory();

  const handleLogout = () => {
    removeUserSession();
    history.push("/login");
  };
  return (
    <div className="top-nav">
      <img src={logoutImg} alt="Logout" onClick={handleLogout} />
    </div>
  );
};

export default TopNav;
