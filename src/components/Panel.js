import React from "react";
import { getUser } from "../components/utils/Common";

const Panel = () => {
  const user = getUser();

  return <div className="dashboard-panel">Hello {user.name}!</div>;
};

export default Panel;
