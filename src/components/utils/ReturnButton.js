import React from "react";
import { useHistory } from "react-router";
import returnImg from "../../assets/img/return.png";

const ReturnButton = () => {
  const history = useHistory();
  const redirectHome = () => {
    history.push("/");
  };

  return <img src={returnImg} alt="Return" onClick={redirectHome} />;
};

export default ReturnButton;
