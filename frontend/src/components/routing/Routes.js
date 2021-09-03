import React from "react";
import { Switch, Route } from "react-router";
import Login from "../auth/Login";
import NotFound from "../layout/NotFound";
import Register from "../auth/Register";

const Routes = () => {
  return (
    <div className="container">
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default Routes;
