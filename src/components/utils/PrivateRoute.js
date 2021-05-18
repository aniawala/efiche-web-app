import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isAuth } from "./Common";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuth() ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
