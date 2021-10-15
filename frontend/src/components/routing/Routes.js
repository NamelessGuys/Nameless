import React from "react";
import { Switch, Route } from "react-router";
import Register from "../auth/Register";
import Login from "../auth/Login";
import Feed from "../feed/Feed";
import Post from "../post/Post";
import Settings from "../user/Settings";
import Contact from "../user/Contact";
import Profile from "../user/Profile";
import NotFound from "../layout/NotFound";
import Alert from "../layout/Alert";
import PrivateRoute from "./PrivateRoute";

const Routes = () => {
  return (
    <div className="container">
      <Alert />
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profile/:id" component={Profile} />
        <Route exact path="/feed" component={Feed} />
        <PrivateRoute exact path="/posts/:id" component={Post} />
        <PrivateRoute exact path="/settings" component={Settings} />
        <PrivateRoute exact path="/contact" component={Contact} />
        <PrivateRoute exact path="/dashboard" component={Profile} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default Routes;
