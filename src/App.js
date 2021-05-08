import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PublicRoute from "./components/utils/PublicRoute";
import PrivateRoute from "./components/utils/PrivateRoute";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <Router>
      <Switch>
        <PublicRoute restricted={false} exact path="/" component={Home} />
        <PublicRoute restricted={true} path="/login" component={Login} />
        <PublicRoute restricted={true} path="/signup" component={Signup} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default App;
