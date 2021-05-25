import React from "react";
import SideNav from "../components/SideNav";
import Menu from "../components/Menu";
import TopNav from "../components/TopNav";
import Panel from "../components/Panel";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <SideNav />
      <Menu />
      <TopNav />
      <Panel />
    </div>
  );
};

export default Dashboard;
