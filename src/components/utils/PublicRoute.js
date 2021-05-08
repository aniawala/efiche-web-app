import React from "react";
import { Route, Redirect } from "react-router-dom";
import { isLoggedIn } from "./Common";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn() && restricted ? (
          <Redirect to="/dashboard" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
