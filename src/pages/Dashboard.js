import React from "react";
import { useHistory } from "react-router-dom";
import logoutImg from "../assets/img/logout.png";
import { getUser, removeUserSession } from "../components/utils/Common";

const Dashboard = () => {
  const history = useHistory();
  const user = getUser();

  const handleLogout = () => {
    removeUserSession();
    history.push("/login");
  };
  return (
    <div className="dashboard">
      <p>Hello {user.name}!</p>
      <img src={logoutImg} alt="Logout" onClick={handleLogout} />
    </div>
  );
};

export default Dashboard;
